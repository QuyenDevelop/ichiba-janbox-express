import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.colors.white,
  },
  childrenContainer: {},
  shipmentDetailContainer: {
    paddingHorizontal: ScreenUtils.scale(16),
  },
  headerHeader: {
    color: Themes.colors.coolGray100,
    ...Themes.font.bold,
    fontSize: 16,
  },
  header: {
    color: Themes.colors.coolGray100,
    ...Themes.font.regular,
    fontSize: 14,
  },
  footerText: {
    marginHorizontal: ScreenUtils.scale(8),
    color: Themes.colors.coolGray100,
    ...Themes.font.regular,
    fontSize: 14,
  },
  shipmentDetailImageContainer: {
    paddingHorizontal: ScreenUtils.scale(16),
    paddingVertical: ScreenUtils.scale(12),
  },
  shipmentDetailFooterContainer: {
    paddingHorizontal: ScreenUtils.scale(16),
    paddingVertical: ScreenUtils.scale(12),
    position: "absolute",
    bottom: ScreenUtils.scale(0),
  },
  footerContentView: {
    flexDirection: "row",
  },
  headerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listImage: {
    paddingVertical: ScreenUtils.scale(12),
  },
  imagesContainer: {
    width: ScreenUtils.scale(88),
    height: ScreenUtils.scale(88),
    borderRadius: ScreenUtils.scale(8),
  },
  images: {
    width: ScreenUtils.scale(88),
    height: ScreenUtils.scale(88),
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: ScreenUtils.scale(4),
  },
  deleteImage: {
    width: ScreenUtils.scale(16),
    height: ScreenUtils.scale(16),
    position: "absolute",
    right: ScreenUtils.scale(-5),
    top: ScreenUtils.scale(-5),
    backgroundColor: Themes.colors.red0033,
    borderRadius: ScreenUtils.scale(8),
    justifyContent: "center",
    alignItems: "center",
  },
  delete: {
    color: Themes.colors.white,
    ...Themes.font.regular,
    fontSize: 12,
  },
  buttonImage: {
    width: ScreenUtils.scale(88),
    height: ScreenUtils.scale(88),
    borderRadius: ScreenUtils.scale(8),
    borderWidth: ScreenUtils.scale(1),
    borderStyle: "dashed",
    borderColor: Themes.colors.coolGray60,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: ScreenUtils.scale(4),
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: ScreenUtils.scale(34),
  },
  button: {},
  titleStyle: {
    color: Themes.colors.coolGray60,
  },
  buttonCancelChildStyle: {
    borderRadius: ScreenUtils.scale(8),
    width: ScreenUtils.WIDTH_SCREEN / 2 - 30,
    backgroundColor: Themes.colors.colGray10,
  },
  buttonChildStyle: {
    marginLeft: ScreenUtils.scale(16),
    borderRadius: ScreenUtils.scale(8),
    width: ScreenUtils.WIDTH_SCREEN / 2 - 30,
  },
});
