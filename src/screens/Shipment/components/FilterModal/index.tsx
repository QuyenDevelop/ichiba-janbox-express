/* eslint-disable react-native/no-inline-styles */
import { CONSTANT } from "@configs";
import { Icon, translate } from "@shared";
import { Metrics, Themes } from "@themes";
import isEqual from "lodash/isEqual";
import React, { FunctionComponent, useState } from "react";
import {
  FlatList,
  Modal,
  Platform,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { InputDate } from "../../../Account";
import styles from "./styles";

interface Props {
  isShowModal: boolean;
  onCloseModal: () => void;
  routeSelected: string;
  updateRoute: (route: string) => void;
  statusSelected: number[];
  updateStatus: (status: number[]) => void;
  listStatus: Array<{ name: string; value: number[] }>;
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
    routeSelected,
    updateRoute,
    statusSelected,
    updateStatus,
    listStatus,
  } = props;
  const insets = useSafeAreaInsets();
  const [route, setRoute] = useState<string>(routeSelected);
  const [status, setStatus] = useState<number[]>(statusSelected);
  const [endDate, setEndDate] = useState<Date | undefined>();
  const [startDate, setStartDate] = useState<Date | undefined>();

  // useEffect(() => {
  //   if (isShowModal) {
  //     setStatus(statusSelected);
  //   }
  // }, [isShowModal, statusSelected]);

  // const onSelect = (newStatus: any) => {
  //   setStatus(newStatus);
  //   updateStatusSelected(newStatus);
  //   onCloseModal();
  // };

  const renderItem = ({ item }: { item: string }) => {
    const onPress = () => {
      setRoute(item);
    };
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.filterButton,
          {
            borderColor:
              item === route ? Themes.colors.info60 : Themes.colors.colGray10,
          },
        ]}
      >
        <Text style={styles.route}>{item}</Text>
        {item === route && (
          <>
            <View style={[styles.triangleCorner]} />
            <Icon
              name="ic_check"
              color={Themes.colors.white}
              size={Metrics.icons.smallSmallTiny}
              styles={styles.iconCheck}
            />
          </>
        )}
      </TouchableOpacity>
    );
  };

  const renderItemStatus = ({
    item,
  }: {
    item: { name: string; value: number[] };
  }) => {
    const onPress = () => {
      setStatus(item.value);
    };
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.filterButton,
          {
            borderColor: isEqual(item.value, status)
              ? Themes.colors.info60
              : Themes.colors.colGray10,
          },
        ]}
      >
        <Text style={styles.route}>{translate(item.name)}</Text>
        {isEqual(item.value, status) && (
          <>
            <View style={[styles.triangleCorner]} />
            <Icon
              name="ic_check"
              color={Themes.colors.white}
              size={Metrics.icons.smallSmallTiny}
              styles={styles.iconCheck}
            />
          </>
        )}
      </TouchableOpacity>
    );
  };

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

  const clearAll = () => {
    setRoute("");
    setStatus([]);
    setEndDate(undefined);
    setStartDate(undefined);
  };

  const clearRoute = () => {
    setRoute("");
  };

  const clearStatus = () => {
    setStatus([]);
  };

  const clearRangeDate = () => {
    setEndDate(undefined);
    setStartDate(undefined);
  };

  const onApply = () => {
    updateRoute(route);
    updateStatus(status);
    onCloseModal();
  };

  return (
    <Modal visible={isShowModal} animationType="slide">
      <View
        style={[
          styles.filterModal,
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom === 0 ? 10 : insets.bottom,
          },
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
            onPress={clearAll}
            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          >
            <Text style={styles.textHeaderRight}>
              {translate("buttonReset")}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.headerFilter}>
          <Text>{translate("labelRoute")}</Text>
          <TouchableOpacity
            style={styles.headerButton}
            onPress={clearRoute}
            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          >
            <Text style={styles.textHeaderRight}>
              {translate("buttonReset")}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={Object.values(CONSTANT.ROUTE)}
            keyExtractor={item => item}
            renderItem={renderItem}
            numColumns={2}
            columnWrapperStyle={styles.listRoute}
          />
        </View>
        <View style={styles.headerFilter}>
          <Text>{translate("labelStatus")}</Text>
          <TouchableOpacity
            style={styles.headerButton}
            onPress={clearStatus}
            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          >
            <Text style={styles.textHeaderRight}>
              {translate("buttonReset")}
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={listStatus}
          keyExtractor={item => item.name}
          renderItem={renderItemStatus}
          numColumns={2}
          columnWrapperStyle={styles.listRoute}
        />
        <View style={styles.headerFilter}>
          <Text>{translate("labelSelectDateRange")}</Text>
          <TouchableOpacity
            style={styles.headerButton}
            onPress={clearRangeDate}
            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          >
            <Text style={styles.textHeaderRight}>
              {translate("buttonReset")}
            </Text>
          </TouchableOpacity>
        </View>
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
        <View style={styles.footer}>
          <TouchableOpacity style={styles.applyBtn} onPress={onApply}>
            <Text style={styles.applyTextBtn}>{translate("buttonApply")}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
