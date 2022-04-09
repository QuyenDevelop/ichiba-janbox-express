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
  },
  settingItem: {
    paddingVertical: ScreenUtils.scale(16),
    borderBottomWidth: 1,
    borderBottomColor: Themes.colors.colGray10,
  },
  settingBtn: {
    paddingHorizontal: ScreenUtils.scale(20),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  settingText: {
    ...Themes.font.bold,
    color: Themes.colors.textPrimary,
    fontSize: 14,
  },
});
