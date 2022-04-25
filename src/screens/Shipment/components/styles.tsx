import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  inStorage: {
    flex: 1,
  },
  inStorageList: {
    flex: 1,
    paddingTop: ScreenUtils.scale(12),
    paddingHorizontal: ScreenUtils.scale(16),
  },
  inStorageListContent: {
    paddingBottom: ScreenUtils.scale(20),
  },
  footer: {
    width: "100%",
    paddingTop: ScreenUtils.scale(8),
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    backgroundColor: Themes.colors.white,
    paddingHorizontal: ScreenUtils.scale(16),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: ScreenUtils.scale(8),
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
  },
  listPackage: {
    marginBottom: ScreenUtils.scale(8),
  },
  applyBtn: {
    backgroundColor: Themes.colors.primary,
    marginHorizontal: ScreenUtils.scale(16),
    height: ScreenUtils.scale(36),
    borderRadius: ScreenUtils.scale(24),
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: ScreenUtils.scale(15),
  },
  applyTextBtn: {
    ...Themes.font.medium,
    fontSize: 14,
    fontWeight: "600",
    color: Themes.colors.white,
  },
  orderCodeViewItem: {
    height: ScreenUtils.scale(28),
    backgroundColor: Themes.colors.background,
    borderRadius: 14,
    marginRight: ScreenUtils.scale(8),
    padding: ScreenUtils.scale(6),
    flexDirection: "row",
    alignSelf: "center",
  },
});
