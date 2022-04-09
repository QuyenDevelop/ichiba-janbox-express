import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: ScreenUtils.scale(8),
    paddingVertical: ScreenUtils.scale(8),
  },
  headerLeft: {
    display: "flex",
    flexDirection: "row",
  },
  avatar: {
    width: ScreenUtils.scale(50),
    height: ScreenUtils.scale(50),
    overflow: "hidden",
  },
  image: {
    borderRadius: 25,
    width: ScreenUtils.scale(50),
    height: ScreenUtils.scale(50),
  },
  headerLeftContent: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  headerRight: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  notAccept: {
    borderRadius: ScreenUtils.scale(5),
    height: ScreenUtils.scale(20),
    paddingHorizontal: ScreenUtils.scale(2),
    backgroundColor: Themes.colors.yellow279,
  },
  icon: {
    width: ScreenUtils.scale(40),
    height: ScreenUtils.scale(40),
    justifyContent: "center",
    alignItems: "center",
  },
  notAcceptText: {
    ...Themes.font.regular,
    fontSize: 12,
    lineHeight: 20,
    color: Themes.colors.warningMain,
  },
  name: {
    ...Themes.font.medium,
    fontSize: 16,
    color: Themes.colors.coolGray100,
  },
  phoneNumber: {
    ...Themes.font.regular,
    fontSize: 14,
    color: Themes.colors.coolGray60,
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
