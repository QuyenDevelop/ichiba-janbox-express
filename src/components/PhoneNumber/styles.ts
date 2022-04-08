import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { StyleSheet } from "react-native";

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
  input: {
    ...Themes.font.regular,
    fontSize: 16,
    color: Themes.colors.textPrimary,
    lineHeight: 24,
    alignSelf: "center",
    flex: 1,
    paddingVertical: ScreenUtils.scale(7),
    paddingLeft: ScreenUtils.scale(12),
    marginBottom: ScreenUtils.scale(3),
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
  changeNumberPhoneContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: ScreenUtils.scale(10),
    borderRightWidth: 2,
    borderColor: Themes.colors.colGray20,
  },
  numberContainer: {
    marginRight: ScreenUtils.scale(10),
  },
  numberPhoneText: {
    color: Themes.colors.collGray40,
    ...Themes.font.regular,
    fontSize: 16,
  },
  iconDown: {
    alignSelf: "center",
  },
  rightIcon: {
    marginLeft: ScreenUtils.scale(12),
    alignSelf: "center",
  },
  verifyBtn: {
    borderRadius: 0,
  },
  contentChildren: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    paddingHorizontal: ScreenUtils.scale(12),
  },
  contentTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: ScreenUtils.scale(30),
  },
  normalText: {
    ...Themes.font.medium,
    fontSize: 14,
    alignSelf: "center",
  },
  phoneText: {
    ...Themes.font.medium,
    fontSize: 14,
    alignSelf: "center",
    color: Themes.colors.coolGray60,
  },
  resentContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: ScreenUtils.scale(66),
  },
  resentOTP: {
    ...Themes.font.medium,
    fontSize: 14,
    color: Themes.colors.info60,
  },
  underlineStyleBase: {
    width: ScreenUtils.scale(45),
    height: ScreenUtils.scale(45),
    borderRadius: 5,
    backgroundColor: Themes.colors.colGray10,
    color: Themes.colors.text,
  },
  otpInput: {
    width: "100%",
    height: 150,
  },
});
