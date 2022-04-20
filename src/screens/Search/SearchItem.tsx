import { Icon, translate } from "@shared";
import { Metrics, Themes } from "@themes";
import React, { FunctionComponent } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export interface SearchItemResponse {
  shipmentId: string;
  ref: string;
  date: string;
}

interface Props {
  item: SearchItemResponse;
  router: (id: string) => void;
}

export const SearchItem: FunctionComponent<Props> = props => {
  const { item, router } = props;
  const onPress = () => {
    router(item.shipmentId);
  };
  return (
    <TouchableOpacity style={styles.ItemContainer} onPress={onPress}>
      <View style={styles.titleContent}>
        <Text style={styles.titleId}>{item.shipmentId}</Text>
        <Text style={styles.titleRef}>{`${translate("textRef")} ${
          item.ref
        }`}</Text>
        <Text style={styles.titleDate}>{item.date}</Text>
      </View>
      <TouchableOpacity>
        <Icon
          name={"ic_close"}
          size={Metrics.icons.small}
          color={Themes.colors.coolGray80}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
