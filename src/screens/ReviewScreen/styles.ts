import { StyleSheet } from "react-native";
import { ScreenUtils } from "@helpers";
import { Themes, FontFamily } from "@themes";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.colors.white,
  },
  settingBtn: {
    backgroundColor: Themes.colors.bP60,
    marginBottom: ScreenUtils.scale(20),
    marginHorizontal: ScreenUtils.scale(50),
    paddingVertical: ScreenUtils.scale(10),
    borderRadius: ScreenUtils.scale(5),
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: { paddingHorizontal: ScreenUtils.scale(24) },
  settingBtnText: {
    color: Themes.colors.white,
    fontFamily: FontFamily.bold,
  },
  imgStyle: {
    resizeMode: "cover",
    width: "100%",
    borderRadius: ScreenUtils.scale(12),
    marginBottom: ScreenUtils.scale(12),
  },
  containerItems: {
    marginBottom: ScreenUtils.scale(15),
    backgroundColor: Themes.colors.white,
    borderRadius: ScreenUtils.scale(12),
    borderColor: Themes.colors.surface,
    shadowColor: Themes.colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: ScreenUtils.scale(12),
    elevation: 3,
  },
  title: {
    fontSize: 14,
    lineHeight: 14,
    fontFamily: FontFamily.medium,
    color: Themes.colors.coolGray100,
    marginVertical: ScreenUtils.scale(8),
    marginHorizontal: ScreenUtils.scale(16),
  },
  detail: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: FontFamily.regular,
    color: Themes.colors.coolGray60,
    marginHorizontal: ScreenUtils.scale(16),
    marginBottom: ScreenUtils.scale(12),
  },
  customRatingBarStyle: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: ScreenUtils.scale(8),
  },
  suggestContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: ScreenUtils.scale(16),
  },
  btnSuggest: {
    padding: ScreenUtils.scale(10),
    backgroundColor: Themes.colors.colGray10,
    borderRadius: ScreenUtils.scale(20),
    margin: ScreenUtils.scale(4),
    alignItems: "center",
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: ScreenUtils.scale(37),
  },
  txtTitle: {
    fontFamily: FontFamily.bold,
    fontSize: ScreenUtils.scale(18),
    color: Themes.colors.coolGray100,
  },
  txtDescription: {
    marginTop: ScreenUtils.scale(30),
    fontFamily: FontFamily.bold,
    fontSize: ScreenUtils.scale(14),
    color: Themes.colors.coolGray100,
  },
  inputContainer: {
    width: "100%",
    height: 111,
    borderWidth: ScreenUtils.scale(0.4),
    borderColor: Themes.colors.colGray20,
    alignSelf: "center",
    borderRadius: ScreenUtils.scale(8),
    marginTop: ScreenUtils.scale(5),
  },
  maxCharacter: {
    marginVertical: ScreenUtils.scale(10),
  },
  betweenStar: { marginHorizontal: ScreenUtils.scale(5) },
  closeImg: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: "red",
    marginLeft: ScreenUtils.scale(60),
    position: "absolute",
  },
  containerImg: {
    flexDirection: "row",
  },
  txtInput: { paddingVertical: 5 },
  txtClose: { color: "white" },
  imgUpload: {
    width: 88,
    height: 88,
    borderRadius: ScreenUtils.scale(10),
    marginTop: ScreenUtils.scale(7),
  },
  imgSubContainer: {
    flex: 1,
    width: 100,
    height: 100,
  },
  btnSubmitReview: {
    paddingVertical: ScreenUtils.scale(14),
    backgroundColor: Themes.colors.orangeF27,
    borderRadius: ScreenUtils.scale(8),
    justifyContent: "center",
    alignItems: "center",
    marginTop: ScreenUtils.scale(18),
    marginBottom: ScreenUtils.scale(15),
  },
  txtSubmitReview: {
    ...Themes.font.semiBold,
    fontSize: ScreenUtils.scale(14),
    color: Themes.colors.white,
  },
});
