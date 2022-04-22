import { SCREENS } from "@configs";
import { NavigationUtils } from "@helpers";
import {
  ComplaintManagementScreen,
  CreateComplaintScreen,
  CustomerCareScreen,
} from "@screens";
import React from "react";

export type ComplaintManagementStackParamList = {
  [SCREENS.COMPLAINT_MANAGE_SCREEN]: undefined;
  [SCREENS.CREATE_COMPLAINT_SCREEN]: undefined;
  [SCREENS.CUSTOMER_CARE_SCREEN]: undefined;
};

const ComplaintManagementStack =
  NavigationUtils.createNavigation<ComplaintManagementStackParamList>();

export const ComplaintManagementNavigator = () => {
  return (
    <ComplaintManagementStack.Navigator
      initialRouteName={SCREENS.COMPLAINT_MANAGE_SCREEN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <ComplaintManagementStack.Screen
        name={SCREENS.COMPLAINT_MANAGE_SCREEN}
        component={ComplaintManagementScreen}
      />
      <ComplaintManagementStack.Screen
        name={SCREENS.CREATE_COMPLAINT_SCREEN}
        component={CreateComplaintScreen}
      />
      <ComplaintManagementStack.Screen
        name={SCREENS.CUSTOMER_CARE_SCREEN}
        component={CustomerCareScreen}
      />
    </ComplaintManagementStack.Navigator>
  );
};
