import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SliceName } from "./constants";

export interface IUserState {
  name: string | null;
  age: number | null;
  sex: string | null;
}

const initialState: IUserState = {
  name: null,
  age: null,
  sex: null,
};

export const userSlice = createSlice({
  name: SliceName.USER_SLICE,
  initialState,
  reducers: {
    updateInfo: (_state: IUserState, action: PayloadAction<IUserState>) => {
      return action.payload;
    },
  },
});

export const userAction = userSlice.actions;

export const userReducer = userSlice.reducer;

export const loginAction = createAction<{ username: string; password: string }>(
  `${SliceName.USER_SLICE}/login`,
);
