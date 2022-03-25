import { authApi } from "@api";
import { CONSTANT } from "@configs";
import { Utils } from "@helpers";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginAction } from "@redux";
import { onChangeLanguage } from "@shared";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { AuthorizeResult } from "src/@types/api-sso";
import { changeLanguage, loginFailure, loginSuccess, logout } from "../slices";

// const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

function* takeLogin(action: any) {
  // console.log("🚀🚀🚀 => function*takeLogin => action", action);
  const { username, password } = action.payload;
  try {
    async function loginRequest() {
      const data: AuthorizeResult = await authApi.login(username, password);
      return data;
    }

    const response: AuthorizeResult = yield call(loginRequest);
    console.log("🚀🚀🚀 => function*takeLogin => response", response);
    Utils.storeTokenResponse(response);
    yield put(loginSuccess(response));
    return response;
  } catch (error: any) {
    yield put(loginFailure(error?.error_description));
  }
}
function* loginFlow() {
  yield takeLatest(loginAction, takeLogin);
}

function* takeChangeLanguage(action: any) {
  try {
    async function language() {
      await onChangeLanguage(action.payload);
      return action.payload;
    }
    yield call(language);
  } catch (error) {}
}

function* changeLanguageFlow() {
  yield takeLatest(changeLanguage, takeChangeLanguage);
}

function* takeLogout() {
  try {
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
      // GoogleSignin.configure({
      //   webClientId: GOOGLE_CLIENT_ID,
      //   offlineAccess: true,
      // });
      // await GoogleSignin.signOut();
      // LoginManager.logOut();
      return true;
    }

    yield call(handlerLogout);
  } catch (error) {
    console.log("🚀🚀🚀 => function*takeLogout => error", error);
  }
}

function* logoutFlow() {
  yield takeLatest(logout, takeLogout);
}

export default function* userSaga() {
  yield all([loginFlow(), changeLanguageFlow(), logoutFlow()]);
}
