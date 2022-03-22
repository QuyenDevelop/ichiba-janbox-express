import { SCREENS } from "@configs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  DetailScreen,
  HomeScreen,
  IDetailScreenParams,
  InfoScreen,
} from "@screens";
import React from "react";

export type HomeStackParamsList = {
  [SCREENS.HOME_SCREEN]: undefined;
  [SCREENS.DETAIL_SCREEN]: IDetailScreenParams;
  [SCREENS.INFO_SCREEN]: undefined;
};

const HomeStackNavigator = createNativeStackNavigator<HomeStackParamsList>();

export const HomeStack = () => {
  return (
    <HomeStackNavigator.Navigator
      initialRouteName={SCREENS.HOME_SCREEN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStackNavigator.Screen
        name={SCREENS.HOME_SCREEN}
        component={HomeScreen}
      />
      <HomeStackNavigator.Screen
        name={SCREENS.DETAIL_SCREEN}
        component={DetailScreen}
      />
      <HomeStackNavigator.Screen
        name={SCREENS.INFO_SCREEN}
        component={InfoScreen}
      />
    </HomeStackNavigator.Navigator>
  );
};
