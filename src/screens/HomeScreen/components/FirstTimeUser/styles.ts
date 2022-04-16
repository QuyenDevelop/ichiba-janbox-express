import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Themes.colors.white,
    paddingVertical: ScreenUtils.scale(16),
    paddingHorizontal: ScreenUtils.scale(16),
  },
  containerLeft: {
    flex: 0.5,
  },
  containerRight: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    ...Themes.font.medium,
    fontSize: 16,
    fontWeight: "700",
    color: Themes.colors.coolGray100,
  },
  content: {
    ...Themes.font.medium,
    fontSize: 10,
    fontWeight: "400",
    color: Themes.colors.coolGray60,
    lineHeight: 15,
    marginVertical: ScreenUtils.scale(12),
  },
});
