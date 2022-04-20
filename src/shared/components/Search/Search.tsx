/* eslint-disable react-native/no-inline-styles */
import { ScreenUtils } from "@helpers";
import { Icon } from "@shared";
import { Icons, Metrics, Themes } from "@themes";
import React, { FunctionComponent } from "react";
import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import styles from "./styles";

interface Props extends TextInputProps {
  isShowRightIcon?: boolean;
  rightButton?: boolean;
  iconName?: string;
  iconNameRightButton?: string;
  labelRightButton?: string;
  styleContainer?: Object;
  handlerRightButton?: () => void;
  style?: ViewStyle;
}

export const Search: FunctionComponent<Props> = props => {
  const {
    rightButton,
    iconName,
    iconNameRightButton,
    labelRightButton,
    placeholder,
    styleContainer,
    value,
    onChangeText,
    handlerRightButton,
    style,
  } = props;
  return (
    <View style={{ ...style, flexDirection: "row", alignItems: "center" }}>
      <View style={[styles.searchBarContainer, styleContainer]}>
        <TouchableOpacity style={styles.searchIcon}>
          {iconName && (
            <Icon
              name={iconName}
              size={Metrics.icons.smallSmall}
              color={Themes.colors.coolGray60}
            />
          )}
        </TouchableOpacity>
        <TextInput
          placeholder={placeholder}
          defaultValue={value}
          onChangeText={onChangeText}
          style={styles.input}
          autoFocus={true}
        />
        {value !== "" && (
          <TouchableOpacity
            onPress={
              onChangeText
                ? () => {
                    onChangeText("");
                  }
                : () => {}
            }
            style={styles.iconCancelContainer}
            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          >
            <Icons.MaterialIcons
              name={"cancel"}
              size={Metrics.icons.smallSmall}
              color={Themes.colors.coolGray60}
            />
          </TouchableOpacity>
        )}
      </View>
      {rightButton && (
        <TouchableOpacity
          style={styles.rightButton}
          onPress={handlerRightButton}
        >
          {iconNameRightButton && (
            <Icon
              name={iconNameRightButton}
              size={Metrics.icons.smallSmall}
              color={Themes.colors.info60}
              styles={{ marginRight: ScreenUtils.scale(4) }}
            />
          )}
          {labelRightButton && (
            <Text style={styles.rightButtonText}>{labelRightButton}</Text>
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};
