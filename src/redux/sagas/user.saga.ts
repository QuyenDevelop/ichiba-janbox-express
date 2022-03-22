import { loginAction } from "@redux";
import { all, takeLatest } from "redux-saga/effects";

function* takeLogin(action: any) {
  console.log("🚀🚀🚀 => function*takeLogin => action", action);
}

export default function* userSaga() {
  yield all([takeLatest(loginAction, takeLogin)]);
}
