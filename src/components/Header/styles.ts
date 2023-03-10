import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: ScreenUtils.scale(16),
    paddingVertical: ScreenUtils.scale(10),
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    // paddingTop: ScreenUtils.calculatorWidth(2)
  },
  leftIconButton: {
    marginRight: ScreenUtils.scale(4),
    paddingRight: ScreenUtils.scale(6),
    paddingVertical: ScreenUtils.scale(8),
  },
  leftIcon: {
    alignSelf: "center",
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    // paddingTop: ScreenUtils.calculatorWidth(2)
  },
  rightIconButton: {
    marginLeft: ScreenUtils.scale(4),
    paddingLeft: ScreenUtils.scale(6),
    paddingVertical: ScreenUtils.scale(8),
  },
  rightIcon: {
    alignSelf: "center",
  },
  titleRightStyle: {
    fontSize: 12,
    ...Themes.font.medium,
    color: Themes.colors.primary,
  },
  titleCenter: {
    flex: 1,
    fontSize: 18,
    ...Themes.font.semiBold,
    alignSelf: "center",
    textAlign: "center",
    marginHorizontal: ScreenUtils.scale(4),
  },
  goBackContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  goBack: {
    ...Themes.font.medium,
    fontSize: 16,
    color: Themes.colors.primary,
    marginLeft: ScreenUtils.scale(10),
  },
  iconGoBack: {
    alignSelf: "center",
  },
  changeLanguageContainer: {
    backgroundColor: Themes.colors.colGray10,
    borderRadius: ScreenUtils.scale(20),
    paddingVertical: ScreenUtils.scale(12),
    paddingHorizontal: ScreenUtils.scale(11),
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
  },
  language: {
    ...Themes.font.medium,
    color: Themes.colors.coolGray60,
    fontSize: 14,
    marginLeft: ScreenUtils.scale(8),
    marginRight: ScreenUtils.scale(18),
  },
});
