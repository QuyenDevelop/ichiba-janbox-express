import { RootStackParamList } from "@navigation";
import { createNavigationContainerRef } from "@react-navigation/core";

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
