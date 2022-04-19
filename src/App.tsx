/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { DropdownMessageHolder, NavigationUtils } from "@helpers";
import { RootNavigator } from "@navigation";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import DropdownAlert from "react-native-dropdownalert";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
  return (
    <SafeAreaProvider>
      <View style={styles.content}>
        <StatusBar />
        <NavigationContainer ref={NavigationUtils.navigationRef}>
          <RootNavigator />
        </NavigationContainer>
      </View>
      <DropdownAlert
        ref={ref => {
          if (ref) {
            DropdownMessageHolder.setDropDown(ref);
          }
        }}
        closeInterval={2000}
        updateStatusBar={Platform.OS === "ios"}
      />
    </SafeAreaProvider>
  );
};

const AwesomeApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});

export default AwesomeApp;
