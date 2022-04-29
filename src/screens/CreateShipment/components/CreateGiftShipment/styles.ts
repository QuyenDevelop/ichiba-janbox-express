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
    marginTop: ScreenUtils.scale(24),
  },
  title: {
    fontFamily: FontFamily.bold,
    fontSize: ScreenUtils.scale(12),
    color: Themes.colors.coolGray100,
  },
  chooseBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: ScreenUtils.scale(16),
  },
  textChoose: {
    flex: 1,
    fontFamily: FontFamily.regular,
    fontSize: ScreenUtils.scale(16),
  },
  iconArrRight1: {},
  iconArrRight: {},
  addressButton: {
    flexDirection: "row",
    alignItems: "center",
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
  addressNameText: {
    ...Themes.font.bold,
    fontSize: 16,
    color: Themes.colors.coolGray100,
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
    borderBottomColor: Themes.colors.collGray40,
  },
  iconLeft: {
    width: ScreenUtils.scale(48),
    height: ScreenUtils.scale(48),
    borderRadius: ScreenUtils.scale(25),
    backgroundColor: Themes.colors.colGray10,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    marginRight: ScreenUtils.scale(16),
  },
  txtAddressContent: {
    flex: 1,
  },
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
