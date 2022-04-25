import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  route: {
    ...Themes.font.medium,
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "400",
    color: Themes.colors.coolGray60,
  },
  triangleCorner: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderRightWidth: ScreenUtils.scale(20),
    borderTopWidth: ScreenUtils.scale(20),
    borderRightColor: "transparent",
    borderTopColor: Themes.colors.info60,
    transform: [{ rotate: "90deg" }],
    position: "absolute",
    top: 0,
    right: 0,
    borderTopLeftRadius: ScreenUtils.scale(8),
  },
  iconCheck: {
    position: "absolute",
    top: 2,
    right: 2,
  },
  listRoute: {
    paddingHorizontal: ScreenUtils.scale(16),
    justifyContent: "space-between",
  },
  filterButton: {
    width: (ScreenUtils.WIDTH_SCREEN - ScreenUtils.scale(40)) / 2,
    backgroundColor: Themes.colors.colGray10,
    paddingVertical: ScreenUtils.scale(8),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: ScreenUtils.scale(8),
    borderWidth: StyleSheet.hairlineWidth,
    marginBottom: ScreenUtils.scale(12),
  },
  filterModal: { width: Dimensions.get("window").width, flex: 1 },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: ScreenUtils.scale(16),
    borderBottomWidth: 1,
    borderBottomColor: Themes.colors.colGray20,
  },
  headerButton: {
    height: ScreenUtils.scale(40),
    justifyContent: "center",
    alignItems: "center",
  },
  textHeader: {
    ...Themes.font.bold,
    color: Themes.colors.textPrimary,
    fontSize: 18,
  },
  textHeaderRight: {
    ...Themes.font.medium,
    color: Themes.colors.coolGray100,
    fontSize: 14,
  },
  headerFilter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: ScreenUtils.scale(16),
  },
  rangeDate: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: ScreenUtils.scale(16),
  },
  footer: {
    flexDirection: "column",
    alignItems: "stretch",
    marginVertical: ScreenUtils.scale(16),
    borderTopWidth: 1,
    borderTopColor: Themes.colors.colGray20,
    paddingTop: ScreenUtils.scale(12),
  },
  applyBtn: {
    backgroundColor: Themes.colors.primary,
    marginHorizontal: ScreenUtils.scale(16),
    height: ScreenUtils.scale(48),
    borderRadius: ScreenUtils.scale(24),
    justifyContent: "center",
    alignItems: "center",
  },
  applyTextBtn: {
    ...Themes.font.medium,
    fontSize: 14,
    fontWeight: "600",
    color: Themes.colors.white,
  },
});
