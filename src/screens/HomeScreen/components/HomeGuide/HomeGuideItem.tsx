import { Images } from "@themes";
import React, { FunctionComponent } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import FastImage from "react-native-fast-image";
import styles from "./styles";

export interface GuideItem {
  id: number;
  title: string;
  image: any;
}

interface Props {
  item: GuideItem;
  router: (id: number) => void;
}

export const HomeGuideItem: FunctionComponent<Props> = props => {
  const { item, router } = props;
  const onPress = () => {
    router(item.id);
  };
  return (
    <TouchableOpacity style={styles.webItemContainer} onPress={onPress}>
      <FastImage
        source={Images.notificationSample}
        style={styles.imageContent}
      />
      <View style={styles.titleContent}>
        <Text style={styles.webText} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
