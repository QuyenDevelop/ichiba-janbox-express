import { Themes } from "@themes";
import { StyleSheet } from "react-native";
import { ScreenUtils } from "./../../helpers/screenUtils";
import { FontFamily } from "./../../themes/theme";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    paddingHorizontal: ScreenUtils.scale(16),
  },
  settingBtn: {
    backgroundColor: Themes.colors.bP60,
    marginBottom: ScreenUtils.scale(20),
    marginHorizontal: ScreenUtils.scale(50),
    paddingVertical: ScreenUtils.scale(10),
    borderRadius: ScreenUtils.scale(5),
    justifyContent: "center",
    alignItems: "center",
  },
  settingBtnText: {
    color: Themes.colors.white,
    fontFamily: FontFamily.bold,
  },
  imgStyle: {
    resizeMode: "cover",
    width: "100%",
    borderRadius: ScreenUtils.scale(12),
    marginBottom: ScreenUtils.scale(12),
  },
  containerItems: {
    marginBottom: ScreenUtils.scale(15),
    backgroundColor: Themes.colors.white,
    borderRadius: ScreenUtils.scale(12),
    borderColor: "#ddd",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: ScreenUtils.scale(12),
    elevation: 3,
  },
  title: {
    fontSize: 14,
    lineHeight: 14,
    fontFamily: FontFamily.medium,
    color: Themes.colors.coolGray100,
    marginVertical: ScreenUtils.scale(8),
    marginHorizontal: ScreenUtils.scale(16),
  },
  detail: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: FontFamily.regular,
    color: Themes.colors.coolGray60,
    marginHorizontal: ScreenUtils.scale(16),
    marginBottom: ScreenUtils.scale(12),
  },
});
