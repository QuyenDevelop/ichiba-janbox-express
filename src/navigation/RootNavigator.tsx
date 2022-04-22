import { SCREENS } from "@configs";
import { BottomTabNavigator } from "@navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  CreateShipmentFromPastScreen,
  JanboxWalletScreen,
  LaunchScreen,
  NotificationSettingDetailRouteParams,
  NotificationSettingDetailScreen,
  NotificationSettingScreen,
} from "@screens";
import React from "react";
import { AccountNavigator } from "./AccountNavigator";
import { AnalyticStack } from "./AnalyticStack";
import { AuthNavigation } from "./AuthNavigator";
import { ComplaintManagementNavigator } from "./ComplaintManagementNavigator";
import { CreateShipmentStack } from "./CreateShipmentStack";
import { DepositNavigator } from "./DepositNavigator";
import { NotificationStack } from "./NotificationNavigator";
import { RateTimeStackStack } from "./RateAndTimeStack";
import { SearchStack } from "./SearchStack";
import { WarehouseStack } from "./WarehouseStack";

export type RootStackParamList = {
  [SCREENS.LAUNCH_SCREEN]: undefined;
  [SCREENS.NOTIFICATION_STACK]: undefined;
  [SCREENS.NOTIFICATION_SETTING]: undefined;
  [SCREENS.NOTIFICATION_SETTING_DETAIL]: NotificationSettingDetailRouteParams;
  [SCREENS.HOME_STACK]: undefined;
  [SCREENS.BOTTOM_TAB_NAVIGATION]: undefined;
  [SCREENS.AUTH_STACK]: undefined;
  [SCREENS.ACCOUNT_STACK]: undefined;
  [SCREENS.SEARCH_STACK]: undefined;
  [SCREENS.WAREHOUSE_STACK]: undefined;
  [SCREENS.ANALYTIC_STACK]: undefined;
  [SCREENS.RATE_TIME_STACK]: undefined;
  [SCREENS.DEPOSIT_STACK]: undefined;
  [SCREENS.COMPLAINT_STACK]: undefined;
  [SCREENS.EZ_WALLET_SCREEN]: undefined;
  [SCREENS.CREATE_SHIPMENT_STACK]: undefined;
  [SCREENS.CREATE_SHIPMENT_FROM_PAST_SCREEN]: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <RootStack.Navigator
      initialRouteName={SCREENS.LAUNCH_SCREEN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Screen name={SCREENS.LAUNCH_SCREEN} component={LaunchScreen} />
      <RootStack.Screen name={SCREENS.AUTH_STACK} component={AuthNavigation} />
      <RootStack.Screen
        name={SCREENS.ACCOUNT_STACK}
        component={AccountNavigator}
      />
      <RootStack.Screen
        name={SCREENS.NOTIFICATION_STACK}
        component={NotificationStack}
      />
      <RootStack.Screen
        name={SCREENS.NOTIFICATION_SETTING}
        component={NotificationSettingScreen}
      />
      <RootStack.Screen
        name={SCREENS.NOTIFICATION_SETTING_DETAIL}
        component={NotificationSettingDetailScreen}
      />
      <RootStack.Screen
        name={SCREENS.BOTTOM_TAB_NAVIGATION}
        component={BottomTabNavigator}
        options={{
          gestureEnabled: false,
        }}
      />
      <RootStack.Screen
        name={SCREENS.EZ_WALLET_SCREEN}
        component={JanboxWalletScreen}
      />
      <RootStack.Screen name={SCREENS.SEARCH_STACK} component={SearchStack} />
      <RootStack.Screen
        name={SCREENS.WAREHOUSE_STACK}
        component={WarehouseStack}
      />
      <RootStack.Screen
        name={SCREENS.ANALYTIC_STACK}
        component={AnalyticStack}
      />
      <RootStack.Screen
        name={SCREENS.RATE_TIME_STACK}
        component={RateTimeStackStack}
      />
      <RootStack.Screen
        name={SCREENS.DEPOSIT_STACK}
        component={DepositNavigator}
      />
      <RootStack.Screen
        name={SCREENS.COMPLAINT_STACK}
        component={ComplaintManagementNavigator}
      />
      <RootStack.Screen
        name={SCREENS.CREATE_SHIPMENT_STACK}
        component={CreateShipmentStack}
      />
      <RootStack.Screen
        name={SCREENS.CREATE_SHIPMENT_FROM_PAST_SCREEN}
        component={CreateShipmentFromPastScreen}
      />
    </RootStack.Navigator>
  );
};
