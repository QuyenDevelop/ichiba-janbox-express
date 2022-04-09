import { SCREENS } from "@configs";
import { BottomTabNavigator } from "@navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  LaunchScreen,
  NotificationSettingDetailRouteParams,
  NotificationSettingDetailScreen,
  NotificationSettingScreen,
} from "@screens";
import React from "react";
import { AccountNavigator } from "./AccountNavigator";
import { AuthNavigation } from "./AuthNavigator";
import { NotificationStack } from "./NotificationNavigator";

export type RootStackParamList = {
  [SCREENS.LAUNCH_SCREEN]: undefined;
  [SCREENS.NOTIFICATION_STACK]: undefined;
  [SCREENS.NOTIFICATION_SETTING]: undefined;
  [SCREENS.NOTIFICATION_SETTING_DETAIL]: NotificationSettingDetailRouteParams;
  [SCREENS.HOME_STACK]: undefined;
  [SCREENS.BOTTOM_TAB_NAVIGATION]: undefined;
  [SCREENS.AUTH_STACK]: undefined;
  [SCREENS.ACCOUNT_STACK]: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <RootStack.Navigator
      initialRouteName={SCREENS.LAUNCH_SCREEN}
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
    >
      <RootStack.Screen name={SCREENS.LAUNCH_SCREEN} component={LaunchScreen} />
      <RootStack.Screen name={SCREENS.AUTH_STACK} component={AuthNavigation} />
      <RootStack.Screen
        name={SCREENS.ACCOUNT_STACK}
        component={AccountNavigator}
      />
      <RootStack.Screen
        name={SCREENS.NOTIFICATION_STACK}
        component={NotificationStack}
      />
      <RootStack.Screen
        name={SCREENS.NOTIFICATION_SETTING}
        component={NotificationSettingScreen}
      />
      <RootStack.Screen
        name={SCREENS.NOTIFICATION_SETTING_DETAIL}
        component={NotificationSettingDetailScreen}
      />
      <RootStack.Screen
        name={SCREENS.BOTTOM_TAB_NAVIGATION}
        component={BottomTabNavigator}
        options={{
          gestureEnabled: false,
        }}
      />
    </RootStack.Navigator>
  );
};
