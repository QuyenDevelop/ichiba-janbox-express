import { customerApi } from "@api";
import { CodeCopySuccess } from "@components";
import { CONSTANT, DATA_CONSTANT } from "@configs";
import { Alert, Utils } from "@helpers";
import { useBoolean } from "@hooks";
import { CustomerResponse, DepositTransactionResponse } from "@models";
import Clipboard from "@react-native-community/clipboard";
import { IRootState } from "@redux";
import { BaseBottomSheet, Icon, translate } from "@shared";
import { Metrics, Themes } from "@themes";
import React, { FunctionComponent, useRef, useState } from "react";
import {
  ActivityIndicator,
  DeviceEventEmitter,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import FastImage from "react-native-fast-image";
import { useSelector } from "react-redux";
import styles from "./styles";
interface Props {
  visible: boolean;
  closeModal: () => void;
  data?: DepositTransactionResponse;
  customerInfo?: CustomerResponse;
  currency?: string;
}

export const InfoTransferModal: FunctionComponent<Props> = ({
  visible,
  closeModal,
  data,
  customerInfo,
  currency,
}) => {
  const userId = useSelector((state: IRootState) => state.user.anonymousId);
  const [isShowCopy, setIsShowCopy] = useState(false);
  const [isShowCancel, showCancelWithdraw, hideCancelWithdraw] = useBoolean();
  const [reason, setReason] = useState<string>("");
  const [warning, setWarning] = useState<string>("");
  const [isLoading, showLoading, hideLoading] = useBoolean();
  const inputRef = useRef<TextInput>(null);
  const copyTopClipboard = (value?: string) => {
    if (value) {
      Clipboard.setString(value);
      setIsShowCopy(true);
      setTimeout(() => {
        setIsShowCopy(false);
      }, 2000);
    }
  };

  const messageTransfer = (): string => {
    const fullName =
      (customerInfo?.fullname.trim()
        ? Utils.removeAscent(customerInfo?.fullname.trim().toLowerCase())
        : customerInfo?.userName.toLowerCase()) || "";

    return `${data?.code} ${customerInfo?.code} ${fullName.replace(
      /\+|-|_/g,
      "",
    )}`.substring(0, 50);
  };

  const isShowCancelWithdraw: boolean =
    data?.type === DATA_CONSTANT.TRANSACTION_TYPES_VALUE.WITHDRAW &&
    data.status === 12;

  const onCancel = () => {
    showCancelWithdraw();
    setTimeout(() => {
      inputRef?.current?.focus();
    }, 500);
  };

  const confirmCancelWithdraw = () => {
    if (!reason.trim()) {
      setWarning(translate("labelPleaseEnterReason"));
      return;
    }

    if (data?.id) {
      showLoading();
      customerApi
        .updateWithdrawalTransaction({
          id: data?.id,
          action: 9,
          message: reason,
          createdBy: userId || "",
        })
        ?.then(response => {
          console.log("🚀🚀🚀 => confirmCancelWithdraw => response", response);
          if (response.status) {
            DeviceEventEmitter.emit(CONSTANT.RELOAD_ACTION.RELOAD_TRANSACTION);
            closeModal();
            Alert.success("label.cancelSuccess");
          } else {
            Alert.error("error.errorServer");
          }
        })
        .catch(() => {
          Alert.error("error.errorServer");
        })
        .finally(hideLoading);
    }
  };

  const onChangeReason = (newReason: string) => {
    if (!reason.trim()) {
      setWarning("");
    }
    setReason(newReason);
  };
  return (
    <BaseBottomSheet
      isShowModal={visible}
      onCloseModal={closeModal}
      headerTitle={translate("labelPaymentInfo")}
      showCloseModal={true}
    >
      <View>
        {isShowCancel ? (
          <View style={styles.content}>
            <Text style={styles.reasonCancelWithdraw}>
              <Text style={styles.obligatory}>* </Text>
              {translate("labelReasonCancelWithdraw")}
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                ref={inputRef}
                placeholder={translate("labelReasonCancelWithdraw")}
                style={styles.cancelWithdrawInput}
                value={reason}
                onChangeText={onChangeReason}
              />
            </View>
            <Text style={styles.obligatory}>{warning}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.backBtn}
                onPress={hideCancelWithdraw}
              >
                <Text style={styles.cancelWithdrawBtnText}>
                  {translate("buttonBack")}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelWithdrawBtn}
                onPress={confirmCancelWithdraw}
              >
                {isLoading ? (
                  <ActivityIndicator color={Themes.colors.white} />
                ) : (
                  <Text style={styles.cancelWithdrawBtnText}>
                    {translate("labelNext")}
                  </Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={styles.content}>
            {data?.amount && (
              <View style={styles.amountContainer}>
                <Text
                  style={[
                    styles.amount,
                    {
                      color:
                        data?.amount < 0
                          ? Themes.colors.danger60
                          : Themes.colors.success60,
                    },
                  ]}
                >
                  {Utils.formatMoneyCurrency(data?.amount, currency)}
                </Text>
              </View>
            )}
            {data?.bankIc.picture && (
              <View style={styles.spaceView}>
                <Text style={styles.bankName}>{data?.bankIc.bankName}</Text>
                <FastImage
                  source={{ uri: data?.bankIc.picture }}
                  resizeMode={FastImage.resizeMode.contain}
                  style={styles.iconBank}
                />
              </View>
            )}
            <View style={styles.spaceView}>
              <Text style={styles.bankFullName}>
                {data?.bankIc.bankFullName}
              </Text>
            </View>
            <View style={styles.spaceView}>
              <Text style={styles.titleRow}>
                {translate("labelAccountNumber")}:
              </Text>
              <TouchableOpacity
                style={styles.copyButton}
                onPress={() => copyTopClipboard(data?.bankIc.accountNumber)}
              >
                <Text style={styles.contentRow}>
                  {data?.bankIc.accountNumber}
                </Text>
                <Icon
                  name="ic_copy"
                  size={Metrics.icons.small}
                  color={Themes.colors.primary}
                  styles={styles.icCopy}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.spaceView}>
              <Text style={styles.titleRow}>
                {translate("labelAccountHolder")}:
              </Text>
              <Text style={styles.contentRow}>{data?.bankIc.accountName}</Text>
            </View>
            {data?.bankIc.branch && (
              <View style={styles.spaceView}>
                <Text style={styles.titleRow}>
                  {translate("labelBranchBank")}
                </Text>
                <Text style={styles.contentRow}>{data?.bankIc.branch}</Text>
              </View>
            )}

            {data?.type === DATA_CONSTANT.TRANSACTION_TYPES_VALUE.WITHDRAW && (
              <>
                <View style={styles.spaceView}>
                  <Text style={styles.titleRow}>
                    {translate("labelReasonWithdraw")}:
                  </Text>
                  <Text style={styles.contentRow}>
                    {data.bankIc.description}
                  </Text>
                </View>
              </>
            )}
            {data?.type === DATA_CONSTANT.TRANSACTION_TYPES_VALUE.DEPOSIT && (
              <>
                <View style={styles.spaceView}>
                  <Text style={styles.titleRow}>
                    {translate("labelTransferContents")}:
                  </Text>
                </View>
                <View style={styles.spaceView}>
                  <Text style={styles.contentRow}>{messageTransfer()}</Text>
                  <TouchableOpacity
                    style={styles.copyButton}
                    onPress={() => copyTopClipboard(messageTransfer())}
                  >
                    <Icon
                      name="ic_copy"
                      size={Metrics.icons.small}
                      color={Themes.colors.primary}
                      styles={styles.icCopy}
                    />
                  </TouchableOpacity>
                </View>
              </>
            )}
            <View style={styles.noticeContainer}>
              <Text style={styles.bankName}>
                {translate("labelPaymentsNotice")}:
              </Text>
              {data?.type === DATA_CONSTANT.TRANSACTION_TYPES_VALUE.DEPOSIT && (
                <Text style={styles.contentRow}>
                  {translate("textNoticeTransfer")}
                </Text>
              )}
              {data?.type ===
                DATA_CONSTANT.TRANSACTION_TYPES_VALUE.WITHDRAW && (
                <Text style={styles.contentRow}>
                  {translate("labelNoteWithdraw")}
                </Text>
              )}
            </View>
            {isShowCancelWithdraw && (
              <TouchableOpacity
                style={styles.cancelWithdrawBtn}
                onPress={onCancel}
              >
                <Text style={styles.cancelWithdrawBtnText}>
                  {translate("labelCancelWithdraw")}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        )}
        <CodeCopySuccess isShowCopy={isShowCopy} />
      </View>
    </BaseBottomSheet>
  );
};
