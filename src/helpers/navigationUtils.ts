import { RootStackParamList } from "@navigation";
import {
  createNavigationContainerRef,
  ParamListBase,
} from "@react-navigation/core";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function navigate<T extends object>(name: string, params?: T) {
  if (navigationRef?.current) {
    navigationRef.current.navigate<any>(name, params);
  }
}

export function goBack() {
  if (navigationRef?.current?.canGoBack()) {
    navigationRef.current.goBack();
  }
}

export function createNavigation<ParamList extends ParamListBase>() {
  return Platform.OS === "android"
    ? createNativeStackNavigator<ParamList>()
    : createStackNavigator<ParamList>();
}
