/* eslint-disable react-native/no-inline-styles */
import { ScreenUtils } from "@helpers";
import { Images, Themes } from "@themes";
import React, { FunctionComponent } from "react";
import { Text, TouchableOpacity } from "react-native";
import FastImage from "react-native-fast-image";
import styles from "./styles";

interface Props {
  label?: string;
  item: any;
  index: number;
  dataSelected: any;
  updateDataSelected: Function;
}

export const PickOption: FunctionComponent<Props> = props => {
  const { label, item, dataSelected, updateDataSelected } = props;

  return (
    <TouchableOpacity
      style={[
        styles.pickOption,
        {
          borderWidth: dataSelected && dataSelected.id === item.id ? 1 : 0,
          borderColor:
            dataSelected && dataSelected.id === item.id
              ? Themes.colors.primary
              : Themes.colors.textPrimary,
        },
      ]}
      onPress={() => {
        updateDataSelected(item);
      }}
    >
      <Text
        style={[
          styles.buttonText,
          {
            color:
              dataSelected && dataSelected.id === item.id
                ? Themes.colors.primary
                : Themes.colors.coolGray60,
          },
        ]}
      >
        {label ? label : item.name}
      </Text>
      {dataSelected && dataSelected.id === item.id && (
        <FastImage
          source={Images.pickButton}
          style={{
            width: ScreenUtils.scale(30),
            height: ScreenUtils.scale(30),
            position: "absolute",
            top: 0,
            right: 0,
          }}
        />
      )}
    </TouchableOpacity>
  );
};
