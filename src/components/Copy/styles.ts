import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  copyContainer: {
    position: "absolute",
    top: "50%",
    left: ScreenUtils.scale(136),
    width: ScreenUtils.scale(103),
    height: ScreenUtils.scale(103),
    borderRadius: 12,
    backgroundColor: "#12161999",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  copyText: {
    fontSize: 13,
    ...Themes.font.semiBold,
    color: Themes.colors.white,
    marginTop: ScreenUtils.scale(8),
  },
});
