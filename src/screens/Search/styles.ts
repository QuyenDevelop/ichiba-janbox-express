import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  topBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: ScreenUtils.scale(16),
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
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: ScreenUtils.scale(12),
    paddingVertical: ScreenUtils.scale(8),
  },
  searchInput: {
    paddingHorizontal: ScreenUtils.scale(8),
    paddingVertical: 0,
  },
  headerContent: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: ScreenUtils.scale(16),
    paddingVertical: ScreenUtils.scale(16),
  },
  headerNews: {
    ...Themes.font.bold,
    fontSize: 16,
    color: Themes.colors.coolGray100,
  },
  btnViewAll: {
    ...Themes.font.medium,
    fontSize: 14,
    color: Themes.colors.danger60,
  },
  ItemContainer: {
    flexDirection: "row",
    paddingHorizontal: ScreenUtils.scale(16),
    justifyContent: "space-between",
    marginBottom: ScreenUtils.scale(8),
  },
  titleContent: {},
  titleId: {
    ...Themes.font.medium,
    fontSize: 14,
    color: Themes.colors.coolGray100,
  },
  titleRef: {
    paddingVertical: ScreenUtils.scale(2),
    ...Themes.font.regular,
    fontSize: 12,
    color: Themes.colors.coolGray80,
  },
  titleDate: {
    ...Themes.font.regular,
    fontSize: 10,
    color: Themes.colors.coolGray80,
  },
});
