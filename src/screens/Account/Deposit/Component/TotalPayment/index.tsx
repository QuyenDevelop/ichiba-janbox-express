import { Utils } from "@helpers";
import { translate } from "@shared";
import { Icons, Metrics, Themes } from "@themes";
import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";
import styles from "./styles";

interface Props {
  total: number;
  currency?: string;
}

export const TotalPayment: FunctionComponent<Props> = ({ total, currency }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Icons.FontAwesome5
          name="money-check"
          size={Metrics.icons.small}
          color={Themes.colors.info60}
        />
        <Text style={styles.total}>{translate("labelTotalPayment")}</Text>
      </View>
      <Text style={styles.totalValue}>
        {Utils.formatMoneyCurrency(total, currency)}
      </Text>
    </View>
  );
};
