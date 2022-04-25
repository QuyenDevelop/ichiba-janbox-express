import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.colors.black025,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    backgroundColor: Themes.colors.white,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: ScreenUtils.scale(280),
    borderRadius: 16,
    paddingHorizontal: ScreenUtils.scale(16),
    paddingVertical: ScreenUtils.scale(40),
  },
  withdrawBtn: {
    width: "100%",
  },
  successTitle: {
    ...Themes.font.medium,
    fontWeight: "700",
    fontSize: 16,
    lineHeight: ScreenUtils.scale(24),
    color: Themes.colors.coolGray100,
    marginTop: ScreenUtils.scale(20),
    textAlign: "center",
  },
  successContent: {
    ...Themes.font.medium,
    fontWeight: "400",
    fontSize: 12,
    lineHeight: ScreenUtils.scale(18),
    color: Themes.colors.coolGray100,
    textAlign: "center",
    marginBottom: ScreenUtils.scale(24),
    marginTop: ScreenUtils.scale(8),
  },
  successAmount: {
    ...Themes.font.medium,
    fontWeight: "700",
    fontSize: 12,
    lineHeight: ScreenUtils.scale(18),
    color: Themes.colors.coolGray100,
    marginBottom: ScreenUtils.scale(24),
  },
});
