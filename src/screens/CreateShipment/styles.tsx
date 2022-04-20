import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.colors.white,
  },
  choseShipmentContainer: {
    flexDirection: "row",
    paddingHorizontal: ScreenUtils.scale(16),
    justifyContent: "space-between",
  },
  choseItemContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: ScreenUtils.WIDTH_SCREEN / 2 - 32,
    paddingVertical: ScreenUtils.scale(4),
  },
  iconButton: {
    marginLeft: ScreenUtils.scale(4),
  },
  buttonContainer: {
    position: "absolute",
    bottom: ScreenUtils.scale(20),
    paddingHorizontal: ScreenUtils.scale(16),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {},
  titleStyle: {
    color: Themes.colors.coolGray60,
  },
  buttonCancelChildStyle: {
    borderRadius: ScreenUtils.scale(8),
    width: ScreenUtils.WIDTH_SCREEN / 2 - 30,
    backgroundColor: Themes.colors.colGray10,
  },
  buttonChildStyle: {
    marginLeft: ScreenUtils.scale(16),
    borderRadius: ScreenUtils.scale(8),
    width: ScreenUtils.WIDTH_SCREEN / 2 - 30,
  },
});
