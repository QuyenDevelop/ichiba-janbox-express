import { SCREENS } from "@configs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  ForgotPasswordNotificationRouteParams,
  ForgotPasswordNotificationScreen,
  ForgotPasswordScreen,
  LoginScreen,
  RegisterScreen,
  VerificationRouteParams,
  VerificationScreen,
} from "@screens";
import React from "react";
export type AuthStackParamList = {
  [SCREENS.LOGIN]: undefined;
  [SCREENS.REGISTER]: undefined;
  [SCREENS.FORGOT_PASSWORD]: undefined;
  [SCREENS.VERIFICATION]: VerificationRouteParams;
  [SCREENS.FORGOT_PASSWORD_NOTIFICATION]: ForgotPasswordNotificationRouteParams;
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export function AuthNavigation() {
  return (
    <AuthStack.Navigator
      initialRouteName={SCREENS.LOGIN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name={SCREENS.LOGIN} component={LoginScreen} />
      <AuthStack.Screen name={SCREENS.REGISTER} component={RegisterScreen} />
      <AuthStack.Screen
        name={SCREENS.FORGOT_PASSWORD_NOTIFICATION}
        component={ForgotPasswordNotificationScreen}
      />
      <AuthStack.Screen
        name={SCREENS.VERIFICATION}
        component={VerificationScreen}
      />
      <AuthStack.Screen
        name={SCREENS.FORGOT_PASSWORD}
        component={ForgotPasswordScreen}
      />
    </AuthStack.Navigator>
  );
}
