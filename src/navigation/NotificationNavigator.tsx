import { SCREENS } from "@configs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  NotificationScreen,
  NotificationScreenRouteParams,
  NotificationSettingDetailScreen,
  NotificationSettingScreen,
} from "@screens";
import React from "react";

export type NotificationStackParamsList = {
  [SCREENS.NOTIFICATION]: NotificationScreenRouteParams;
  [SCREENS.NOTIFICATION_SETTING]: undefined;
  [SCREENS.NOTIFICATION_SETTING_DETAIL]: undefined;
};

const NotificationStackNavigator =
  createNativeStackNavigator<NotificationStackParamsList>();

export const NotificationStack = () => {
  return (
    <NotificationStackNavigator.Navigator
      initialRouteName={SCREENS.NOTIFICATION}
      screenOptions={{
        headerShown: false,
      }}
    >
      <NotificationStackNavigator.Screen
        name={SCREENS.NOTIFICATION}
        component={NotificationScreen}
        options={{
          headerShown: false,
        }}
      />
      <NotificationStackNavigator.Screen
        name={SCREENS.NOTIFICATION_SETTING}
        component={NotificationSettingScreen}
        options={{
          headerShown: false,
        }}
      />
      <NotificationStackNavigator.Screen
        name={SCREENS.NOTIFICATION_SETTING_DETAIL}
        component={NotificationSettingDetailScreen}
        options={{
          headerShown: false,
        }}
      />
    </NotificationStackNavigator.Navigator>
  );
};
