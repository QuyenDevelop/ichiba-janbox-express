import { customerApi, paymentApi } from "@api";
import { Separator } from "@components";
import { CONSTANT } from "@configs";
import { Alert, ScreenUtils, Utils } from "@helpers";
import { useLoading } from "@hooks";
import { DepositRequest, PaypalPaymentFee } from "@models";
import { TextInputFormat, translate } from "@shared";
import { Images, Themes } from "@themes";
import React, { FunctionComponent, useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import FastImage from "react-native-fast-image";
import { HeaderItem } from "../HeaderItem";
import { TotalPayment } from "../TotalPayment";
import styles from "./styles";

interface Props {
  walletId: string;
}
export const DepositCurrency: FunctionComponent<Props> = ({ walletId }) => {
  // const navigation = useNavigation<StackNavigationProp<any>>();
  const [numberRequest, setNumberRequest] = useState<string | undefined>();
  const [textInput, setTextInput] = useState<string | undefined>();
  const [isButtonClickSubmit, setIsButtonClickSubmit] = useState(false);
  const [paymentOption, setPaymentOption] = useState(
    CONSTANT.PAYMENT_OPTION.Paypal,
  );
  const { showLoading, hideLoading } = useLoading();
  const [paypalPaymentFee, setPaypalPaymentFee] = useState<PaypalPaymentFee>();
  const currencyData =
    walletId === CONSTANT.WALLET_TYPE.USD_WALLET
      ? { title: "$", currency: CONSTANT.CURRENCY.USD }
      : { title: "¥", currency: CONSTANT.CURRENCY.JA };

  useEffect(() => {
    paymentApi.getPaypalPaymentFeeV2(currencyData.currency)?.then(response => {
      if (response?.status) {
        setPaypalPaymentFee(response.data);
      }
    });
  }, [currencyData.currency]);

  const getPaymentFee = () => {
    try {
      if (paypalPaymentFee) {
        const totalPayment =
          (Number(numberRequest) + paypalPaymentFee.fixedFee) /
          (1 - paypalPaymentFee.percentFee / 100);
        return walletId === CONSTANT.WALLET_TYPE.USD_WALLET
          ? Number(totalPayment)
          : Math.round(totalPayment);
      }
      return Number(numberRequest);
    } catch {
      return Number(numberRequest);
    }
  };

  const handleMethodCard = (type: string) => {
    setPaymentOption(type);
  };

  const validation = (): string => {
    if (!Utils.isEqualZero(Number(numberRequest))) {
      return translate("error.validation.depositValue");
    }

    if (walletId === CONSTANT.WALLET_TYPE.JPY_WALLET) {
      if (Number(numberRequest) < 100) {
        return translate("error.validation.depositValue1");
      }

      if (Number(numberRequest) > 1000000) {
        return translate("error.validation.depositValue4");
      }
    }

    if (walletId === CONSTANT.WALLET_TYPE.USD_WALLET) {
      if (Number(numberRequest) > 10000) {
        return translate("error.validation.depositValue5");
      }
    }
    return "";
  };

  const getCurrency = (walletType: string) => {
    switch (walletType) {
      case CONSTANT.WALLET_TYPE.JPY_WALLET:
        return { title: "¥", currency: CONSTANT.CURRENCY.JA };
      case CONSTANT.WALLET_TYPE.USD_WALLET:
        return { title: "$", currency: CONSTANT.CURRENCY.USD };
      default:
        return { title: "¥", currency: CONSTANT.CURRENCY.JA };
    }
  };

  const handleRecharge = () => {
    setIsButtonClickSubmit(true);
    if (!validation()) {
      if (Utils.isEqualZero(Number(numberRequest))) {
        let request: DepositRequest = {
          amount: Number(numberRequest),
          currency: getCurrency(walletId).currency,
          successUrl: CONSTANT.PAYMENT_RETURN_URL.SUCCESS,
          cancelUrl: CONSTANT.PAYMENT_RETURN_URL.CANCEL,
        };
        showLoading();
        customerApi
          .depositPaypal(request)
          ?.then(response => {
            const redirectUrl = response?.data?.redirectUrl;
            if (redirectUrl) {
              // navigation.navigate(SCREENS.DEPOSIT_WEBVIEW_SCREEN, {
              //   redirectUrl: redirectUrl,
              // });
            } else {
              Alert.error("error.generic");
            }
          })
          .catch(() => Alert.error("error.generic"))
          .finally(() => hideLoading());
      }
    }
  };

  const goToDetails = () => {
    // navigation.navigate(SCREENS.WEBVIEW_STACK, {
    //   screen: SCREENS.WEBVIEW_SCREEN,
    //   params: {
    //     redirectUrl: "https://janbox.com/vi/help/ve-j-points-176",
    //     title: "J-Points",
    //   },
    // });
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
        <Text style={styles.titleInputDeposit}>
          {translate("label.deposit")}
        </Text>
        <TextInputFormat
          keyboardType={"number-pad"}
          onChangeText={setTextInput}
          placeholder={translate("label.enterDeposit")}
          textRight={getCurrency(walletId).title}
          errorMessage={isButtonClickSubmit ? validation() : ""}
          setValueDefault={setNumberRequest}
          style={styles.textInput}
          value={textInput}
          textRightStyle={styles.currencyInput}
        />
        <View style={styles.warningContent}>
          <Text style={styles.warning}>
            {translate("label.warningDeposit")}.
          </Text>
          <TouchableOpacity onPress={goToDetails}>
            <Text style={styles.detailBtnText}>
              ({translate("button.detail")})
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.paymentMethodTitle}>
          {translate("label.paymentMethod")}
        </Text>
        <View>
          <HeaderItem
            paymentOption={paymentOption}
            onChange={handleMethodCard}
            title="Paypal"
            type={CONSTANT.PAYMENT_OPTION.Paypal}
          />
          <Text style={styles.secureLabel}>{translate("label.topSafe")}</Text>
          <FastImage
            source={Images.paypalMethod}
            resizeMode={FastImage.resizeMode.contain}
            style={styles.iconLogoPayPal}
          />
          <TotalPayment
            total={getPaymentFee()}
            currency={currencyData.currency}
          />

          {walletId === CONSTANT.WALLET_TYPE.JPY_WALLET && (
            <>
              <Separator style={{ marginVertical: ScreenUtils.scale(12) }} />
              <View style={{ backgroundColor: Themes.colors.colGray20 }}>
                <HeaderItem
                  paymentOption={paymentOption}
                  onChange={handleMethodCard}
                  title="Alipay"
                  type=""
                  disable={true}
                />
                <Text style={styles.secureLabel}>
                  {translate("label.secure")}
                </Text>
                <FastImage
                  source={Images.icAlipay}
                  resizeMode={FastImage.resizeMode.contain}
                  style={[
                    styles.iconLogoPayPal,
                    { marginLeft: ScreenUtils.scale(16) },
                  ]}
                />
                <Separator style={{ marginVertical: ScreenUtils.scale(12) }} />
                <HeaderItem
                  paymentOption={paymentOption}
                  onChange={handleMethodCard}
                  title="GMO"
                  type=""
                  disable={true}
                />
                <Text style={styles.secureLabel}>
                  {translate("label.topSafe")}
                </Text>
                <FastImage
                  source={Images.gmo}
                  resizeMode={FastImage.resizeMode.contain}
                  style={styles.iconLogoPayPal}
                />
              </View>
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
          <Text style={styles.textSubmit}>{translate("button.confirm")}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
