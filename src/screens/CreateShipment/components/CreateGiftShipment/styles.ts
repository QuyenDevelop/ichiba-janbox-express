import { ScreenUtils } from "@helpers";
import { FontFamily, Themes } from "@themes";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    paddingHorizontal: ScreenUtils.scale(16),
    backgroundColor: Themes.colors.white,
    marginTop: ScreenUtils.scale(30),
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
    marginTop: ScreenUtils.scale(11),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textChoose: {
    flex: 1,
    fontFamily: FontFamily.regular,
    fontSize: ScreenUtils.scale(16),
    paddingLeft: ScreenUtils.scale(16),
  },
  iconArrRight1: {
    fontFamily: FontFamily.bold,
    color: Themes.colors.coolGray100,
  },
  iconArrRight: {
    fontFamily: FontFamily.bold,
    color: Themes.colors.coolGray100,
    paddingRight: ScreenUtils.scale(16),
  },
  addressButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: ScreenUtils.scale(16),
    marginTop: ScreenUtils.scale(8),
    borderRadius: ScreenUtils.scale(8),
    borderStyle: "dashed",
    borderColor: Themes.colors.coolGray30,
    borderWidth: ScreenUtils.scale(1),
  },
  addressText: {
    ...Themes.font.regular,
    fontSize: 14,
    color: Themes.colors.coolGray100,
    marginBottom: 4,
  },
  addressContent: {
    ...Themes.font.regular,
    fontSize: 12,
    color: Themes.colors.coolGray60,
  },
  iconTouch: {
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    borderBottomWidth: 1,
    marginTop: ScreenUtils.scale(7),
    borderBottomColor: Themes.colors.collGray40,
  },
  txtAddressContent: { marginRight: ScreenUtils.scale(59) },
  chooseBtnSender: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: ScreenUtils.scale(10),
    marginTop: ScreenUtils.scale(5),
    borderRadius: ScreenUtils.scale(8),
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: Themes.colors.collGray40,
  },
});
