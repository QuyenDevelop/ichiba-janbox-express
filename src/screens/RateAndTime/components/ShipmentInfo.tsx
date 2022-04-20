import { translate } from "@shared";
import React, { FunctionComponent } from "react";
import { Text, TextInput, View } from "react-native";
import styles from "../styles";

interface Props {}

export const ShipmentInfo: FunctionComponent<Props> = props => {
  const {} = props;

  return (
    <View style={styles.shipmentInfo}>
      <View style={styles.shipmentItemInfo}>
        <Text style={styles.subShipmentPiece}>
          {translate("labelPrice", { index: 1 })}
        </Text>
      </View>
      <View style={styles.shipmentItemInfo}>
        <Text style={styles.subShipmentTitle}>{translate("labelWeight")}</Text>
        <View style={styles.itemRight}>
          <TextInput style={styles.itemInput} placeholder="0" />
          <Text style={styles.textSubTitle}>{translate("labelGram")}</Text>
        </View>
      </View>
      <View style={styles.padding}>
        <View style={styles.shipmentTitleContent}>
          <Text style={styles.subShipmentTitle}>
            {translate("labelDimension")}
          </Text>
          <Text style={styles.textSubTitle}>{translate("labelCm")}</Text>
        </View>
        <View style={styles.itemRight}>
          <TextInput style={styles.itemInput} placeholder="0" />
          <TextInput style={styles.itemInput} placeholder="0" />
          <TextInput style={styles.itemInput} placeholder="0" />
        </View>
      </View>
    </View>
  );
};
