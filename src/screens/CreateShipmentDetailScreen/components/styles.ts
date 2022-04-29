import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.colors.white,
    paddingHorizontal: ScreenUtils.scale(16),
    paddingVertical: ScreenUtils.scale(12),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftContentText: {
    color: Themes.colors.coolGray100,
    ...Themes.font.medium,
    fontSize: 14,
  },
  rightContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rightContentText: {
    color: Themes.colors.coolGray100,
    ...Themes.font.medium,
    fontSize: 14,
    marginRight: ScreenUtils.scale(12),
  },
});
