import { SCREENS } from "@configs";
import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { FunctionComponent } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

interface Props {
  props: BottomTabBarButtonProps;
}

export const CreateShipmentButton: FunctionComponent<Props> = ({ props }) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View style={styles.createShipmentContainer}>
      <TouchableOpacity
        {...props}
        onPress={() => {
          navigation.navigate(SCREENS.CREATE_SHIPMENT_STACK, {
            screen: SCREENS.CREATE_SHIPMENT_SCREEN,
          });
        }}
        style={styles.createShipmentButton}
      >
        <Text style={styles.createShipmentText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};
