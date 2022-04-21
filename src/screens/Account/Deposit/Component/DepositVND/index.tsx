import { customerApi, paymentApi } from "@api";
import { Separator } from "@components";
import { CONSTANT, SCREENS } from "@configs";
import { Alert, ScreenUtils, Utils } from "@helpers";
import { useBoolean, useLoading } from "@hooks";
import {
  BankIcResponse,
  CustomerResponse,
  DepositTransactionResponse,
  PayMETransactionFee,
} from "@models";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { TextInputFormat, translate } from "@shared";
import { Images, Themes } from "@themes";
import React, { FunctionComponent, useEffect, useState } from "react";
import {
  Image,
  LayoutAnimation,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { HeaderItem } from "../HeaderItem";
import { InfoTransferModal } from "../InfoTransferModal";
import { ItemBankTransfer } from "../ItemBankTransfer";
import { TotalPayment } from "../TotalPayment";
import styles from "./styles";

interface Props {
  dataBank: Array<BankIcResponse>;
  customerInfo?: CustomerResponse;
}
export const DepositVND: FunctionComponent<Props> = ({
  dataBank,
  customerInfo,
}) => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [numberRequest, setNumberRequest] = useState<string | undefined>();
  const [textInput, setTextInput] = useState<string | undefined>();
  const [isButtonClickSubmit, setIsButtonClickSubmit] = useState(false);
  const [bankActive, setBankActive] = useState<BankIcResponse>();
  const [paymentOption, setPaymentOption] = useState(
    CONSTANT.PAYMENT_OPTION.BankTransfer,
  );
  const { showLoading, hideLoading } = useLoading();
  const [isShowInfoTransfer, showInfoTransfer, hideInfoTransfer] = useBoolean();
  const [dataTransfer, setDataTransfer] =
    useState<DepositTransactionResponse>();

  const [transactionFeeConfig, setTransactionFeeConfig] = useState<
    Array<PayMETransactionFee>
  >([]);

  const paymeWalletFee = Number(
    transactionFeeConfig.find(
      item => item.key === CONSTANT.PAYME_TRANSACTION_FEE.PAYME_WALLET_FEE,
    )?.value,
  );

  const paymeATMCardFee = Number(
    transactionFeeConfig.find(
      item => item.key === CONSTANT.PAYME_TRANSACTION_FEE.PAYME_ATMCARD_FEE,
    )?.value,
  );

  const paymeQRPayFee = Number(
    transactionFeeConfig.find(
      item => item.key === CONSTANT.PAYME_TRANSACTION_FEE.PAYME_QRPAY_FEE,
    )?.value,
  );

  const paymeATMCardFlatFee = Number(
    transactionFeeConfig.find(
      item =>
        item.key === CONSTANT.PAYME_TRANSACTION_FEE.PAYME_ATMCARD_FLAT_FEE,
    )?.value,
  );

  const paymeBankTransferFee = Number(
    transactionFeeConfig.find(
      item =>
        item.key === CONSTANT.PAYME_TRANSACTION_FEE.PAYME_BANKTRANSFER_FEE,
    )?.value,
  );

  useEffect(() => {
    paymentApi.getPaymeTransactionFee()?.then(response => {
      if (response?.status) {
        setTransactionFeeConfig(response?.data);
      }
    });
  }, []);

  const handleMethodCard = (type: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setPaymentOption(type);
  };

  const handleSelectBank = (type: BankIcResponse) => {
    if (bankActive && bankActive.id === type.id) {
      setBankActive(undefined);
    } else {
      setBankActive(type);
    }
  };

  const validation = (): string => {
    if (!Utils.isEqualZero(Number(numberRequest))) {
      return translate("error.validation.depositValue");
    }

    if (Number(numberRequest) < 10000) {
      return translate("error.validation.depositValue2");
    }

    if (Number(numberRequest) > 1000000000) {
      return translate("error.validation.depositValue3");
    }

    if (paymentOption === CONSTANT.PAYMENT_OPTION.BankTransfer && !bankActive) {
      return translate("label.noSelectBank");
    }

    return "";
  };

  const createDepositFromBank = () => {
    if (bankActive) {
      showLoading();
      customerApi
        .createDepositFromBank(
          Number(numberRequest),
          bankActive?.bankName!,
          bankActive?.accountNumber!,
        )
        ?.then(response => {
          if (response && response.data) {
            setDataTransfer(response.data);
            showInfoTransfer();
          }
        })
        .catch(() => {
          Alert.error("error.errorServer");
        })
        .finally(() => hideLoading());
    } else {
      Alert.warning("label.noSelectBank");
    }
  };

  const createDepositFromPayMe = () => {
    const request = {
      amount: Number(numberRequest),
      currency: "VND",
      successUrl: CONSTANT.PAYMENT_RETURN_URL.SUCCESS,
      cancelUrl: CONSTANT.PAYMENT_RETURN_URL.CANCEL,
      payMethod: paymentOption,
    };
    showLoading();
    customerApi
      .depositPayME(request)
      ?.then(response => {
        const redirectUrl = response?.data?.redirectUrl;
        if (redirectUrl) {
          navigation.navigate(SCREENS.DEPOSIT_WEBVIEW_SCREEN, {
            redirectUrl: redirectUrl.replace("http:", "https:"), // sửa lại sau khi lên prod
          });
        } else {
          Alert.error("error.generic");
        }
      })
      .catch(() => Alert.error("error.generic"))
      .finally(() => hideLoading());
  };

  const handleRecharge = () => {
    setIsButtonClickSubmit(true);
    if (!validation()) {
      switch (paymentOption) {
        case CONSTANT.PAYMENT_OPTION.BankTransfer:
          createDepositFromBank();
          break;
        case CONSTANT.PAYME_PAYMENT_METHOD.ATMCARD:
        case CONSTANT.PAYME_PAYMENT_METHOD.QRPAY:
        case CONSTANT.PAYME_PAYMENT_METHOD.PAYME:
        case CONSTANT.PAYME_PAYMENT_METHOD.BANKTRANSFER:
          createDepositFromPayMe();
          break;
        default:
          break;
      }
    }
  };

  const getPaymentFee = () => {
    const value = Number(numberRequest);
    switch (paymentOption) {
      case CONSTANT.PAYMENT_OPTION.BankTransfer:
        return value;
      case CONSTANT.PAYME_PAYMENT_METHOD.ATMCARD:
        return ((100 + paymeATMCardFee) / 100) * value + paymeATMCardFlatFee;
      case CONSTANT.PAYME_PAYMENT_METHOD.QRPAY:
        return ((100 + paymeQRPayFee) / 100) * value;
      case CONSTANT.PAYME_PAYMENT_METHOD.PAYME:
        return ((100 + paymeWalletFee) / 100) * value;
      case CONSTANT.PAYME_PAYMENT_METHOD.BANKTRANSFER:
        return value + paymeBankTransferFee;
      default:
        return value;
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.content}
        contentContainerStyle={{
          paddingBottom: ScreenUtils.scale(80),
        }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.titleInputDeposit}>{translate("labeDeposit")}</Text>
        <TextInputFormat
          keyboardType={"number-pad"}
          onChangeText={setTextInput}
          placeholder={translate("labelEnterDeposit")}
          textRight="₫"
          errorMessage={isButtonClickSubmit ? validation() : ""}
          setValueDefault={setNumberRequest}
          style={styles.textInput}
          value={textInput}
          textRightStyle={styles.currencyInput}
        />
        {/* <Text style={styles.warning}>{translate("label.warningDeposit")}</Text> */}
        <Text style={styles.paymentMethodTitle}>
          {translate("labelPaymentMethod")}
        </Text>
        <View>
          <HeaderItem
            paymentOption={paymentOption}
            onChange={handleMethodCard}
            title={translate("paymentMethod.transferPayMe")}
            type={CONSTANT.PAYME_PAYMENT_METHOD.BANKTRANSFER}
            paymentFee={Utils.formatMoneyCurrency(
              paymeBankTransferFee,
              CONSTANT.CURRENCY.VND,
            )}
          />
          {paymentOption === CONSTANT.PAYME_PAYMENT_METHOD.BANKTRANSFER && (
            <>
              <TotalPayment
                total={getPaymentFee()}
                currency={CONSTANT.CURRENCY.VND}
              />
            </>
          )}
          <Separator style={{ marginVertical: ScreenUtils.scale(12) }} />
          <HeaderItem
            paymentOption={paymentOption}
            onChange={handleMethodCard}
            title={translate("paymentMethod.atmCard")}
            type={CONSTANT.PAYME_PAYMENT_METHOD.ATMCARD}
            paymentFee={`${paymeATMCardFee}%${
              !!paymeATMCardFlatFee && paymeATMCardFlatFee > 0
                ? ` + ${Utils.formatMoneyCurrency(
                    paymeATMCardFlatFee,
                    CONSTANT.CURRENCY.VND,
                  )}`
                : ""
            }`}
          />
          {paymentOption === CONSTANT.PAYME_PAYMENT_METHOD.ATMCARD && (
            <>
              <TotalPayment
                total={getPaymentFee()}
                currency={CONSTANT.CURRENCY.VND}
              />
            </>
          )}
          <Separator style={{ marginVertical: ScreenUtils.scale(12) }} />
          <HeaderItem
            paymentOption={paymentOption}
            onChange={handleMethodCard}
            title={translate("paymentMethod.bankQRCode")}
            type={CONSTANT.PAYME_PAYMENT_METHOD.QRPAY}
            paymentFee={`${paymeQRPayFee}%`}
          />
          {paymentOption === CONSTANT.PAYME_PAYMENT_METHOD.QRPAY && (
            <>
              <TotalPayment
                total={getPaymentFee()}
                currency={CONSTANT.CURRENCY.VND}
              />
            </>
          )}
          <Separator style={{ marginVertical: ScreenUtils.scale(12) }} />
          <HeaderItem
            paymentOption={paymentOption}
            onChange={handleMethodCard}
            title={translate("paymentMethod.payMeWallet")}
            type={CONSTANT.PAYME_PAYMENT_METHOD.PAYME}
            paymentFee={`${paymeWalletFee}%`}
          />
          <Text style={styles.secureLabel}>{translate("labelPayMeDes")}</Text>

          <Image source={Images.icPayMe} style={styles.icon} />
          {paymentOption === CONSTANT.PAYME_PAYMENT_METHOD.PAYME && (
            <>
              <TotalPayment
                total={getPaymentFee()}
                currency={CONSTANT.CURRENCY.VND}
              />
            </>
          )}
          <Separator style={{ marginVertical: ScreenUtils.scale(12) }} />
          <HeaderItem
            paymentOption={paymentOption}
            onChange={handleMethodCard}
            title={translate("labelBankTransfer")}
            type={CONSTANT.PAYMENT_OPTION.BankTransfer}
          />
          <Text style={styles.secureLabel}>{translate("labelSecure")}</Text>
          {paymentOption === CONSTANT.PAYMENT_OPTION.BankTransfer && (
            <>
              <TotalPayment
                total={getPaymentFee()}
                currency={CONSTANT.CURRENCY.VND}
              />
              {dataBank &&
                dataBank?.length > 0 &&
                dataBank.map((item: BankIcResponse, index: number) => (
                  <View style={styles.bankInfo} key={index}>
                    <ItemBankTransfer
                      item={item}
                      handleSelectBank={handleSelectBank}
                      BankActive={bankActive?.id!}
                    />
                    {index < dataBank.length - 1 && (
                      <Separator style={styles.bankSeparator} />
                    )}
                  </View>
                ))}
            </>
          )}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity
          disabled={paymentOption === ""}
          style={[
            styles.buttonSubMit,
            paymentOption === ""
              ? { backgroundColor: Themes.colors.blue008 }
              : {},
          ]}
          onPress={handleRecharge}
        >
          <Text style={styles.textSubmit}>{translate("buttonConfirm")}</Text>
        </TouchableOpacity>
      </View>
      <InfoTransferModal
        visible={isShowInfoTransfer}
        closeModal={hideInfoTransfer}
        data={dataTransfer}
        customerInfo={customerInfo}
      />
    </View>
  );
};
