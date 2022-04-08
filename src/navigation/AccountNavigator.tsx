import { SCREENS } from "@configs";
import { NavigationUtils } from "@helpers";
import {
  AccountInformationScreen,
  AccountSettingOptionsScreen,
  AddAddressScreen,
  AddressListScreen,
  ChangePasswordScreen,
  FirstTimeUserScreen,
  HomeAccountScreen,
  LanguagesScreen,
} from "@screens";
import React from "react";

export type AccountStackParamList = {
  [SCREENS.ACCOUNT_SCREEN]: undefined;
  [SCREENS.ACCOUNT_INFORMATION]: undefined;
  [SCREENS.ADDRESS_LIST_SCREEN]: undefined;
  [SCREENS.FIRST_TIME_USER]: undefined;
  // [SCREENS.PAYMENT_METHOD_SCREEN]: undefined;
  [SCREENS.EZ_WALLET_SCREEN]: undefined;
  [SCREENS.CHANGE_PASSWORD]: undefined;
  [SCREENS.LANGUAGES]: undefined;
  [SCREENS.ADD_ADDRESS_SCREEN]: undefined;
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
        name={SCREENS.ACCOUNT_INFORMATION}
        component={AccountInformationScreen}
      />
      <AccountStack.Screen
        name={SCREENS.ACCOUNT_SETTING_SCREEN}
        component={AccountSettingOptionsScreen}
      />
      <AccountStack.Screen
        name={SCREENS.FIRST_TIME_USER}
        component={FirstTimeUserScreen}
      />
      <AccountStack.Screen
        name={SCREENS.LANGUAGES}
        component={LanguagesScreen}
      />
      <AccountStack.Screen
        name={SCREENS.CHANGE_PASSWORD}
        component={ChangePasswordScreen}
      />
      <AccountStack.Screen
        name={SCREENS.ADDRESS_LIST_SCREEN}
        component={AddressListScreen}
      />
      <AccountStack.Screen
        name={SCREENS.ADD_ADDRESS_SCREEN}
        component={AddAddressScreen}
      />
    </AccountStack.Navigator>
  );
};
