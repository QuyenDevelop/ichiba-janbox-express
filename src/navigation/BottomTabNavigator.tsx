/* eslint-disable react-native/no-inline-styles */
import { CreateShipmentButton } from "@components";
import { SCREENS, Sizes } from "@configs";
import { NavigationUtils, ScreenUtils } from "@helpers";
import { HomeStack, NotificationStack } from "@navigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeAccountScreen } from "@screens";
import { Images, Themes } from "@themes";
import React from "react";
import { Image, Text, View } from "react-native";

const Tab = createBottomTabNavigator();

export type AccountParamList = {
  [SCREENS.ACCOUNT_SCREEN]: undefined;
  [SCREENS.ACCOUNT_SETTING_SCREEN]: undefined;
  [SCREENS.ACCOUNT_INFORMATION]: undefined;
  // [SCREENS.RECENTLY_VIEWED_SCREEN]: undefined;
  // [SCREENS.FAVORITES_SCREEN]: undefined;
  // [SCREENS.BID_MANAGEMENT_SCREEN]: undefined;
  // [SCREENS.SHIPMENT_DETAILS_SCREEN]: undefined;
};

const getTabBarIconImage = (
  icon: any,
  iconFill: any,
  title: string,
  focused: boolean,
) => (
  <View
    style={
      ScreenUtils.isPad()
        ? {
            justifyContent: "center",
            alignItems: "center",
            width: 100,
            paddingBottom: ScreenUtils.scale(7),
            marginTop: ScreenUtils.scale(10),
          }
        : {
            justifyContent: "center",
            alignItems: "center",
            marginTop: ScreenUtils.scale(10),
          }
    }
  >
    <Image source={focused ? iconFill : icon} />
    <Text
      numberOfLines={1}
      style={[
        {
          marginTop: ScreenUtils.scale(6),
          textAlign: "center",
          ...Themes.font.medium,
        },
        focused
          ? { color: Themes.colors.primary }
          : { color: Themes.colors.coolGray },
        { ...Sizes.font.smallToSmallMini },
      ]}
    >
      {title}
    </Text>
  </View>
);

const AccountStackNavigator =
  NavigationUtils.createNavigation<AccountParamList>();

function AccountStack() {
  return (
    <AccountStackNavigator.Navigator initialRouteName={SCREENS.ACCOUNT_SCREEN}>
      <AccountStackNavigator.Screen
        name={SCREENS.ACCOUNT_SCREEN}
        component={HomeAccountScreen}
        options={{
          headerShown: false,
        }}
      />
      {/* <AccountStackNavigator.Screen
        name={SCREENS.CHANGE_PASSWORD}
        component={ChangePasswordContainer}
        options={{ headerShown: false }}
      />
      <AccountStackNavigator.Screen
        options={{ headerShown: false }}
        name={SCREENS.ACCOUNT_INFORMATION}
        component={AccountInformationContainer}
      />
      <AccountStackNavigator.Screen
        options={{ headerShown: false }}
        name={SCREENS.RECENTLY_VIEWED_SCREEN}
        component={RecentlyViewedContainer}
      />
      <AccountStackNavigator.Screen
        options={{ headerShown: false }}
        name={SCREENS.FAVORITES_SCREEN}
        component={FavoriteScreen}
      />
      <AccountStackNavigator.Screen
        options={{ headerShown: false }}
        name={SCREENS.BID_MANAGEMENT_SCREEN}
        component={BidManagementScreen}
      /> */}
    </AccountStackNavigator.Navigator>
  );
}

export function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={SCREENS.HOME_STACK}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name={SCREENS.HOME_STACK}
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) =>
            getTabBarIconImage(
              Images.icHome,
              Images.icHomeFill,
              "Home",
              focused,
            ),
        }}
      />
      <Tab.Screen
        name={SCREENS.NOTIFICATION_STACK}
        component={NotificationStack}
        options={{
          tabBarIcon: ({ focused }) =>
            getTabBarIconImage(
              Images.icNotification,
              Images.icNotificationFill,
              "Home",
              focused,
            ),
        }}
      />
      <Tab.Screen
        name={SCREENS.CREATE_SHIPMENT_STACK}
        component={NotificationStack}
        options={{
          tabBarIcon: ({ focused }) =>
            getTabBarIconImage(
              Images.icHome,
              Images.icHomeFill,
              "Home",
              focused,
            ),
          tabBarButton: props => <CreateShipmentButton props={props} />,
        }}
      />
      <Tab.Screen
        name={SCREENS.SHIPMENT_STACK}
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) =>
            getTabBarIconImage(
              Images.icPackage,
              Images.icPackageFill,
              "Home",
              focused,
            ),
        }}
      />
      <Tab.Screen
        name={SCREENS.MY_JANBOX_STACK}
        component={AccountStack}
        options={{
          tabBarIcon: ({ focused }) =>
            getTabBarIconImage(
              Images.icMyJanbox,
              Images.icMyJanboxFill,
              "Home",
              focused,
            ),
        }}
      />
    </Tab.Navigator>
  );
}
