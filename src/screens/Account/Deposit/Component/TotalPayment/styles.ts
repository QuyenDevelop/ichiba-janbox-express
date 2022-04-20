import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: StyleSheet.hairlineWidth,
    padding: ScreenUtils.scale(12),
    borderRadius: ScreenUtils.scale(8),
    borderColor: Themes.colors.info60,
    backgroundColor: Themes.colors.info10,
    marginTop: ScreenUtils.scale(16),
    marginLeft: ScreenUtils.scale(24),
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  total: {
    ...Themes.font.medium,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "500",
    marginLeft: ScreenUtils.scale(8),
  },
  totalValue: {
    ...Themes.font.currency,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "500",
    marginLeft: ScreenUtils.scale(8),
  },
});
