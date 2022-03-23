import { SCREENS } from "@configs";
import { RootStackParamList } from "@navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { FunctionComponent, useEffect } from "react";
import { Text, View } from "react-native";
import styles from "./styles";

type Props = NativeStackScreenProps<RootStackParamList>;

export const ForgotPasswordScreen: FunctionComponent<Props> = ({
  navigation,
}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(SCREENS.BOTTOM_TAB_NAVIGATION);
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Janbox Forgot Password</Text>
    </View>
  );
};
