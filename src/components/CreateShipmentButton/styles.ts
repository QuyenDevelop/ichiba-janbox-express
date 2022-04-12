import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  createShipmentContainer: {
    width: ScreenUtils.scale(50),
    height: ScreenUtils.scale(50),
  },
  createShipmentButton: {
    width: ScreenUtils.scale(50),
    height: ScreenUtils.scale(50),
    borderRadius: ScreenUtils.scale(30),
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: ScreenUtils.scale(-12),
    backgroundColor: Themes.colors.primary,
  },
  createShipmentText: {
    ...Themes.font.medium,
    fontSize: 26,
    color: Themes.colors.white,
    lineHeight: 50,
  },
});
