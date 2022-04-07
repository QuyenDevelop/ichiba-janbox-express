import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  optionWrapper: {
    paddingVertical: ScreenUtils.scale(10),
    borderBottomWidth: 1,
    borderBottomColor: Themes.colors.colGray10,
  },
  buttonOption: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: ScreenUtils.scale(20),
  },
  swapperOptionItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  swapperOptionRightItem: {
    flexDirection: "row",
  },
  iconRight: {
    marginLeft: ScreenUtils.scale(16),
  },
  icons: {
    width: ScreenUtils.scale(20),
  },
  rightTitle: {
    ...Themes.font.regular,
    fontSize: 13,
    marginLeft: ScreenUtils.scale(8),
  },
  optionTitle: {
    color: Themes.colors.coolGray100,
    ...Themes.font.regular,
    fontSize: 14,
    marginLeft: ScreenUtils.scale(8),
  },
});
