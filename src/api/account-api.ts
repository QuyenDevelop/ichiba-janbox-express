import {
  RegisterUserRequest,
  UpdateProfileRequest,
  UserRegisterVerify,
} from "@models";
import Config from "react-native-config";
import { BaseApi } from "./baseApi";

const { IDENTITY_HOST } = Config;

class AccountApi extends BaseApi {
  getUserInfoByToken(token: string, provider: string) {
    let url = `${IDENTITY_HOST}/api/Account/GetUserInfoByToken/info/token`;
    return this.post(
      url,
      {
        token,
        provider,
      },
      {},
      true,
    );
  }

  externalRegister(data: any) {
    let url = `${IDENTITY_HOST}/api/Account/ExternalRegister`;
    return this.post(url, data, {}, true);
  }

  getLinkUserRegister(email: string) {
    let url = `${IDENTITY_HOST}/api/Account/GetLinkUserRegister`;
    return this.post(url, {}, { email }, true);
  }

  changePassword(
    email: string,
    password: string,
    newPassword: string,
    confirmPassword: string,
  ) {
    let url = `${IDENTITY_HOST}/api/Account/ChangePassword`;
    return this.post(
      url,
      {
        email: email,
        password: password,
        newPassword: newPassword,
        confirmPassword: confirmPassword,
      },
      {},
      true,
    );
  }

  register(registerUser: RegisterUserRequest) {
    let url = `${IDENTITY_HOST}/api/Account/Register`;
    return this.post(url, registerUser, {}, true);
  }

  verifyOtp(phone: string) {
    let url = `${IDENTITY_HOST}/api/Account/VerifyOtp`;
    return this.post(
      url,
      {
        phone: phone,
      },
      {},
      true,
    );
  }

  updateProfile(updateProfileRequest: UpdateProfileRequest) {
    let url = `${IDENTITY_HOST}/api/Account/UpdateProfile`;
    return this.post(url, updateProfileRequest, {}, true);
  }

  verifyUserRegister(hash?: string) {
    let url = `${IDENTITY_HOST}/api/Account/UserRegisterVerify`;
    return this.get<UserRegisterVerify>(
      url,
      {
        hash,
      },
      true,
    );
  }

  forgotPassword(email: string) {
    let url = `${IDENTITY_HOST}/api/Account/ForgotPassword/forgotPassword`;
    return this.post(url, { email: email }, {}, true);
  }

  resetPassword(newPassword: string, email: string, code: string) {
    let url = `${IDENTITY_HOST}/api/Account/ResetPassword/resetPassword`;
    return this.post(
      url,
      { email: email, code: code, password: newPassword },
      {},
      true,
    );
  }
}

export default new AccountApi();
