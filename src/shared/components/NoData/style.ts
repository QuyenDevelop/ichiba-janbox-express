import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  noDataContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  imageNoResult: {
    width: ScreenUtils.scale(160),
    height: ScreenUtils.scale(143),
  },
  imgNoGift: {
    width: ScreenUtils.scale(219),
    height: ScreenUtils.scale(219),
  },
  noResultTitle: {
    marginTop: ScreenUtils.scale(32),
    ...Themes.font.bold,
    fontSize: 14,
    textAlign: "center",
  },
  translate: {
    fontSize: 13,
    ...Themes.font.bold,
    color: Themes.colors.coolGray,
    marginHorizontal: ScreenUtils.scale(6),
  },
  textNodata: {
    fontSize: 14,
    color: Themes.colors.coolGray60,
    ...Themes.font.regular,
    textAlign: "center",
    marginTop: ScreenUtils.scale(12),
  },
  flexRow: { flexDirection: "row" },
  touchDetail: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Themes.colors.primary,
    borderRadius: ScreenUtils.scale(8),
    overflow: "hidden",
    marginTop: ScreenUtils.scale(32),
    paddingHorizontal: ScreenUtils.scale(42),
    paddingVertical: ScreenUtils.scale(10),
  },
  packageDetailText: {
    fontSize: 14,
    color: Themes.colors.white,
    ...Themes.font.medium,
    textAlign: "center",
  },
  arrowIcon: {
    marginLeft: ScreenUtils.scale(8),
  },
});
