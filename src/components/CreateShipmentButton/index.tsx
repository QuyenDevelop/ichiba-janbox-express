import { SCREENS } from "@configs";
import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Icon } from "@shared";
import { Metrics, Themes } from "@themes";
import React, { FunctionComponent } from "react";
import { TouchableOpacity, View } from "react-native";
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
        <Icon
          name={"ic_plus"}
          size={Metrics.icons.large}
          color={Themes.colors.white}
        />
      </TouchableOpacity>
    </View>
  );
};
