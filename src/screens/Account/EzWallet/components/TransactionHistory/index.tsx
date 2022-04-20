import { customerApi } from "@api";
import { Separator } from "@components";
import { CONSTANT } from "@configs";
import { Alert, Utils } from "@helpers";
import { useBoolean, useDebounce, useLoadMore } from "@hooks";
import {
  CustomerResponse,
  PickerItemsRangeDate,
  PickerItemsResponse,
  TransactionHistoryResponse,
} from "@models";
import {
  Flatlist,
  FlatListLoadMoreModel,
  Icon,
  NoData,
  Search,
  translate,
} from "@shared";
import { Metrics, Themes } from "@themes";
import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  ActivityIndicator,
  DeviceEventEmitter,
  RefreshControl,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { FilterModal } from "../FilterModal";
import { TransactionItem } from "../TransactionItem";
import styles from "./styles";

export const TransactionHistory: FunctionComponent = () => {
  const [isReloading, showReloading, hideReloading] = useBoolean();
  const [isShowRefresh, showRefresh, hideRefresh] = useBoolean();
  const [isShowFilterModal, showFilterModal, hideFilterModal] = useBoolean();
  const [isShowSearch, showSearch, hideSearch] = useBoolean();
  const [searchContent, setSearchContent] = useState<string>("");
  const debounceSearchContent = useDebounce(searchContent);
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();
  const [rangeDate, setRangeDate] = useState<
    PickerItemsRangeDate | undefined
  >();
  const [paymentMethod, setPaymentMethod] = useState<any>();
  const [transactionType, setTransactionType] = useState<
    PickerItemsResponse | undefined
  >();
  const [customerInfo, setCustomerInfo] = useState<CustomerResponse>();
  const {
    items,
    processData,
    isLoading,
    setLoading,
    shouldRefreshWhenFocus,
    setShouldRefreshWhenFocus,
  } = useLoadMore<TransactionHistoryResponse>();
  const isMount = useRef(true);

  useEffect(() => {
    customerApi.getCustomerProfileById()?.then(response => {
      if (response?.status) {
        setCustomerInfo(response?.data);
      }
    });
  }, []);

  const fetchData = useCallback(
    (
      transType: PickerItemsResponse | undefined,
      payMethod: PickerItemsResponse | undefined,
      sDate: Date | undefined,
      eDate: Date | undefined,
      query: string,
    ) => {
      showReloading();
      customerApi
        .getTransactionHistory({
          pageIndex: 1,
          pageSize: 10,
          type: parseInt(transType?.value || "", 10) || null,
          source: parseInt(payMethod?.value || "", 10) || null,
          startDate: sDate ? Utils.date.formatYYMMDD(sDate) : undefined,
          endDate: eDate ? Utils.date.formatYYMMDD(eDate) : undefined,
          query: query,
        })
        ?.then(data => {
          processData({
            page: 1,
            pageCount: 10,
            count: data?.total,
            items: data?.data,
          }).then(() => {
            setShouldRefreshWhenFocus(true);
          });
        })
        .finally(() => {
          hideReloading();
        });
    },
    [],
  );

  useEffect(() => {
    const reloadTransaction = DeviceEventEmitter.addListener(
      CONSTANT.RELOAD_ACTION.RELOAD_TRANSACTION,
      () => {
        setShouldRefreshWhenFocus(true);
      },
    );

    return () => {
      reloadTransaction.remove();
    };
  }, [setShouldRefreshWhenFocus]);

  const getData = (
    page?: number,
    pageCount?: number,
  ): Promise<FlatListLoadMoreModel> | undefined => {
    setLoading(true);
    return customerApi
      .getTransactionHistory({
        pageIndex: page || 1,
        pageSize: pageCount || 10,
        type: parseInt(transactionType?.value || "", 10) || null,
        source: parseInt(paymentMethod?.value || "", 10) || null,
        startDate: startDate ? Utils.date.formatYYMMDD(startDate) : undefined,
        endDate: endDate ? Utils.date.formatYYMMDD(endDate) : undefined,
        query: debounceSearchContent,
      })
      ?.then(data => {
        return processData({
          page: page,
          pageCount: pageCount,
          count: data?.total,
          items: data?.data,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const refreshData = useCallback((timeOut: number = 0) => {
    showRefresh();
    setTimeout(() => {
      Promise.all([
        customerApi.getTransactionHistory({
          pageIndex: 1,
          pageSize: 10,
          query: "",
        }),
      ])
        .then(([transactionHistory]) => {
          processData({
            page: 1,
            pageCount: 10,
            count: transactionHistory?.total,
            items: transactionHistory?.data,
          });
        })
        .catch(() => {
          Alert.error("error.errorServer");
        })
        .finally(() => {
          hideRefresh();
        });
    }, timeOut);
  }, []);

  useEffect(() => {
    if (isMount.current) {
      isMount.current = false;
    } else {
      fetchData(
        transactionType,
        paymentMethod,
        startDate,
        endDate,
        debounceSearchContent,
      );
    }
  }, [
    endDate,
    fetchData,
    paymentMethod,
    debounceSearchContent,
    startDate,
    transactionType,
  ]);

  const applyFilter = (
    pMethod: PickerItemsResponse | undefined,
    transType: PickerItemsResponse | undefined,
    rDate: PickerItemsRangeDate | undefined,
    sDate: Date | undefined,
    eDate: Date | undefined,
  ) => {
    setPaymentMethod(pMethod);
    setTransactionType(transType);
    setRangeDate(rDate);
    setStartDate(sDate);
    setEndDate(eDate);
  };

  const renderItem = ({ item }: { item: TransactionHistoryResponse }) => {
    return <TransactionItem item={item} customerInfo={customerInfo} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.toolBar}>
        {isShowSearch && (
          <View style={styles.container}>
            <Search
              iconName="ic_search"
              value={searchContent}
              onChangeText={setSearchContent}
              placeholder={translate("placeholder.baseSearch")}
            />
          </View>
        )}
        {isShowSearch ? (
          <TouchableOpacity style={styles.searchButton} onPress={hideSearch}>
            <Icon
              name="ic_close_circle"
              size={Metrics.icons.small}
              color={Themes.colors.coolGray80}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.searchButton} onPress={showSearch}>
            <Icon
              name="ic_search"
              size={Metrics.icons.small}
              color={Themes.colors.coolGray80}
            />
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.searchButton} onPress={showFilterModal}>
          <Icon
            name="ic_filter"
            size={Metrics.icons.small}
            color={Themes.colors.coolGray80}
          />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.container} horizontal>
        {isReloading ? (
          <ActivityIndicator
            size="small"
            color={Themes.colors.coolGray60}
            style={styles.indicator}
          />
        ) : (
          <Flatlist
            nestedScrollEnabled
            data={items}
            renderItem={renderItem}
            onRefresh={getData}
            onLoadMore={getData}
            isLoading={isLoading}
            renderNoResult={<NoData title="labelNoTransactionHistory" />}
            ItemSeparatorComponent={() => <Separator />}
            shouldRefreshWhenFocus={shouldRefreshWhenFocus}
            refreshControl={
              <RefreshControl
                refreshing={isShowRefresh}
                onRefresh={refreshData}
              />
            }
          />
        )}
      </ScrollView>
      {isShowFilterModal && (
        <FilterModal
          isShowModal={isShowFilterModal}
          onCloseModal={hideFilterModal}
          paymentMethod={paymentMethod}
          transactionType={transactionType}
          rangeDate={rangeDate}
          startDate={startDate}
          endDate={endDate}
          applyFilter={applyFilter}
        />
      )}
    </View>
  );
};
