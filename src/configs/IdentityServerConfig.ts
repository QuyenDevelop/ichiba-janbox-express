import Config from "react-native-config";

const {
  IDENTITY_HOST,
  IDENTITY_CLIENT_SCOPE,
  IDENTITY_CLIENT_ID,
  IDENTITY_CLIENT_SECRET,
  WEB_CLIENT_ID,
  WEB_CLIENT_SECRET,
} = Config;
export const IdentityServerConfig = {
  clientId: IDENTITY_CLIENT_ID,
  clientSecret: IDENTITY_CLIENT_SECRET,
  identityUrl: IDENTITY_HOST,
  serviceConfiguration: {
    tokenEndpoint: `${IDENTITY_HOST}/connect/token`,
    revocationEndpoint: `${IDENTITY_HOST}/connect/revocation`,
    userInfoEndpoint: `${IDENTITY_HOST}/connect/userinfo`,
    externalTokenInfo: `${IDENTITY_HOST}/api/Account/GetUserInfoByToken/info/token`,
    externalRegister: `${IDENTITY_HOST}/api/Account/ExternalRegister`,
  },
  clientScope: IDENTITY_CLIENT_SCOPE,
  webClientId: WEB_CLIENT_ID,
  webClientSecret: WEB_CLIENT_SECRET,
};

export const GrantTypeConfig = {
  password: "password",
  external: "external",
  refresh_token: "refresh_token",
};

export const ProviderConfig = {
  google: "GOOGLE",
  facebook: "FACEBOOK",
  apple: "APPLE",
};
