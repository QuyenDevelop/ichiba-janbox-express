import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  inputDefaultContainer: {
    borderBottomWidth: 0.8,
    borderBottomColor: Themes.colors.coolGray,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: ScreenUtils.scale(7),
    alignItems: "center",
  },
  inputErrorContainer: {
    borderBottomWidth: 0.8,
    borderBottomColor: Themes.colors.error,
    flexDirection: "row",
    justifyContent: "center",
  },
  input: {
    ...Themes.font.regular,
    fontSize: 16,
    color: Themes.colors.textPrimary,
    lineHeight: 24,
  },
  label: {
    ...Themes.font.bold,
    fontSize: 14,
  },
  required: {
    ...Themes.font.bold,
    color: Themes.colors.error,
  },
  error: {
    color: Themes.colors.error,
    ...Themes.font.regular,
    fontSize: 13,
    marginTop: ScreenUtils.scale(8),
  },
});
