import { SCREENS } from "@configs";
import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import React, { FunctionComponent } from "react";
import { Text, TouchableOpacity } from "react-native";

interface Props {
  props: BottomTabBarButtonProps;
}

export const CreateShipmentButton: FunctionComponent<Props> = ({ props }) => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      {...props}
      onPress={() => {
        navigation.navigate(SCREENS.DETAIL_SCREEN);
      }}
    >
      <Text>ok</Text>
    </TouchableOpacity>
  );
};
