import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.colors.white,
  },
  childContainer: {
    flex: 1,
    paddingHorizontal: ScreenUtils.scale(20),
  },
  noProfile: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  noLogin: {
    ...Themes.font.bold,
    fontSize: 18,
    color: Themes.colors.textPrimary,
    marginBottom: ScreenUtils.scale(20),
  },
});
