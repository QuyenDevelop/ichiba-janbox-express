import { Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./styles";

export const NewsItem = ({ item }: { item: any }) => {
  return (
    <TouchableOpacity style={styles.containerItems} onPress={() => {}}>
      <Image source={item.image} style={styles.imgStyle} />

      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.detail}>{item.detail}</Text>
    </TouchableOpacity>
  );
};
