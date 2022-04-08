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
  input: {
    marginTop: ScreenUtils.scale(32),
  },
});
