import { SCREENS } from "@configs";
import { NavigationUtils } from "@helpers";
import { CreateShipmentFromPastScreen } from "@screens";
import React from "react";

export type CreateShipmentFromPastParamList = {
  [SCREENS.CREATE_SHIPMENT_FROM_PAST_SCREEN]: undefined;
};

const CreateShipmentFromPastStackNavigator =
  NavigationUtils.createNavigation<CreateShipmentFromPastParamList>();

export const CreateShipmentFromPastStack = () => {
  return (
    <CreateShipmentFromPastStackNavigator.Navigator
      initialRouteName={SCREENS.CREATE_SHIPMENT_FROM_PAST_SCREEN}
    >
      <CreateShipmentFromPastStackNavigator.Screen
        name={SCREENS.CREATE_SHIPMENT_FROM_PAST_SCREEN}
        component={CreateShipmentFromPastScreen}
        options={{
          headerShown: false,
        }}
      />
    </CreateShipmentFromPastStackNavigator.Navigator>
  );
};
