import { Header, Separator } from "@components";
import { ScreenUtils } from "@helpers";
import { useStatusBar } from "@hooks";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { translate } from "@shared";
import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";
import styles from "./styles";

interface Props {}

export const AnalyticScreen: FunctionComponent<Props> = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  useStatusBar("dark-content");

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={[styles.container]}>
      <Header
        title={translate("buttonAnalytics")}
        iconLeftName={["ic_arrow_left"]}
        iconLeftOnPress={[goBack]}
        isCenterTitle
      />
      <Separator height={ScreenUtils.scale(2)} />
      <View style={[styles.container]}>
        <Text> Analytic</Text>
      </View>
    </View>
  );
};
