import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  tabContainer: {
    borderBottomWidth: 1,
    borderBottomColor: Themes.colors.colGray20,
  },
  tabStyle: {
    paddingHorizontal: ScreenUtils.scale(20),
  },
  tabItem: {
    paddingVertical: ScreenUtils.scale(12),
    borderBottomColor: Themes.colors.colGray20,
    marginRight: ScreenUtils.scale(16),
  },
  tabItemActive: {
    borderBottomColor: Themes.colors.primary,
    borderBottomWidth: 2,
  },
  tabTitle: {
    ...Themes.font.medium,
    fontSize: 13,
    color: Themes.colors.collGray40,
  },
  tabTitleActive: {
    color: Themes.colors.textPrimary,
  },
  notificationItem: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: ScreenUtils.scale(16),
    borderBottomWidth: 1,
    borderBottomColor: Themes.colors.colGray20,
  },
  image: {
    borderRadius: 12,
    width: ScreenUtils.scale(74),
    height: ScreenUtils.scale(74),
  },
  notificationHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: ScreenUtils.scale(12),
  },
  notificationCount: {
    display: "flex",
    flexDirection: "row",
  },
  countTitle: {
    ...Themes.font.semiBold,
    color: Themes.colors.coolGray60,
  },
  countValue: {
    ...Themes.font.semiBold,
    color: Themes.colors.textPrimary,
    marginLeft: ScreenUtils.scale(5),
  },
  markRead: {
    ...Themes.font.semiBold,
    color: Themes.colors.primary,
  },
  rightContainer: {
    marginLeft: ScreenUtils.scale(13),
    flex: 1,
  },
  title: {
    ...Themes.font.bold,
    fontSize: 14,
    color: Themes.colors.textPrimary,
  },
  date: {
    marginTop: ScreenUtils.scale(8),
    color: Themes.colors.coolGray60,
    fontSize: 12,
    ...Themes.font.regular,
  },
  content: {
    marginTop: ScreenUtils.scale(8),
    fontSize: 13,
    color: Themes.colors.textPrimary,
    ...Themes.font.regular,
    lineHeight: 20,
  },
  noResult: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageNoResult: {
    width: ScreenUtils.scale(160),
    height: ScreenUtils.scale(143),
  },
  noResultTitle: {
    marginTop: ScreenUtils.scale(32),
    ...Themes.font.bold,
    fontSize: 14,
  },
  noResultContent: {
    fontSize: 12,
    ...Themes.font.regular,
    color: Themes.colors.coolGray60,
    lineHeight: 18,
    marginTop: ScreenUtils.scale(16),
    textAlign: "center",
  },
});
