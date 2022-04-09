import { Header } from "@components";
import { SCREENS } from "@configs";
import { useStatusBar } from "@hooks";
import {
  CustomerNotifyConfigRequest,
  NotifyConfigAndCustomerNotifyConfigResponse,
  NotifyConfigAndNotifyConfigGroupResponse,
} from "@models";
import { RootStackParamList } from "@navigation";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Flatlist, translate } from "@shared";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ItemConfixNotifi } from "./ItemConfixNotifi";
import styles from "./styles";
type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  SCREENS.NOTIFICATION_SETTING_DETAIL
>;

type NavigationRoute = RouteProp<
  RootStackParamList,
  SCREENS.NOTIFICATION_SETTING_DETAIL
>;

export interface NotificationSettingDetailRouteParams {
  item: NotifyConfigAndNotifyConfigGroupResponse;
  dataRequet: Array<CustomerNotifyConfigRequest> | undefined;
}

export const NotificationSettingDetailScreen = () => {
  useStatusBar("dark-content");
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<NavigationRoute>();
  const { item, dataRequet } = route.params;

  const [dataChangeNotifi, setDataChangeNotifi] = useState<Array<any>>();
  const [isLoading] = useState(true);
  useEffect(() => {
    if (item) {
      changeData();
    }
  }, [item]);
  const changeData = () => {
    let dataChange: Array<any> = [];
    if (item) {
      item.notifyConfigAndCustomerNotifyConfigDtos.map(
        (items: NotifyConfigAndCustomerNotifyConfigResponse) => {
          let DataConfix: Array<any> = [
            {
              id: 1,
              name: translate("labelViaEmail"),
              state: items.customerNotifyConfigDto.sendEmail,
              type: items.code,
            },
            {
              id: 2,
              name: translate("labelViaWebsite"),
              state: items.customerNotifyConfigDto.sendWeb,
              type: items.code,
            },
            {
              id: 3,
              name: translate("labelViaMobile"),
              state: items.customerNotifyConfigDto.sendMobile,
              type: items.code,
            },
            {
              id: 4,
              name: translate("labelViaDesktop"),
              state: items.customerNotifyConfigDto.sendDesktop,
              type: items.code,
            },
          ];
          DataConfix.unshift(items);
          DataConfix.map(itemData => {
            dataChange.push(itemData);
          });
        },
      );
    }
    setDataChangeNotifi(dataChange);
  };

  const getStickyHeaderIndices = () => {
    let dataNumber: Array<number> = [];
    if (dataChangeNotifi) {
      dataChangeNotifi.map((item, index) => {
        if (item.code) {
          dataNumber.push(index);
        }
      });
    }
    return dataNumber;
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Header
        title={item.title}
        iconLeftName={["ic_arrow_left"]}
        iconLeftOnPress={[() => navigation.goBack()]}
        isCenterTitle
      />
      <View style={styles.childContainer}>
        {dataChangeNotifi ? (
          <Flatlist
            stickyHeaderIndices={getStickyHeaderIndices()}
            data={dataChangeNotifi}
            renderItem={({ item, index }) => (
              <ItemConfixNotifi
                item={item}
                index={index}
                dataRequet={dataRequet}
              />
            )}
            isLoading={isLoading}
            disableLoadMore
            disableRefresh
          />
        ) : null}
      </View>
    </View>
  );
};
