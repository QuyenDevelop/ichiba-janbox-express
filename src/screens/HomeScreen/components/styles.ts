import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  photoContainer: {
    flex: 1,
    width: ScreenUtils.WIDTH,
    height: ScreenUtils.HEIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
  photoDimensions: {
    width: 300,
    height: 450,
    overflow: "hidden",
    borderRadius: ScreenUtils.scale(16),
  },
  introduceContainer: {
    backgroundColor: Themes.colors.white,
    paddingVertical: ScreenUtils.scale(12),
  },
  introduceChildContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: Themes.colors.coolGray60,
    alignItems: "center",
    paddingHorizontal: ScreenUtils.scale(16),
  },
  introduceContent: {
    width: "60%",
    justifyContent: "flex-start",
  },
  introduceText: {
    ...Themes.font.regular,
    color: Themes.colors.coolGray60,
    ...(ScreenUtils.isPad() ? { fontSize: 20 } : { fontSize: 12 }),
    lineHeight: ScreenUtils.scale(15),
  },
  introduceTitle: {
    marginBottom: ScreenUtils.scale(4),
    ...Themes.font.bold,
    ...(ScreenUtils.isPad() ? { fontSize: 22 } : { fontSize: 14 }),
    color: Themes.colors.textPrimary,
    lineHeight: ScreenUtils.scale(18),
  },
});
