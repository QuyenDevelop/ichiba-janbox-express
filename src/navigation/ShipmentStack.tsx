import { SCREENS } from "@configs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  PackageManagerParams,
  ReviewScreen,
  ReviewScreenParams,
  ShipmentManageScreen,
} from "@screens";
import React from "react";

export type ShipmentParamList = {
  [SCREENS.SHIPMENT_MANAGE_SCREEN]: PackageManagerParams;
  [SCREENS.REVIEW_SCREEN]: ReviewScreenParams;
};

const ShipmentStackNavigator = createNativeStackNavigator<ShipmentParamList>();

export const ShipmentStack = () => {
  return (
    <ShipmentStackNavigator.Navigator
      initialRouteName={SCREENS.SHIPMENT_MANAGE_SCREEN}
    >
      <ShipmentStackNavigator.Screen
        name={SCREENS.SHIPMENT_MANAGE_SCREEN}
        component={ShipmentManageScreen}
        options={{
          headerShown: false,
        }}
      />
      {/* <ShipmentStackNavigator.Screen
        name={SCREENS.SHIPMENT_DETAIL_SCREEN}
        component={ShipmentManageScreen}
        options={{
          headerShown: false,
        }}
      /> */}
      <ShipmentStackNavigator.Screen
        name={SCREENS.REVIEW_SCREEN}
        component={ReviewScreen}
        options={{
          headerShown: false,
        }}
      />
    </ShipmentStackNavigator.Navigator>
  );
};
