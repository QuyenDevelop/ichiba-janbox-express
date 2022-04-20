import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.colors.white,
  },
  childContainer: {
    flex: 1,
    flexDirection: "column",
  },
  separator: {
    backgroundColor: Themes.colors.colGray20,
    marginVertical: ScreenUtils.scale(24),
    width: ScreenUtils.WIDTH_SCREEN - ScreenUtils.scale(32),
  },
  transactionHistoryLabel: {
    ...Themes.font.bold,
    fontSize: 16,
    color: Themes.colors.black,
  },
  searchView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: ScreenUtils.scale(16),
    paddingHorizontal: ScreenUtils.scale(16),
    backgroundColor: Themes.colors.white,
  },
  filter: {
    ...Themes.font.medium,
    fontSize: 14,
    color: Themes.colors.primary,
  },
  separatorItem: {
    height: ScreenUtils.scale(1),
    backgroundColor: Themes.colors.colGray20,
    marginVertical: ScreenUtils.scale(24),
  },
  searchButton: {
    width: ScreenUtils.scale(40),
    height: ScreenUtils.scale(40),
    justifyContent: "center",
    alignItems: "center",
  },
  indicator: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabBar: {
    backgroundColor: Themes.colors.white,
  },
  tabBarLabel: {
    ...Themes.font.medium,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "500",
  },
  indicatorStyle: {
    backgroundColor: Themes.colors.primary,
    height: ScreenUtils.scale(4),
    borderTopLeftRadius: ScreenUtils.scale(4),
    borderTopRightRadius: ScreenUtils.scale(4),
    width: ScreenUtils.WIDTH_SCREEN / 2 - ScreenUtils.scale(32),
    marginHorizontal: ScreenUtils.scale(16),
  },
  dataContainer: {
    height: (ScreenUtils.HEIGHT_SCREEN * 4) / 5,
    minHeight: ScreenUtils.HEIGHT_SCREEN / 2,
  },
});
