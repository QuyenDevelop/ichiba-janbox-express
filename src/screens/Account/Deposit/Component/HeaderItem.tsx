import { RadioButton, translate } from "@shared";
import React, { FunctionComponent } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../styles";

interface Props {
  paymentOption: string;
  onChange: (paymentOption: string) => void;
  title: string;
  type: string;
  disable?: boolean;
  paymentFee?: string;
}

export const HeaderItem: FunctionComponent<Props> = ({
  paymentOption,
  onChange,
  title,
  type,
  disable,
  paymentFee,
}) => {
  return (
    <TouchableOpacity
      style={styles.flexRow}
      onPress={() => onChange(type)}
      disabled={disable}
    >
      <RadioButton
        checked={paymentOption === type}
        onChange={() => onChange(type)}
        disable={disable}
      />
      <Text style={styles.titleHeader} numberOfLines={1} ellipsizeMode="tail">
        {title}
      </Text>
      {!!paymentFee && (
        <View style={styles.transactionFee}>
          <Text style={styles.paymentTitle}>
            {translate("labelTransactionFee")}:{" "}
            <Text style={styles.paymentFee}>{paymentFee}</Text>
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};
