import { Header, Separator } from "@components";
import { SCREENS } from "@configs";
import { ScreenUtils } from "@helpers";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { translate } from "@shared";
import React, { FunctionComponent } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AccountOptions } from "../components/AccountOptions/AccountOptions";
import styles from "./styles";

interface Props {}

export const AccountSettingOptionsScreen: FunctionComponent<Props> = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Header
        title={translate("label.setting")}
        iconLeftName={["ic_arrow_left"]}
        iconLeftOnPress={[() => navigation.goBack()]}
        isCenterTitle
      />
      <AccountOptions
        title={translate("label.changePassword")}
        onPress={() => navigation.navigate(SCREENS.CHANGE_PASSWORD)}
        iconRightName={"arrow-forward-ios"}
      />
      <AccountOptions
        title={translate("label.security")}
        onPress={() => navigation.navigate(SCREENS.SECURITY_SCREEN)}
        iconRightName={"arrow-forward-ios"}
      />
      <AccountOptions
        title={translate("label.notificationSetting")}
        onPress={() => navigation.navigate(SCREENS.NOTIFICATION_SETTING)}
        iconRightName={"arrow-forward-ios"}
      />
      <Separator height={ScreenUtils.scale(8)} />
      {/* <AccountFunction
        label={translate("label.paymentMethod")}
        screen={SCREENS.PAYMENT_METHOD_SCREEN}
      /> */}
      {/*<AccountFunction*/}
      {/*    label={translate("label.signinAndSecurity")}*/}
      {/*    screen={SCREENS.ACCOUNT_INFORMATION}*/}
      {/*/>*/}
    </View>
  );
};
