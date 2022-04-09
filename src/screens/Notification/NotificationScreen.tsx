import { Header } from "@components";
import { SCREENS } from "@configs";
import { useAppSelector, useStatusBar } from "@hooks";
import { Account } from "@models";
import { NotificationStackParamsList } from "@navigation";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, translate } from "@shared";
import React, { FunctionComponent, useState } from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { IRootState } from "../../redux/store";
import {
  GeneralNotification,
  OrderNotification,
  SystemNotification,
  Tab,
} from "./components";
import styles from "./styles";

type NavigationRoute = RouteProp<
  NotificationStackParamsList,
  SCREENS.NOTIFICATION
>;
export interface NotificationScreenRouteParams {
  isShowBackOnHeader: boolean;
}

export const NotificationScreen: FunctionComponent = () => {
  useStatusBar("dark-content");
  const insets = useSafeAreaInsets();
  const route = useRoute<NavigationRoute>();
  const { isShowBackOnHeader } = route.params || {};
  const profile = useAppSelector(
    (state: IRootState) => state.user.profile,
  ) as Account;
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [activeTab, setActiveTab] = useState(
    "general" as "general" | "order" | "system",
  );
  const goToLogin = () => {
    navigation.navigate(SCREENS.AUTH_STACK, {
      screen: SCREENS.LOGIN,
    });
  };
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Header
        title={translate("labelNotification")}
        iconLeftName={isShowBackOnHeader ? ["ic_arrow_left"] : []}
        iconLeftOnPress={[() => navigation.goBack()]}
        iconRightName={["ic_setting"]}
        iconRightOnPress={[
          () => navigation.navigate(SCREENS.NOTIFICATION_SETTING),
        ]}
        isCenterTitle
      />
      {profile ? (
        <>
          <Tab activeTab={activeTab} onPress={tab => setActiveTab(tab)} />
          <View style={styles.childContainer}>
            {activeTab === "general" && <GeneralNotification />}
            {activeTab === "order" && <OrderNotification />}
            {activeTab === "system" && <SystemNotification />}
          </View>
        </>
      ) : (
        <View style={styles.noProfile}>
          <Text style={styles.noLogin}>{translate("textNotLogin")}</Text>
          <Button title={translate("button.login")} onPress={goToLogin} />
        </View>
      )}
    </View>
  );
};
