import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    marginHorizontal: ScreenUtils.scale(12),
    paddingHorizontal: ScreenUtils.scale(4),
    paddingVertical: ScreenUtils.scale(8),
    justifyContent: "space-between",
    borderStyle: "dashed",
    borderWidth: ScreenUtils.scale(1),
    borderColor: Themes.colors.colGray20,
    marginVertical: ScreenUtils.scale(4),
  },
  text: {
    ...Themes.font.regular,
    fontSize: 16,
    color: Themes.colors.coolGray100,
  },
  content: {
    color: Themes.colors.coolGray30,
    fontSize: 12,
    ...Themes.font.regular,
  },
  phone: {
    ...Themes.font.regular,
    fontSize: 14,
    color: Themes.colors.coolGray100,
  },
  input: {
    paddingHorizontal: ScreenUtils.scale(20),
  },
});
