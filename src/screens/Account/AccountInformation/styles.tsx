import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.colors.white,
  },
  childContainer: {
    paddingHorizontal: ScreenUtils.scale(10),
  },
  topContentContainer: {
    paddingHorizontal: ScreenUtils.scale(8),
    textAlign: "center",
    paddingVertical: ScreenUtils.scale(16),
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  topContentImage: {
    width: ScreenUtils.scale(60),
    height: ScreenUtils.scale(60),
  },
  topContent: {
    ...Themes.font.medium,
    fontSize: 14,
    textAlign: "center",
    color: Themes.colors.coolGray100,
    marginVertical: ScreenUtils.scale(12),
  },
  buttonConfirm: {
    paddingHorizontal: ScreenUtils.scale(8),
    paddingVertical: ScreenUtils.scale(4),
    borderRadius: ScreenUtils.scale(4),
  },
  unconfirmed: {
    ...Themes.font.medium,
    fontSize: 12,
  },
  title: {
    ...Themes.font.bold,
    fontSize: 24,
    color: Themes.colors.textPrimary,
  },
  input: {
    marginBottom: ScreenUtils.scale(32),
  },
  button: {
    marginTop: ScreenUtils.scale(32),
  },
  disabledInput: {
    backgroundColor: Themes.colors.colGray10,
  },
  noteInfo: {
    marginTop: ScreenUtils.scale(32),
    ...Themes.font.medium,
    fontSize: 14,
  },
});
