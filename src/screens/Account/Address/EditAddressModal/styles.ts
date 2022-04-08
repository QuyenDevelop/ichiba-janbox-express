import { StyleSheet } from "react-native";
import { Themes } from "@themes";
import { ScreenUtils } from "@helpers";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.colors.white,
  },
  input: {
    marginTop: ScreenUtils.scale(32),
  },
  modalContainer: {
    flex: 1,
    margin: 0,
    justifyContent: "flex-end",
  },
  headerContainer: {
    backgroundColor: Themes.colors.collGray40,
    marginBottom: ScreenUtils.scale(6),
    alignSelf: "center",
    width: ScreenUtils.scale(46),
    height: ScreenUtils.scale(5),
    borderRadius: 1000,
  },
  contentContainer: {
    borderTopLeftRadius: ScreenUtils.scale(16),
    borderTopRightRadius: ScreenUtils.scale(16),
    backgroundColor: Themes.colors.white,
    paddingTop: ScreenUtils.scale(12),
  },
  titleModalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: ScreenUtils.scale(16),
    marginVertical: ScreenUtils.scale(10),
  },
  titleModalText: {
    ...Themes.font.semiBold,
    fontSize: 18,
    color: Themes.colors.coolGray100,
  },
});
