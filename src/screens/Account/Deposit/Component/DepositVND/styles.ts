import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  currencyInput: {
    ...Themes.font.currency,
    fontSize: 20,
    lineHeight: 24,
    color: Themes.colors.coolGray60,
  },
  paymentMethodTitle: {
    ...Themes.font.medium,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "700",
    color: Themes.colors.coolGray100,
    marginTop: ScreenUtils.scale(16),
    marginBottom: ScreenUtils.scale(12),
  },
  titleInputDeposit: {
    ...Themes.font.medium,
    fontSize: 12,
    lineHeight: 18,
    color: Themes.colors.textPrimary,
    fontWeight: "700",
    marginTop: ScreenUtils.scale(24),
  },
  content: {
    paddingHorizontal: ScreenUtils.scale(20),
  },
  textInput: {
    width: "95%",
    color: Themes.colors.textPrimary,
    fontSize: 14,
    ...Themes.font.regular,
    lineHeight: 21,
  },
  secureLabel: {
    ...Themes.font.medium,
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "400",
    color: Themes.colors.coolGray60,
    marginTop: ScreenUtils.scale(4),
    marginLeft: ScreenUtils.scale(25),
  },
  icon: {
    marginTop: ScreenUtils.scale(4),
    marginLeft: ScreenUtils.scale(25),
  },
  bankInfo: {
    marginLeft: ScreenUtils.scale(25),
  },
  bankSeparator: {
    marginTop: ScreenUtils.scale(12),
  },
  footer: {
    bottom: 0,
    position: "absolute",
    width: "100%",
    paddingHorizontal: ScreenUtils.scale(20),
    paddingBottom: ScreenUtils.scale(20),
    backgroundColor: Themes.colors.white,
  },
  buttonSubMit: {
    height: ScreenUtils.scale(40),
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Themes.colors.primary,
    borderRadius: 20,
  },
  textSubmit: {
    fontSize: 14,
    lineHeight: 24,
    ...Themes.font.semiBold,
    color: Themes.colors.white,
  },
  warning: {
    fontSize: 14,
    lineHeight: 21,
    ...Themes.font.semiBold,
    color: Themes.colors.danger60,
    marginTop: ScreenUtils.scale(4),
  },
  paymentFee: {
    fontSize: 14,
    lineHeight: 21,
    ...Themes.font.semiBold,
    color: Themes.colors.coolGray60,
    marginTop: ScreenUtils.scale(4),
  },
});
