import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.colors.white,
  },
  childContainer: {
    flex: 1,
  },
  wrapContainer: {
    paddingVertical: ScreenUtils.scale(18),
    borderBottomColor: Themes.colors.colGray10,
    borderBottomWidth: 1,
  },
  headerItem: {
    paddingVertical: ScreenUtils.scale(18),
    borderBottomColor: Themes.colors.colGray10,
    borderBottomWidth: 1,
    backgroundColor: Themes.colors.colGray10,
  },
  action: {
    paddingHorizontal: ScreenUtils.scale(20),
  },
  parentItem: {
    ...Themes.font.bold,
    color: Themes.colors.textPrimary,
    fontSize: 14,
  },

  childItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  childItemText: {
    ...Themes.font.regular,
    color: Themes.colors.textPrimary,
    fontSize: 14,
    maxWidth: "80%",
  },
  buttonConfix: {
    height: ScreenUtils.scale(20),
    width: ScreenUtils.scale(45),
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: "center",
  },
  textOn: {
    fontSize: 10,
    color: Themes.colors.primary,
    ...Themes.font.medium,
  },
  dotButton: {
    height: ScreenUtils.scale(14),
    width: ScreenUtils.scale(14),
    borderRadius: 7,
    backgroundColor: Themes.colors.primary,
  },
  buttonLayor: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  dotButtonOff: {
    height: ScreenUtils.scale(14),
    width: ScreenUtils.scale(14),
    borderRadius: 7,
    backgroundColor: Themes.colors.collGray40,
  },
  textOff: {
    fontSize: 10,
    color: Themes.colors.collGray40,
    ...Themes.font.medium,
  },
});
