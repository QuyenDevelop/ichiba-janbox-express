import { authApi } from "@api";
import { Utils } from "@helpers";
import { loginAction } from "@redux";
import { PayloadAction } from "@reduxjs/toolkit";
import { onChangeLanguage } from "@shared";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { AuthorizeResult } from "src/@types/api-sso";
import { changeLanguage, changeLoading } from "../slices";

// const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

function* takeLogin(action: any) {
  // console.log("🚀🚀🚀 => function*takeLogin => action", action);
  const { username, password } = action.payload;
  try {
    async function loginRequest() {
      const data: AuthorizeResult = await authApi.login(username, password);
      if (data.access_token) {
        await Utils.storeTokenResponse(data);
      }
    }

    yield call(loginRequest);
    // console.log("có vào");
  } catch (error) {
    console.log(error);
  }
}

export function* takeChangeLoading(action: PayloadAction<boolean>) {
  try {
    yield put(changeLoading(action.payload));
  } catch (error) {
    console.log(error);
  }
}

export function* takeChangeLanguage(action: PayloadAction<string>) {
  // delay(5000);
  try {
    async function onChange() {
      const data = await onChangeLanguage({ language: action.payload });
    }
    // yield put(changeLanguage(action.payload));
    console.log("có vào");
    yield call(onChange);
    // console.log(action.payload);
  } catch (error) {
    console.log(error);
  }
}

export default function* userSaga() {
  yield all([
    takeLatest(loginAction, takeLogin),
    takeLatest(changeLoading, takeChangeLoading),
    takeLatest(changeLanguage, takeChangeLanguage),
  ]);
}
