import { accountApi } from "@api";
import { Footer, Header } from "@components";
import { SCREENS } from "@configs";
import {
  Alert,
  ExternalAuthenticationUtils,
  ScreenUtils,
  Utils,
} from "@helpers";
import { useAppDispatch, useLoading } from "@hooks";
// import { useLoading } from "@hooks";
import { Account } from "@models";
import { RootStackParamList } from "@navigation";
import { useNavigation } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { loginExternalAction } from "@redux";
import { Button, Icon, TextInput, translate } from "@shared";
import { Metrics, Themes } from "@themes";
import React, { FunctionComponent, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";

type Props = NativeStackScreenProps<RootStackParamList>;

export const RegisterScreen: FunctionComponent<Props> = () => {
  // useStatusBar("dark-content");
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonClickSubmit, setIsButtonClickSubmit] = useState(false);
  const { showLoading, hideLoading } = useLoading();

  const signUp = () => {
    setIsButtonClickSubmit(true);
    if (Utils.isValidEmail(email)) {
      setIsLoading(true);
      accountApi
        .getLinkUserRegister(email)
        ?.then(res => {
          console.log(res);
          navigation.navigate(SCREENS.VERIFICATION, {
            email: email,
          });
        })
        .catch(err => Alert.error(err.detail, true))
        .finally(() => setIsLoading(false));
    }
  };

  const loginWithFacebook = () => {
    ExternalAuthenticationUtils.signInByFacebook()
      .then(user => {
        showLoading();
        externalLogin(user);
      })
      .catch(err => Alert.warning(err));
  };

  const loginWithGoogle = () => {
    ExternalAuthenticationUtils.signInByGoogle()
      .then(user => {
        showLoading();
        externalLogin(user);
      })
      .catch(err => Alert.warning(err));
  };

  const loginWithApple = () => {
    // ExternalAuthenticationUtils.signInByApple().then(user => {
    //   showLoading();
    //   externalLogin(user);
    // });
  };

  const externalRegister = (data: Account) => {
    accountApi
      .externalRegister({
        email: data.email,
        firstName: data.given_name,
        lastName: data.family_name,
        profileImageUrl: data.picture,
        phoneNumber: data.phone_number,
        address: data.address,
        provider: data.provider,
        token: data.idToken,
      })
      ?.then(() => {
        dispatch(
          loginExternalAction({
            token: data.idToken,
            email: data.email,
            provider: data.provider,
          }),
        );
        getUserInformation();
      })
      .catch(err => {
        hideLoading();
        Alert.error(err?.title, true);
      });
  };

  const externalLogin = (profile: Account) => {
    accountApi
      .getUserInfoByToken(profile.idToken, profile.provider)
      ?.then(res => {
        if (res?.isAssociate) {
          dispatch(
            loginExternalAction({
              token: profile.idToken,
              email: profile.email,
              provider: profile.provider,
            }),
          );
        } else {
          if (res?.email) {
            externalRegister(profile);
          } else {
            hideLoading();
            // navigation.navigate(SCREENS.ConfirmProfileInformationScreen, {
            //   profile,
            // });
          }
        }
      });
  };

  const getUserInformation = () => {
    // dispatch(
    //   AccountAction.userInfo(
    //     {},
    //     {
    //       onFailure: (err: any) => {},
    //       onSuccess: () => {
    //         setEmail("");
    //         setIsLoading(false);
    //         setIsButtonClickSubmit(false);
    //         hideLoading();
    //         navigation.navigate(SCREENS.BottomTabNavigation, {
    //           screens: SCREENS.HOME,
    //           params: {},
    //         });
    //       },
    //     }
    //   )
    // );
  };

  return (
    <View style={styles.container}>
      <Header isGoBack isEnableChangeLanguage />
      <KeyboardAvoidingView
        enabled={Platform.OS === "ios"}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.container}
      >
        <ScrollView
          style={styles.childContainer}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>{translate("label.signup")}</Text>
          <View style={styles.noAccountContainer}>
            <Text style={styles.noAccount}>
              {translate("label.alreadyAccount")}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate(SCREENS.LOGIN, {})}
            >
              <Text style={styles.buttonCreate}>
                {translate("button.login")}
              </Text>
            </TouchableOpacity>
          </View>
          <TextInput
            editable={!isLoading}
            label={translate("label.email")}
            placeholder={translate("placeholder.email")}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize={"none"}
            returnKeyType="next"
            containerStyle={styles.input}
            value={email}
            onChangeText={(text: string) => setEmail(text)}
            isRequired
            errorMessage={
              isButtonClickSubmit && !Utils.isValidEmail(email)
                ? translate("error.validation.email")
                : ""
            }
          />
          <Button
            onPress={signUp}
            title={translate("button.signup")}
            isLoading={isLoading}
            buttonChildStyle={styles.buttonChildStyle}
            buttonStyle={styles.button}
          />
          <View style={styles.loginSocialContainer}>
            <View style={styles.line} />
            <Text style={styles.orLogin}>{translate("label.orLogin")}</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.loginSocialContainer}>
            <TouchableOpacity
              style={[
                styles.buttonSocial,
                {
                  borderColor: Themes.colors.google,
                },
              ]}
              onPress={loginWithGoogle}
            >
              <Icon
                name={"ic_google"}
                size={Metrics.icons.small}
                color={Themes.colors.google}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.buttonSocial,
                {
                  borderColor: Themes.colors.facebook,
                  marginLeft: ScreenUtils.scale(13),
                },
              ]}
              onPress={loginWithFacebook}
            >
              <Icon
                name={"ic_facebook"}
                size={Metrics.icons.small}
                color={Themes.colors.facebook}
              />
            </TouchableOpacity>
            {Platform.OS === "ios" &&
            Number(Platform.Version.toString().split(".")[0]) >= 13 ? (
              <TouchableOpacity
                style={[
                  styles.buttonSocial,
                  {
                    borderColor: Themes.colors.black,
                    marginLeft: ScreenUtils.scale(13),
                  },
                ]}
                onPress={loginWithApple}
              >
                <Icon
                  name={"ic_apple"}
                  size={Metrics.icons.small}
                  color={Themes.colors.black}
                />
              </TouchableOpacity>
            ) : null}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <Footer />
    </View>
  );
};
