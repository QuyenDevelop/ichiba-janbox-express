import { accountApi } from "@api";
import { Footer, Header } from "@components";
import { CONSTANT, SCREENS } from "@configs";
import {
  Alert,
  ExternalAuthenticationUtils,
  removeAsyncItem,
  ScreenUtils,
  setAsyncItem,
} from "@helpers";
import { useAppDispatch, useAppSelector, useLoading } from "@hooks";
import { Account } from "@models";
import { RootStackParamList } from "@navigation";
import { useNavigation } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { loginAction, loginExternalAction } from "@redux";
import { Button, Checkbox, Icon, TextInput, translate } from "@shared";
import { Metrics, Themes } from "@themes";
import React, { FunctionComponent, useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as RNLocalize from "react-native-localize";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { IRootState } from "./../../../redux/store";
import styles from "./styles";

type Props = NativeStackScreenProps<RootStackParamList>;

export const LoginScreen: FunctionComponent<Props> = () => {
  const insets = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  const { loading, isLogging, messageFailed } = useAppSelector(
    (state: IRootState) => state.user,
  );
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState("");
  const [isSecure, setIsSecure] = useState(true);
  const [isRemember, setIsRemember] = useState(false);
  // const [isLoading, showLoading, hideLoading] = useBoolean(false);
  const [isLoading, setIsLoading] = useState<boolean>(loading);
  const { showLoading, hideLoading } = useLoading();
  const locates = {
    locates: RNLocalize.getLocales(),
  };

  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  useEffect(() => {
    if (isLogging) {
      navigation.navigate(SCREENS.BOTTOM_TAB_NAVIGATION, {
        screen: SCREENS.HOME_SCREEN,
      });
      return;
    }
    Number(messageFailed) > 1 &&
      navigation.navigate(SCREENS.LOCKED_SCREEN, {
        countDown: messageFailed || "0",
      });
  }, [isLogging, messageFailed, navigation]);

  const loginWithEmail = () => {
    // showLoading();
    if (isRemember) {
      setAsyncItem(CONSTANT.TOKEN_STORAGE_KEY.REMEMBER_USER, email);
    } else {
      removeAsyncItem(CONSTANT.TOKEN_STORAGE_KEY.REMEMBER_USER);
    }

    dispatch(
      loginAction({
        username: email,
        password: password,
        // callback: hideLoading,
      }),
    );
  };

  const externalRegister = (data: Account) => {
    accountApi
      .externalRegister({
        countryCode:
          locates && locates.locates && locates.locates.length > 0
            ? locates.locates[0].countryCode
            : "US",
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
      })
      .catch(err => {
        hideLoading();
        Alert.error(err?.title, true);
      });
  };

  const externalLogin = (profile: Account) => {
    accountApi
      .getUserInfoByToken(profile.idToken, profile.provider)
      ?.then((res: any) => {
        if (res?.isAssociate) {
          dispatch(
            loginExternalAction({
              token: profile.idToken,
              email: profile.email,
              provider: profile?.provider,
            }),
          );
        } else {
          if (res?.email) {
            externalRegister(profile);
          }
        }
      });
  };

  const loginWithFacebook = () => {
    ExternalAuthenticationUtils.signInByFacebook().then(user => {
      showLoading();
      externalLogin(user);
    });
  };

  const loginWithGoogle = () => {
    ExternalAuthenticationUtils.signInByGoogle().then(user => {
      console.log(
        "🚀🚀🚀 => ExternalAuthenticationUtils.signInByGoogle => user",
        user,
      );
      showLoading();
      externalLogin(user);
    });
  };

  const loginWithApple = () => {
    ExternalAuthenticationUtils.signInByApple().then(user => {
      showLoading();
      externalLogin(user);
    });
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Header isEnableChangeLanguage />
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
          <Text style={styles.title}>{translate("label.login")}</Text>
          <View style={styles.noAccountContainer}>
            <Text style={styles.noAccount}>{translate("label.noAccount")}</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate(SCREENS.REGISTER)}
            >
              <Text style={styles.buttonCreate}>
                {translate("button.createAccount")}
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
          />
          <TextInput
            editable={!isLoading}
            label={translate("label.password")}
            placeholder={translate("placeholder.password")}
            returnKeyType="done"
            containerStyle={styles.input}
            value={password}
            onChangeText={(text: string) => setPassword(text)}
            isRequired
            secureTextEntry={isSecure}
            iconRightName={isSecure ? "ic_eye" : "ic_eye_slash"}
            iconRightSize={Metrics.icons.smallSmall}
            onPressIconRight={() => setIsSecure(!isSecure)}
          />
          <View style={styles.space}>
            <Checkbox
              checked={isRemember}
              onChange={() => {
                setIsRemember(!isRemember);
              }}
              title={translate("button.remember")}
            />
            <TouchableOpacity
              style={styles.forgotPasswordContainer}
              onPress={() => navigation.navigate(SCREENS.FORGOT_PASSWORD)}
            >
              <Text style={styles.forgotPassword}>
                {translate("button.forgotPassword")}
              </Text>
            </TouchableOpacity>
          </View>
          <Button
            onPress={loginWithEmail}
            title={translate("button.login")}
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
