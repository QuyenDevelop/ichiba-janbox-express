import { Footer, Header } from "@components";
import { SCREENS } from "@configs";
import { AuthStackParamList } from "@navigation";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, translate } from "@shared";
import React, { FunctionComponent, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "./styles";

type NavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  SCREENS.VERIFICATION
>;

type NavigationRoute = RouteProp<AuthStackParamList, SCREENS.VERIFICATION>;

export interface VerificationRouteParams {
  email: string;
}

interface Props {}

export const VerificationScreen: FunctionComponent<Props> = () => {
  // useStatusBar("dark-content");
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const route = useRoute<NavigationRoute>();
  const { email } = route.params;
  const [isLoading] = useState(false);

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Header isGoBack />
      <ScrollView
        style={styles.childContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>{translate("label.verification")}</Text>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            {translate("text.signUpVerification.firstContent")}
          </Text>
        </View>
        <View style={styles.emailContainer}>
          <Text style={styles.textEmail}>{email}</Text>
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.firstContentContainer}>
            <Text style={styles.firstContent}>
              {translate("text.signUpVerification.secondContent")}
            </Text>
          </View>
          <View>
            <Text style={styles.secondContent}>
              {translate("text.signUpVerification.thirdContent")}
            </Text>
          </View>
          <View>
            <Text style={styles.secondContent}>
              {translate("text.signUpVerification.fourthContent")}
            </Text>
          </View>
        </View>

        <Button
          onPress={() => navigation.navigate(SCREENS.BOTTOM_TAB_NAVIGATION, {})}
          title={translate("button.homePage")}
          isLoading={isLoading}
          buttonChildStyle={{ width: "100%" }}
          buttonStyle={styles.button}
        />
      </ScrollView>
      <Footer />
    </View>
  );
};
