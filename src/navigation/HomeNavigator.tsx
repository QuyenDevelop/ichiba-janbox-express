import { SCREENS } from "@configs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  DetailScreen,
  HomeScreen,
  IDetailScreenParams,
  InfoScreen,
  NewsScreen,
  ReviewScreen,
} from "@screens";
import React from "react";

export type HomeStackParamsList = {
  [SCREENS.HOME_SCREEN]: undefined;
  [SCREENS.DETAIL_SCREEN]: IDetailScreenParams;
  [SCREENS.INFO_SCREEN]: undefined;
  [SCREENS.NEWS_SCREEN]: undefined;
  [SCREENS.REVIEW_SCREEN]: undefined;
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
      <HomeStackNavigator.Screen
        name={SCREENS.NEWS_SCREEN}
        component={NewsScreen}
      />
      <HomeStackNavigator.Screen
        name={SCREENS.REVIEW_SCREEN}
        component={ReviewScreen}
      />
    </HomeStackNavigator.Navigator>
  );
};
