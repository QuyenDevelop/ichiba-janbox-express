import { SCREENS } from "@configs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AnalyticScreen } from "@screens";
import React from "react";

export type AnalyticStackParamsList = {
  [SCREENS.ANALYTIC_SCREEN]: undefined;
};

const AnalyticNavigator = createNativeStackNavigator<AnalyticStackParamsList>();

export const AnalyticStack = () => {
  return (
    <AnalyticNavigator.Navigator
      initialRouteName={SCREENS.ANALYTIC_SCREEN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <AnalyticNavigator.Screen
        name={SCREENS.ANALYTIC_SCREEN}
        component={AnalyticScreen}
      />
    </AnalyticNavigator.Navigator>
  );
};
