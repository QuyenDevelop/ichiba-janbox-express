import { notificationApi } from "@api";
import { Header } from "@components";
import { SCREENS } from "@configs";
import { useStatusBar } from "@hooks";
import {
  CustomerNotifyConfigRequest,
  NotifyConfigAndNotifyConfigGroupResponse,
} from "@models";
import { RootStackParamList } from "@navigation";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Flatlist, Icon, translate } from "@shared";
import { Metrics, Themes } from "@themes";
import React, { useCallback, useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  SCREENS.NOTIFICATION_SETTING
>;

export const NotificationSettingScreen = () => {
  useStatusBar("dark-content");
  // const profile = useAppSelector((state: IRootState) => state.user.profile);
  const navigation = useNavigation<NavigationProp>();
  const [data, setData] = useState<
    Array<NotifyConfigAndNotifyConfigGroupResponse> | undefined
  >([]);
  const [dataRequest, setDataRequest] = useState<
    Array<CustomerNotifyConfigRequest> | undefined
  >();
  const [isLoading, setIsLoading] = useState(false);
  useFocusEffect(
    useCallback(() => {
      getData();
    }, []),
  );
  useEffect(() => {
    changeData();
  }, [data]);

  const changeData = () => {
    let dataChange: Array<CustomerNotifyConfigRequest> = [];
    if (data) {
      data.map(item => {
        item.notifyConfigAndCustomerNotifyConfigDtos.map(itemNotify => {
          let formRequest: CustomerNotifyConfigRequest = {
            id: 0,
            notifyConfigCode: itemNotify.code,
            sendEmail: itemNotify.customerNotifyConfigDto.sendEmail,
            sendWeb: itemNotify.customerNotifyConfigDto.sendWeb,
            sendMobile: itemNotify.customerNotifyConfigDto.sendMobile,
            sendDesktop: itemNotify.customerNotifyConfigDto.sendDesktop,
          };
          dataChange.push(formRequest);
        });
      });
    }
    setDataRequest(dataChange);
  };

  const getData = () => {
    notificationApi
      .getNotifiConfig()
      ?.then(res => {
        setData(res?.data);
      })
      .finally(() => setIsLoading(false));
  };
  const renderItem = ({
    item,
  }: {
    item: NotifyConfigAndNotifyConfigGroupResponse;
    index: number;
  }) => {
    return (
      <View style={styles.settingItem}>
        <TouchableOpacity
          style={styles.settingBtn}
          onPress={() =>
            navigation.navigate(SCREENS.NOTIFICATION_SETTING_DETAIL, {
              item: item,
              dataRequet: dataRequest,
            })
          }
        >
          <Text style={styles.settingText}>{item.title}</Text>
          <Icon
            name={"ic_long_arrow_right"}
            size={Metrics.icons.smallSmall}
            color={Themes.colors.coolGray60}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={[styles.container]}>
      <Header
        title={translate("label.notificationSetting")}
        iconLeftName={["ic_arrow_left"]}
        iconLeftOnPress={[() => navigation.goBack()]}
        isCenterTitle
      />
      <View style={styles.childContainer}>
        <Flatlist
          data={data}
          renderItem={renderItem}
          isLoading={isLoading}
          disableRefresh
          disableLoadMore
        />
      </View>
    </View>
  );
};
