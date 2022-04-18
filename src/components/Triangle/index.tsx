import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import React, { FunctionComponent } from "react";
import { StyleSheet, View } from "react-native";

interface Props {}

export const Triangle: FunctionComponent<Props> = props => {
  const {} = props;
  return (
    <View style={styles.triangle}>
      <View style={styles.triangleItem}>
        <View style={styles.triangleLeft} />
      </View>
      <View style={styles.triangleItem}>
        <View style={styles.triangleRight} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  triangle: {
    flexDirection: "row",
  },
  triangleItem: {
    width: ScreenUtils.WIDTH_SCREEN / 2,
  },
  triangleLeft: {
    // backgroundColor: Themes.colors.white,
    position: "absolute",
    right: 0,
    bottom: 0,
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderRightWidth: ScreenUtils.WIDTH_SCREEN / 2,
    borderLeftWidth: 0,
    borderBottomWidth: ScreenUtils.scale(40),
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: Themes.colors.white,
  },
  triangleRight: {
    // backgroundColor: Themes.colors.white,
    position: "absolute",
    right: 0,
    bottom: 0,
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderRightWidth: 0,
    borderLeftWidth: ScreenUtils.WIDTH_SCREEN / 2,
    borderBottomWidth: ScreenUtils.scale(40),
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: Themes.colors.white,
  },
});
