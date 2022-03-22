import { SCREENS } from "@configs";
import { BottomTabNavigator } from "@navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LaunchScreen } from "@screens";
import React from "react";

export type RootStackParamList = {
  [SCREENS.LAUNCH_SCREEN]: undefined;
  [SCREENS.HOME_STACK]: undefined;
  [SCREENS.BOTTOM_TAB_NAVIGATION]: undefined;
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
