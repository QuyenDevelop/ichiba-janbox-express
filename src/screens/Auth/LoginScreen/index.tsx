import { Footer, Header } from "@components";
import { CONSTANT, SCREENS } from "@configs";
import { removeAsyncItem, ScreenUtils, setAsyncItem } from "@helpers";
import { useAppDispatch, useLoading } from "@hooks";
import { Account } from "@models";
import { RootStackParamList } from "@navigation";
import { useNavigation } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { loginAction } from "@redux";
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
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { connect } from "react-redux";
import styles from "./styles";

type Props = NativeStackScreenProps<RootStackParamList>;

export const LoginScreen: FunctionComponent<Props> = () => {
  const insets = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const [email, setEmail] = useState("quyenph@ichiba.vn");
  const [password, setPassword] = useState("Phamquyen97");
  const [isSecure, setIsSecure] = useState(true);
  const [isRemember, setIsRemember] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { showLoading, hideLoading } = useLoading();

  const loginWithEmail = () => {
    if (isRemember) {
      setAsyncItem(CONSTANT.TOKEN_STORAGE_KEY.REMEMBER_USER, email);
    } else {
      removeAsyncItem(CONSTANT.TOKEN_STORAGE_KEY.REMEMBER_USER);
    }
    setIsLoading(true);
    dispatch(loginAction({ username: email, password: password }));
    setIsLoading(false);
  };

  useEffect(() => {}, [email]);

  const externalLogin = (profile: Account) => {
    // AccountApi.getUserInfoByToken(profile.idToken, profile.provider)?.then(
    //   res => {
    //     if (res?.isAssociate) {
    //       dispatch(
    //         loginExternal(
    //           {
    //             token: profile.idToken,
    //             email: profile.email,
    //             provider: profile.provider,
    //           },
    //           {
    //             onFailure: (err: any) => {},
    //             onSuccess: () => {
    //               getUserInformation();
    //             },
    //           },
    //         ),
    //       );
    //     } else {
    //       // if (res?.email) {
    //       //   externalRegister(profile);
    //       // } else {
    //       //   hideLoading();
    //       // }
    //     }
    //   },
    // );
  };

  // const getUserInformation = () => {
  //   dispatch(
  //     authApi.userInfo(
  //       {},
  //       {
  //         onFailure: (err: any) => {
  //           setIsLoading(false);
  //         },
  //         onSuccess: () => {
  //           setEmail("");
  //           setPassword("");
  //           setIsButtonClickSubmit(false);
  //           dispatch(AccountAction.setCountFavoriteProduct());
  //           dispatch(AccountAction.setCountBidProduct());
  //           // dispatch(AccountAction.checkExistCard());
  //           messaging()
  //             .getToken()
  //             .then(token => {
  //               dispatch(AccountAction.changeDeviceId({ deviceId: token }));
  //               customerApi.updateDeviceId(token);
  //             });
  //           dispatch(
  //             AccountAction.mergeCart(
  //               {
  //                 identityRefId: anonymousId,
  //               },
  //               {
  //                 onFailure: () => {
  //                   setIsLoading(false);
  //                   hideLoading();
  //                 },
  //                 onSuccess: () => {
  //                   dispatch(
  //                     CartAction.changeCart(
  //                       { anonymousId: anonymousId },
  //                       {
  //                         onSuccess: () => {
  //                           setIsLoading(false);
  //                           // if (
  //                           //   route.params?.returnStack &&
  //                           //   route.params?.returnScreen
  //                           // ) {
  //                           //   navigation.navigate(route.params?.returnStack, {
  //                           //     screen: route.params?.returnScreen,
  //                           //   });
  //                           //   return;
  //                           // }
  //                           navigation.navigate(SCREENS.BottomTabNavigation);
  //                           hideLoading();
  //                         },
  //                         onFailure: () => {
  //                           setIsLoading(false);
  //                         },
  //                       },
  //                     ),
  //                   );
  //                 },
  //               },
  //             ),
  //           );
  //         },
  //       },
  //     ),
  //   );
  //   // hideLoading();
  // };

  const getUserInformation = () => {
    // dispatch(
    //   AccountAction.userInfo(
    //     {},
    //     {
    //       onFailure: (err: any) => {
    //         console.log("fail: ", err);
    //         setIsLoading(false);
    //       },
    //       onSuccess: (response: { account: Account }) => {
    //         setEmail("");
    //         setPassword("");
    //         // navigation.goBack();
    //         navigation.reset({
    //           index: 0,
    //           routes: [{ name: SCREENS.HOME_STACK }],
    //         });
    //       },
    //     },
    //   ),
    // );
    // hideLoading();
  };

  const loginWithFacebook = () => {
    // ExternalAuthenticationUtils.signInByFacebook().then(user => {
    //   showLoading();
    //   externalLogin(user);
    // });
  };

  const loginWithGoogle = () => {
    // ExternalAuthenticationUtils.signInByGoogle().then((user) => {
    //   showLoading();
    //   externalLogin(user);
    // });
  };

  const loginWithApple = () => {
    // ExternalAuthenticationUtils.signInByApple().then((user) => {
    //   showLoading();
    //   externalLogin(user);
    // });
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
            // errorMessage={
            //   isButtonClickSubmit && !Utils.isValidEmail(email)
            //     ? translate("error.validation.email")
            //     : ""
            // }
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
            // errorMessage={
            //   isButtonClickSubmit && !Utils.isValidPassword(password)
            //     ? translate("error.validation.password")
            //     : ""
            // }
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

const mapStateToProps = (state: any) => ({
  language: state.account.language,
});

const mapDispatchToProps = () => ({});

export const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen);
