import { Account } from "@models";
import Config from "react-native-config";
import { BaseApi } from "./baseApi";

const {
  IDENTITY_HOST,
  GRANT_TYPE_PASSWORD,
  GRANT_TYPE_EXTERNAL,
  GRANT_TYPE_REFRESH_TOKEN,
  SCOPES,
  CLIENT_ID,
  CLIENT_SECRET,
} = Config;
class AuthApi extends BaseApi {
  login = async (email?: string, password?: string) => {
    let url = `${IDENTITY_HOST}/connect/token`;
    console.log("🚀🚀🚀 => login => url", url);
    return await this.postUrlEncoded(
      url,
      {
        username: email,
        password: password,
        grant_type: `${GRANT_TYPE_PASSWORD}`,
        client_secret: `${CLIENT_SECRET}`,
        scope: `${SCOPES}`,
        client_id: `${CLIENT_ID}`,
      },
      true,
    );
  };

  loginExternal = async (token: string, provider: string) => {
    let url = `${IDENTITY_HOST}/connect/token`;
    return this.postUrlEncoded(
      url,
      {
        token: token,
        provider: provider,
        grant_type: `${GRANT_TYPE_EXTERNAL}`,
        client_secret: `${CLIENT_SECRET}`,
        scope: `${SCOPES}`,
        client_id: `${CLIENT_ID}`,
      },
      true,
    );
  };

  refreshToken(refreshToken: string) {
    let url = `${IDENTITY_HOST}/connect/token`;
    return this.postUrlEncoded(
      url,
      {
        refresh_token: refreshToken,
        grant_type: `${GRANT_TYPE_REFRESH_TOKEN}`,
        client_secret: `${CLIENT_SECRET}`,
        scope: `${SCOPES}`,
        client_id: `${CLIENT_ID}`,
      },
      true,
    );
  }

  revokeToken(token?: string | null) {
    let url = `${IDENTITY_HOST}/connect/revocation`;
    return this.postUrlEncoded(
      url,
      {
        token,
      },
      true,
    );
  }

  getUserInfo = async () => {
    let url = `${IDENTITY_HOST}/connect/userinfo`;
    return await this.get<Account>(url, {}, true);
  };

  // updateRegion(countryCode: string) {
  //   let url = `${IDENTITY_HOST}/api/profile/updateregion`;
  //   return this.post(url, { countryCode }, {}, true);
  // }
}

export default new AuthApi();
