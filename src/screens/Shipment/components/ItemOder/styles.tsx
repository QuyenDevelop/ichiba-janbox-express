import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  PackageItemContainer: {
    overflow: "hidden",
    borderRadius: ScreenUtils.scale(19),
    borderWidth: ScreenUtils.scale(1),
    borderColor: Themes.colors.colGray20,
    marginBottom: ScreenUtils.scale(16),
  },
  PackageItemHeader: {
    flexDirection: "row",
    paddingHorizontal: ScreenUtils.scale(12),
    paddingVertical: ScreenUtils.scale(10),
    backgroundColor: Themes.colors.colGray20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  line: {
    flexDirection: "row",
  },
  marginLeft: {
    marginLeft: ScreenUtils.scale(8),
  },
  packageId: {
    ...Themes.font.semiBold,
    fontSize: 14,
    color: Themes.colors.coolGray100,
  },
  packageTitle: {
    ...Themes.font.regular,
    fontSize: 12,
    color: Themes.colors.coolGray60,
  },
  packageType: {
    ...Themes.font.regular,
    fontSize: 12,
    color: Themes.colors.coolGray60,
  },
  packageStatus: {
    ...Themes.font.regular,
    fontSize: 12,
    color: Themes.colors.white,
  },
  default: {
    color: Themes.colors.coolGray60,
  },
  packageItemText: {
    ...Themes.font.regular,
    fontSize: 13,
    color: Themes.colors.coolGray100,
  },
  statusView: {
    paddingHorizontal: ScreenUtils.scale(16),
    paddingVertical: ScreenUtils.scale(1),
    borderRadius: ScreenUtils.scale(12),
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  packageContent: {
    paddingHorizontal: ScreenUtils.scale(16),
    marginBottom: ScreenUtils.scale(16),
  },
  packageItem: {
    flexDirection: "row",
    marginTop: ScreenUtils.scale(8),
  },
  packageItemFooter: {
    flexDirection: "row",
    marginTop: ScreenUtils.scale(8),
    justifyContent: "space-between",
  },
  packageDetailText: {
    ...Themes.font.semiBold,
    fontSize: 14,
    color: Themes.colors.primary,
  },
  packageRecreateText: {
    ...Themes.font.semiBold,
    fontSize: 14,
    color: Themes.colors.white,
  },
  packageFooter: {
    paddingHorizontal: ScreenUtils.scale(16),
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: ScreenUtils.scale(16),
  },
  touchDetail: {
    width: ScreenUtils.WIDTH_SCREEN / 2 - 48,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Themes.colors.white,
    borderRadius: ScreenUtils.scale(8),
    overflow: "hidden",
    borderColor: Themes.colors.primary,
    borderWidth: ScreenUtils.scale(2),
    paddingVertical: ScreenUtils.scale(8),
  },
  touchRecreate: {
    width: ScreenUtils.WIDTH_SCREEN / 2 - 48,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Themes.colors.primary,
    borderRadius: ScreenUtils.scale(8),
    overflow: "hidden",
    paddingVertical: ScreenUtils.scale(8),
  },
});
