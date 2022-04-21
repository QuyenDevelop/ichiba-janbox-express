import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import React from "react";
import { Text, View } from "react-native";
import styles from "../styles";

export const InfoDetail = ({
  colorDot,
  title,
  value,
}: {
  colorDot: string;
  title: string;
  value: number;
}) => {
  return (
    <View style={styles.itemContainer}>
      <View
        style={{
          width: ScreenUtils.scale(10),
          height: ScreenUtils.scale(10),
          borderRadius: ScreenUtils.scale(10),
          backgroundColor: colorDot,
        }}
      />
      <Text style={styles.txtItemTitle}>{title}</Text>
      <Text
        style={{
          fontSize: ScreenUtils.scale(14),
          color: Themes.colors.coolGray100,
        }}
      >
        {value}
      </Text>
    </View>
  );
};
