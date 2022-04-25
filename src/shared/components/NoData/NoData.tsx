import { ScreenUtils } from "@helpers";
import { Button, translate } from "@shared";
import { Icons, Images, Themes } from "@themes";
import React, { FunctionComponent } from "react";
import { Text, TouchableOpacity, View, ViewStyle } from "react-native";
import FastImage from "react-native-fast-image";
import styles from "./style";

interface Props {
  container?: ViewStyle;
  title?: string;
  isButton?: boolean;
  titleButtonGoBack?: string;
  goBack?: () => void;
  content?: string;
  gift?: any;
  buttonTitle?: string;
  onPress?: () => void;
}

export const NoData: FunctionComponent<Props> = props => {
  const {
    title,
    isButton,
    titleButtonGoBack,
    goBack,
    container,
    content,
    gift,
    buttonTitle,
    onPress,
  } = props;
  return (
    <View style={[styles.noDataContainer, container]}>
      {gift ? (
        <FastImage
          source={Images.noGift}
          style={styles.imgNoGift}
          resizeMode={FastImage.resizeMode.cover}
        />
      ) : (
        <FastImage
          source={Images.notificationNoResult}
          style={styles.imageNoResult}
          resizeMode={FastImage.resizeMode.cover}
        />
      )}
      {title && <Text style={styles.noResultTitle}>{translate(title)}</Text>}
      {content ? (
        <Text style={styles.textNodata} numberOfLines={2}>
          {translate(content)}
        </Text>
      ) : null}
      {isButton && (
        <Button
          onPress={goBack ? () => goBack() : () => {}}
          title={translate(titleButtonGoBack)}
          buttonStyle={{ marginTop: ScreenUtils.scale(16) }}
        />
      )}
      {buttonTitle && (
        <TouchableOpacity
          style={styles.touchDetail}
          onPress={onPress ? onPress : () => {}}
        >
          <Text style={styles.packageDetailText}>{buttonTitle}</Text>
          <Icons.FontAwesome5
            name={"arrow-right"}
            color={Themes.colors.white}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};
