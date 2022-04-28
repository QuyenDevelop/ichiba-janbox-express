import { CONSTANT, SCREENS } from "@configs";
import { ItemHomeMenu } from "@models";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { translate } from "@shared";
import { Images, Themes } from "@themes";
import React, { FunctionComponent, useCallback } from "react";
import { FlatList, ScrollView } from "react-native";
import { HomeOptionItem } from "./HomeOptionItem";
import styles from "./styles";

export const HomeOptions: FunctionComponent = () => {
  const menuConstants: Array<ItemHomeMenu> = [
    {
      title: translate("buttonCreateShipment"),
      iconName: Images.icCreateShipment,
      headerColor: Themes.colors.red10,
      ref: CONSTANT.MENU_CONSTANT.CREATE_SHIPMENT,
    },
    {
      title: translate("buttonCreateFromPast"),
      iconName: Images.icCreateFromPast,
      headerColor: Themes.colors.menuGreenBrand,
      ref: CONSTANT.MENU_CONSTANT.CREATE_FROM_PAST,
    },
    {
      title: translate("buttonWarehouse"),
      iconName: Images.icWarehouse,
      headerColor: Themes.colors.menuWarehouse,
      ref: CONSTANT.MENU_CONSTANT.WAREHOUSE,
    },
    {
      title: translate("buttonShipmentManage"),
      iconName: Images.icShipmentManage,
      headerColor: Themes.colors.menuManage,
      ref: CONSTANT.MENU_CONSTANT.SHIPMENT_MANAGE,
    },
    {
      title: translate("buttonRateAndTime"),
      iconName: Images.icRateTime,
      headerColor: Themes.colors.menuRate,
      ref: CONSTANT.MENU_CONSTANT.RATE_TIME,
    },
    {
      title: translate("buttonAnalytics"),
      iconName: Images.icAnalytic,
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
            params: {},
          });
          break;
        case CONSTANT.MENU_CONSTANT.CREATE_FROM_PAST:
          navigation.navigate(SCREENS.CREATE_SHIPMENT_FROM_PAST_SCREEN);
          break;
        case CONSTANT.MENU_CONSTANT.WAREHOUSE:
          navigation.navigate(SCREENS.WAREHOUSE_STACK, {
            screen: SCREENS.WAREHOUSE_SCREEN,
          });
          break;
        case CONSTANT.MENU_CONSTANT.SHIPMENT_MANAGE:
          navigation.navigate(SCREENS.SHIPMENT_STACK, {
            screen: SCREENS.SHIPMENT_MANAGE_SCREEN,
          });
          break;
        case CONSTANT.MENU_CONSTANT.RATE_TIME:
          navigation.navigate(SCREENS.RATE_TIME_STACK, {
            screen: SCREENS.RATE_TIME_SCREEN,
          });
          break;
        case CONSTANT.MENU_CONSTANT.ANALYTIC:
          navigation.navigate(SCREENS.ANALYSIS_SCREEN, {
            screen: SCREENS.ANALYSIS_SCREEN,
          });
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
