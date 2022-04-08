import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: ScreenUtils.scale(16),
    height: ScreenUtils.scale(16),
    borderRadius: ScreenUtils.scale(8),
    justifyContent: "center",
    alignItems: "center",
  },
  check: {
    borderWidth: 2,
    borderColor: Themes.colors.blueDf8,
  },
  uncheck: {
    borderWidth: 2,
    borderColor: Themes.colors.collGray40,
  },
  circleCheckedContainer: {
    width: ScreenUtils.scale(8),
    height: ScreenUtils.scale(8),
    borderRadius: ScreenUtils.scale(4),
    backgroundColor: Themes.colors.blueDf8,
  },
});
