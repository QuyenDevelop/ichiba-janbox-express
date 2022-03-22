import { Themes } from "@themes";
import { StyleSheet } from "react-native";
import { ScreenUtils } from "./../../helpers/screenUtils";
import { FontFamily } from "./../../themes/theme";
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  inputView: {
    flexDirection: "row",
    borderWidth: StyleSheet.hairlineWidth,
    position: "absolute",
    top: 100,
    width: "80%",
    alignSelf: "center",
    height: ScreenUtils.scale(30),
    paddingHorizontal: ScreenUtils.scale(8),
    borderColor: Themes.colors.collGray40,
    borderRadius: ScreenUtils.scale(5),
    backgroundColor: Themes.colors.white,
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
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
  userName: {
    color: Themes.colors.white,
    fontFamily: FontFamily.bold,
    alignSelf: "center",
    marginBottom: ScreenUtils.scale(10),
  },
});
