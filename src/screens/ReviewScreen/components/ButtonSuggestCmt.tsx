/* eslint-disable no-sparse-arrays */
import { Themes } from "@themes";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../styles";

export const ButtonSuggestCmt = () => {
  const [suggestCmt] = useState([
    { id: 1, txt: "Great quality" },
    { id: 2, txt: "Fast delivery" },
    { id: 3, txt: "Good price" },
    { id: 4, txt: "Trustworthy, enthusiastic" },
    ,
  ]);
  const [checkChooseSuggest, setChooseSuggest] = useState(null);
  return (
    <View style={styles.suggestContainer}>
      {suggestCmt.map((item, key) => {
        return (
          <TouchableOpacity
            key={item?.id}
            onPress={() => {
              setChooseSuggest(key);
            }}
            style={
              checkChooseSuggest === key
                ? [
                    styles.btnSuggest,
                    { backgroundColor: Themes.colors.orangeF27 },
                  ]
                : styles.btnSuggest
            }
          >
            <Text>{item?.txt}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
