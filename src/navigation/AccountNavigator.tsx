import { SCREENS } from "@configs";
import { NavigationUtils } from "@helpers";
import {
  AccountSettingOptionsScreen,
  ChangePasswordScreen,
  FirstTimeUserScreen,
  HomeAccountScreen,
} from "@screens";
import React from "react";

export type AccountStackParamList = {
  [SCREENS.ACCOUNT_SCREEN]: undefined;
  [SCREENS.ACCOUNT_INFORMATION]: undefined;
  [SCREENS.ADDRESS_LIST_SCREEN]: undefined;
  [SCREENS.FIRST_TIME_USER]: undefined;
  // [SCREENS.PAYMENT_METHOD_SCREEN]: undefined;
  [SCREENS.EZ_WALLET_SCREEN]: undefined;
  // [SCREENS.REGION_SCREEN]: undefined;
  [SCREENS.CHANGE_PASSWORD]: undefined;
  [SCREENS.ACCOUNT_SETTING_SCREEN]: undefined;
};

const AccountStack = NavigationUtils.createNavigation<AccountStackParamList>();

export const AccountNavigator = () => {
  return (
    <AccountStack.Navigator
      initialRouteName={SCREENS.ACCOUNT_SCREEN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <AccountStack.Screen
        name={SCREENS.ACCOUNT_SCREEN}
        component={HomeAccountScreen}
      />
      <AccountStack.Screen
        name={SCREENS.ACCOUNT_SETTING_SCREEN}
        component={AccountSettingOptionsScreen}
      />
      {/* <AccountStack.Screen
        name={SCREENS.ACCOUNT_INFORMATION}
        component={AccountInformationContainer}
      />
      <AccountStack.Screen
        name={SCREENS.ADDRESS_LIST_SCREEN}
        component={AddressListScreen}
      /> */}
      <AccountStack.Screen
        name={SCREENS.FIRST_TIME_USER}
        component={FirstTimeUserScreen}
      />
      {/* <AccountStack.Screen
        name={SCREENS.EZ_WALLET_SCREEN}
        component={JanboxWalletScreen}
      /> */}
      {/* <AccountStack.Screen
        name={SCREENS.REGION_SCREEN}
        component={RegionScreen}
      /> */}
      <AccountStack.Screen
        name={SCREENS.CHANGE_PASSWORD}
        component={ChangePasswordScreen}
      />
    </AccountStack.Navigator>
  );
};
