import { currentLanguage, translate } from "@shared";
import Config from "react-native-config";
import { default as axiosInstance } from "./axiosService";
const { API_HOST, IDENTITY_HOST, API_KEY } = Config;

export class BaseApi {
  baseUrl?: string;
  apiHostUrl = `${API_HOST}`;
  apiKey = `${API_KEY}`;
  identityApiHostUrl = `${IDENTITY_HOST}`;
  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl;
  }
  createDefaultHeader() {
    return {
      "Accept-Language": currentLanguage ?? "vi-VN",
    };
  }

  get<T>(
    uri: string,
    params: any,
    noPrefix = false,
  ): Promise<T | undefined> | undefined {
    const url = this.createUrl(uri, noPrefix);
    return axiosInstance
      .get(url, {
        params,
        headers: this.createDefaultHeader(),
      })
      .then(response => {
        return this.onSuccess<T>(response);
      })
      .catch(error => {
        return this.onFailed(error);
      });
  }

  post(uri: string, data: any, params: any, noPrefix = false) {
    const url = this.createUrl(uri, noPrefix);
    return axiosInstance
      .post(url, data, {
        params,
        headers: this.createDefaultHeader(),
      })
      .then(response => response && response.data)
      .catch(error => {
        return this.onFailed(error);
      });
  }

  postUrlEncoded(uri: string, data: any, noPrefix = false) {
    const url = this.createUrl(uri, noPrefix);
    var qs = require("qs");
    return axiosInstance
      .post(url, qs.stringify(data), {
        headers: {
          ...{ "content-type": "application/x-www-form-urlencoded" },
          ...this.createDefaultHeader(),
        },
      })
      .then((response: any) => response && response.data)
      .catch(error => {
        return this.onFailed(error);
      });
  }

  put(uri: string, data: any, params: any, noPrefix = false) {
    const url = this.createUrl(uri, noPrefix);
    return axiosInstance
      .put(url, data, {
        params,
        headers: this.createDefaultHeader(),
      })
      .then(response => response && response.data)
      .catch(error => {
        return this.onFailed(error);
      });
  }

  async delete(uri: string, data: any, params: any, noPrefix = false) {
    const url = this.createUrl(uri, noPrefix);
    try {
      const response = await axiosInstance({
        method: "delete",
        headers: this.createDefaultHeader(),
        url,
        data,
        params,
      });
      return response && response.data;
    } catch (error) {
      return this.onFailed(error);
    }
  }

  createUrl(uri: string, noPrefix: boolean = false) {
    let url = noPrefix ? uri : `${this.apiHostUrl}/${this.baseUrl}/${uri}`;
    return url;
  }

  onSuccess = <T>(response: any): T => {
    let ret = null;
    if (response?.status === 200) {
      ret = response.data;
    }
    return <T>ret;
  };

  onFailed = (error: any) => {
    if (error.response) {
      let errorMessage: any;
      const response = error && error.response;
      const data = response?.data;
      if (response != null && response.status === 401) {
        return;
      } else {
        const errorDescription = data;
        if (errorDescription) {
          errorMessage = errorDescription;
        } else {
          errorMessage = data?.detail || translate("error.generic");
        }
        return Promise.reject(errorMessage);
      }
    }
    return Promise.reject(translate("error.generic"));
  };
}
