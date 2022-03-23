import { ScreenUtils } from "@helpers";
import { FontFamily, Themes } from "@themes";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingView: {
    position: "absolute",
    bottom: ScreenUtils.scale(70),
    justifyContent: "center",
    alignSelf: "center",
    width: ScreenUtils.scale(120),
    height: ScreenUtils.scale(120),
  },
  title: {
    fontFamily: FontFamily.bold,
    fontSize: 32,
    fontWeight: "bold",
    fontStyle: "italic",
    color: Themes.colors.warningMain,
  },
});
