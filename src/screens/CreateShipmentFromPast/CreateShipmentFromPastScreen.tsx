import { Header, Separator } from "@components";
import { ScreenUtils } from "@helpers";
import { useStatusBar } from "@hooks";
import { PackageShipmentResponse } from "@models";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Flatlist, translate } from "@shared";
import React, { FunctionComponent } from "react";
import { View } from "react-native";
import { PackageItem } from "./components/PackageItem";
import styles from "./styles";

export const data: Array<PackageShipmentResponse> = [
  {
    id: 1,
    status: true,
  },
  {
    id: 2,
    status: true,
  },
  {
    id: 2,
    status: false,
  },
];

interface Props {}

export const CreateShipmentFromPastScreen: FunctionComponent<Props> = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  useStatusBar("dark-content");

  const renderItem = ({ item }: { item: PackageShipmentResponse }) => {
    return <PackageItem item={item} />;
  };

  const keyExtractor = (item: PackageShipmentResponse, index: number) =>
    `${item.id}_${index}`;

  return (
    <View style={styles.container}>
      <Header
        title={translate("buttonCreateFromPast")}
        iconLeftName={["ic_arrow_left"]}
        iconLeftOnPress={[navigation.goBack]}
        isCenterTitle
        iconRightName={["ic_search", "ic_filter"]}
      />
      <Separator height={ScreenUtils.scale(1)} />
      <View style={styles.children}>
        <Flatlist
          data={data}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};
