import { Themes } from "@themes";
import React, { FunctionComponent } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
interface Props {
  height?: number;
  color?: string;
  style?: ViewStyle;
}
export const Separator: FunctionComponent<Props> = props => {
  const { height, color, style } = props;
  return (
    <View
      style={[
        styles.separator,
        {
          height: height ?? 1,
          backgroundColor: color ?? Themes.colors.background,
        },
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: Themes.colors.background,
    width: "100%",
  },
});
