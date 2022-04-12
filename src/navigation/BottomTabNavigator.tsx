/* eslint-disable react-native/no-inline-styles */
import { CreateShipmentButton } from "@components";
import { SCREENS, Sizes } from "@configs";
import { ScreenUtils } from "@helpers";
import { HomeStack, NotificationStack } from "@navigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { translate } from "@shared";
import { Images, Themes } from "@themes";
import React from "react";
import { Image, Text, View } from "react-native";
import { AccountNavigator } from "./AccountNavigator";
import { CreateShipmentStack } from "./CreateShipmentStack";
import { ShipmentStack } from "./ShipmentStack";

const Tab = createBottomTabNavigator();

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
            width: 120,
            paddingBottom: ScreenUtils.scale(7),
            marginTop: ScreenUtils.scale(10),
          }
        : {
            width: 100,
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
          marginBottom: ScreenUtils.scale(10),
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
              translate("label.home"),
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
              translate("label.notify"),
              focused,
            ),
        }}
      />
      <Tab.Screen
        name={SCREENS.CREATE_SHIPMENT_STACK}
        component={CreateShipmentStack}
        options={{
          tabBarButton: props => <CreateShipmentButton props={props} />,
        }}
      />
      <Tab.Screen
        name={SCREENS.SHIPMENT_STACK}
        component={ShipmentStack}
        options={{
          tabBarIcon: ({ focused }) =>
            getTabBarIconImage(
              Images.icPackage,
              Images.icPackageFill,
              translate("label.shipment"),
              focused,
            ),
        }}
      />
      <Tab.Screen
        name={SCREENS.MY_JANBOX_STACK}
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ focused }) =>
            getTabBarIconImage(
              Images.icMyJanbox,
              Images.icMyJanboxFill,
              translate("label.myJanbox"),
              focused,
            ),
        }}
      />
    </Tab.Navigator>
  );
}
