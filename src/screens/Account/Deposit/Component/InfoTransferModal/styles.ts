import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  headerPaymentDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: ScreenUtils.scale(16),
  },
  headerPaymentText: {
    ...Themes.font.medium,
    fontSize: 18,
    lineHeight: 27,
    fontWeight: "700",
    color: Themes.colors.coolGray100,
  },
  content: {
    marginTop: ScreenUtils.scale(16),
    paddingBottom: ScreenUtils.scale(20),
  },
  spaceView: {
    paddingHorizontal: ScreenUtils.scale(16),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: ScreenUtils.scale(16),
  },
  iconBank: {
    height: ScreenUtils.scale(24),
    width: ScreenUtils.scale(70),
  },
  titleRow: {
    ...Themes.font.medium,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "700",
    color: Themes.colors.coolGray60,
  },
  contentRow: {
    ...Themes.font.medium,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "400",
    color: Themes.colors.coolGray100,
  },
  bankName: {
    ...Themes.font.medium,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "700",
    color: Themes.colors.coolGray100,
  },
  bankFullName: {
    ...Themes.font.medium,
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "400",
    color: Themes.colors.coolGray60,
  },
  noticeContainer: {
    backgroundColor: Themes.colors.intro01,
    marginHorizontal: ScreenUtils.scale(16),
    marginVertical: ScreenUtils.scale(16),
    borderRadius: ScreenUtils.scale(16),
    paddingVertical: ScreenUtils.scale(16),
    paddingHorizontal: ScreenUtils.scale(16),
  },
  copyButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  icCopy: {
    marginLeft: ScreenUtils.scale(8),
  },
  amountContainer: {
    alignItems: "center",
  },
  amount: {
    ...Themes.font.currency,
    fontSize: 24,
    lineHeight: 36,
  },
  cancelWithdrawBtn: {
    backgroundColor: Themes.colors.primary,
    marginHorizontal: ScreenUtils.scale(16),
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: ScreenUtils.scale(10),
    borderRadius: ScreenUtils.scale(10),
    paddingHorizontal: ScreenUtils.scale(16),
  },
  backBtn: {
    backgroundColor: Themes.colors.collGray40,
    marginHorizontal: ScreenUtils.scale(16),
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: ScreenUtils.scale(10),
    borderRadius: ScreenUtils.scale(10),
    paddingHorizontal: ScreenUtils.scale(16),
  },
  cancelWithdrawBtnText: {
    ...Themes.font.medium,
    fontSize: 16,
    lineHeight: 24,
    color: Themes.colors.white,
  },
  inputContainer: {
    borderWidth: StyleSheet.hairlineWidth,
    marginHorizontal: ScreenUtils.scale(16),
    paddingHorizontal: ScreenUtils.scale(8),
    paddingVertical: ScreenUtils.scale(8),
    borderRadius: ScreenUtils.scale(10),
  },
  cancelWithdrawInput: {
    ...Themes.font.medium,
    fontSize: 14,
    lineHeight: 21,
  },
  reasonCancelWithdraw: {
    ...Themes.font.medium,
    fontSize: 14,
    lineHeight: 21,
    marginHorizontal: ScreenUtils.scale(16),
    marginBottom: ScreenUtils.scale(8),
  },
  obligatory: {
    ...Themes.font.medium,
    fontSize: 14,
    lineHeight: 21,
    marginHorizontal: ScreenUtils.scale(16),
    marginBottom: ScreenUtils.scale(8),
    color: Themes.colors.danger60,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: ScreenUtils.scale(8),
  },
});
