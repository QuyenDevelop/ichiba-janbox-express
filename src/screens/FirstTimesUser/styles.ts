import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.colors.white,
  },
  contentLayout: {
    paddingHorizontal: ScreenUtils.scale(20),
  },
  content: {},
  contenUp: {
    marginTop: ScreenUtils.scale(30),
    paddingHorizontal: ScreenUtils.scale(20),
  },
  titleContent: {
    fontSize: 18,
    color: Themes.colors.textPrimary,
    lineHeight: 27,
    ...Themes.font.bold,
  },
  imgDefautFirstTime: {
    height: ScreenUtils.scale(189),
    width: "100%",
    marginTop: ScreenUtils.scale(16),
  },
  description: {
    marginTop: ScreenUtils.scale(24),
    marginHorizontal: ScreenUtils.scale(3),
  },
  textDescriptipon: {
    fontSize: 14,
    color: Themes.colors.coolGray60,
    lineHeight: 21,
    ...Themes.font.regular,
  },
  buttonSubMit: {
    height: ScreenUtils.scale(48),
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Themes.colors.primary,
    borderRadius: 24,
    marginTop: ScreenUtils.scale(24),
    marginBottom: ScreenUtils.scale(18),
  },
  textSubmit: {
    fontSize: 14,
    lineHeight: 24,
    ...Themes.font.semiBold,
    color: Themes.colors.white,
  },
  contentChoseEz: {
    marginTop: ScreenUtils.scale(32),
  },
  itemChooseEz: {
    flexDirection: "row",
    marginBottom: ScreenUtils.scale(40),
    width: "100%",
  },
  imgChooseEz: {
    height: ScreenUtils.scale(60),
    width: ScreenUtils.scale(60),
    marginTop: ScreenUtils.scale(10),
  },
  ContentItemLeft: {
    // marginLeft: ScreenUtils.calculatorWidth(24),
    paddingLeft: ScreenUtils.scale(24),
    paddingRight: ScreenUtils.scale(60),
  },
  titleContentItem: {
    fontSize: 14,
    color: Themes.colors.textPrimary,
    lineHeight: 21,
    ...Themes.font.bold,
    marginBottom: ScreenUtils.scale(8),
  },
  contentFullWidth: {
    width: "100%",
    marginTop: ScreenUtils.scale(24),
    marginBottom: ScreenUtils.scale(47),
  },
  TabContent: {
    flexDirection: "row",
  },
  br: {
    width: "100%",
    height: ScreenUtils.scale(1),
    backgroundColor: Themes.colors.colGray20,
  },
  textTab: {
    fontSize: 14,
    color: Themes.colors.textPrimary,
    lineHeight: 21,
    ...Themes.font.medium,
  },
  activeTab: {
    height: ScreenUtils.scale(4),
    width: "100%",
    marginTop: ScreenUtils.scale(12),
    backgroundColor: Themes.colors.primary,
  },
  itemTab: {
    width: "50%",
    alignItems: "center",
  },
  headerPurchase: {
    flexDirection: "row",
    height: ScreenUtils.scale(36),
    width: "100%",
    backgroundColor: Themes.colors.colGray10,
    marginTop: ScreenUtils.scale(24),
  },
  purCharseLeft: {
    width: "20%",
    borderWidth: 1,
    borderRadius: 1,
    borderColor: Themes.colors.primary,
    borderStyle: "dashed",
    alignItems: "center",
  },
  topLayor: {
    position: "absolute",
    left: -1,
    top: -2,
    width: "100%",
    height: 2,
    backgroundColor: "white",
    zIndex: 1,
  },
  leftLayor: {
    position: "absolute",
    left: -1,
    top: -1,
    width: 1,
    height: "100%",
    backgroundColor: "white",
    zIndex: 1,
  },
  bottomLayor: {
    position: "absolute",
    right: -1,
    bottom: -1,
    width: "100%",
    height: 2,
    backgroundColor: "white",
    zIndex: 1,
  },
  textHeaderPurcharse: {
    fontSize: 14,
    color: Themes.colors.primary,
    lineHeight: 21,
    ...Themes.font.medium,
    marginTop: ScreenUtils.scale(7),
  },
  rightPurCharse: {
    flexDirection: "row",
    width: "80%",
  },
  textRightPurcharse: {
    fontSize: 14,
    color: Themes.colors.primary,
    lineHeight: 21,
    ...Themes.font.medium,
    marginTop: ScreenUtils.scale(7),
    marginLeft: ScreenUtils.scale(30),
  },
  itemPurcharse: {
    width: "100%",
    flexDirection: "row",
  },
  numberTitle: {
    fontSize: 14,
    lineHeight: 21,
    color: Themes.colors.textPrimary,
    ...Themes.font.bold,
    marginTop: ScreenUtils.scale(31),
  },
  IconPurchaseLayor: {
    height: ScreenUtils.scale(36),
    width: ScreenUtils.scale(36),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Themes.colors.colGray10,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: Themes.colors.white,
    marginTop: ScreenUtils.scale(24),
    marginLeft: ScreenUtils.scale(-18),
  },
  contentRightLayor: {
    paddingLeft: ScreenUtils.scale(12),
    marginTop: ScreenUtils.scale(28),
    paddingRight: ScreenUtils.scale(40),
  },
  valueContentPur: {
    fontSize: 14,
    lineHeight: 21,
    color: Themes.colors.textPrimary,
    ...Themes.font.medium,
  },
  delivery: {
    height: ScreenUtils.scale(326),
    width: "100%",
    marginTop: ScreenUtils.scale(48),
  },
  contentDelivery: {
    paddingHorizontal: ScreenUtils.scale(20),
    paddingTop: ScreenUtils.scale(40),
  },
  textContentDeliver: {
    fontSize: 14,
    lineHeight: 21,
    color: Themes.colors.black,
    ...Themes.font.regular,
    marginTop: ScreenUtils.scale(16),
  },
  listLogo: {
    flexDirection: "row",
    width: "100%",
    marginTop: ScreenUtils.scale(24),
  },
  logoDeliver: {
    height: ScreenUtils.scale(90),
    width: "33%",
  },
  contentDown: {
    marginHorizontal: ScreenUtils.scale(20),
    marginBottom: ScreenUtils.scale(24),
  },
  itemOption: {
    paddingHorizontal: ScreenUtils.scale(20),
    paddingTop: ScreenUtils.scale(16),
    paddingBottom: ScreenUtils.scale(24),
    backgroundColor: Themes.colors.info10,
    borderRadius: 32,
    marginTop: ScreenUtils.scale(24),
  },
  headerItemOption: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconOptionLayor: {
    height: ScreenUtils.scale(48),
    width: ScreenUtils.scale(48),
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Themes.colors.white,
    marginRight: ScreenUtils.scale(12),
  },
  titleContentDown: {
    fontSize: 14,
    lineHeight: 21,
    color: Themes.colors.textPrimary,
    ...Themes.font.bold,
    marginRight: ScreenUtils.scale(12),
  },
  textContentDown: {
    fontSize: 14,
    lineHeight: 21,
    color: Themes.colors.coolGray60,
    ...Themes.font.regular,
    marginTop: ScreenUtils.scale(8),
  },
  buttonSubMitFooter: {
    height: ScreenUtils.scale(48),
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Themes.colors.primary,
    borderRadius: 24,
    marginTop: ScreenUtils.scale(24),
    marginBottom: ScreenUtils.scale(100),
  },
  titleContentChooseEz: {
    fontSize: 18,
    color: Themes.colors.textPrimary,
    lineHeight: 27,
    ...Themes.font.bold,
    marginTop: ScreenUtils.scale(30),
  },
});
