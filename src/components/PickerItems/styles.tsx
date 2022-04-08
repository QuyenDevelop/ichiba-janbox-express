import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  itemContainer: {
    height: ScreenUtils.scale(50),
    flex: 1,
    // marginHorizontal: ScreenUtils.calculatorWidth(16),
    borderBottomWidth: 1,
    borderBottomColor: Themes.colors.colGray10,
    marginTop: ScreenUtils.scale(10),
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleLeftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: ScreenUtils.scale(8),
    width: ScreenUtils.scale(40),
    height: ScreenUtils.scale(40),
  },
  text: {
    flex: 1,
    ...Themes.font.semiBold,
    fontSize: 16,
    color: Themes.colors.textPrimary,
  },
  textActive: {
    flex: 1,
    ...Themes.font.semiBold,
    fontSize: 16,
    color: Themes.colors.primary,
  },
  titleContainerActive: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleContainerLeftActive: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  iconCheckActive: {
    marginLeft: ScreenUtils.scale(-20),
  },
  content: {
    backgroundColor: "white",
    padding: ScreenUtils.scale(22),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  contentTitle: {
    ...Themes.font.regular,
    fontSize: 16,
    marginBottom: 12,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
});
