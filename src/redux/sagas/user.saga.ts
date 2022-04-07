import { authApi } from "@api";
import { CONSTANT } from "@configs";
import { Utils } from "@helpers";
import { Account } from "@models";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { loginAction } from "@redux";
import { onChangeLanguage } from "@shared";
import Config from "react-native-config";
import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { AuthorizeResult } from "src/@types/api-sso";
import {
  changeLanguage,
  changeLanguageSuccess,
  getUserAction,
  getUserInfo,
  locked,
  loginExternalAction,
  loginFailure,
  loginLoading,
  loginStatus,
  logout,
} from "../slices";

const { GOOGLE_CLIENT_ID } = Config;

export const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

// ----- region Login
function* takeLogin(action: any) {
  const { username, password } = action.payload;
  try {
    if (username && password) {
      yield put(loginLoading(true));
      const response: AuthorizeResult = yield call(async () => {
        return await authApi.login(username, password);
      });
      if (response) {
        yield put(getUserAction());
        yield put(loginStatus(true));
        yield Utils.storeTokenResponse(response);
      }
    } else {
      yield put(loginFailure("Chưa nhập Username hoặc Password!!"));
    }
  } catch (error: any) {
    if (error?.locked) {
      yield put(locked(true));
    }
    yield put(loginFailure(error.error_description));
  } finally {
    yield put(loginLoading(false));
  }
}
function* loginFlow() {
  yield takeLatest(loginAction, takeLogin);
}

// ----- region Login External
function* takeLoginExternal(action: any) {
  const { token, provider } = action.payload;
  try {
    yield put(loginLoading(true));
    const response: AuthorizeResult = yield call(async () => {
      return await authApi.loginExternal(token, provider);
    });

    if (response.access_token) {
      yield put(loginStatus(true));
      yield Utils.storeTokenResponse(response);
    }
  } catch (error: any) {
    yield put(loginFailure(error.error_description));
  } finally {
    yield delay(100);
    yield put(loginLoading(false));
  }
}
function* loginExternalFlow() {
  yield takeLatest(loginExternalAction, takeLoginExternal);
}

// ----- region change language
function* takeChangeLanguage(action: any) {
  try {
    // yield delay(1000);
    yield call(onChangeLanguage, action.payload);
    yield put(changeLanguageSuccess(action.payload));
  } catch (error) {}
}

function* changeLanguageFlow() {
  yield takeLatest(changeLanguage, takeChangeLanguage);
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
  } catch (error) {
    console.log("🚀🚀🚀 => error", error);
  }
}
function* logoutFlow() {
  yield takeLatest(logout, takeLogout);
}
// ----- region getUserInfo
function* takeUserInfo() {
  console.log("🚀🚀🚀 => be here");
  try {
    const response: Account = yield call(async () => {
      return await authApi.getUserInfo();
    });
    if (response) {
      yield put(getUserInfo(response));
      console.log("🚀🚀🚀 => response", JSON.stringify(response));
    }
  } catch (error) {
    console.log("🚀🚀🚀 => error", error);
  }
}
function* followGetUserInfo() {
  yield takeEvery(getUserAction, takeUserInfo);
}

// ----- region root userSaga
export default function* userSaga() {
  yield all([
    loginFlow(),
    loginExternalFlow(),
    logoutFlow(),
    changeLanguageFlow(),
    followGetUserInfo(),
  ]);
}
