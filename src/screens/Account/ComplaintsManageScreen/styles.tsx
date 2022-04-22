import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.colors.white,
  },
  childContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  input: {
    marginTop: ScreenUtils.scale(32),
    marginHorizontal: ScreenUtils.scale(20),
  },
  label: {
    ...Themes.font.bold,
    fontSize: 14,
  },
  noFileChoose: {
    ...Themes.font.medium,
    fontSize: 12,
  },
  attachFileContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    marginTop: ScreenUtils.scale(32),
    marginHorizontal: ScreenUtils.scale(20),
  },
  uploadFileButton: {
    backgroundColor: Themes.colors.colGray10,
    height: ScreenUtils.scale(35),
    paddingHorizontal: ScreenUtils.scale(12),
    marginRight: ScreenUtils.scale(24),
  },
  uploadFileButtonTitle: {
    color: Themes.colors.coolGray60,
  },
  attachFileContent: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: ScreenUtils.scale(20),
  },
  textArea: {
    borderWidth: 1,
    borderColor: Themes.colors.colGray20,
    paddingHorizontal: ScreenUtils.scale(15),
    paddingTop: ScreenUtils.scale(10),
    paddingBottom: ScreenUtils.scale(10),
    marginTop: ScreenUtils.scale(12),
    ...Platform.select({
      ios: {
        minHeight: ScreenUtils.scale(100),
      },
      android: {
        minHeight: ScreenUtils.scale(40),
      },
    }),
    ...Themes.font.medium,
    fontSize: 14,
    color: Themes.colors.textPrimary,
  },
  addComplaintButton: {
    marginVertical: ScreenUtils.scale(32),
  },
  image: {
    width: ScreenUtils.scale(75),
    height: ScreenUtils.scale(75),
    marginRight: ScreenUtils.scale(5),
  },
});
