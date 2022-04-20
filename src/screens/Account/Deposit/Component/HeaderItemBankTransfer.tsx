import { BankIcResponse } from "@models";
import { RadioButton } from "@shared";
import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";
import styles from "../styles";

interface OwnProps {
  active: number;
  onChange: (paymentOption: BankIcResponse) => void;
  title: string;
  type: BankIcResponse;
}

type Props = OwnProps;

export const HeaderItemBankTransfer: FunctionComponent<Props> = props => {
  const { active, onChange, title, type } = props;

  return (
    <View style={styles.flexRow}>
      <RadioButton
        checked={active === type.id}
        onChange={() => onChange(type)}
      />
      <Text style={styles.titleHeader}>{title}</Text>
    </View>
  );
};
