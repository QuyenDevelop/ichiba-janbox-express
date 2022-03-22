/* eslint-disable consistent-this */
import { authApi } from "@api";
import { CONSTANT } from "@configs";
import { Utils } from "@helpers";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import i18n from "i18n-js";
import Base64 from "js-base64";
import { Platform } from "react-native";
import Config from "react-native-config";

const { CLIENT_ID, CLIENT_SECRET } = Config;

var qs = require("qs");

type PromiseQueueType = {
  resolve: Function;
  reject: Function;
};

let failedQueue: PromiseQueueType[] = [];
let isRefreshing: boolean = false;

const processQueue = (
  error: any,
  token_type?: string,
  access_token?: string,
) => {
  failedQueue.forEach(promise => {
    if (error) {
      promise.reject(error);
    } else {
      promise.resolve({
        token_type,
        access_token,
      });
    }
  });
  failedQueue = [];
};

const axiosInstance = axios.create({
  paramsSerializer: params => qs.stringify(params, { arrayFormat: "repeat" }),
});

axiosInstance.interceptors.request.use(
  async (request: any) => {
    request.headers["Accept-Language"] =
      i18n.defaultLocale || CONSTANT.LANGUAGES.VI;
    request.headers["User-Agent"] = Platform.OS;
    const [access_token, token_type] = await Promise.all([
      AsyncStorage.getItem(CONSTANT.TOKEN_STORAGE_KEY.ACCESS_TOKEN),
      AsyncStorage.getItem(CONSTANT.TOKEN_STORAGE_KEY.TOKEN_TYPE),
    ]);
    if (access_token) {
      if (String(request.url).includes(CONSTANT.REVOKE_TOKEN_ENDPOINT)) {
        request.headers.Authorization = `Basic ${Base64.encode(
          CLIENT_ID + ":" + CLIENT_SECRET,
        )}`;
      } else {
        request.headers.Authorization = `${
          token_type || "Bearer"
        } ${access_token}`;
      }
    }
    return request;
  },
  error => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const originalRequest = error.config;
    if (error?.response?.status === 401 && !originalRequest?._retry) {
      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then((res: any) => {
            originalRequest.headers.Authorization = `Bearer ${res?.access_token}`;
            return axios(originalRequest);
          })
          .catch(err => {
            return Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      const refresh_token = await AsyncStorage.getItem(
        CONSTANT.TOKEN_STORAGE_KEY.REFRESH_TOKEN,
      );
      if (refresh_token) {
        return new Promise((resolve, reject) => {
          authApi
            .refreshToken(refresh_token)
            ?.then(response => {
              Utils.storeTokenResponse(response);
              originalRequest.headers.Authorization = `${
                response.token_type || "Bearer"
              } ${response?.access_token}`;
              processQueue(null, response.token_type, response.access_token);
              resolve(axiosInstance?.(originalRequest));
            })
            .catch(err => {
              processQueue(err);
              reject(err);
            })
            .finally(() => {
              isRefreshing = false;
            });
        });
      }

      return Promise.reject(error);
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
