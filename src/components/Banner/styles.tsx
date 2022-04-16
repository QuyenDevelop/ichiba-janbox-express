import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { Dimensions, StyleSheet } from "react-native";
const { width } = Dimensions.get("screen");
export default StyleSheet.create({
  bannerContainer: {
    width: "100%",
    // height: ScreenUtils.calculatorHeight(120),
    // marginTop: ScreenUtils.calculatorHeight(18),
  },
  banner: {
    width: width,
  },
  paginationContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
  },
  scroll: {
    width: "100%",
    // height: ScreenUtils.calculatorHeight(120),
  },
  paginationText: {
    color: Themes.colors.primary,
    margin: 3,
  },
  paginationActiveText: {
    color: "#fff",
    margin: 3,
  },
  paginationItemContainer: {
    width: ScreenUtils.scale(12),
    height: ScreenUtils.scale(2),
    backgroundColor: Themes.colors.white,
    marginBottom: ScreenUtils.scale(8),
    marginRight: ScreenUtils.scale(4),
  },
  paginationContainerActive: {
    width: ScreenUtils.scale(12),
    height: ScreenUtils.scale(2),
    backgroundColor: Themes.colors.primary,
    marginBottom: ScreenUtils.scale(8),
    marginRight: ScreenUtils.scale(4),
  },
});
