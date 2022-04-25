import {
  DetailFee,
  OrderPackageCollectionResponse,
  OrderService,
} from "@models";
import React, { FunctionComponent } from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import styles from "./styles";

interface Props {
  order?: OrderPackageCollectionResponse;
  showDetailsFeeModal?: () => void;
  updateFeeDetails?: (value: DetailFee[]) => void;
  isChecked: boolean;
  onCheck: (order: OrderPackageCollectionResponse) => void;
  existOrderExpire?: boolean;
  services?: OrderService[];
  showSuccessModal?: () => void;
}

export const ItemOrder: FunctionComponent<Props> = props => {
  const {} = props;

  const goToDetail = () => {};

  return (
    <TouchableWithoutFeedback onPress={goToDetail}>
      <View style={styles.itemOderLayout}>
        <Text>abc</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
