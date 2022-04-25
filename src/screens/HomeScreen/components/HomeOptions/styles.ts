import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: ScreenUtils.scale(12),
    paddingTop: ScreenUtils.scale(16),
    paddingHorizontal: ScreenUtils.scale(10),
  },
  webItemContainer: {
    flexDirection: "column",
    alignItems: "center",
    width: "30%",
    height: ScreenUtils.scale(100),
    marginHorizontal: ScreenUtils.scale(6),
    marginBottom: ScreenUtils.scale(12),
    borderRadius: ScreenUtils.scale(12),
    overflow: "hidden",
    borderColor: Themes.colors.coolGray30,
    borderWidth: ScreenUtils.scale(0.5),
  },
  imageContent: {
    width: "100%",
    height: ScreenUtils.scale(50),
    justifyContent: "center",
    alignItems: "center",
  },
  titleContent: {
    marginTop: ScreenUtils.scale(8),
    paddingHorizontal: ScreenUtils.scale(8),
  },
  webText: {
    ...Themes.font.medium,
    fontSize: 12,
    textAlign: "center",
    color: Themes.colors.coolGray100,
  },
});
