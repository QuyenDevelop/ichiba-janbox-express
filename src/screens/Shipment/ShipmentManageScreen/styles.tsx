import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.colors.white,
  },
  itemHeader: {
    flexDirection: "column",
    justifyContent: "center",
  },
  textItemHeader: {
    color: Themes.colors.coolGray60,
    fontSize: 13,
    lineHeight: 19.5,
    ...Themes.font.medium,
    marginHorizontal: ScreenUtils.scale(8),
    marginBottom: ScreenUtils.scale(8),
    marginTop: ScreenUtils.scale(12),
  },
  borderBottomHeader: {
    height: ScreenUtils.scale(4),
    borderTopLeftRadius: ScreenUtils.scale(4),
    borderTopRightRadius: ScreenUtils.scale(4),
  },
  headerTabView: {
    paddingHorizontal: ScreenUtils.scale(16),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
