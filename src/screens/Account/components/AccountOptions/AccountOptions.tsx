/* eslint-disable react-native/no-inline-styles */
import { Icon } from "@shared";
import { Icons, Metrics, Themes } from "@themes";
import React, { FunctionComponent } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

interface Props {
  iconLeftName?: string;
  iconLeftColor?: string;
  icon?: any;
  title: string;
  subTitle?: string;
  rightTitle?: string;
  iconRightName: string;
  iconRightColor?: string;
  onPress?: () => void;
}

export const AccountOptions: FunctionComponent<Props> = props => {
  const {
    iconLeftName,
    iconLeftColor,
    icon,
    title,
    subTitle,
    rightTitle,
    iconRightName,
    iconRightColor,
    onPress,
  } = props;
  const renderTitle = () => {
    return subTitle ? (
      <View style={{ flexDirection: "column" }}>
        <Text style={styles.optionTitle}>{title}</Text>
        <Text style={styles.optionSubTitle}>{subTitle}</Text>
      </View>
    ) : (
      <Text style={styles.optionTitle}>{title}</Text>
    );
  };
  const renderRight = () => {
    return rightTitle ? (
      <View style={styles.swapperOptionRightItem}>
        <Text>{rightTitle}</Text>
        <View style={styles.iconRight}>
          <Icons.MaterialIcons
            name={iconRightName}
            size={Metrics.icons.smallSmall}
            color={iconRightColor ? iconRightColor : Themes.colors.coolGray60}
          />
        </View>
      </View>
    ) : (
      <View style={styles.iconRight}>
        <Icons.MaterialIcons
          name={iconRightName}
          size={Metrics.icons.smallSmall}
          color={iconRightColor ? iconRightColor : Themes.colors.coolGray60}
        />
      </View>
    );
  };
  return (
    <View style={styles.optionWrapper}>
      <TouchableOpacity
        onPress={onPress ? onPress : () => {}}
        style={styles.buttonOption}
      >
        <View style={styles.swapperOptionItem}>
          {icon ? (
            <View style={styles.icons}>{icon()}</View>
          ) : (
            iconLeftName && (
              <View style={styles.icons}>
                <Icon
                  name={iconLeftName}
                  size={Metrics.icons.smallSmall}
                  color={
                    iconLeftColor ? iconLeftColor : Themes.colors.coolGray60
                  }
                />
              </View>
            )
          )}
          {renderTitle()}
        </View>
        {renderRight()}
      </TouchableOpacity>
    </View>
  );
};
