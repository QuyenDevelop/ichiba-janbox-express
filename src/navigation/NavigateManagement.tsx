import { SCREENS } from "@configs";
import { NavigationUtils } from "@helpers";

export const goToLogin = () => {
  NavigationUtils.navigate(SCREENS.AUTH_STACK, {
    screen: SCREENS.LOGIN,
  });
};

export const goBack = () => {
  NavigationUtils.goBack();
};
