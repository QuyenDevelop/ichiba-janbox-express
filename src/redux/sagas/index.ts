import { SagaIterator } from "redux-saga";
import { all, call } from "redux-saga/effects";
import userSaga from "./user.saga";

export default function* rootSaga(): SagaIterator {
  yield all([call(userSaga)]);
}
