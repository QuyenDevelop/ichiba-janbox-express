import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  balanceContainer: {
    marginTop: ScreenUtils.scale(16),
    paddingHorizontal: ScreenUtils.scale(16),
  },
  balanceWrapper: {
    borderRadius: 16,
    backgroundColor: Themes.colors.colGray10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: ScreenUtils.scale(10),
  },
  walletItem: {
    paddingLeft: ScreenUtils.scale(12),
    borderRightWidth: 1,
    borderRightColor: Themes.colors.colGray20,
    flex: 1,
  },
  title: {
    ...Themes.font.regular,
    fontSize: 12,
    color: Themes.colors.coolGray60,
  },
  balanceValue: {
    marginTop: ScreenUtils.scale(4),
    ...Themes.font.currency,
    fontSize: 16,
    color: Themes.colors.textPrimary,
  },
  available: {
    display: "flex",
    paddingRight: ScreenUtils.scale(16),
    borderRightWidth: 1,
    borderRightColor: Themes.colors.colGray20,
  },
  hold: {
    paddingLeft: ScreenUtils.scale(16),
  },
  exchange: {
    marginTop: ScreenUtils.scale(12),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  exchangeTitle: {
    fontSize: 12,
    ...Themes.font.bold,
    color: Themes.colors.coolGray60,
  },
  exchangeValue: {
    ...Themes.font.regular,
    fontSize: 12,
    color: Themes.colors.coolGray100,
    marginLeft: ScreenUtils.scale(4),
  },
  balanceNote: {
    ...Themes.font.medium,
    fontSize: 13,
    lineHeight: 20,
    color: Themes.colors.coolGray60,
    fontWeight: "400",
    marginTop: ScreenUtils.scale(4),
  },
  balanceView: {
    flexDirection: "row",
    alignItems: "center",
  },
  balanceInfo: {
    flex: 1,
  },
  balanceTitle: {
    ...Themes.font.medium,
    fontSize: 12,
    lineHeight: 18,
    color: Themes.colors.coolGray60,
    fontWeight: "500",
    marginRight: ScreenUtils.scale(4),
  },
  balanceContent: {
    ...Themes.font.medium,
    fontSize: 16,
    lineHeight: 24,
    color: Themes.colors.coolGray100,
    fontWeight: "700",
  },
  hView: {
    flexDirection: "row",
    alignItems: "center",
  },
});
