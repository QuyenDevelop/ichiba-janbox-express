import { Header, Separator } from "@components";
import { SCREENS } from "@configs";
import { ScreenUtils } from "@helpers";
import { useAppSelector, useStatusBar } from "@hooks";
import { Account } from "@models";
import { NotificationStackParamsList } from "@navigation";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { IRootState } from "@redux";
import { Button, translate } from "@shared";
import { Themes } from "@themes";
import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Text, View } from "react-native";
import { TabBar, TabBarIndicator, TabView } from "react-native-tab-view";
import {
  GeneralNotification,
  OrderNotification,
  SystemNotification,
} from "./components";
import styles from "./styles";

type NavigationRoute = RouteProp<
  NotificationStackParamsList,
  SCREENS.NOTIFICATION
>;
export interface NotificationScreenRouteParams {
  isShowBackOnHeader: boolean;
}

const TabKey = {
  GENERAL: "GENERAL",
  ODER: "ODER",
  SYSTEM: "SYSTEM",
};

export const NotificationScreen: FunctionComponent = () => {
  useStatusBar("dark-content");
  const route = useRoute<NavigationRoute>();
  const { isShowBackOnHeader } = route.params || {};
  const profile = useAppSelector(
    (state: IRootState) => state.user.profile,
  ) as Account;
  const language = useAppSelector(state => state.user.language);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [index, setIndex] = useState<number>(0);
  const routes = [
    {
      key: TabKey.GENERAL,
      title: translate("labelGeneral"),
    },
    { key: TabKey.ODER, title: translate("labelOrder") },
    { key: TabKey.SYSTEM, title: translate("labelSystem") },
  ];

  useEffect(() => {}, [language]);

  const renderTabBar = useCallback(props => {
    return (
      <TabBar
        {...props}
        style={styles.tabBar}
        renderIndicator={indicatorProps => (
          <TabBarIndicator {...indicatorProps} style={styles.indicatorStyle} />
        )}
        renderLabel={({ route, focused }) => (
          <Text
            style={[
              styles.tabBarLabel,
              {
                color: focused
                  ? Themes.colors.coolGray100
                  : Themes.colors.coolGray60,
              },
            ]}
          >
            {route.title}
          </Text>
        )}
      />
    );
  }, []);

  const renderScene = useCallback(
    ({ route }: { route: { key: string; title: string } }) => {
      switch (route.key) {
        case TabKey.GENERAL:
          return (
            <View style={styles.childContainer}>
              <GeneralNotification />
            </View>
          );
        case TabKey.ODER:
          return (
            <View style={styles.childContainer}>
              <OrderNotification />
            </View>
          );
        case TabKey.SYSTEM:
          return (
            <View style={styles.childContainer}>
              <SystemNotification />
            </View>
          );
        default:
          return null;
      }
    },
    [],
  );

  const goToLogin = () => {
    navigation.navigate(SCREENS.AUTH_STACK, {
      screen: SCREENS.LOGIN,
    });
  };
  return (
    <View style={[styles.container]}>
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
      <Separator height={ScreenUtils.scale(1)} />
      {profile ? (
        <>
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: ScreenUtils.WIDTH_SCREEN }}
            renderTabBar={renderTabBar}
          />
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
