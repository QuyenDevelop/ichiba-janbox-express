import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "stretch",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  contentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: ScreenUtils.scale(44),
    marginBottom: ScreenUtils.scale(6),
  },
  leftHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: ScreenUtils.scale(16),
  },
  rightHeader: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: ScreenUtils.scale(16),
  },
  rightButton: {
    width: ScreenUtils.scale(40),
    height: ScreenUtils.scale(40),
    justifyContent: "center",
    alignItems: "center",
  },
  contentFilter: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Themes.colors.white,
    height: ScreenUtils.scale(40),
    borderRadius: ScreenUtils.scale(8),
    paddingHorizontal: ScreenUtils.scale(12),
  },
  placeholder: {
    flex: 1,
    marginHorizontal: ScreenUtils.scale(8),
    ...Themes.font.medium,
    fontSize: 13,
    fontWeight: "400",
    color: Themes.colors.collGray40,
  },
  badgeWrapper: {
    position: "absolute",
    backgroundColor: Themes.colors.brand60,
    justifyContent: "center",
    alignItems: "center",
    ...(ScreenUtils.isPad()
      ? {
          top: 12,
          right: 12,
          height: 20,
          minWidth: 20,
          borderRadius: 10,
        }
      : {
          top: 0,
          right: 0,
          height: ScreenUtils.scale(12),
          minWidth: ScreenUtils.scale(12),
          borderRadius: ScreenUtils.scale(6),
        }),
  },
  badge: {
    ...Themes.font.medium,
    ...(ScreenUtils.isPad() ? { fontSize: 10 } : { fontSize: 8 }),
    color: Themes.colors.white,
  },
  containerHomeTop: {
    flexDirection: "column",
    alignItems: "stretch",
    // height: ScreenUtils.scale(44),
    justifyContent: "center",
    paddingHorizontal: ScreenUtils.scale(16),
    paddingVertical: ScreenUtils.scale(8),
  },
  topBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: ScreenUtils.scale(16),
    paddingVertical: ScreenUtils.scale(16),
  },
  menu: {
    marginRight: ScreenUtils.scale(16),
  },
  button: {
    // paddingHorizontal: ScreenUtils.calculatorWidth(18),
  },
  hitSlop: {
    top: 20,
    bottom: 20,
    left: 20,
    right: 20,
  },
  inputSearch: {
    flexDirection: "row",
    height: ScreenUtils.scale(40),
    marginLeft: ScreenUtils.scale(16),
    borderRadius: ScreenUtils.scale(8),
    width: ScreenUtils.WIDTH_SCREEN - 76,
    backgroundColor: Themes.colors.white,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: ScreenUtils.scale(12),
    paddingVertical: ScreenUtils.scale(8),
  },
  textInputButton: {},
  searchInput: {
    flex: 1,
    paddingHorizontal: ScreenUtils.scale(8),
    paddingVertical: 0,
  },
  hiLabel: {
    ...Themes.font.medium,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "700",
    color: Themes.colors.white,
  },
  buyToday: {
    ...Themes.font.medium,
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "400",
    color: Themes.colors.collGray40,
  },
  supportBtn: {
    width: ScreenUtils.scale(40),
    height: ScreenUtils.scale(40),
    backgroundColor: Themes.colors.colGray10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: ScreenUtils.scale(20),
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchButton: {
    width: ScreenUtils.scale(30),
    height: ScreenUtils.scale(30),
    marginLeft: ScreenUtils.scale(10),
    alignItems: "center",
    justifyContent: "center",
  },
});
