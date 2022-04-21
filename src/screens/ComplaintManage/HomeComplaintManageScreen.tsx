import { Header, Separator } from "@components";
import { ScreenUtils } from "@helpers";
import { useStatusBar } from "@hooks";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { translate } from "@shared";
import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "./styles";

interface Props {}

export const HomeComplaintManageScreen: FunctionComponent<Props> = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  useStatusBar("dark-content");
  const insets = useSafeAreaInsets();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Header
        title={translate("labelNotification")}
        iconLeftName={["ic_arrow_left"]}
        iconLeftOnPress={[goBack]}
        iconRightName={["ic_search"]}
        iconRightOnPress={[]}
        isCenterTitle
      />
      <Separator height={ScreenUtils.scale(2)} />
      <View style={[styles.container]}>
        <Text> HomeComplaintManageScreen </Text>
      </View>
    </View>
  );
};
