import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.colors.white,
  },
  input: {
    width: ScreenUtils.WIDTH_SCREEN / 2 - 32,
  },
  titleView: {
    paddingHorizontal: ScreenUtils.scale(16),
    paddingVertical: ScreenUtils.scale(16),
  },
  titleRateTime: {
    ...Themes.font.bold,
    fontSize: 16,
    color: Themes.colors.coolGray100,
  },
  countryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: ScreenUtils.scale(16),
    paddingBottom: ScreenUtils.scale(16),
  },
  shipmentInfo: {
    width: ScreenUtils.WIDTH_SCREEN - 32,
    marginHorizontal: ScreenUtils.scale(16),
    borderWidth: ScreenUtils.scale(0.5),
    borderColor: Themes.colors.colGray20,
    borderRadius: ScreenUtils.scale(15),
    overflow: "hidden",
  },
  shipmentItemInfo: {
    flexDirection: "row",
    width: ScreenUtils.WIDTH - 64,
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: ScreenUtils.scale(16),
    paddingVertical: ScreenUtils.scale(12),
    borderBottomColor: Themes.colors.colGray20,
    borderBottomWidth: ScreenUtils.scale(0.5),
  },
  subShipmentPiece: {
    ...Themes.font.bold,
    fontSize: 14,
    color: Themes.colors.primary,
  },
  padding: {
    paddingHorizontal: ScreenUtils.scale(16),
    paddingBottom: ScreenUtils.scale(16),
  },
  subShipmentTitle: {
    ...Themes.font.regular,
    fontSize: 14,
    color: Themes.colors.coolGray100,
  },
  itemRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemInput: {
    width: ScreenUtils.WIDTH_SCREEN / 4,
    marginRight: ScreenUtils.scale(8),
    paddingHorizontal: ScreenUtils.scale(16),
    paddingVertical: ScreenUtils.scale(5),
    borderColor: Themes.colors.coolGray30,
    borderWidth: ScreenUtils.scale(0.5),
  },
  textSubTitle: {
    marginLeft: ScreenUtils.scale(8),
    ...Themes.font.regular,
    fontSize: 14,
    color: Themes.colors.coolGray60,
  },
  shipmentTitleContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: ScreenUtils.scale(12),
  },
  warningContainer: {
    paddingHorizontal: ScreenUtils.scale(16),
    marginTop: ScreenUtils.scale(13),
  },
  warningView: {
    flexDirection: "row",
    paddingHorizontal: ScreenUtils.scale(12),
    paddingVertical: ScreenUtils.scale(12),
    backgroundColor: Themes.colors.colGray10,
    borderRadius: ScreenUtils.scale(12),
    overflow: "hidden",
    borderWidth: ScreenUtils.scale(1),
    borderColor: Themes.colors.colGray20,
    borderStyle: "dashed",
  },
  warningTitle: {
    ...Themes.font.medium,
    fontSize: 11,
    color: Themes.colors.coolGray100,
  },
  warningText: {
    ...Themes.font.medium,
    fontSize: 11,
    color: Themes.colors.coolGray60,
  },
  submitButton: {
    paddingHorizontal: ScreenUtils.scale(16),
    marginTop: ScreenUtils.scale(24),
  },
  buttonSubmit: {
    paddingVertical: ScreenUtils.scale(12),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: ScreenUtils.scale(8),
    backgroundColor: Themes.colors.primary,
  },
  textSubmit: {
    ...Themes.font.medium,
    fontSize: 14,
    color: Themes.colors.white,
  },
});
