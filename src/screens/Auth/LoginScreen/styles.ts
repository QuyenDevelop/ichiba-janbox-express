import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingView: {
    position: "absolute",
    bottom: ScreenUtils.scale(70),
    justifyContent: "center",
    alignSelf: "center",
    width: ScreenUtils.scale(120),
    height: ScreenUtils.scale(120),
  },
  childContainer: {
    paddingTop: ScreenUtils.scale(18),
    paddingHorizontal: ScreenUtils.scale(10),
  },
  title: {
    ...Themes.font.bold,
    fontSize: 24,
    color: Themes.colors.textPrimary,
  },
  noAccountContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: ScreenUtils.scale(8),
  },
  noAccount: {
    ...Themes.font.medium,
    fontSize: 14,
    color: Themes.colors.coolGray,
  },
  buttonCreate: {
    ...Themes.font.bold,
    fontSize: 14,
    color: Themes.colors.primary,
    marginLeft: ScreenUtils.scale(4),
  },
  input: {
    marginTop: ScreenUtils.scale(48),
  },
  space: {
    marginTop: ScreenUtils.scale(20),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  forgotPasswordContainer: {},
  forgotPassword: {
    ...Themes.font.regular,
    color: Themes.colors.primary,
  },
  button: {
    marginTop: ScreenUtils.scale(56),
  },
  loginSocialContainer: {
    marginTop: ScreenUtils.scale(16),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  line: {
    width: ScreenUtils.scale(47),
    backgroundColor: Themes.colors.colGray20,
    height: ScreenUtils.scale(2),
  },
  orLogin: {
    ...Themes.font.regular,
    fontSize: 14,
    color: Themes.colors.coolGray60,
    marginHorizontal: ScreenUtils.scale(11),
  },
  buttonSocial: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: ScreenUtils.scale(38),
    height: ScreenUtils.scale(38),
    borderRadius: ScreenUtils.scale(38),
    borderWidth: 2,
  },
  buttonChildStyle: {
    width: "100%",
  },
});

export default styles;
