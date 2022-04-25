import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
  headerTool: {
    flexDirection: "column",
    paddingVertical: ScreenUtils.scale(8),
    backgroundColor: Themes.colors.white,
  },
  headerToolContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: ScreenUtils.scale(16),
  },
  headerToolLeft: {
    flexDirection: "row",
    alignItems: "center",
    height: ScreenUtils.scale(36),
  },
  headerToolRight: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    height: ScreenUtils.scale(36),
  },
  searchViewInput: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: ScreenUtils.scale(30),
    paddingHorizontal: ScreenUtils.scale(16),
    borderRadius: ScreenUtils.scale(8),
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: Themes.colors.white,
  },
  searchInput: {
    ...Themes.font.medium,
    fontSize: 14,
    paddingHorizontal: 0,
    flex: 1,
    ...Platform.select({
      android: {
        paddingVertical: ScreenUtils.scale(-5),
      },
    }),
  },
  checkbox: {
    width: ScreenUtils.scale(16),
    height: ScreenUtils.scale(16),
    marginRight: ScreenUtils.scale(8),
  },
  toolLabel: {
    ...Themes.font.medium,
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "600",
    color: Themes.colors.textPrimary,
  },
  toolBtn: {
    width: ScreenUtils.scale(30),
    height: ScreenUtils.scale(30),
    justifyContent: "center",
    alignItems: "center",
  },
});
