import { Header } from "@components";
import { CONSTANT, SCREENS } from "@configs";
import { useLoading, useStatusBar } from "@hooks";
import { DepositStackParamList } from "@navigation";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { translate } from "@shared";
import React, { FunctionComponent, useEffect } from "react";
import { DeviceEventEmitter, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import WebView from "react-native-webview";
import {
  OnShouldStartLoadWithRequest,
  ShouldStartLoadRequest,
} from "react-native-webview/lib/WebViewTypes";
import styles from "./styles";

type NavigationRoute = RouteProp<
  DepositStackParamList,
  SCREENS.DEPOSIT_WEBVIEW_SCREEN
>;

export interface DepositWebviewRouteParams {
  redirectUrl: string;
}

export const DepositWebViewScreen: FunctionComponent = () => {
  useStatusBar("dark-content");
  const insets = useSafeAreaInsets();
  const route = useRoute<NavigationRoute>();
  const navigation = useNavigation<StackNavigationProp<any>>();
  const { redirectUrl } = route?.params;
  const { showLoading, hideLoading } = useLoading();
  const handleRequest: OnShouldStartLoadWithRequest = (
    request: ShouldStartLoadRequest,
  ) => {
    if (request.url.includes(CONSTANT.PAYMENT_RETURN_URL.SUCCESS)) {
      DeviceEventEmitter.emit(
        CONSTANT.RELOAD_ACTION.RELOAD_WALLET,
        translate("label.depositSuccess"),
      );
      navigation.navigate(SCREENS.ACCOUNT_STACK, {
        screen: SCREENS.EZ_WALLET_SCREEN,
      });
    }
    return true;
  };

  useEffect(() => {
    showLoading();
  }, [showLoading]);

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Header
        title={translate("label.deposit")}
        iconLeftName={["ic_arrow_left"]}
        iconLeftOnPress={[() => navigation.goBack()]}
        isCenterTitle
      />
      <View style={styles.childContainer}>
        <WebView
          automaticallyAdjustContentInsets={false}
          androidHardwareAccelerationDisabled
          style={{ flex: 1 }}
          source={{ uri: redirectUrl }}
          onLoadEnd={() => hideLoading()}
          startInLoadingState={false}
          onShouldStartLoadWithRequest={handleRequest}
        />
      </View>
    </View>
  );
};
