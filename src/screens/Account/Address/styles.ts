import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.colors.white,
  },
  childContainer: {
    flexDirection: "column",
  },
  item: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: ScreenUtils.scale(18),
    paddingHorizontal: ScreenUtils.scale(20),
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    ...Themes.font.semiBold,
    color: Themes.colors.coolGray100,
    fontSize: 14,
  },
  default: {
    ...Themes.font.semiBold,
    color: Themes.colors.success60,
    fontSize: 12,
    marginLeft: ScreenUtils.scale(4),
  },
  content: {
    color: Themes.colors.coolGray,
    fontSize: 12,
    ...Themes.font.regular,
    marginTop: ScreenUtils.scale(4),
    lineHeight: 18,
  },
  phone: {
    fontSize: 14,
    ...Themes.font.regular,
    color: Themes.colors.coolGray100,
  },
  setDefault: {
    color: Themes.colors.primary,
    ...Themes.font.semiBold,
    fontSize: 12,
    marginLeft: ScreenUtils.scale(8),
  },
  add: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: ScreenUtils.scale(24),
    borderWidth: 1,
    borderColor: Themes.colors.coolGray30,
    borderStyle: "dashed",
    marginHorizontal: ScreenUtils.scale(20),
    paddingVertical: ScreenUtils.scale(13),
    marginTop: ScreenUtils.scale(32),
    marginBottom: ScreenUtils.scale(80),
  },
  addText: {
    fontSize: 14,
    color: Themes.colors.coolGray60,
    ...Themes.font.semiBold,
    marginLeft: ScreenUtils.scale(8),
  },
});
