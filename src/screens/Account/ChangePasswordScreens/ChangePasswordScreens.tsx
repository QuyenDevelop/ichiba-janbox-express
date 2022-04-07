/* eslint-disable react-native/no-inline-styles */
import { AccountApi } from "@api";
import { Header } from "@components";
import { SCREENS } from "@configs";
import { Alert, Utils } from "@helpers";
import { useAppDispatch, useAppSelector, useStatusBar } from "@hooks";
import { Account } from "@models";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { logout } from "@redux";
import { Button, TextInput, translate } from "@shared";
import { Metrics } from "@themes";
import React, { FunctionComponent, useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "./styles";

interface OwnProps {
  profile?: Account | null;
}

type Props = OwnProps;

export const ChangePasswordScreen: FunctionComponent<Props> = () => {
  useStatusBar("dark-content");
  const insets = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  const navigation = useNavigation<StackNavigationProp<any>>();
  const profile = useAppSelector(state => state.user.profile);
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonClickSubmit, setIsButtonClickSubmit] = useState(false);

  const [oldPassword, setOldPassword] = useState("");
  const [isOldPasswordSecure, setIsOldPasswordSecure] = useState(true);

  const [newPassword, setNewPassword] = useState("");
  const [isNewPasswordSecure, setIsNewPasswordSecure] = useState(true);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [isConfirmPasswordSecure, setIsConfirmPasswordSecure] = useState(true);

  const changePassword = () => {
    setIsButtonClickSubmit(true);
    if (
      Utils.isValidPassword(oldPassword) &&
      Utils.isValidPassword(newPassword) &&
      Utils.isValidPassword(confirmPassword) &&
      Utils.isMatchPassword(newPassword, confirmPassword)
    ) {
      setIsLoading(true);
      profile &&
        profile?.email &&
        AccountApi.changePassword(
          profile.email,
          oldPassword,
          newPassword,
          confirmPassword,
        )
          ?.then(response => {
            if (response === true) {
              Alert.success("success.changePassword");
              dispatch(logout());
              navigation.navigate(SCREENS.AUTH_STACK, {
                screen: SCREENS.LOGIN,
              });
            } else {
              Alert.error(response.detail, true);
            }
          })
          .catch(err => {
            Alert.error(err.detail, true);
          })
          .finally(() => setIsLoading(false));
    }
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Header
        title={translate("label.changePassword")}
        iconLeftName={["ic_arrow_left"]}
        iconLeftOnPress={[() => navigation.goBack()]}
        isCenterTitle
      />
      <KeyboardAvoidingView
        enabled={Platform.OS === "ios"}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          style={styles.childContainer}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* <Text style={styles.title}>{translate("label.changePassword")}</Text> */}
          <TextInput
            editable={!isLoading}
            label={translate("label.oldPassword")}
            placeholder={translate("placeholder.oldPassword")}
            returnKeyType="next"
            containerStyle={styles.input}
            value={oldPassword}
            onChangeText={(text: string) => setOldPassword(text)}
            isRequired
            secureTextEntry={isOldPasswordSecure}
            iconRightName={isOldPasswordSecure ? "ic_eye" : "ic_eye_slash"}
            iconRightSize={Metrics.icons.smallSmall}
            onPressIconRight={() =>
              setIsOldPasswordSecure(!isOldPasswordSecure)
            }
            errorMessage={
              isButtonClickSubmit && !Utils.isValidPassword(oldPassword)
                ? translate("error.validation.password")
                : ""
            }
          />
          <TextInput
            editable={!isLoading}
            label={translate("label.password")}
            placeholder={translate("placeholder.password")}
            returnKeyType="next"
            containerStyle={styles.input}
            value={newPassword}
            onChangeText={(text: string) => setNewPassword(text)}
            isRequired
            secureTextEntry={isNewPasswordSecure}
            iconRightName={isNewPasswordSecure ? "ic_eye" : "ic_eye_slash"}
            iconRightSize={Metrics.icons.smallSmall}
            onPressIconRight={() =>
              setIsNewPasswordSecure(!isNewPasswordSecure)
            }
            errorMessage={
              isButtonClickSubmit && !Utils.isValidPassword(newPassword)
                ? translate("error.validation.password")
                : ""
            }
          />
          <TextInput
            editable={!isLoading}
            label={translate("label.confirmPassword")}
            placeholder={translate("placeholder.confirmPassword")}
            returnKeyType="next"
            containerStyle={styles.input}
            value={confirmPassword}
            onChangeText={(text: string) => setConfirmPassword(text)}
            isRequired
            secureTextEntry={isConfirmPasswordSecure}
            iconRightName={isConfirmPasswordSecure ? "ic_eye" : "ic_eye_slash"}
            iconRightSize={Metrics.icons.smallSmall}
            onPressIconRight={() =>
              setIsConfirmPasswordSecure(!isConfirmPasswordSecure)
            }
            errorMessage={
              isButtonClickSubmit && !Utils.isValidPassword(confirmPassword)
                ? translate("error.validation.password")
                : !Utils.isMatchPassword(newPassword, confirmPassword)
                ? translate("error.validation.passwordNoMatch")
                : ""
            }
          />
          <Button
            onPress={() => changePassword()}
            title={translate("button.confirm")}
            isLoading={isLoading}
            buttonChildStyle={{ width: "100%" }}
            buttonStyle={styles.button}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};
