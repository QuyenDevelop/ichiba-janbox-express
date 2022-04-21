import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.colors.white,
  },
  withdrawBtn: {
    width: "100%",
  },
  balanceView: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: ScreenUtils.scale(16),
  },
  normalText16: {
    ...Themes.font.medium,
    fontSize: 16,
    fontWeight: "500",
    color: Themes.colors.coolGray60,
  },
  balanceText: {
    ...Themes.font.currency,
    fontSize: 24,
    fontWeight: "500",
    color: Themes.colors.textPrimary,
    marginTop: ScreenUtils.scale(8),
  },
  title: {
    margin: 24,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  error: {
    ...Themes.font.medium,
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
    marginBottom: ScreenUtils.scale(24),
  },
  input: {
    height: ScreenUtils.scale(50),
    flex: 1,
    paddingVertical: 0,
    fontSize: 14,
    ...Themes.font.medium,
  },
  normalText: {
    fontSize: 14,
    ...Themes.font.medium,
  },
  inputContainer: {
    flexDirection: "column",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Themes.colors.collGray40,
    marginBottom: ScreenUtils.scale(16),
  },
  form: {
    marginHorizontal: ScreenUtils.scale(16),
  },
  inputTitle: {
    ...Themes.font.medium,
    fontSize: 12,
    color: Themes.colors.coolGray100,
    fontWeight: "700",
  },
  selectInput: {
    flexDirection: "row",
    alignItems: "center",
    height: ScreenUtils.scale(50),
  },
  bankBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bankName: {
    fontSize: 14,
    ...Themes.font.medium,
    color: Themes.colors.coolGray100,
    paddingVertical: ScreenUtils.scale(15),
  },
});
