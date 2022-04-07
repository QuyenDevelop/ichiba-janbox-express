import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.colors.white,
  },
  accountFunction: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: ScreenUtils.scale(17),
    paddingHorizontal: ScreenUtils.scale(20),
    borderBottomWidth: 1,
    borderBottomColor: Themes.colors.colGray10,
  },
  normalText: {
    ...Themes.font.medium,
    fontSize: 14,
    color: Themes.colors.coolGray100,
    lineHeight: ScreenUtils.scale(21),
  },
});
