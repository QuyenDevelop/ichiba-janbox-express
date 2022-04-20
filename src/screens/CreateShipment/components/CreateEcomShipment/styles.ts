import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    paddingHorizontal: ScreenUtils.scale(16),
    backgroundColor: Themes.colors.white,
    marginTop: ScreenUtils.scale(30),
  },
});
