import { FastImageLoading } from "@components";
import { BannerResponse } from "@models";
import { Images } from "@themes";
import React, { FunctionComponent, useEffect, useState } from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  View,
  ViewStyle,
} from "react-native";
import FastImage, { ImageStyle } from "react-native-fast-image";
import styles from "./styles";

interface OwnProps {
  style?: ViewStyle;
  styleImage?: ImageStyle;
  items: Array<BannerResponse>;
}

type Props = OwnProps;

export const Banner: FunctionComponent<Props> = props => {
  const { style, items } = props;

  const [active, setActive] = useState<number>(0);

  const change = (syntheticEvent: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (syntheticEvent.nativeEvent) {
      const slide = Math.ceil(
        syntheticEvent.nativeEvent?.contentOffset.x /
          syntheticEvent.nativeEvent?.layoutMeasurement.width,
      );
      if (slide !== active) {
        setActive(slide);
      }
    }
  };

  useEffect(() => {}, [active]);

  return (
    <View style={[styles.bannerContainer, style]}>
      <ScrollView
        pagingEnabled={true}
        horizontal={true}
        onScroll={change}
        showsHorizontalScrollIndicator={false}
        style={styles.scroll}
        scrollEventThrottle={16}
      >
        {items.map((image, index) => (
          <FastImageLoading
            key={index}
            sourceLoading={Images.bannerDefault}
            source={{ uri: image.imageFullUrl }}
            style={styles.banner}
            resizeMode={FastImage.resizeMode.cover}
          />
        ))}
      </ScrollView>
      <View style={styles.paginationContainer}>
        {items.map((i, k) => (
          <View
            key={k}
            style={
              k === active
                ? styles.paginationContainerActive
                : styles.paginationItemContainer
            }
          />
        ))}
      </View>
    </View>
  );
};
