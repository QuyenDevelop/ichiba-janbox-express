import { Themes } from "@themes";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  childContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: Themes.colors.white,
  },
  headerTitle: {
    ...Themes.font.semiBold,
    fontSize: 18,
    color: Themes.colors.coolGray100,
  },
});
