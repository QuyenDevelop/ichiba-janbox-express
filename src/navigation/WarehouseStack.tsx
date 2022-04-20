import { SCREENS } from "@configs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WarehouseScreen } from "@screens";
import React from "react";

export type WarehouseStackParamsList = {
  [SCREENS.WAREHOUSE_SCREEN]: undefined;
};

const WarehouseStackNavigator =
  createNativeStackNavigator<WarehouseStackParamsList>();

export const WarehouseStack = () => {
  return (
    <WarehouseStackNavigator.Navigator
      initialRouteName={SCREENS.WAREHOUSE_SCREEN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <WarehouseStackNavigator.Screen
        name={SCREENS.WAREHOUSE_SCREEN}
        component={WarehouseScreen}
      />
    </WarehouseStackNavigator.Navigator>
  );
};
