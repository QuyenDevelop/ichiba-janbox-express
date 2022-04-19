import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: ScreenUtils.scale(24),
  },
  headerContent: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: ScreenUtils.scale(16),
  },
  scrollViewContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: ScreenUtils.scale(12),
    paddingHorizontal: ScreenUtils.scale(10),
  },
  headerNews: {
    ...Themes.font.bold,
    fontSize: 16,
    color: Themes.colors.coolGray100,
  },
  btnViewAll: {
    ...Themes.font.medium,
    fontSize: 14,
    color: Themes.colors.primary,
  },
  webItemContainer: {
    flexDirection: "column",
    width: (ScreenUtils.WIDTH_SCREEN - ScreenUtils.scale(40)) / 2,
    marginHorizontal: ScreenUtils.scale(6),
    marginVertical: ScreenUtils.scale(6),
    borderRadius: ScreenUtils.scale(12),
    overflow: "hidden",
    borderColor: Themes.colors.coolGray30,
    borderWidth: ScreenUtils.scale(0.5),
  },
  imageContent: {
    width: "100%",
    height: ScreenUtils.scale(100),
    justifyContent: "center",
    alignItems: "center",
  },
  titleContent: {
    marginHorizontal: ScreenUtils.scale(8),
    marginVertical: ScreenUtils.scale(8),
  },
  webText: {
    ...Themes.font.medium,
    fontSize: 12,
    color: Themes.colors.coolGray100,
  },
});
