import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  modalContainer: {
    flex: 1,
    margin: 0,
    justifyContent: "flex-end",
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
  headerContainer: {
    backgroundColor: Themes.colors.collGray40,
    marginBottom: ScreenUtils.scale(6),
    alignSelf: "center",
    width: ScreenUtils.scale(46),
    height: ScreenUtils.scale(5),
    borderRadius: 1000,
  },
  contentContainer: {
    height: ScreenUtils.scale(300),
    borderTopLeftRadius: ScreenUtils.scale(24),
    borderTopRightRadius: ScreenUtils.scale(24),
    backgroundColor: Themes.colors.white,
    paddingTop: ScreenUtils.scale(12),
  },
  itemContainer: {
    height: ScreenUtils.scale(70),
    flex: 1,
    marginHorizontal: ScreenUtils.scale(16),
    borderBottomWidth: 1,
    borderBottomColor: Themes.colors.colGray20,
    marginTop: ScreenUtils.scale(10),
    justifyContent: "center",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  contentDetailContainer: {
    height: ScreenUtils.scale(60),
    marginTop: ScreenUtils.scale(10),
  },
  icon: {
    marginRight: ScreenUtils.scale(12),
  },
  text: {
    flex: 1,
    ...Themes.font.semiBold,
    fontSize: 16,
    color: Themes.colors.textPrimary,
  },
  textContent: {
    flex: 1,
    ...Themes.font.regular,
    fontSize: 14,
    color: Themes.colors.black4C53,
  },
  searchBarContainer: {
    flexDirection: "row",
  },
  search: {
    backgroundColor: Themes.colors.colGray10,
    borderRadius: ScreenUtils.scale(5),
    paddingLeft: ScreenUtils.scale(20),
    borderBottomWidth: 0,
    marginHorizontal: ScreenUtils.scale(16),
  },
  hitSlop: {
    top: 15,
    bottom: 15,
    right: 15,
    left: 15,
  },
});
