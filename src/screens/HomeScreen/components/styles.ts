import { ScreenUtils } from "@helpers";
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
});
