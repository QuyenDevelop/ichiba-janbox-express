import { ItemHomeMenu } from "@models";
import React, { FunctionComponent } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

interface Props {
  item: ItemHomeMenu;
  router: (page: string) => void;
}

export const HomeOptionItem: FunctionComponent<Props> = props => {
  const { item, router } = props;
  const onPress = () => {
    router(item.ref);
  };
  return (
    <TouchableOpacity style={styles.webItemContainer} onPress={onPress}>
      <View
        style={[styles.imageContent, { backgroundColor: item.headerColor }]}
      >
        <Image source={item.iconName} />
      </View>
      <View style={styles.titleContent}>
        <Text style={styles.webText}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
