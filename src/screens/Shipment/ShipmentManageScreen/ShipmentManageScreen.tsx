import { Separator, TopBarSearchResult } from "@components";
import { SCREENS } from "@configs";
import { ScreenUtils } from "@helpers";
import {
  useAppSelector,
  useBoolean,
  useOrderExpired,
  useStatusBar,
} from "@hooks";
import { ShipmentParamList } from "@navigation";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { translate } from "@shared";
import { Themes } from "@themes";
import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { TabView } from "react-native-tab-view";
import { InStorage } from "../components";
import styles from "./styles";

export interface PackageManagerParams {
  idHeader?: number;
  isShowBackOnHeader?: boolean;
}

type NavigationRoute = RouteProp<
  ShipmentParamList,
  SCREENS.SHIPMENT_MANAGE_SCREEN
>;

interface Props {}

export const TabName = {
  CREATED: "CREATED",
  IN_STORAGE: "IN_STORAGE",
  WAIT_FOR_EXPORT: "WAIT_FOR_EXPORT",
  DELIVERY: "DELIVERY",
};

export const ShipmentManageScreen: FunctionComponent<Props> = () => {
  const routeNavigation = useRoute<NavigationRoute>();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  useStatusBar("dark-content");
  const { idHeader } = routeNavigation?.params || {};
  const scrollRef = useRef<FlatList>(null);
  const [tabIndex, setTabIndex] = useState(
    idHeader && idHeader < 3 ? idHeader : 0,
  );
  const [, setFeeDetails] = useState<any>([]);
  const [, showDetailsFeeModal] = useBoolean();
  const { countExpired } = useOrderExpired();
  const [routes] = useState([
    {
      key: TabName.CREATED,
      title: translate("packageManagementTab.created"),
    },
    {
      key: TabName.IN_STORAGE,
      title: translate("packageManagementTab.inOriginalStorage"),
    },
    {
      key: TabName.WAIT_FOR_EXPORT,
      title: translate("packageManagementTab.internationalShipping"),
    },
    {
      key: TabName.DELIVERY,
      title: translate("packageManagementTab.completed"),
    },
  ]);
  const listStatusCreated = useMemo(
    () => [
      {
        name: "packageStatus.created",
        value: [0],
      },
    ],
    [],
  );
  const listStatusInStorage = useMemo(
    () => [
      {
        name: "packageStatus.waitingForProgressing",
        value: [2],
      },
      {
        name: "packageStatus.waitForPay",
        value: [1, 3],
      },
      {
        name: "packageStatus.waitDelivery",
        value: [4],
      },
    ],
    [],
  );
  const listStatusWaitExport = useMemo(
    () => [
      {
        name: "packageStatus.internationalShipping",
        value: [100],
      },
      {
        name: "packageStatus.waitingForProgressing",
        value: [2],
      },
      {
        name: "packageStatus.waitForPay",
        value: [1, 3],
      },
      {
        name: "packageStatus.waitDelivery",
        value: [4],
      },
    ],
    [],
  );
  const listStatusDelivery = useMemo(
    () => [
      {
        name: "packageStatus.delivered",
        value: [6],
      },
      {
        name: "packageStatus.canceled",
        value: [7],
      },
    ],
    [],
  );
  const [totalInStorage, setTotalInStorage] = useState<number>(0);
  const [totalWaitExport, setTotalWaitExport] = useState<number>(0);
  const [totalDelivery, setTotalDelivery] = useState<number>(0);

  //TODO: bỏ khi có code push vì bottomTab k re-render component
  const language = useAppSelector(state => state.user.language);
  useEffect(() => {}, [language]);

  const goBack = () => {
    navigation.goBack();
  };

  const renderScene = useCallback(
    ({ route }: { route: any }) => {
      switch (route.key) {
        case TabName.CREATED:
          return (
            <InStorage
              showDetailsFeeModal={showDetailsFeeModal}
              updateFeeDetail={setFeeDetails}
              updateTotal={setTotalInStorage}
              tabIndex={tabIndex}
              existOrderExpire={countExpired > 0}
              tabData={1}
              listStatus={listStatusCreated}
            />
          );
        case TabName.IN_STORAGE:
          return (
            <InStorage
              showDetailsFeeModal={showDetailsFeeModal}
              updateFeeDetail={setFeeDetails}
              updateTotal={setTotalInStorage}
              tabIndex={tabIndex}
              existOrderExpire={countExpired > 0}
              tabData={1}
              listStatus={listStatusInStorage}
            />
          );
        case TabName.WAIT_FOR_EXPORT:
          return (
            <InStorage
              showDetailsFeeModal={showDetailsFeeModal}
              updateFeeDetail={setFeeDetails}
              updateTotal={setTotalWaitExport}
              tabIndex={tabIndex}
              existOrderExpire={countExpired > 0}
              tabData={2}
              listStatus={listStatusWaitExport}
            />
          );

        case TabName.DELIVERY:
          return (
            <InStorage
              showDetailsFeeModal={showDetailsFeeModal}
              updateFeeDetail={setFeeDetails}
              updateTotal={setTotalDelivery}
              tabIndex={tabIndex}
              existOrderExpire={countExpired > 0}
              tabData={3}
              listStatus={listStatusDelivery}
            />
          );

        default:
          return null;
      }
    },
    [
      countExpired,
      listStatusCreated,
      listStatusDelivery,
      listStatusInStorage,
      listStatusWaitExport,
      showDetailsFeeModal,
      tabIndex,
    ],
  );

  const onChangeIndex = (index: number) => {
    setTabIndex(index);
    scrollRef.current?.scrollToIndex({
      animated: true,
      index: index,
      viewPosition: 0.5,
    });
  };

  const renderTabBar = useCallback(
    ({ item, index }: { item: any; index: number }) => {
      return (
        <TouchableOpacity
          onPress={() => {
            onChangeIndex(index);
          }}
        >
          <View style={styles.itemHeader}>
            <Text
              style={{
                ...styles.textItemHeader,
                color:
                  routes[tabIndex].key === item.key
                    ? Themes.colors.textPrimary
                    : Themes.colors.coolGray60,
              }}
            >
              {item.title} (
              {index === 0
                ? totalInStorage
                : index === 1
                ? totalWaitExport
                : totalDelivery}
              )
            </Text>
            <View
              style={[
                styles.borderBottomHeader,
                {
                  backgroundColor:
                    routes[tabIndex].key === item.key
                      ? Themes.colors.primary
                      : Themes.colors.white,
                },
              ]}
            />
          </View>
        </TouchableOpacity>
      );
    },
    [routes, tabIndex, totalDelivery, totalInStorage, totalWaitExport],
  );

  return (
    <View style={[styles.container]}>
      <TopBarSearchResult
        title={translate("titleShipmentManage")}
        goBack={goBack}
        showSearch={true}
        showFilter={true}
      />
      <View style={[styles.container]}>
        <View style={styles.headerTabView}>
          <FlatList
            data={routes}
            keyExtractor={item => item.key}
            renderItem={renderTabBar}
            horizontal
            showsHorizontalScrollIndicator={false}
            ref={scrollRef}
          />
        </View>
        <Separator />
        <TabView
          navigationState={{ index: tabIndex, routes }}
          renderScene={renderScene}
          onIndexChange={onChangeIndex}
          initialLayout={{ width: ScreenUtils.WIDTH_SCREEN }}
          renderTabBar={() => null}
        />
        <Separator />
        {/* {feeDetails ? (
          <DetailsFeeModal
            isShowModal={isShowDetailsFeeModal}
            closeModal={hideDetailsFeeModal}
            feeDetails={feeDetails!}
          />
        ) : null} */}
      </View>
    </View>
  );
};
