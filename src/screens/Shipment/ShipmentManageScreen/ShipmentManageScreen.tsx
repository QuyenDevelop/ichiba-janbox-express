import { Separator, TopBarSearchResult } from "@components";
import { ScreenUtils } from "@helpers";
import { useAppSelector, useStatusBar } from "@hooks";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { translate } from "@shared";
import React, { FunctionComponent, useEffect } from "react";
import { Text, View } from "react-native";
import styles from "./styles";

interface Props {}

export const ShipmentManageScreen: FunctionComponent<Props> = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  useStatusBar("dark-content");
  const language = useAppSelector(state => state.user.language);

  useEffect(() => {}, [language]);

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={[styles.container]}>
      <TopBarSearchResult
        title={translate("titleShipmentManage")}
        goBack={goBack}
        onSearch={() => {}}
        onFilter={() => {}}
      />
      <Separator height={ScreenUtils.scale(2)} />
      <View style={[styles.container]}>
        <Text> Shipment Manage</Text>
      </View>
    </View>
  );
};
