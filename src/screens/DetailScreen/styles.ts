import { ScreenUtils } from "@helpers";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
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
