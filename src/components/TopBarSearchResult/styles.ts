import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  hederContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    backgroundColor: Themes.colors.white,
    paddingHorizontal: ScreenUtils.scale(16),
    // marginTop: ScreenUtils.scale(10),
  },
  backButton: {
    marginRight: ScreenUtils.scale(16),
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  searchValueStyle: {
    ...Themes.font.regular,
    fontSize: 18,
    color: Themes.colors.black07,
    fontWeight: "700",
    marginLeft: ScreenUtils.scale(12),
  },
  rightContainer: {
    flexDirection: "row",
  },
  rightButton: {
    width: ScreenUtils.scale(32),
    height: ScreenUtils.scale(40),
    justifyContent: "center",
    alignItems: "center",
  },
  hitSlop: {
    top: 20,
    bottom: 20,
    left: 20,
    right: 20,
  },
  toolBtn: {
    width: ScreenUtils.scale(32),
    height: ScreenUtils.scale(40),
    justifyContent: "center",
    alignItems: "center",
  },
});
