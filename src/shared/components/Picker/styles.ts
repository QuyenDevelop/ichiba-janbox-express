import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  inputDefaultContainer: {
    borderBottomWidth: 0.8,
    borderBottomColor: Themes.colors.coolGray,
    flexDirection: "row",
    justifyContent: "center",
  },
  inputErrorContainer: {
    borderBottomWidth: 0.8,
    borderBottomColor: Themes.colors.error,
    flexDirection: "row",
    justifyContent: "center",
  },

  label: {
    ...Themes.font.bold,
    fontSize: 14,
  },
  required: {
    ...Themes.font.bold,
    color: Themes.colors.error,
  },
  error: {
    color: Themes.colors.error,
    ...Themes.font.regular,
    fontSize: 13,
    marginTop: ScreenUtils.scale(8),
  },
  rightIcon: {
    marginLeft: ScreenUtils.scale(12),
    alignSelf: "center",
    marginTop: ScreenUtils.scale(12),
  },
  pickerContainer: {
    flexDirection: "row",
    width: Dimensions.get("window").width,
    justifyContent: "space-between",
  },
  pickButton: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginRight: ScreenUtils.scale(30),
  },
  listPicker: {
    marginTop: ScreenUtils.scale(14),
  },
  radioButton: {
    marginRight: ScreenUtils.scale(8),
  },
  titleRadioButton: {
    ...Themes.font.medium,
    fontSize: 14,
  },
});
