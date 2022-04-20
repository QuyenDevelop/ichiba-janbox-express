import { DATA_CONSTANT } from "@configs";
import { Utils } from "@helpers";
import { PickerItemsRangeDate, PickerItemsResponse } from "@models";
import { Button, Icon, translate } from "@shared";
import { Metrics, Themes } from "@themes";
import React, { FunctionComponent, useState } from "react";
import {
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from "react-native";
import Modal from "react-native-modal";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { InputDate } from "./InputDate";
import { PickOption } from "./PickOption";
import styles from "./styles";

interface Props {
  isShowModal: boolean;
  onCloseModal: () => void;
  paymentMethod: PickerItemsResponse | undefined;
  transactionType: PickerItemsResponse | undefined;
  rangeDate: PickerItemsRangeDate | undefined;
  startDate: Date | undefined;
  endDate: Date | undefined;
  applyFilter: (
    paymentMethod: PickerItemsResponse | undefined,
    transactionType: PickerItemsResponse | undefined,
    rangeDate: PickerItemsRangeDate | undefined,
    startDate: Date | undefined,
    endDate: Date | undefined,
  ) => void;
}

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export const FilterModal: FunctionComponent<Props> = props => {
  const {
    isShowModal,
    onCloseModal,
    paymentMethod: pMethod,
    transactionType: tType,
    rangeDate: rDate,
    startDate: sDate,
    endDate: eDate,
    applyFilter,
  } = props;
  const insets = useSafeAreaInsets();
  const [paymentMethod, setPaymentMethod] = useState<
    PickerItemsResponse | undefined
  >(pMethod);
  const [transactionType, setTransactionType] = useState<
    PickerItemsResponse | undefined
  >(tType);
  const [rangeDate, setRangeDate] = useState<PickerItemsRangeDate | undefined>(
    rDate,
  );
  const [startDate, setStartDate] = useState<Date | undefined>(sDate);
  const [endDate, setEndDate] = useState<Date | undefined>(eDate);
  const updateStartDate = (value?: Date) => {
    if (!value) {
      setStartDate(undefined);
      return;
    }
    setStartDate(value);
    if (!endDate || endDate < value) {
      setEndDate(value);
    }
  };

  const updateEndDate = (value?: Date) => {
    if (!value) {
      setEndDate(undefined);
      return;
    }
    setEndDate(value);
    if (!startDate || startDate > value) {
      setStartDate(value);
    }
  };

  const updateRangeDate = (range: PickerItemsRangeDate) => {
    setRangeDate(range);
    setStartDate(range.startDate);
    setEndDate(range.endDate);
  };

  const apply = () => {
    applyFilter(paymentMethod, transactionType, rangeDate, startDate, endDate);
    onCloseModal();
  };

  const reset = () => {
    setPaymentMethod(undefined);
    setTransactionType(undefined);
    setRangeDate(undefined);
    setStartDate(undefined);
    setEndDate(undefined);
  };
  return (
    <Modal
      isVisible={isShowModal}
      useNativeDriverForBackdrop
      propagateSwipe={true}
      hardwareAccelerated={false}
      onSwipeComplete={onCloseModal}
      animationIn="slideInRight"
      animationOut="slideOutRight"
      useNativeDriver
      hideModalContentWhileAnimating
      style={styles.rightModal}
    >
      <View
        style={[
          styles.flex1,
          { paddingTop: insets.top, paddingBottom: insets.bottom },
        ]}
      >
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.headerButton}
            onPress={() => onCloseModal()}
            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          >
            <Icon
              color={Themes.colors.coolGray60}
              name={"ic_close"}
              size={Metrics.icons.medium}
            />
          </TouchableOpacity>
          <Text style={styles.textHeader}>{translate("labelFilter")}</Text>
          <TouchableOpacity
            style={styles.headerButton}
            onPress={reset}
            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          >
            <Text style={styles.textHeaderRight}>
              {translate("buttonReset")}
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          contentContainerStyle={styles.contentFilter}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <>
            <Text style={styles.titleGroupFilter}>
              {translate("labelFilterByPaymentMethod")}
            </Text>
            <View style={styles.wrapView}>
              {DATA_CONSTANT.PAYMENT_METHODS.map((item, index) => {
                return (
                  <PickOption
                    label={translate(item.name)}
                    key={item.value}
                    item={item}
                    index={index}
                    dataSelected={paymentMethod}
                    updateDataSelected={setPaymentMethod}
                  />
                );
              })}
            </View>
            <View style={styles.separatorHorizontal} />
            <Text style={styles.titleGroupFilter}>
              {translate("labelFilterByTransactionType")}
            </Text>
            <View style={styles.wrapView}>
              {DATA_CONSTANT.TRANSACTION_TYPES.map((item, index) => {
                return (
                  <PickOption
                    label={translate(item.name)}
                    key={item.value}
                    item={item}
                    index={index}
                    dataSelected={transactionType}
                    updateDataSelected={setTransactionType}
                  />
                );
              })}
            </View>
            <View style={styles.separatorHorizontal} />
            <Text style={styles.titleGroupFilter}>
              {translate("labelFilterByDay")}
            </Text>
            <View style={styles.wrapView}>
              {DATA_CONSTANT.RANGE_DAY.map((item, index) => {
                return (
                  <PickOption
                    label={translate(item.name, {
                      year: Utils.date.formatYear(new Date()),
                    })}
                    key={item.id}
                    item={item}
                    index={index}
                    dataSelected={rangeDate}
                    updateDataSelected={updateRangeDate}
                  />
                );
              })}
            </View>
            <View>
              <Text style={styles.rangeDateText}>
                {translate("labelSelectDateRange")}
              </Text>
              <View style={styles.rangeDate}>
                <InputDate
                  title={translate("labelDateFrom")}
                  value={startDate}
                  updateDate={updateStartDate}
                />
                <InputDate
                  title={translate("labelDateTo")}
                  value={endDate}
                  updateDate={updateEndDate}
                />
              </View>
            </View>
          </>
        </ScrollView>
        <Button title={translate("buttonApply")} onPress={apply} />
      </View>
    </Modal>
  );
};
