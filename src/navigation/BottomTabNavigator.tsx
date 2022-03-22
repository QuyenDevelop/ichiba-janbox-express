/* eslint-disable react-native/no-inline-styles */
import { CreateShipmentButton } from "@components";
import { SCREENS, Sizes } from "@configs";
import { ScreenUtils } from "@helpers";
import { HomeStack, NotificationStack } from "@navigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Images, Themes } from "@themes";
import React from "react";
import { Image, Text, View } from "react-native";

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
        component={NotificationStack}
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
