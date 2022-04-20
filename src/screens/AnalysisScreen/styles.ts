import { Themes } from "@themes";
import { StyleSheet } from "react-native";
import { ScreenUtils } from "@helpers";
import { FontFamily } from "@themes";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.colors.white,
  },
  itemContainer: {
    flexDirection: "row",
    marginHorizontal: ScreenUtils.scale(16),
    marginVertical: ScreenUtils.scale(8),
    alignItems: "center",
  },
  txtItemTitle: {
    flex: 1,
    marginHorizontal: ScreenUtils.scale(8),
    fontSize: ScreenUtils.scale(14),
    color: Themes.colors.coolGray80,
  },
  frameInfo: {
    flexDirection: "row",
    marginTop: ScreenUtils.scale(38),
  },
  containerChart: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Themes.colors.whiteF6F,
    width: ScreenUtils.WIDTH_SCREEN / 2,
    marginLeft: ScreenUtils.scale(16),
    borderRadius: ScreenUtils.WIDTH_SCREEN / 2 - 8,
  },
  gauge: {
    position: "absolute",
    width: 100,
    height: 160,
    alignItems: "center",
    justifyContent: "center",
  },
  gaugeText: {
    backgroundColor: "transparent",
    color: Themes.colors.coolGray100,
    fontSize: 18,
    fontFamily: FontFamily.medium,
  },
  gaugeText2: {
    backgroundColor: "transparent",
    color: Themes.colors.coolGray60,
    fontSize: 14,
    fontFamily: FontFamily.regular,
  },
  contentLeft: {
    paddingVertical: ScreenUtils.scale(15),
    justifyContent: "center",
    alignItems: "center",
  },
  frame20530: {
    borderWidth: 1,
    flex: 1,
    marginHorizontal: ScreenUtils.scale(10),
    flexDirection: "row",

    width: ScreenUtils.WIDTH_SCREEN / 2 - ScreenUtils.scale(38),
    borderRadius: ScreenUtils.scale(12),
  },
  frame20529: {
    borderWidth: 1,
    flex: 1,
    marginVertical: ScreenUtils.scale(5),
    marginHorizontal: ScreenUtils.scale(10),
    flexDirection: "row",
    width: ScreenUtils.WIDTH_SCREEN / 2 - ScreenUtils.scale(38),
    borderRadius: ScreenUtils.scale(12),
  },
  rectangle68: {
    flex: 0.1,
    backgroundColor: Themes.colors.blue006,
    margin: 8,
    borderRadius: 10,
  },
  rectangle682: {
    flex: 0.1,
    backgroundColor: Themes.colors.green3ED,
    margin: 8,
    borderRadius: 10,
  },
  rectangle683: {
    flex: 0.1,
    backgroundColor: Themes.colors.yellowFFC,
    margin: 8,
    borderRadius: 10,
  },
  frameContainer: {
    flex: 0.9,
    flexDirection: "column",
    justifyContent: "center",
  },
  titleFrame: {
    fontSize: ScreenUtils.scale(10),
    fontFamily: FontFamily.regular,
    color: Themes.colors.coolGray60,
  },
  valueFrame: {
    fontFamily: FontFamily.medium,
    fontSize: ScreenUtils.scale(14),
    color: Themes.colors.black,
    fontWeight: "500",
  },
});
