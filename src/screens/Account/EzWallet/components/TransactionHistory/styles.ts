import { ScreenUtils } from "@helpers";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  toolBar: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: ScreenUtils.scale(16),
    paddingVertical: ScreenUtils.scale(8),
  },
  searchButton: {
    width: ScreenUtils.scale(36),
    height: ScreenUtils.scale(36),
    justifyContent: "center",
    alignItems: "center",
  },
  indicator: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  transactionHistory: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
  },
});
