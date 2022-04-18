import { Themes } from "@themes";
import { StyleSheet } from "react-native";
import { ScreenUtils } from "./../../helpers/screenUtils";
import { FontFamily } from "./../../themes/theme";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.colors.white,
  },
  containerStyle: {
    backgroundColor: Themes.colors.white,
    borderBottomLeftRadius: ScreenUtils.scale(40),
    borderBottomRightRadius: ScreenUtils.scale(40),
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
  contentContainer: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: ScreenUtils.scale(16),
  },
  childContainer: {
    position: "absolute",
    flexDirection: "row",
    // top: ScreenUtils.scale(-40),
    bottom: ScreenUtils.scale(-10),
    left: ScreenUtils.scale(16),
    backgroundColor: Themes.colors.white,
    paddingVertical: ScreenUtils.scale(8),
    overflow: "hidden",
    borderRadius: ScreenUtils.scale(8),
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 16,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  pointContainer: {
    width: ScreenUtils.WIDTH_SCREEN / 2 - 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icons: {
    width: ScreenUtils.scale(40),
    height: ScreenUtils.scale(40),
    justifyContent: "center",
    alignItems: "center",
  },
  titleContent: {},
  title: {
    ...Themes.font.regular,
    fontSize: 12,
    color: Themes.colors.coolGray60,
  },
  subTitle: {
    ...Themes.font.medium,
    fontSize: 14,
    color: Themes.colors.coolGray100,
  },
  walletContainer: {
    width: ScreenUtils.WIDTH_SCREEN / 2 - 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heightSeparator: {
    width: ScreenUtils.scale(2),
    height: ScreenUtils.scale(30),
    marginVertical: ScreenUtils.scale(12),
    backgroundColor: Themes.colors.colGray20,
  },
});
