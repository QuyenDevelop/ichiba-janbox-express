import { SCREENS } from "@configs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, IDetailScreenParams } from "@screens";
import React from "react";

export type NotificationStackParamsList = {
  [SCREENS.HOME_SCREEN]: undefined;
  [SCREENS.DETAIL_SCREEN]: IDetailScreenParams;
  [SCREENS.INFO_SCREEN]: undefined;
};

const NotificationStackNavigator =
  createNativeStackNavigator<NotificationStackParamsList>();

export const NotificationStack = () => {
  return (
    <NotificationStackNavigator.Navigator
      initialRouteName={SCREENS.HOME_SCREEN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <NotificationStackNavigator.Screen
        name={SCREENS.HOME_SCREEN}
        component={HomeScreen}
      />
    </NotificationStackNavigator.Navigator>
  );
};
