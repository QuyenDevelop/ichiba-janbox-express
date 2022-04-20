import { SCREENS } from "@configs";
import { NavigationUtils } from "@helpers";
import {
  DepositParams,
  DepositScreen,
  DepositWebviewRouteParams,
  DepositWebViewScreen,
  InfoPayBankRouteParams,
  InfoPayBankScreen,
} from "@screens";
import React from "react";

export type DepositStackParamList = {
  [SCREENS.DEPOSIT_SCREEN]: DepositParams;
  [SCREENS.INFO_PAYMENT_SCREEN]: InfoPayBankRouteParams;
  [SCREENS.DEPOSIT_WEBVIEW_SCREEN]: DepositWebviewRouteParams;
  // [SCREENS.WITHDRAW_SCREEN]: WithdrawScreenParams;
};
const DepositStack = NavigationUtils.createNavigation<DepositStackParamList>();
export const DepositNavigator = () => {
  return (
    <DepositStack.Navigator
      initialRouteName={SCREENS.DEPOSIT_SCREEN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <DepositStack.Screen
        name={SCREENS.DEPOSIT_SCREEN}
        component={DepositScreen}
      />
      <DepositStack.Screen
        name={SCREENS.INFO_PAYMENT_SCREEN}
        component={InfoPayBankScreen}
      />
      <DepositStack.Screen
        name={SCREENS.DEPOSIT_WEBVIEW_SCREEN}
        component={DepositWebViewScreen}
      />
      {/* <DepositStack.Screen
        name={SCREENS.WITHDRAW_SCREEN}
        component={WithdrawScreenParams}
      /> */}
    </DepositStack.Navigator>
  );
};
