import { Header, Separator } from "@components";
import { ScreenUtils } from "@helpers";
import { useStatusBar } from "@hooks";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { translate } from "@shared";
import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";
import styles from "./styles";

interface Props {}

export const CustomerCareScreen: FunctionComponent<Props> = () => {
  useStatusBar("dark-content");
  const navigation = useNavigation<StackNavigationProp<any>>();
  return (
    <View style={[styles.container]}>
      <Header
        title={translate("label.complaints")}
        iconLeftName={["ic_arrow_left"]}
        iconLeftOnPress={[() => navigation.goBack()]}
        isCenterTitle
      />
      <Separator height={ScreenUtils.scale(1)} />
      <View style={styles.childContainer}>
        <Text>Đang phát triển</Text>
      </View>
    </View>
  );
};
