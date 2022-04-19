import { SCREENS } from "@configs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScanQRCodeScreen, SearchScreen } from "@screens";
import React from "react";

export type SearchStackParamsList = {
  [SCREENS.SEARCH]: undefined;
  [SCREENS.SCAN_SCREEN]: undefined;
};

const HomeStackNavigator = createNativeStackNavigator<SearchStackParamsList>();

export const SearchStack = () => {
  return (
    <HomeStackNavigator.Navigator
      initialRouteName={SCREENS.SEARCH}
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStackNavigator.Screen
        name={SCREENS.SEARCH}
        component={SearchScreen}
      />
      <HomeStackNavigator.Screen
        name={SCREENS.SCAN_SCREEN}
        component={ScanQRCodeScreen}
      />
    </HomeStackNavigator.Navigator>
  );
};
