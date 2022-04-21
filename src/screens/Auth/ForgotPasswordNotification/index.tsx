import { Footer, Header } from "@components";
import { SCREENS } from "@configs";
import { AuthStackParamList } from "@navigation";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, translate } from "@shared";
import React, { FunctionComponent, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import styles from "./styles";

export interface ForgotPasswordNotificationRouteParams {
  email?: string;
}

type NavigationRoute = RouteProp<
  AuthStackParamList,
  SCREENS.FORGOT_PASSWORD_NOTIFICATION
>;

interface OwnProps {}

type Props = OwnProps;

export const ForgotPasswordNotificationScreen: FunctionComponent<
  Props
> = () => {
  //#region State
  // useStatusBar("dark-content");
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const route = useRoute<NavigationRoute>();
  const [isLoading] = useState(false);
  //#endRegion

  const { email } = route?.params;

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
          <Text style={styles.title}>{translate("label.forgotPassword")}</Text>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              {translate("text.forgotPasswordNotification.firstContent")}
            </Text>
          </View>
          <View style={styles.emailContainer}>
            <Text style={styles.textEmail}>{email}</Text>
          </View>

          <View style={styles.contentContainer}>
            <View style={styles.firstContentContainer}>
              <Text style={styles.firstContent}>
                {translate("text.forgotPasswordNotification.secondContent")}
              </Text>
            </View>

            <View>
              <Text style={styles.secondContent}>
                {translate("text.forgotPasswordNotification.thirdContent")}
              </Text>
            </View>
          </View>
          <Button
            onPress={() => navigation.navigate(SCREENS.BOTTOM_TAB_NAVIGATION)}
            title={translate("button.homePage")}
            isLoading={isLoading}
            buttonChildStyle={styles.buttonChildStyle}
            buttonStyle={styles.button}
          />
        </ScrollView>
      </KeyboardAvoidingView>
      <Footer />
    </View>
  );
};
