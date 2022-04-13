import { Account } from "@models";
import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SliceName } from "./constants";

export interface loginInternalPayload {
  username?: string;
  password?: string;
}
export interface loginExternalPayload {
  token: string;
  provider: string;
  email?: string;
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
  selectedAddressId: number | null;
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
  selectedAddressId: null,
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
    setAddressId: (state: IUserState, action: PayloadAction<number>) => {
      state.selectedAddressId = action.payload;
    },
  },
});

export const loginAction = createAction<loginInternalPayload>(
  `${SliceName.USER_SLICE}/login`,
);
export const loginExternalAction = createAction<loginExternalPayload>(
  `${SliceName.USER_SLICE}/loginExternal`,
);
export const getUserAction = createAction(
  `${SliceName.USER_SLICE}/getUserAction`,
);
export const changeLanguage = createAction<string>(
  `${SliceName.USER_SLICE}/changeLanguage`,
);
export const setAddressSelectedId = createAction<number>(
  `${SliceName.USER_SLICE}/setAddressId`,
);
// export Actions
export const {
  loginLoading,
  loginStatus,
  loginFailure,
  updateInfo,
  logout,
  getUserInfo,
  loginExternalSuccess,
  changeLanguageSuccess,
  setAddressId,
} = userSlice.actions;

// export reducer
export const userReducer = userSlice.reducer;

// reducers
