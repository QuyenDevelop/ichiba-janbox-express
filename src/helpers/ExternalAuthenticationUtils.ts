import appleAuth from "@invertase/react-native-apple-authentication";
import { Account } from "@models";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { Platform } from "react-native";
import Config from "react-native-config";
import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
} from "react-native-fbsdk-next";
import RNFetchBlob from "rn-fetch-blob";

const { GOOGLE_CLIENT_ID } = Config;

export const ExternalAuth = {
  Google: "GOOGLE",
  Facebook: "FACEBOOK",
  Apple: "APPLE",
};

export const ExternalAuthenticationUtils = {
  signInByGoogle() {
    return new Promise<Account>((resolve, reject) => {
      GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      })
        .then(() => {
          GoogleSignin.configure({
            webClientId: `${GOOGLE_CLIENT_ID}`,
            offlineAccess: true,
          });
          GoogleSignin.signIn()
            .then(res => {
              resolve({
                given_name: res.user.givenName,
                family_name: res.user.familyName,
                picture: res.user.photo,
                email: res.user.email,
                idToken: res.idToken,
                provider: ExternalAuth.Google,
              } as Account);
            })
            .catch((err: any) => {
              console.log("🚀🚀🚀 => signInByGoogle => signIn:", err);
              reject(err);
            });
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  },

  fetchFacebookInfo() {
    return new Promise((resolved, reject) => {
      const callback = (error?: any, result?: any) => {
        if (error) {
          reject(error);
        } else {
          resolved(result);
        }
      };
      const infoRequest = new GraphRequest(
        "/me",
        {
          parameters: {
            fields: {
              string:
                "email,name,first_name,middle_name,last_name,picture.type(large)",
            },
          },
        },
        callback,
      );
      new GraphRequestManager().addRequest(infoRequest).start();
    });
  },

  signInByFacebook() {
    return new Promise<Account>((resolve, reject) => {
      LoginManager.setLoginBehavior("native_with_fallback");
      LoginManager.logInWithPermissions(["public_profile", "email"]).then(
        (result: any) => {
          if (result.isCancelled) {
            reject();
          } else {
            AccessToken.getCurrentAccessToken().then((token: any) => {
              this.fetchFacebookInfo().then((res: any) => {
                RNFetchBlob.config({
                  fileCache: true,
                  appendExt: "png",
                })
                  .fetch("GET", res.picture?.data?.url)
                  .then(async response => {
                    resolve({
                      given_name: `${res.last_name}`,
                      family_name: res.first_name,
                      picture:
                        Platform.OS === "android"
                          ? `file://${response.path()}`
                          : response.path(),
                      email: res.email,
                      idToken: token?.accessToken,
                      provider: ExternalAuth.Facebook,
                      base64_picture: await response.readFile("base64"),
                    } as Account);
                  })
                  .catch(err => {
                    console.error(err);
                  });
              });
            });
          }
        },
      );
    });
  },

  signInByApple() {
    return new Promise<Account>((resolve, reject) => {
      appleAuth
        .performRequest({
          requestedOperation: appleAuth.Operation.LOGIN,
          requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
        })
        .then(res => {
          resolve({
            given_name: res.fullName?.givenName,
            family_name: res.fullName?.familyName,
            email: res.email,
            provider: ExternalAuth.Apple,
            idToken: res.identityToken,
          } as Account);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  },
};
