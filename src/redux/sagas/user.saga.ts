import { authApi } from "@api";
import { CONSTANT } from "@configs";
import { Alert, Utils } from "@helpers";
import { Account } from "@models";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { loginAction } from "@redux";
import { PayloadAction } from "@reduxjs/toolkit";
import { onChangeLanguage, translate } from "@shared";
import Config from "react-native-config";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { AuthorizeResult } from "src/@types/api-sso";
import {
  changeLanguage,
  changeLanguageSuccess,
  getUserAction,
  getUserInfo,
  loginExternalAction,
  loginExternalPayload,
  loginFailure,
  loginInternalPayload,
  loginLoading,
  loginStatus,
  logout,
} from "../slices";

const { GOOGLE_CLIENT_ID } = Config;

// ----- region Login
function* takeLogin(action: PayloadAction<loginInternalPayload>) {
  const { username, password } = action.payload;
  try {
    yield put(loginLoading(true));
    if (username && password) {
      const response: AuthorizeResult = yield call(
        authApi.login,
        username,
        password,
      );
      if (response) {
        yield put(getUserAction());
        yield put(loginStatus(true));
        yield Utils.storeTokenResponse(response);
      }
    } else {
      Alert.error(translate("textWarningUserAndPass"), true);
    }
  } catch (error: any) {
    if (error?.locked) {
      yield put(loginFailure(error.error_description));
    }
    Alert.error(error.error_description, true);
  } finally {
    // callback?.();
    yield put(loginLoading(false));
  }
}

// ----- region Login External
function* takeLoginExternal(action: PayloadAction<loginExternalPayload>) {
  const { token, provider } = action.payload;
  try {
    yield put(loginLoading(true));
    const response: AuthorizeResult = yield call(
      authApi.loginExternal,
      token,
      provider,
    );
    if (response.access_token) {
      yield put(loginStatus(true));
      yield put(getUserAction());
      yield Utils.storeTokenResponse(response);
    }
  } catch (error: any) {
    Alert.error(error.error_description, true);
  } finally {
    yield put(loginLoading(false));
  }
}

// ----- region change language
function* takeChangeLanguage(action: PayloadAction<string>) {
  try {
    yield call(onChangeLanguage, action.payload);
    yield put(changeLanguageSuccess(action.payload));
  } catch (error) {}
}

// ----- region Logout
function* takeLogout() {
  try {
    yield put(loginStatus(false));
    yield put(loginFailure(""));
    async function handlerLogout() {
      const [accessToken, refreshToken] = await Promise.all([
        AsyncStorage.getItem(CONSTANT.TOKEN_STORAGE_KEY.ACCESS_TOKEN),
        AsyncStorage.getItem(CONSTANT.TOKEN_STORAGE_KEY.REFRESH_TOKEN),
      ]);
      await Promise.all([
        authApi.revokeToken(accessToken),
        authApi.revokeToken(refreshToken),
      ]);
      await Promise.all([
        AsyncStorage.removeItem(CONSTANT.TOKEN_STORAGE_KEY.ACCESS_TOKEN),
        AsyncStorage.removeItem(CONSTANT.TOKEN_STORAGE_KEY.REFRESH_TOKEN),
      ]);
      GoogleSignin.configure({
        webClientId: GOOGLE_CLIENT_ID,
        offlineAccess: true,
      });
      await GoogleSignin.signOut();
      // LoginManager.logOut();
    }

    yield call(handlerLogout);
  } catch (error) {}
}

// ----- region getUserInfo
function* takeUserInfo() {
  try {
    const response: Account = yield call(authApi.getUserInfo);
    if (response) {
      yield put(getUserInfo(response));
    }
  } catch (error) {}
}

// ----- region root userSaga
export default function* userSaga() {
  yield all([
    takeLatest(loginAction, takeLogin),
    takeLatest(loginExternalAction, takeLoginExternal),
    takeLatest(logout, takeLogout),
    takeLatest(changeLanguage, takeChangeLanguage),
    takeLatest(getUserAction, takeUserInfo),
  ]);
}
