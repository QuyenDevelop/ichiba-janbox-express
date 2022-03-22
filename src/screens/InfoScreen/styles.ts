import { ScreenUtils } from "@helpers";
import { FontFamily, Themes } from "@themes";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: ScreenUtils.scale(10),
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: ScreenUtils.scale(5),
    paddingVertical: ScreenUtils.scale(8),
    paddingHorizontal: ScreenUtils.scale(8),
    borderColor: Themes.colors.collGray40,
    minWidth: 150,
  },
  applyBtn: {
    backgroundColor: Themes.colors.primary,
    paddingVertical: ScreenUtils.scale(10),
    paddingHorizontal: ScreenUtils.scale(20),
    borderRadius: ScreenUtils.scale(5),
    justifyContent: "center",
    alignItems: "center",
  },
  applyBtnText: {
    color: Themes.colors.white,
    fontFamily: FontFamily.bold,
  },
});
