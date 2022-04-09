import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  optionWrapper: {
    paddingVertical: ScreenUtils.scale(8),
    borderBottomWidth: 1,
    borderBottomColor: Themes.colors.colGray10,
  },
  buttonOption: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: ScreenUtils.scale(18),
  },
  swapperOptionItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  swapperOptionRightItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  iconRight: {
    width: ScreenUtils.scale(40),
    height: ScreenUtils.scale(40),
    alignItems: "center",
    justifyContent: "center",
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
  optionSubTitle: {
    color: Themes.colors.coolGray100,
    ...Themes.font.regular,
    fontSize: 13,
    marginLeft: ScreenUtils.scale(8),
  },
});
