import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: ScreenUtils.scale(32),
    paddingHorizontal: ScreenUtils.scale(20),
  },
  headerLeft: {
    display: "flex",
  },
  headerRight: {
    display: "flex",
    flexDirection: "row",
  },
  name: {
    ...Themes.font.bold,
    fontSize: 18,
    color: Themes.colors.textPrimary,
  },
  accountLevelWrapper: {
    display: "flex",
    flexDirection: "row",
    marginTop: ScreenUtils.scale(4),
  },
  accountLevel: {
    ...Themes.font.regular,
    fontSize: 14,
    color: Themes.colors.coolGray60,
  },
  benefitWrapper: {
    marginLeft: ScreenUtils.scale(4),
  },
  benefit: {
    ...Themes.font.regular,
    fontSize: 14,
    color: Themes.colors.primary,
  },
  accountLevelImage: {
    width: ScreenUtils.scale(14),
    height: ScreenUtils.scale(20),
    marginRight: ScreenUtils.scale(6),
  },
  button: {
    paddingHorizontal: ScreenUtils.scale(10),
  },
  badgeWrapper: {
    position: "absolute",
    top: ScreenUtils.isPad() ? -ScreenUtils.scale(5) : -ScreenUtils.scale(7),
    right: ScreenUtils.isPad() ? ScreenUtils.scale(4) : ScreenUtils.scale(0),
    minWidth: ScreenUtils.scale(12),
    backgroundColor: Themes.colors.brand60,
    height: ScreenUtils.isPad() ? ScreenUtils.scale(20) : ScreenUtils.scale(16),
    width: ScreenUtils.isPad() ? ScreenUtils.scale(20) : ScreenUtils.scale(16),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: ScreenUtils.scale(10),
  },
  badge: {
    ...Themes.font.medium,
    fontSize: ScreenUtils.isPad() ? 14 : 12,
    color: Themes.colors.white,
  },
});
