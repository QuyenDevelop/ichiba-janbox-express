import { Separator, SuccessModal } from "@components";
import { CONSTANT, SCREENS } from "@configs";
import { Alert, ScreenUtils } from "@helpers";
import { useAppDispatch, useBoolean, useLoadMore } from "@hooks";
import {
  DetailFee,
  OrderPackageCollectionResponse,
  OrderResponse,
} from "@models";
import { useFocusEffect, useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { setAddressId } from "@redux";
import { Flatlist, Icon, NoData, translate } from "@shared";
import { Metrics, Themes } from "@themes";
import groupBy from "lodash/groupBy";
import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { FilterModal } from "./FilterModal";
import { HeaderTool } from "./HeaderTool";
import { ItemOrder } from "./ItemOder";
// import { HeaderTool } from "./HeaderTool";
// import { ItemOrder } from "./ItemOrder";
import styles from "./styles";

const Data: Array<OrderPackageCollectionResponse> = [
  {
    id: 7,
    accountId: ":accountId",
    parentId: null,
    orderId: null,
    tracking: "tracking",
    shipmentCode: "string",
    status: 7,
    totalPiece: null,
    domesticShippingFee: null,
    internationalShippingFee: null,
    surcharge: null,
    cod: null,
    storageFee: null,
    arrivedDate: null,
    deliveryDate: null,
    deliveredDate: null,
    partner: "string",
    postOffice: "string",
    postOfficeCurrent: "string",
    postOfficeCurrentName: "string",
    transporter: "string",
    trackingBox: "string",
    weight: null,
    dimWeight: null,
    chargeWeight: null,
    width: null,
    height: null,
    length: null,
    photos: "string",
    photosFullUrl: ["string", "string"],
    directShipment: 1,
    shippingMethod: "string",
    internationalShippingCode: "string",
    internationalShipping: "string",
    note: "string",
    customerDistrict: "string",
    customerAddress: "string",
    customerPhone: "string",
    daysLeftFree: 1,
    customerName: "string",
    customerProvince: "string",
    customerWard: "string",
    customerCountry: "string",
    customerPostCode: "string",
    createBy: "string",
    createdDate: "string",
    modifiedDate: null,
    modifiedBy: "string",
    cargoSpservice: "string",
    shipVia: "string",
    order: {} as OrderResponse,
    orders: [],
    orderPackagePieces: [],
    serviceSelected: [],
    orderPackageReceivables: [],
    orderPackagePayments: [],
    listChildren: [],
    dimensionStr: ["string"],
    shippingMethodName: "string",
    route: "string",
    currency: "string",
  },
  {
    id: 1,
    accountId: ":accountId",
    parentId: null,
    orderId: null,
    tracking: "tracking",
    shipmentCode: "string",
    status: 3,
    totalPiece: null,
    domesticShippingFee: null,
    internationalShippingFee: null,
    surcharge: null,
    cod: null,
    storageFee: null,
    arrivedDate: null,
    deliveryDate: null,
    deliveredDate: null,
    partner: "string",
    postOffice: "string",
    postOfficeCurrent: "string",
    postOfficeCurrentName: "string",
    transporter: "string",
    trackingBox: "string",
    weight: null,
    dimWeight: null,
    chargeWeight: null,
    width: null,
    height: null,
    length: null,
    photos: "string",
    photosFullUrl: ["string", "string"],
    directShipment: 1,
    shippingMethod: "string",
    internationalShippingCode: "string",
    internationalShipping: "string",
    note: "string",
    customerDistrict: "string",
    customerAddress: "string",
    customerPhone: "string",
    daysLeftFree: 1,
    customerName: "string",
    customerProvince: "string",
    customerWard: "string",
    customerCountry: "string",
    customerPostCode: "string",
    createBy: "string",
    createdDate: "string",
    modifiedDate: null,
    modifiedBy: "string",
    cargoSpservice: "string",
    shipVia: "string",
    order: {} as OrderResponse,
    orders: [],
    orderPackagePieces: [],
    serviceSelected: [],
    orderPackageReceivables: [],
    orderPackagePayments: [],
    listChildren: [],
    dimensionStr: ["string"],
    shippingMethodName: "string",
    route: "string",
    currency: "string",
  },
  {
    id: 1,
    accountId: ":accountId",
    parentId: null,
    orderId: null,
    tracking: "tracking",
    shipmentCode: "string",
    status: 6,
    totalPiece: null,
    domesticShippingFee: null,
    internationalShippingFee: null,
    surcharge: null,
    cod: null,
    storageFee: null,
    arrivedDate: null,
    deliveryDate: null,
    deliveredDate: null,
    partner: "string",
    postOffice: "string",
    postOfficeCurrent: "string",
    postOfficeCurrentName: "string",
    transporter: "string",
    trackingBox: "string",
    weight: null,
    dimWeight: null,
    chargeWeight: null,
    width: null,
    height: null,
    length: null,
    photos: "string",
    photosFullUrl: ["string", "string"],
    directShipment: 1,
    shippingMethod: "string",
    internationalShippingCode: "string",
    internationalShipping: "string",
    note: "string",
    customerDistrict: "string",
    customerAddress: "string",
    customerPhone: "string",
    daysLeftFree: 1,
    customerName: "string",
    customerProvince: "string",
    customerWard: "string",
    customerCountry: "string",
    customerPostCode: "string",
    createBy: "string",
    createdDate: "string",
    modifiedDate: null,
    modifiedBy: "string",
    cargoSpservice: "string",
    shipVia: "string",
    order: {} as OrderResponse,
    orders: [],
    orderPackagePieces: [],
    serviceSelected: [],
    orderPackageReceivables: [],
    orderPackagePayments: [],
    listChildren: [],
    dimensionStr: ["string"],
    shippingMethodName: "string",
    route: "string",
    currency: "string",
  },
  {
    id: 1,
    accountId: ":accountId",
    parentId: null,
    orderId: null,
    tracking: "tracking",
    shipmentCode: "string",
    status: 5,
    totalPiece: null,
    domesticShippingFee: null,
    internationalShippingFee: null,
    surcharge: null,
    cod: null,
    storageFee: null,
    arrivedDate: null,
    deliveryDate: null,
    deliveredDate: null,
    partner: "string",
    postOffice: "string",
    postOfficeCurrent: "string",
    postOfficeCurrentName: "string",
    transporter: "string",
    trackingBox: "string",
    weight: null,
    dimWeight: null,
    chargeWeight: null,
    width: null,
    height: null,
    length: null,
    photos: "string",
    photosFullUrl: ["string", "string"],
    directShipment: 1,
    shippingMethod: "string",
    internationalShippingCode: "string",
    internationalShipping: "string",
    note: "string",
    customerDistrict: "string",
    customerAddress: "string",
    customerPhone: "string",
    daysLeftFree: 1,
    customerName: "string",
    customerProvince: "string",
    customerWard: "string",
    customerCountry: "string",
    customerPostCode: "string",
    createBy: "string",
    createdDate: "string",
    modifiedDate: null,
    modifiedBy: "string",
    cargoSpservice: "string",
    shipVia: "string",
    order: {} as OrderResponse,
    orders: [],
    orderPackagePieces: [],
    serviceSelected: [],
    orderPackageReceivables: [],
    orderPackagePayments: [],
    listChildren: [],
    dimensionStr: ["string"],
    shippingMethodName: "string",
    route: "string",
    currency: "string",
  },
];
interface Props {
  showDetailsFeeModal: () => void;
  updateFeeDetail: (value: DetailFee[]) => void;
  updateTotal: (total: number) => void;
  tabIndex: number;
  existOrderExpire?: boolean;
  tabData: number;
  listStatus: Array<{ name: string; value: number[] }>;
}

export interface Package {
  id: number;
  orderCode: string;
  chargeWeight: number;
}

export const InStorage: FunctionComponent<Props> = props => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const dispatch = useAppDispatch();
  const {
    // showDetailsFeeModal,
    // updateFeeDetail,
    // updateTotal,
    tabIndex,
    // existOrderExpire,
    tabData,
    listStatus,
  } = props;
  const [listPackage, setListPackage] = useState<
    OrderPackageCollectionResponse[]
  >([]);
  // const [listService] = useState<OrderService[]>([]);
  const [searchContent, setSearchContent] = useState<string>("");
  // const searchValue = useDebounce(searchContent);
  const [isShowFilterModal, showFilterModal, hideFilterModal] = useBoolean();
  const [isShowSuccessModal, showSuccessModal, hideSuccessModal] = useBoolean();
  const [route, setRoute] = useState<string>("");
  const [status, setStatus] = useState<number[]>([]);
  const {
    items,
    processData,
    isLoading,
    setLoading,
    shouldRefreshWhenFocus,
    setShouldRefreshWhenFocus,
  } = useLoadMore<OrderPackageCollectionResponse>();

  const paymentStatus = [1, 3];

  const disableCheckbox = (item: OrderPackageCollectionResponse) => {
    return (
      !paymentStatus.includes(item.status) ||
      item.isAllowMerge === false ||
      item.listChildren.length > 0
    );
  };

  const listPackageValid = items?.filter(item => !disableCheckbox(item)) || [];

  const defaultPageSize = 10;

  // const requestV2: GetListOrderPackageRequestClientV2 = useMemo(
  //   () => ({
  //     keywords: searchValue,
  //     route: route,
  //     status: status,
  //     pageIndex: 1,
  //     pageSize: defaultPageSize,
  //     tab: tabData,
  //   }),
  //   [route, searchValue, status, tabData],
  // );

  useFocusEffect(
    useCallback(() => {
      if (tabData === tabIndex + 1) {
        setShouldRefreshWhenFocus(true);
      }
      setListPackage([]);
      // stop change address
      dispatch(setAddressId(null));
    }, [dispatch, setShouldRefreshWhenFocus, tabData, tabIndex]),
  );

  const fetchData = useCallback(() => {
    setLoading(true);
    // return packageApi
    //   .getListOrderPackageV2({
    //     ...requestV2,
    //     pageIndex: 1,
    //   })
    //   ?.then(data => {
    //     updateTotal(data?.total || 0);
    //     processData({
    //       page: 1,
    //       pageCount: defaultPageSize,
    //       count: data?.total,
    //       items: data?.data,
    //     });
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });
    processData({
      page: 1,
      pageCount: defaultPageSize,
      count: 1,
      items: Data,
    });
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const getPackageServices = () => {
    // const type = "PACKAGE";
    // packageApi.getAddService(type)?.then(response => {
    //   if (response?.data && response?.data.length > 0) {
    //     setListService(
    //       response.data.filter(
    //         item => item.code !== CONSTANT.SERVICE_PACKAGE.CONSOLIDATE,
    //       ),
    //     );
    //   }
    // });
  };

  useEffect(() => {
    getPackageServices();
  }, []);

  // const getData = (
  //   page?: number,
  //   pageCount?: number,
  // ): Promise<FlatListLoadMoreModel> | undefined => {
  //   setLoading(true);
  //   return packageApi
  //     .getListOrderPackageV2({
  //       ...requestV2,
  //       pageIndex: page || 1,
  //       pageSize: pageCount || defaultPageSize,
  //     })
  //     ?.then(data => {
  //       updateTotal(data?.total || 0);
  //       return processData({
  //         page: page || 1,
  //         pageCount: pageCount || defaultPageSize,
  //         count: data?.total,
  //         items: data?.data,
  //       });
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // };

  const onCheckPackage = useCallback(
    (order: OrderPackageCollectionResponse) => {
      let newListPackage = [...listPackage];
      const checkItem = newListPackage.find(item => item.id === order.id);
      if (checkItem) {
        newListPackage = newListPackage.filter(item => item.id !== order.id);
      } else {
        newListPackage.push(order);
      }

      setListPackage(newListPackage);
    },
    [listPackage],
  );

  const removeOrderCodeItem = (id: number) => {
    setListPackage(packages => packages.filter(p => p.id !== id));
  };

  const isCheckAll = (): boolean =>
    listPackage.length === listPackageValid.length && listPackage.length !== 0;

  const listPackageJP = listPackage.filter(
    item => item.route === CONSTANT.ROUTE.JP,
  );

  const listPackageUS = listPackage.filter(
    item => item.route === CONSTANT.ROUTE.US,
  );

  const isShowConsolidates =
    listPackageJP.length >= 2 || listPackageUS.length >= 2;

  const onCheckAll = () => {
    if (isCheckAll()) {
      setListPackage([]);
    } else {
      setListPackage(listPackageValid);
    }
  };

  const handleConsolidation = () => {
    if (listPackage.length === 0) {
      Alert.warning("error.validation.limitSelect");
      return;
    }

    const groupJpPostoffice = groupBy(
      listPackageJP,
      item => item.postOfficeCurrent,
    );

    const groupUsPostoffice = groupBy(
      listPackageUS,
      item => item.postOfficeCurrent,
    );

    if (
      Object.keys(groupJpPostoffice).length > 1 ||
      Object.keys(groupUsPostoffice).length > 1
    ) {
      Alert.warning("warning.diffPostOffice");
      return;
    }

    // navigation.navigate(SCREENS.PackageManagementStack, {
    //   screen: SCREENS.CONSOLIDATION_PACKAGE_SCREEN,
    //   params: {
    //     jpPackage: listPackageJP || [],
    //     usPackage: listPackageUS || [],
    //   },
    // });
  };

  const renderItem = useCallback(
    ({ item }: { item: OrderPackageCollectionResponse; index: number }) => {
      const isChecked: boolean = !!listPackage.find(p => p.id === item.id);
      return (
        <ItemOrder
          key={item.id}
          // showDetailsFeeModal={showDetailsFeeModal}
          order={item}
          // updateFeeDetails={updateFeeDetail}
          isChecked={isChecked}
          onCheck={onCheckPackage}
          // existOrderExpire={existOrderExpire}
          // services={listService}
          showSuccessModal={showSuccessModal}
        />
      );
    },
    [listPackage, onCheckPackage, showSuccessModal],
  );

  const renderItemPackage = ({ item }: { item: Package }) => {
    if (item.orderCode) {
      return (
        <View style={styles.orderCodeViewItem}>
          <Text
            style={{
              color: Themes.colors.coolGray100,
            }}
          >
            #{item.orderCode}
          </Text>
          <TouchableOpacity onPress={() => removeOrderCodeItem(item.id)}>
            <Icon
              name={"ic_close_circle"}
              size={Metrics.icons.smallSmall}
              color={Themes.colors.coolGray60}
              styles={{ marginLeft: ScreenUtils.scale(8) }}
            />
          </TouchableOpacity>
        </View>
      );
    }
    return null;
  };

  const gotoCreateShipment = () => {
    navigation.navigate(SCREENS.CREATE_SHIPMENT_STACK);
  };

  return (
    <View style={styles.inStorage}>
      <HeaderTool
        isCheckAll={isCheckAll()}
        onCheckAll={onCheckAll}
        total={items?.length || 0}
        totalChecked={listPackage.length}
        searchContent={searchContent}
        onChangeContent={setSearchContent}
        onShowFilter={showFilterModal}
        hideSelectAll={tabData === 3}
      />
      <Separator />
      <Flatlist
        data={items || []}
        renderItem={renderItem}
        // onRefresh={getData}
        // onLoadMore={getData}
        isLoading={isLoading}
        renderNoResult={
          <NoData
            title="labelPackageNotFound"
            buttonTitle={translate("buttonCreateShipment")}
            onPress={gotoCreateShipment}
          />
        }
        shouldRefreshWhenFocus={shouldRefreshWhenFocus}
        style={styles.inStorageList}
        contentContainerStyle={styles.inStorageListContent}
      />
      {listPackage.length > 0 && (
        <View style={styles.footer}>
          <FlatList
            data={listPackage.map(orderPackage => ({
              id: orderPackage.id,
              orderCode: orderPackage.shipmentCode,
              chargeWeight: orderPackage.chargeWeight || 0,
            }))}
            keyExtractor={item => `${item.id}`}
            renderItem={renderItemPackage}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.listPackage}
          />
          {isShowConsolidates && (
            <TouchableOpacity
              style={styles.applyBtn}
              onPress={handleConsolidation}
            >
              <Text style={styles.applyTextBtn}>
                {translate("buttonConsolidation")}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      )}

      {isShowFilterModal && (
        <FilterModal
          isShowModal={isShowFilterModal}
          onCloseModal={hideFilterModal}
          routeSelected={route}
          updateRoute={setRoute}
          statusSelected={status}
          updateStatus={setStatus}
          listStatus={listStatus}
        />
      )}
      <SuccessModal
        isShowModal={isShowSuccessModal}
        closeModal={hideSuccessModal}
        title={translate("label.requestServiceSuccess")}
        content={translate("label.requestServiceSuccessContent")}
      />
    </View>
  );
};
