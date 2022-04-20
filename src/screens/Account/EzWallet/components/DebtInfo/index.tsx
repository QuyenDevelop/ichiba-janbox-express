import { NoData } from "@shared";
import React from "react";
import { View } from "react-native";
import styles from "./styles";
export const DebtInfo = () => {
  return (
    <View style={styles.container}>
      <NoData title="label.noDataService" />
    </View>
  );
};
