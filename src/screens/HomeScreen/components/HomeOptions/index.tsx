import { CONSTANT, SCREENS } from "@configs";
import { ItemHomeMenu } from "@models";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { translate } from "@shared";
import { Themes } from "@themes";
import React, { FunctionComponent, useCallback } from "react";
import { FlatList, ScrollView } from "react-native";
import { HomeOptionItem } from "./HomeOptionItem";
import styles from "./styles";

export const HomeOptions: FunctionComponent = () => {
  const menuConstants: Array<ItemHomeMenu> = [
    {
      title: translate("buttonCreateShipment"),
      iconName: "",
      headerColor: Themes.colors.red10,
      ref: CONSTANT.MENU_CONSTANT.CREATE_SHIPMENT,
    },
    {
      title: translate("buttonCreateFromPast"),
      iconName: "",
      headerColor: Themes.colors.menuGreenBrand,
      ref: CONSTANT.MENU_CONSTANT.CREATE_FROM_PAST,
    },
    {
      title: translate("buttonWarehouse"),
      iconName: "",
      headerColor: Themes.colors.menuWarehouse,
      ref: CONSTANT.MENU_CONSTANT.WAREHOUSE,
    },
    {
      title: translate("buttonShipmentManage"),
      iconName: "",
      headerColor: Themes.colors.menuManage,
      ref: CONSTANT.MENU_CONSTANT.SHIPMENT_MANAGE,
    },
    {
      title: translate("buttonRateAndTime"),
      iconName: "",
      headerColor: Themes.colors.menuRate,
      ref: CONSTANT.MENU_CONSTANT.RATE_TIME,
    },
    {
      title: translate("buttonAnalytics"),
      iconName: "",
      headerColor: Themes.colors.red10,
      ref: CONSTANT.MENU_CONSTANT.ANALYTIC,
    },
  ];
  const navigation = useNavigation<StackNavigationProp<any>>();

  const gotoSomewhere = useCallback(
    (ref: string) => {
      switch (ref) {
        case CONSTANT.MENU_CONSTANT.CREATE_SHIPMENT:
          navigation.navigate(SCREENS.CREATE_SHIPMENT_STACK, {
            screen: SCREENS.CREATE_SHIPMENT_SCREEN,
          });
          break;
        case CONSTANT.MENU_CONSTANT.CREATE_FROM_PAST:
          () => {};
          break;
        case CONSTANT.MENU_CONSTANT.WAREHOUSE:
          () => {};
          break;
        case CONSTANT.MENU_CONSTANT.SHIPMENT_MANAGE:
          navigation.navigate(SCREENS.SHIPMENT_STACK, {
            screen: SCREENS.SHIPMENT_MANAGE_SCREEN,
          });
          break;
        case CONSTANT.MENU_CONSTANT.RATE_TIME:
          () => {};
          break;
        case CONSTANT.MENU_CONSTANT.ANALYTIC:
          () => {};
          break;
      }
    },
    [navigation],
  );

  const renderItem = ({ item }: { item: ItemHomeMenu }) => {
    return <HomeOptionItem item={item} router={gotoSomewhere} />;
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      horizontal
      scrollEnabled={false}
    >
      <FlatList
        data={menuConstants}
        keyExtractor={(item, index) => `${item.ref}_${index}`}
        renderItem={renderItem}
        numColumns={3}
        scrollEnabled={false}
      />
    </ScrollView>
  );
};
