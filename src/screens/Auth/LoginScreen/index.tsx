import { RootStackParamList } from "@navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";
import styles from "./styles";

type Props = NativeStackScreenProps<RootStackParamList>;

export const LoginScreen: FunctionComponent<Props> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Janbox Login</Text>
    </View>
  );
};
