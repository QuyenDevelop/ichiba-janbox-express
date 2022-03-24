import { Account } from "@models";
import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SliceName } from "./constants";

export interface IUserState {
  profile: Account | null;
  language: string | null;
  loading: boolean;
  anonymousId: string | null;
  deviceId: string | null;
}

const initialState: IUserState = {
  profile: null,
  language: null,
  loading: false,
  anonymousId: null,
  deviceId: null,
};

export const userSlice = createSlice({
  name: SliceName.USER_SLICE,
  initialState,
  reducers: {
    updateInfo: (_state: IUserState, action: PayloadAction<IUserState>) => {
      return action.payload;
    },
    changeLoading: (state: IUserState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { updateInfo, changeLoading } = userSlice.actions;

export const userReducer = userSlice.reducer;

export const loginAction = createAction<{ username: string; password: string }>(
  `${SliceName.USER_SLICE}/login`,
);
