import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    borderRadius: 12,
    backgroundColor: Themes.colors.white,
  },
  iconClose: {
    alignSelf: "flex-end",
    padding: ScreenUtils.scale(8),
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: ScreenUtils.scale(16),
  },
  title: {
    ...Themes.font.bold,
    fontSize: 18,
    color: Themes.colors.coolGray100,
    paddingBottom: ScreenUtils.scale(8),
    width: "100%",
    textAlign: "center",
    textAlignVertical: "center",
  },
  message: {
    ...Themes.font.regular,
    fontSize: 12,
    color: Themes.colors.coolGray100,
    marginHorizontal: ScreenUtils.scale(32),
    alignSelf: "center",
    textAlign: "center",
    lineHeight: 18,
  },
  button: {
    flexDirection: "row",
    paddingHorizontal: ScreenUtils.scale(11.5),
    marginBottom: ScreenUtils.scale(16),
    marginTop: ScreenUtils.scale(24),
  },
});
