import { Icons, Themes } from "@themes";
import React, { FunctionComponent } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

interface Props {
  titleLeft: string;
  titleRight?: string;
  iconLeft?: string;
  iconRight: string;
  onPress?: () => void;
}

export const ShipmentDetailOption: FunctionComponent<Props> = props => {
  const { titleLeft, titleRight, iconRight, onPress } = props;

  const renderLeft = () => {
    return (
      <>
        <Text style={styles.leftContentText}>{titleLeft}</Text>
      </>
    );
  };

  const renderRight = () => {
    return titleRight ? (
      <View style={styles.rightContent}>
        <Text style={styles.rightContentText}>{titleRight}</Text>
        <Icons.MaterialIcons
          name={iconRight}
          size={16}
          color={Themes.colors.coolGray60}
        />
      </View>
    ) : (
      <>
        <Icons.MaterialIcons
          name={iconRight}
          size={16}
          color={Themes.colors.coolGray60}
        />
      </>
    );
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {renderLeft()}
      {renderRight()}
    </TouchableOpacity>
  );
};
