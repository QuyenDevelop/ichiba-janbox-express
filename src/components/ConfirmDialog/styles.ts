import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    borderRadius: 12,
    backgroundColor: Themes.colors.white,
    paddingTop: ScreenUtils.scale(20),
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
    fontSize: 16,
    color: Themes.colors.coolGray100,
    marginVertical: ScreenUtils.scale(8),
    marginHorizontal: ScreenUtils.scale(12),
    alignSelf: "center",
    textAlign: "center",
    lineHeight: 24,
  },
  bottom: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    marginTop: ScreenUtils.scale(16),
  },
});
