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
  },
  textChoose: {
    flex: 0.9,
    fontFamily: FontFamily.regular,
    fontSize: ScreenUtils.scale(16),
    paddingHorizontal: ScreenUtils.scale(16),
    marginBottom: ScreenUtils.scale(7),
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
