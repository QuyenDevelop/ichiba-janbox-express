import { SCREENS } from "@configs";
import { RootStackParamList } from "@navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AnimationImages } from "@themes";
import LottieView from "lottie-react-native";
import React, { FunctionComponent, useEffect } from "react";
import { Text, View } from "react-native";
import styles from "./styles";

type Props = NativeStackScreenProps<RootStackParamList>;

export const LaunchScreen: FunctionComponent<Props> = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(SCREENS.BOTTOM_TAB_NAVIGATION);
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Janbox</Text>
      <LottieView
        style={styles.loadingView}
        autoPlay={true}
        loop={true}
        source={AnimationImages.launchAnimation}
      />
    </View>
  );
};
