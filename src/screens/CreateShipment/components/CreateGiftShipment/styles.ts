import { ScreenUtils } from "@helpers";
import { FontFamily, Themes } from "@themes";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    paddingHorizontal: ScreenUtils.scale(16),
    backgroundColor: Themes.colors.white,
  },
  chooseContainer: {
    flexDirection: "column",
    alignItemsL: "center",
    marginTop: ScreenUtils.scale(32),
  },
  title: {
    fontFamily: FontFamily.bold,
    fontSize: ScreenUtils.scale(12),
    color: Themes.colors.coolGray100,
  },
  chooseBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: ScreenUtils.scale(4),
    paddingHorizontal: ScreenUtils.scale(16),
  },
  addressButton: {
    paddingHorizontal: ScreenUtils.scale(16),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: ScreenUtils.scale(10),
    borderRadius: ScreenUtils.scale(8),
    borderStyle: "dashed",
    borderColor: Themes.colors.coolGray30,
    borderWidth: ScreenUtils.scale(1),
    marginTop: ScreenUtils.scale(8),
  },
  addressText: {
    ...Themes.font.regular,
    fontSize: 14,
    color: Themes.colors.coolGray100,
  },
  addressContent: {
    ...Themes.font.regular,
    fontSize: 12,
    color: Themes.colors.coolGray60,
  },
  addressIcon: {
    width: ScreenUtils.scale(24),
    height: ScreenUtils.scale(24),
    marginLeft: ScreenUtils.scale(8),
    justifyContent: "center",
    alignItems: "center",
  },
  textChoose: {
    flex: 0.9,
    fontFamily: FontFamily.regular,
    fontSize: ScreenUtils.scale(16),
  },
  iconTouch: {
    width: ScreenUtils.scale(16),
    height: ScreenUtils.scale(16),
    alignItems: "center",
    justifyContent: "center",
    marginLeft: ScreenUtils.scale(8),
  },
  iconArrRight: {
    fontFamily: FontFamily.bold,
    color: Themes.colors.coolGray100,
  },
  line: {
    borderBottomWidth: 1,
    marginTop: ScreenUtils.scale(4),
    borderBottomColor: Themes.colors.collGray40,
  },
  chooseBtnSender: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: ScreenUtils.scale(10),
    marginTop: ScreenUtils.scale(5),
    borderRadius: ScreenUtils.scale(8),
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: Themes.colors.collGray40,
  },
});
