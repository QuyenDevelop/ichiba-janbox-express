import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import { IUserState, userReducer } from "./slices";

export interface IRootState {
  user: IUserState;
}

const sagaMiddleware = createSagaMiddleware();
const middleware = (getDefaultMiddleware: any) =>
  getDefaultMiddleware().concat(sagaMiddleware);

export const store = configureStore<IRootState>({
  reducer: { user: userReducer },
  middleware,
});

sagaMiddleware.run(rootSaga);
