import { customerApi } from "@api";
import { CONSTANT, DATA_CONSTANT } from "@configs";
import { Alert, ScreenUtils, Utils } from "@helpers";
import { useBoolean } from "@hooks";
import {
  CustomerResponse,
  DepositTransactionResponse,
  TransactionHistoryResponse,
} from "@models";
import { BaseBottomSheet, Icon, translate } from "@shared";
import { Metrics, Themes } from "@themes";
import React, { FunctionComponent, useState } from "react";
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { InfoTransferModal } from "./InfoTransferModal";
import styles from "./styles";

interface Props {
  item: TransactionHistoryResponse;
  customerInfo?: CustomerResponse;
}

export const TransactionItem: FunctionComponent<Props> = props => {
  const { item, customerInfo } = props;
  const [isShowModal, showModal, hideModal] = useBoolean();
  // const navigation = useNavigation<StackNavigationProp<any>>();
  // const anonymousId = useAppSelector(
  //   (state: IRootState) => state.user.anonymousId,
  // ) as string;
  const [isShowInfoTransfer, showInfoTransfer, hideInfoTransfer] = useBoolean();
  const [dataTransfer, setDataTransfer] =
    useState<DepositTransactionResponse>();

  const getDepositDetail = () => {
    customerApi
      .getDepositDetail(item.id)
      ?.then(response => {
        if (response?.status && response?.data) {
          setDataTransfer(response?.data);
          showInfoTransfer();
        } else {
          Alert.error("error.depositDetailNotFound");
          showModal();
        }
      })
      .catch(() => {
        Alert.error("error.depositDetailNotFound");
        showModal();
      });
  };

  const getSource = (source: string) => {
    const findSource = DATA_CONSTANT.TRANSACTION_SOURCE.find(
      (st: any) => st.value === source,
    );
    return findSource ? translate(findSource.name) : "";
  };

  const getType = (type: string) => {
    const findType = DATA_CONSTANT.TRANSACTION_TYPES.find(
      (st: any) => st.stringValue === type,
    );
    return findType ? translate(findType.name) : "";
  };

  const getCurrency = (walletId: string): string => {
    switch (walletId) {
      case CONSTANT.WALLET_TYPE.VND_WALLET:
        return CONSTANT.CURRENCY.VND;
      case CONSTANT.WALLET_TYPE.USD_WALLET:
        return CONSTANT.CURRENCY.USD;
      default:
        return CONSTANT.CURRENCY.JA;
    }
  };

  const getStatus = (status: number) => {
    const findStatus = DATA_CONSTANT.TRANSACTION_STATUS.find(
      (st: any) => st.value === status,
    );
    return findStatus ? translate(findStatus.name) : "";
  };

  const goToDetail = () => {
    switch (item.type) {
      case "PAY_ORDER":
      case "PAY_CANCEL_ORDER_AUCTION":
        // navigateToOrderDetailScreen({
        //   orderId: item.orderPayment.id,
        //   orderCode: item.orderPayment.code,
        // });
        break;
      case "PAY_PACKAGE":
        // navigation.navigate(SCREENS.PackageManagementStack, {
        //   screen: SCREENS.PACKAGE_DETAIL_SCREEN,
        //   params: { id: item.orderPayment.id },
        // });
        break;
      case "FREEZE":
        if (item.objectRef) {
          // navigation.navigate(SCREENS.SearchNavigation, {
          //   screen: SCREENS.YAHOO_AUCTION_DETAIL_SCREEN,
          //   params: {
          //     id: item.objectRef,
          //     anonymousId: anonymousId,
          //     refType: CONSTANT.PRODUCT_REF_TYPE.ProductYahooAuction,
          //   },
          // });
        }
        break;
      default:
        break;
    }
  };

  const showDetail = () => {
    if (
      (item.type === DATA_CONSTANT.TRANSACTION_TYPES_VALUE.DEPOSIT &&
        item.status === 4) ||
      (item.type === DATA_CONSTANT.TRANSACTION_TYPES_VALUE.WITHDRAW &&
        item.status === 12)
    ) {
      if (!dataTransfer) {
        getDepositDetail();
      } else {
        showInfoTransfer();
      }
    } else {
      showModal();
    }
  };

  return (
    <TouchableOpacity style={styles.transactionItem} onPress={showDetail}>
      <TouchableWithoutFeedback onPress={goToDetail}>
        <View style={styles.transactionHeader}>
          {item.type === "FREEZE" ? (
            <Text
              style={[styles.transactionCode, { color: Themes.colors.info60 }]}
            >
              {item.objectRef}
            </Text>
          ) : (
            <Text style={styles.transactionCode}>
              {item.orderPayment?.code || item.transactionRef}
            </Text>
          )}
          <View
            style={[
              styles.statusContainer,
              {
                backgroundColor:
                  item.status === 4 || item.status === 12
                    ? Themes.colors.primary
                    : Themes.colors.success60,
              },
            ]}
          >
            <Text style={styles.status}>{getStatus(item.status)}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.transactionHeader}>
        <Text style={styles.transactionStatus}>
          {Utils.date.formatTimeAGMT9(item.createdDateUtc)}
        </Text>
        <Text style={styles.transactionStatus}>{getSource(item.source)}</Text>
      </View>
      <View style={styles.transactionHeader}>
        <Text style={styles.transactionSource}>{getType(item.type)}</Text>
        <Text
          style={[
            styles.transactionAmount,
            {
              color:
                item.amount > 0
                  ? Themes.colors.success60
                  : Themes.colors.danger60,
            },
          ]}
        >
          {item.amount < 0 ? "- " : "+ "}
          {Utils.formatMoneyCurrency(
            Math.abs(item.amount),
            getCurrency(item.walletId),
          )}
        </Text>
      </View>
      <InfoTransferModal
        visible={isShowInfoTransfer}
        closeModal={hideInfoTransfer}
        data={dataTransfer}
        customerInfo={customerInfo}
        currency={getCurrency(item.walletId)}
      />
      <BaseBottomSheet isShowModal={isShowModal} onCloseModal={hideModal}>
        <View>
          <View style={styles.headerPaymentDetails}>
            <View style={styles.hView}>
              <Text style={styles.headerPaymentText} numberOfLines={1}>
                #{item.orderPayment?.code || item.transactionRef}
              </Text>
              <View
                style={[
                  styles.statusContainer,
                  {
                    backgroundColor:
                      item.status === 4
                        ? Themes.colors.primary
                        : Themes.colors.success60,
                  },
                ]}
              >
                <Text style={styles.status}>{getStatus(item.status)}</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={hideModal}
              style={{ marginLeft: ScreenUtils.scale(8) }}
            >
              <Icon
                name="ic_close"
                size={Metrics.icons.medium}
                color={Themes.colors.coolGray60}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.content}>
            <Text style={styles.createDate}>
              {Utils.date.formatTimeAGMT9(item.createdDateUtc)}
            </Text>
            <Text style={styles.paymentInfo}>
              {translate("labelPaymentInfo")}
            </Text>
            {!!item.matchingDateUtc && (
              <>
                <Text style={styles.createDate}>
                  {translate("labelMatchingDate")}:
                </Text>
                <Text style={styles.paymentData}>
                  {Utils.date.formatTimeAGMT9(item.matchingDateUtc)}
                </Text>
              </>
            )}
            <Text style={styles.createDate}>
              {translate("labelPaymentMethod")}:
            </Text>
            <Text style={styles.paymentData}>{getSource(item.source)}</Text>
            <View style={styles.amountContainer}>
              <Text style={styles.amountTitle}>{translate("labelAmount")}</Text>
              <Text
                style={[
                  styles.amount,
                  {
                    color:
                      item.amount > 0
                        ? Themes.colors.success60
                        : Themes.colors.danger60,
                  },
                ]}
              >
                {item.amount < 0 ? "- " : "+ "}
                {Utils.formatMoneyCurrency(
                  Math.abs(item.amount),
                  getCurrency(item.walletId),
                )}
              </Text>
            </View>
          </View>
        </View>
      </BaseBottomSheet>
    </TouchableOpacity>
  );
};
