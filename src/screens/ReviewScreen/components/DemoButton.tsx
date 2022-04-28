import { ScreenUtils } from "@helpers";
import { Icons, Themes } from "@themes";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from "react-native";

interface Props {
  onPress: () => void;
}

export function DemoButton({
  onPress,
  children,
}: React.PropsWithChildren<Props>) {
  return (
    <TouchableOpacity style={styles.btnPhotos} onPress={onPress}>
      <Icons.FontAwesome name="camera" size={24} />
      <Text>{children}</Text>
    </TouchableOpacity>
  );
}

interface Styles {
  container: ViewStyle;
  text: TextStyle;
  btnPhotos: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 45,
    minWidth: "45%",
    maxWidth: "100%",
    marginHorizontal: 8,
    marginVertical: 4,
    borderRadius: 8,
  },
  text: {
    textAlign: "center",
    color: "white",
  },
  btnPhotos: {
    marginVertical: ScreenUtils.scale(25),
    flexDirection: "row",
    paddingVertical: ScreenUtils.scale(10),
    width: ScreenUtils.WIDTH_SCREEN / 2.5,
    borderRadius: ScreenUtils.scale(8),
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: Themes.colors.colGray20,
  },
});
