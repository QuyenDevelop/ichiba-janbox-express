import { CONSTANT } from "@configs";
import { ScreenUtils } from "@helpers";
import { PickerItemsResponse } from "@models";
import { Icon, translate } from "@shared";
import { Icons, Metrics, Themes } from "@themes";
import React, { FunctionComponent } from "react";
import { Text, TouchableOpacity, View, ViewStyle } from "react-native";
import FastImage, { ImageStyle } from "react-native-fast-image";
import Flag from "react-native-flags";
import styles from "./styles";

interface OwnProps {
  item: PickerItemsResponse;
  style?: ViewStyle;
  iconLeftStyle?: ImageStyle;
  onPress: () => void;
  isTranslated: boolean;
  titleColor: string;
  isActive: boolean;
  iconRight: boolean;
  type?: string;
}

type Props = OwnProps;

export const PickerItem: FunctionComponent<Props> = props => {
  const {
    item,
    onPress,
    titleColor,
    isTranslated,
    isActive,
    iconRight,
    style,
    iconLeftStyle,
    type,
  } = props;

  const isHide = () => {
    return false;
  };
  return (
    <>
      {isHide() ? null : (
        <TouchableOpacity
          onPress={onPress ? () => onPress() : () => {}}
          style={[styles.itemContainer, style]}
        >
          {isActive ? (
            <View style={styles.titleContainerActive}>
              <View style={styles.titleContainerLeftActive}>
                {item.icon ? (
                  <FastImage
                    source={item.icon}
                    resizeMode={FastImage.resizeMode.contain}
                    style={[styles.icon, iconLeftStyle]}
                  />
                ) : (
                  item.code &&
                  type === CONSTANT.TYPE_PICKER.LANGUAGES && (
                    <Flag
                      style={{ marginRight: ScreenUtils.scale(10) }}
                      code={item.code}
                      size={32}
                    />
                  )
                )}
                <Text numberOfLines={1} style={[styles.textActive]}>
                  {isTranslated ? item.name : translate(item.name)}
                </Text>
              </View>

              <Icons.Ionicons
                style={styles.iconCheckActive}
                name={"ios-checkmark-sharp"}
                size={Metrics.icons.small}
                color={Themes.colors.primary}
              />
            </View>
          ) : (
            <View style={styles.titleContainer}>
              <View style={styles.titleLeftContainer}>
                {item.icon && type !== CONSTANT.TYPE_PICKER.LANGUAGES ? (
                  <FastImage
                    source={item.icon}
                    resizeMode={FastImage.resizeMode.cover}
                    style={[styles.icon, iconLeftStyle]}
                  />
                ) : (
                  item.code &&
                  type === CONSTANT.TYPE_PICKER.LANGUAGES && (
                    <Flag
                      style={{ marginRight: ScreenUtils.scale(10) }}
                      code={item.code}
                      size={32}
                    />
                  )
                )}
                <Text
                  numberOfLines={1}
                  style={[styles.text, titleColor ? { color: titleColor } : {}]}
                >
                  {isTranslated ? item.name : translate(item.name)}
                </Text>
              </View>
              {iconRight ? (
                <Icon
                  styles={styles.iconCheckActive}
                  name={"ic_long_arrow_right"}
                  size={Metrics.icons.small}
                  color={Themes.colors.coolGray60}
                />
              ) : null}
            </View>
          )}
        </TouchableOpacity>
      )}
    </>
  );
};
