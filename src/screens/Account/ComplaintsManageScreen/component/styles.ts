import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  noComplaintsContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: ScreenUtils.scale(73),
  },
  noComplaintsImage: {
    width: ScreenUtils.scale(219),
    height: ScreenUtils.scale(152),
  },
  noComplaintNotification: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: ScreenUtils.scale(48),
    marginBottom: ScreenUtils.scale(46),
    width: ScreenUtils.scale(277),
  },
  titleText: {
    ...Themes.font.bold,
    fontSize: 16,
    color: Themes.colors.textPrimary,
  },
  contentText: {
    ...Themes.font.medium,
    fontSize: 14,
    color: Themes.colors.coolGray60,
    textAlign: "center",
    marginTop: ScreenUtils.scale(8),
  },
  buttonText: {
    ...Themes.font.medium,
    fontSize: 14,
    color: Themes.colors.textPrimary,
    marginLeft: ScreenUtils.scale(15),
  },
  modalContainer: {
    paddingHorizontal: ScreenUtils.scale(20),
    paddingBottom: ScreenUtils.scale(20),
  },
  chooseButton: {
    paddingTop: ScreenUtils.scale(20),
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  ComplaintsItemContainer: {
    paddingTop: ScreenUtils.scale(20),
    paddingHorizontal: ScreenUtils.scale(20),
  },
  ComplaintsItemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ComplaintsItemContent: {
    marginTop: ScreenUtils.scale(8),
  },
  imageContent: {
    width: ScreenUtils.scale(40),
    height: ScreenUtils.scale(40),
    justifyContent: "center",
    alignItems: "center",
  },
  titleContent: {},
  ComplaintsItemText: {
    ...Themes.font.medium,
    fontSize: 16,
    color: Themes.colors.textPrimary,
  },
  ComplaintContentText: {
    ...Themes.font.regular,
    fontSize: 14,
    color: Themes.colors.textPrimary,
  },
  ComplaintsItemDate: {
    marginTop: ScreenUtils.scale(8),
    justifyContent: "center",
    alignItems: "flex-end",
  },
  ComplaintDateText: {},
  ComplaintReviewText: {
    ...Themes.font.regular,
    fontSize: 14,
    color: Themes.colors.coolGray60,
  },
  status: {
    paddingHorizontal: ScreenUtils.scale(12),
    paddingVertical: ScreenUtils.scale(4),
    borderRadius: ScreenUtils.scale(12),
  },
  statusText: {
    ...Themes.font.regular,
    fontSize: 12,
    color: Themes.colors.white,
  },
  ComplaintsSeparator: {
    marginTop: ScreenUtils.scale(24),
  },
});
