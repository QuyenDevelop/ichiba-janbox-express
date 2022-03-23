import {
  Dimensions,
  PixelRatio,
  Platform,
  PlatformIOSStatic,
  StatusBar,
} from "react-native";
import deviceInfoModule from "react-native-device-info";
const { width, height } = Dimensions.get("screen");
const lagerValue = width > height ? width : height;
const smallValue = width > height ? height : width;
const { width: WIDTH_SCREEN, height: HEIGHT_SCREEN } = Dimensions.get("screen");
export const isIphoneX = () => {
  const dimension = Dimensions.get("window");
  return (
    Platform.OS === "ios" &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimension.height === 780 ||
      dimension.width === 780 ||
      dimension.height === 812 ||
      dimension.width === 812 ||
      dimension.height === 844 ||
      dimension.width === 844 ||
      dimension.height === 896 ||
      dimension.width === 896 ||
      dimension.height === 926 ||
      dimension.width === 926)
  );
};

const standardLength = deviceInfoModule.isTablet() ? smallValue : lagerValue;
const offset =
  width > height
    ? 0
    : Platform.OS === "ios"
    ? 78
    : StatusBar.currentHeight || 0; // iPhone X style SafeAreaView size in portrait
const deviceHeight =
  isIphoneX() || Platform.OS === "android"
    ? standardLength - offset
    : standardLength;

// export const ScreenUtils = {
//   WIDTH: width,
//   HEIGHT: height,
//   scale(value: number) {
//     const heightPercent = (value * deviceHeight) / 667;
//     return PixelRatio.roundToNearestPixel(heightPercent);
//   },
//   isPad() {
//     if (Platform.OS === "ios") {
//       const platformIOS = Platform as PlatformIOSStatic;
//       return platformIOS.isPad;
//     }
//     return false;
//   },
// };

export const ScreenUtils = {
  isPad() {
    if (Platform.OS === "ios") {
      const platformIOS = Platform as PlatformIOSStatic;
      return platformIOS.isPad;
    }
    return false;
  },
  // calculatorWidth(width: number) {
  //   return PixelRatio.roundToNearestPixel((WIDTH_SCREEN * width) / 375);
  // },
  // calculatorHeight(height: number) {
  //   return PixelRatio.roundToNearestPixel((HEIGHT_SCREEN * height) / 812);
  // },
  getStatusBarHeight(skipAndroid: boolean = false) {
    const X_WIDTH = 375;
    const X_HEIGHT = 812;

    const XSMAX_WIDTH = 414;
    const XSMAX_HEIGHT = 896;

    let isIPhoneX = false;
    const { height, width } = Dimensions.get("window");
    const W_HEIGHT = height > width ? height : width;
    const W_WIDTH = height > width ? width : height;

    if (Platform.OS === "ios" && !Platform.isPad && !Platform.isTVOS) {
      isIPhoneX =
        (W_WIDTH === X_WIDTH && W_HEIGHT === X_HEIGHT) ||
        (W_WIDTH === XSMAX_WIDTH && W_HEIGHT === XSMAX_HEIGHT);
    }

    return Platform.select({
      ios: isIPhoneX ? 44 : 20,
      android: skipAndroid ? 0 : StatusBar.currentHeight,
      default: 0,
    });
  },
  WIDTH_SCREEN: WIDTH_SCREEN,
  HEIGHT_SCREEN: HEIGHT_SCREEN,

  scale(value: number) {
    const { height, width } = Dimensions.get("window");
    const standardLength = width > height ? width : height;
    const offset =
      width > height
        ? 0
        : Platform.OS === "ios"
        ? 78
        : StatusBar.currentHeight || 0; // iPhone X style SafeAreaView size in portrait

    const deviceHeight =
      isIphoneX() || Platform.OS === "android"
        ? standardLength - offset
        : standardLength;
    const heightPercent = (value * deviceHeight) / 667;
    return PixelRatio.roundToNearestPixel(heightPercent);
  },
};
