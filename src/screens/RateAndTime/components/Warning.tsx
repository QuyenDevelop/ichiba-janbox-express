import { translate } from "@shared";
import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";
import styles from "../styles";

interface Props {}

export const Warning: FunctionComponent<Props> = props => {
  const {} = props;

  return (
    <View style={styles.warningContainer}>
      <View style={styles.warningView}>
        <Text style={styles.warningTitle}>{translate("labelNote")}</Text>
        <Text style={styles.warningText}>{translate("textNote")}</Text>
      </View>
    </View>
  );
};
