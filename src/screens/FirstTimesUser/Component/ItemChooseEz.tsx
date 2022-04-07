import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import styles from "../styles";
interface Props {
  title: string;
  content: string;
  image: any;
}

export const ItemChooseEz: FunctionComponent<Props> = ({
  title,
  content,
  image,
}) => {
  return (
    <View style={styles.itemChooseEz}>
      <FastImage
        source={image}
        resizeMode={FastImage.resizeMode.contain}
        style={styles.imgChooseEz}
      />
      <View style={styles.ContentItemLeft}>
        <Text style={styles.titleContentItem}>{title}</Text>
        <Text style={styles.textDescriptipon}>{content}</Text>
      </View>
    </View>
  );
};
