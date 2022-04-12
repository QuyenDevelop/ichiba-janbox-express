import { SCREENS } from "@configs";
import { NavigationUtils } from "@helpers";
import { CreateShipmentScreen } from "@screens";
import React from "react";

export type CreateShipmentParamList = {
  [SCREENS.CREATE_SHIPMENT_SCREEN]: undefined;
};

const CreateShipmentStackNavigator =
  NavigationUtils.createNavigation<CreateShipmentParamList>();

export const CreateShipmentStack = () => {
  return (
    <CreateShipmentStackNavigator.Navigator
      initialRouteName={SCREENS.CREATE_SHIPMENT_SCREEN}
    >
      <CreateShipmentStackNavigator.Screen
        name={SCREENS.CREATE_SHIPMENT_SCREEN}
        component={CreateShipmentScreen}
        options={{
          headerShown: false,
        }}
      />
    </CreateShipmentStackNavigator.Navigator>
  );
};
