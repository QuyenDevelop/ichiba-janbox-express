import { Icons, Themes } from "@themes";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import styles from "../styles";

export const CustomRatingBar = () => {
  const [defaultRating, setDefaultRating] = useState(1);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  return (
    <View style={styles.customRatingBarStyle}>
      {maxRating.map((item, key) => {
        return (
          <TouchableOpacity
            activeOpacity={0.7}
            key={item}
            onPress={() => setDefaultRating(item)}
          >
            <Icons.FontAwesome
              style={styles.betweenStar}
              name="star"
              size={37}
              color={
                item <= defaultRating
                  ? Themes.colors.orangeF27
                  : Themes.colors.colGray20
              }
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
