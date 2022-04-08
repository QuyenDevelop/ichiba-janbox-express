import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    paddingVertical: ScreenUtils.scale(16),
    paddingHorizontal: ScreenUtils.scale(20),
    borderBottomWidth: 1,
    borderBottomColor: Themes.colors.colGray10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    ...Themes.font.regular,
    fontSize: 16,
    color: Themes.colors.coolGray100,
    flex: 1,
  },
  input: {
    paddingHorizontal: ScreenUtils.scale(20),
  },
});
