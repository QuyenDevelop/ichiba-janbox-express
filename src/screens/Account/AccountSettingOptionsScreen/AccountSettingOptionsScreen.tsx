import { Header, Separator } from "@components";
import { SCREENS } from "@configs";
import { ScreenUtils } from "@helpers";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { translate } from "@shared";
import { Icons, Metrics, Themes } from "@themes";
import React, { FunctionComponent } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AccountOptions } from "../components/AccountOptions/AccountOptions";
import styles from "./styles";

interface Props {}

export const AccountSettingOptionsScreen: FunctionComponent<Props> = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

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
        icon={() => {
          return (
            <Icons.FontAwesome5 name={"lock"} size={Metrics.icons.smallSmall} />
          );
        }}
      />
      <AccountOptions
        title={translate("label.security")}
        onPress={() => navigation.navigate(SCREENS.SECURITY_SCREEN)}
        iconRightName={"arrow-forward-ios"}
        icon={() => {
          return (
            <Icons.FontAwesome5
              name={"shield-alt"}
              size={Metrics.icons.smallSmall}
              color={Themes.colors.coolGray60}
            />
          );
        }}
      />
      <AccountOptions
        iconLeftName={"ic_notification"}
        title={translate("label.notificationSetting")}
        onPress={() =>
          navigation.navigate(SCREENS.ACCOUNT_STACK, {
            screen: SCREENS.NOTIFICATION_SETTING,
          })
        }
        iconRightName={"arrow-forward-ios"}
      />
      <Separator height={ScreenUtils.scale(8)} />
      <AccountOptions
        iconLeftName="ic_facebook"
        title={"Facebook"}
        subTitle={"Liên kết với Facebook"}
        onPress={() => {}}
        iconRightName={"arrow-forward-ios"}
      />
      <AccountOptions
        iconLeftName="ic_google"
        title={"Google"}
        subTitle={"Liên kết với Google"}
        onPress={() => {}}
        iconRightName={"arrow-forward-ios"}
      />
    </View>
  );
};
