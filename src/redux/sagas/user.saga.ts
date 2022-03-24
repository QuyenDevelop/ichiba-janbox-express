import { authApi } from "@api";
import { loginAction } from "@redux";
import { PayloadAction } from "@reduxjs/toolkit";
import { all, put, takeLatest } from "redux-saga/effects";
import { AuthorizeResult } from "src/@types/api-sso";
import { changeLoading } from "../slices";

function* takeLogin(action: any) {
  // console.log("🚀🚀🚀 => function*takeLogin => action", action);
  const { username, password } = action.payload;
  try {
    const data: AuthorizeResult = yield authApi.login(username, password);
    console.log(data);
    return data;
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

export default function* userSaga() {
  yield all([
    takeLatest(loginAction, takeLogin),
    takeLatest(changeLoading, takeChangeLoading),
  ]);
}
