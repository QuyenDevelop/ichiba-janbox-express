import { ScreenUtils } from "@helpers";
import { FontFamily, Themes } from "@themes";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.colors.white,
  },
  warehouseContainer: {
    marginHorizontal: ScreenUtils.scale(16),
    marginVertical: ScreenUtils.scale(8),
    borderWidth: 1,
    borderColor: Themes.colors.colGray20,
    borderRadius: ScreenUtils.scale(19),
    overflow: "hidden",
  },
  headerItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Themes.colors.colGray10,
    paddingHorizontal: ScreenUtils.scale(16),
    paddingVertical: ScreenUtils.scale(8),
    justifyContent: "space-between",
  },
  iconHouse: {},
  nameWarehouse: {
    marginLeft: ScreenUtils.scale(8),
    flex: 1,
    fontFamily: FontFamily.bold,
    fontSize: ScreenUtils.scale(16),
    color: Themes.colors.coolGray100,
  },
  activeWarehouse: {},
  txtActive: {
    fontFamily: FontFamily.regular,
    fontSize: ScreenUtils.scale(12),
    color: Themes.colors.redE11,
  },
  txtActivated: {
    fontFamily: FontFamily.regular,
    fontSize: ScreenUtils.scale(12),
    color: Themes.colors.green22,
  },
  contentWarehouse: {
    flexDirection: "column",
    justifyContent: "center",
  },
  titleItem: {
    marginTop: ScreenUtils.scale(8),
    marginHorizontal: ScreenUtils.scale(12),
    fontFamily: FontFamily.semiBold,
    fontSize: ScreenUtils.scale(12),
    color: Themes.colors.coolGray100,
  },
  infoDetailItem: {
    marginTop: ScreenUtils.scale(6),
    flexDirection: "row",
    alignItems: "center",
  },
  txtDetail: {
    marginTop: ScreenUtils.scale(6),
    marginHorizontal: ScreenUtils.scale(12),
    flex: 1,
    fontFamily: FontFamily.regular,
    color: Themes.colors.textPrimary,
    fontSize: ScreenUtils.scale(14),
  },
  iconCopy: {
    marginRight: ScreenUtils.scale(20),
  },
  line: {
    borderBottomWidth: 1,
    marginTop: ScreenUtils.scale(4),
    borderBottomColor: Themes.colors.collGray40,
    marginHorizontal: ScreenUtils.scale(12),
  },
  footerContentContainer: {
    flexDirection: "row",
    marginBottom: ScreenUtils.scale(15),
  },
  leftFooterContent: {
    width: "50%",
    flexDirection: "column",
  },
  rightFooterContent: {
    width: "50%",
    flexDirection: "column",
  },
  detailContainerFooter: { flexDirection: "row", alignItems: "center" },
  txtPhone: {
    marginTop: ScreenUtils.scale(12),
    marginLeft: ScreenUtils.scale(12),
    flex: 1,
    fontFamily: FontFamily.regular,
    color: Themes.colors.textPrimary,
    fontSize: ScreenUtils.scale(14),
  },
  iconCopyFooter: {
    marginRight: ScreenUtils.scale(20),
    marginTop: ScreenUtils.scale(12),
  },
});
