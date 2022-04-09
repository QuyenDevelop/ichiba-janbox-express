import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.colors.white,
  },
  scrollView: {
    flex: 1,
  },
  constWidth: {
    width: "100%",
  },
  auctionContainer: {
    borderRadius: ScreenUtils.scale(20),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: ScreenUtils.scale(16),
    paddingVertical: ScreenUtils.scale(16),
    marginTop: ScreenUtils.scale(24),
    marginHorizontal: ScreenUtils.scale(20),
  },
  auctionLeft: {
    display: "flex",
    flex: 1,
  },
  auctionTitle: {
    color: Themes.colors.coolGray60,
    fontSize: 12,
    ...Themes.font.regular,
    lineHeight: 18,
  },
  auctionButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: ScreenUtils.scale(8),
  },
  auctionButtonTitle: {
    color: Themes.colors.primary,
    ...Themes.font.bold,
    fontSize: 12,
    marginRight: ScreenUtils.scale(4),
  },
  auctionImage: {
    width: ScreenUtils.scale(87),
    height: ScreenUtils.scale(72),
    marginLeft: ScreenUtils.scale(13),
  },
  optionContainer: {
    paddingVertical: ScreenUtils.scale(20),
  },
  optionWrapper: {
    paddingVertical: ScreenUtils.scale(16),
    borderBottomWidth: 1,
    borderBottomColor: Themes.colors.colGray10,
  },
  buttonOption: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: ScreenUtils.scale(20),
  },
  swapperOptionItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  swapperOptionRightItem: {
    flexDirection: "row",
  },
  iconRight: {
    marginLeft: ScreenUtils.scale(16),
  },
  icons: {
    width: ScreenUtils.scale(20),
  },
  logsTitle: {
    marginVertical: ScreenUtils.scale(8),
  },
  supportTitle: {
    color: Themes.colors.coolGray100,
    ...Themes.font.bold,
    fontSize: 16,
    marginLeft: ScreenUtils.scale(8),
  },
  rightTitle: {
    ...Themes.font.regular,
    fontSize: 13,
    marginLeft: ScreenUtils.scale(8),
  },
  optionTitle: {
    color: Themes.colors.coolGray100,
    ...Themes.font.bold,
    fontSize: 14,
    marginLeft: ScreenUtils.scale(8),
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: ScreenUtils.scale(20),
    paddingHorizontal: ScreenUtils.scale(20),
  },
  buttonHeader: {
    width: "48%",
    marginRight: ScreenUtils.scale(10),
  },
  buttonTitleSignUp: {
    color: Themes.colors.primary,
  },
  buttonTitleSignUpStyles: {
    width: "100%",
    backgroundColor: Themes.colors.white,
    borderWidth: 1,
    borderColor: Themes.colors.primary,
  },
});
