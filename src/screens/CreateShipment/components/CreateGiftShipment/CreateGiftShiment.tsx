import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";
import styles from "./styles";

interface Props {}

export const CreateGiftShipment: FunctionComponent<Props> = props => {
  const {} = props;
  return (
    <View style={styles.container}>
      <Text>CreateGiftShipment</Text>
    </View>
  );
};
