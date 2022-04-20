import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
  searchBarContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Themes.colors.colGray10,
    borderRadius: ScreenUtils.scale(20),
    paddingLeft: ScreenUtils.scale(20),
    paddingVertical: ScreenUtils.scale(7),
  },
  search: {
    backgroundColor: Themes.colors.colGray10,
    borderRadius: ScreenUtils.scale(20),
    paddingLeft: ScreenUtils.scale(20),
    borderBottomWidth: 0,
  },
  rightButton: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: ScreenUtils.scale(20),
  },
  rightButtonText: {
    ...Themes.font.medium,
    color: Themes.colors.info60,
  },
  iconCancelContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginRight: ScreenUtils.scale(10),
  },
  input: {
    ...Themes.font.regular,
    fontSize: 16,
    color: Themes.colors.textPrimary,
    alignSelf: "center",
    flex: 1,
    paddingVertical: ScreenUtils.scale(0),
    alignItems: "center",
  },
  searchIcon: {
    marginRight: ScreenUtils.scale(8),
    ...Platform.select({
      ios: {
        marginTop: ScreenUtils.scale(5),
      },
    }),
  },
});
