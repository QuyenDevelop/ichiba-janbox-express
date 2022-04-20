/* eslint-disable react-native/no-inline-styles */
import { BankIcResponse } from "@models";
import React, { FunctionComponent } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import FastImage from "react-native-fast-image";
import styles from "../styles";
import { HeaderItemBankTransfer } from "./HeaderItemBankTransfer";
interface Props {
  item: BankIcResponse;
  handleSelectBank: (paymentOption: BankIcResponse) => void;
  BankActive: number;
}
export const ItemBankTransfer: FunctionComponent<Props> = ({
  item,
  handleSelectBank,
  BankActive,
}) => {
  return (
    <TouchableOpacity
      style={styles.contentItemBank}
      onPress={() => handleSelectBank(item)}
    >
      <View style={styles.headerItem}>
        <HeaderItemBankTransfer
          active={BankActive}
          onChange={handleSelectBank}
          title={item.bankName}
          type={item}
        />
        <View style={{ alignSelf: "flex-end" }}>
          <FastImage
            source={{ uri: item.picture }}
            resizeMode={FastImage.resizeMode.contain}
            style={styles.iconBank}
          />
        </View>
      </View>
      <Text style={styles.textItemBank}>{item.bankFullName}</Text>
    </TouchableOpacity>
  );
};
