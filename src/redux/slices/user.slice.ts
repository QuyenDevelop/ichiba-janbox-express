import { Account } from "@models";
import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SliceName } from "./constants";

export interface loginPayload {
  username?: string;
  password?: string;
}
export interface IUserState {
  profile: Account | null;
  language: string | null;
  loading: boolean;
  tokenId: string | null;
  anonymousId: string | null;
  deviceId: string | null;
  isLogging: boolean;
  messageFailed: string | null;
  isLocked: boolean;
}

const initialState: IUserState = {
  profile: null,
  language: null,
  loading: false,
  tokenId: null,
  anonymousId: null,
  deviceId: null,
  isLogging: false,
  messageFailed: null,
  isLocked: false,
};

export const userSlice = createSlice({
  name: SliceName.USER_SLICE,
  initialState,
  reducers: {
    loginLoading: (state: IUserState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    loginExternalSuccess: (
      state: IUserState,
      action: PayloadAction<Account>,
    ) => {
      state.profile = action.payload;
    },
    loginStatus: (state: IUserState, action: PayloadAction<boolean>) => {
      state.isLogging = action.payload;
    },
    loginFailure: (state: IUserState, action: PayloadAction<string>) => {
      state.messageFailed = action.payload;
    },
    locked: (state: IUserState, action: PayloadAction<boolean>) => {
      state.isLocked = action.payload;
    },
    updateInfo: (_state: IUserState, action: PayloadAction<IUserState>) => {
      return action.payload;
    },
    getUserInfo: (state: IUserState, action: PayloadAction<Account>) => {
      state.profile = action.payload;
      state.anonymousId = action.payload?.sub || "";
    },
    changeLanguageSuccess: (
      state: IUserState,
      action: PayloadAction<string>,
    ) => {
      state.language = action.payload;
    },
    logout: (state: IUserState) => {
      state.isLogging = false;
      state.tokenId = null;
      state.profile = null;
    },
  },
});

export const loginAction = createAction<{ username: string; password: string }>(
  `${SliceName.USER_SLICE}/login`,
);
export const getUserAction = createAction(
  `${SliceName.USER_SLICE}/getUserAction`,
);
export const loginExternalAction = createAction<{
  token: string;
  provider: string;
  email?: string;
}>(`${SliceName.USER_SLICE}/loginExternal`);
export const changeLanguage = createAction<string>(
  `${SliceName.USER_SLICE}/changeLanguage`,
);

// export Actions
export const {
  loginLoading,
  loginStatus,
  loginFailure,
  updateInfo,
  logout,
  locked,
  getUserInfo,
  loginExternalSuccess,
  changeLanguageSuccess,
} = userSlice.actions;

// export reducer
export const userReducer = userSlice.reducer;

// reducers
