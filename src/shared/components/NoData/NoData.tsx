import { ScreenUtils } from "@helpers";
import { Button, translate } from "@shared";
import { Images } from "@themes";
import React, { FunctionComponent } from "react";
import { Text, View, ViewStyle } from "react-native";
import FastImage from "react-native-fast-image";
import styles from "./style";

interface Props {
  container?: ViewStyle;
  title: string;
  isButton?: boolean;
  titleButtonGoBack?: string;
  goBack?: () => void;
  content?: string;
  gift?: any;
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
      <Text style={styles.noResultTitle}>{translate(title)}</Text>
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
    </View>
  );
};
