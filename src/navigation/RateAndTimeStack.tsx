import { SCREENS } from "@configs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RateAndTimeScreen } from "@screens";
import React from "react";

export type RateTimeStackParamsList = {
  [SCREENS.RATE_TIME_SCREEN]: undefined;
};

const RateTimeStackNavigator =
  createNativeStackNavigator<RateTimeStackParamsList>();

export const RateTimeStackStack = () => {
  return (
    <RateTimeStackNavigator.Navigator
      initialRouteName={SCREENS.RATE_TIME_SCREEN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <RateTimeStackNavigator.Screen
        name={SCREENS.RATE_TIME_SCREEN}
        component={RateAndTimeScreen}
      />
    </RateTimeStackNavigator.Navigator>
  );
};
