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
};

export const userSlice = createSlice({
  name: SliceName.USER_SLICE,
  initialState,
  reducers: {
    loginLoading: (state: IUserState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    loginSuccess: (state: IUserState, action: PayloadAction<any>) => {
      // đang không put vào đây được
      // state.tokenId = action.payload;
      state.isLogging = true;
      console.log("có vào");
    },
    loginFailure: (state: IUserState, action: PayloadAction<string>) => {
      state.messageFailed = action.payload;
      state.isLogging = false;
      console.log("có vào failue");
    },
    updateInfo: (_state: IUserState, action: PayloadAction<IUserState>) => {
      return action.payload;
    },
    getUserInfo: (state: IUserState, action: PayloadAction<Account>) => {
      state.profile = action.payload;
    },
    changeLanguage: (state: IUserState, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    logout: (state: IUserState) => {
      state.tokenId = null;
      state.profile = null;
    },
  },
});

export const loginAction = createAction<{ username: string; password: string }>(
  `${SliceName.USER_SLICE}/login`,
);
// export Actions
export const {
  loginLoading,
  loginSuccess,
  loginFailure,
  updateInfo,
  logout,
  changeLanguage,
} = userSlice.actions;

// export reducer
export const userReducer = userSlice.reducer;

// reducers
export const selectLoginLoading = (state: IUserState) => state.loading;
export const selectIsLogging = (state: IUserState) => state.isLogging;
export const messageFailed = (state: IUserState) => state.messageFailed;
