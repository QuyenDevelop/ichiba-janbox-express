import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  childContainer: {
    width: ScreenUtils.scale(16),
    height: ScreenUtils.scale(16),
    borderColor: Themes.colors.collGray40,
    borderRadius: ScreenUtils.scale(2),
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    ...Themes.font.regular,
    fontSize: 14,
    color: Themes.colors.textPrimary,
    marginLeft: ScreenUtils.scale(8),
  },
  imageTitle: {
    marginLeft: ScreenUtils.scale(8),
  },
  hitSlop: {
    top: 20,
    bottom: 20,
    left: 20,
    right: 20,
  },
});
