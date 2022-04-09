import { SCREENS } from "@configs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NotificationScreen, NotificationScreenRouteParams } from "@screens";
import React from "react";

export type NotificationStackParamsList = {
  [SCREENS.NOTIFICATION]: NotificationScreenRouteParams;
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
    </NotificationStackNavigator.Navigator>
  );
};
