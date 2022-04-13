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
    paddingHorizontal: ScreenUtils.scale(20),
  },
  noProfile: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  noLogin: {
    ...Themes.font.bold,
    fontSize: 18,
    color: Themes.colors.textPrimary,
    marginBottom: ScreenUtils.scale(20),
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
    marginHorizontal: ScreenUtils.scale(16),
  },
});
