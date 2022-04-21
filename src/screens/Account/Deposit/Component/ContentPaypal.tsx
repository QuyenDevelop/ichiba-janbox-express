import { CONSTANT } from "@configs";
import { translate } from "@shared";
import { Images } from "@themes";
import React, { FunctionComponent, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import FastImage from "react-native-fast-image";
import styles from "../styles";
import { HeaderItem } from "./HeaderItem";

interface Props {}

export const ContentPaypal: FunctionComponent<Props> = props => {
  const {} = props;
  const [paymentOption, setPaymentOption] = useState("");
  const [show, setShow] = useState(false);
  const handleSelectBank = (type: string) => {
    if (paymentOption === type) {
      setPaymentOption("");
    } else {
      setPaymentOption(type);
    }
  };
  return (
    <View style={styles.contentInputCredit}>
      <View style={styles.contentHeaderPaypal}>
        <FastImage
          source={Images.logoPaypal}
          resizeMode={FastImage.resizeMode.contain}
          style={styles.logoPaypal}
        />
        <View>
          <Text style={styles.titlePaypal}>Paypal account</Text>
          <Text style={styles.textEmailPaypal}>Pencinguyen@gmail.com</Text>
          <Text style={styles.textPaypal}>Paypal Balance</Text>
          <View style={styles.switckPaypal}>
            <TouchableOpacity onPress={() => setShow(true)}>
              <Text style={styles.addCard}>{translate("labelChange")}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.addCard}>
                {translate("labelWitchAccount")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {show ? (
        <>
          <View style={styles.br} />
          <View style={styles.showMoreContent}>
            <Text style={styles.titlePaypal}>
              {translate("labelPaypalWallet")}
            </Text>
            <View style={styles.itemMethodPaypal}>
              <HeaderItem
                paymentOption={paymentOption}
                onChange={handleSelectBank}
                title=""
                type={CONSTANT.PAYPAL_METHOD_PAY.PaypalBalance}
              />
              <Text style={styles.balanceText}>Paypal Balance</Text>
            </View>
            <View style={styles.itemMethodPaypal}>
              <View style={styles.buttonActive}>
                <HeaderItem
                  paymentOption={paymentOption}
                  onChange={handleSelectBank}
                  title=""
                  type={CONSTANT.PAYPAL_METHOD_PAY.CardBank}
                />
              </View>
              <View style={styles.cardPaypal}>
                <FastImage
                  source={Images.card}
                  resizeMode={FastImage.resizeMode.contain}
                  style={styles.iconCard}
                />
                <View>
                  <Text style={styles.textnumberCard}>**** **** **** 6789</Text>
                  <Text style={styles.textExchange}>
                    {translate("labelExchangeRate")}:
                  </Text>
                  <Text style={styles.textVnd}>1 VND = $0.000042 USD</Text>
                </View>
              </View>
            </View>
          </View>
        </>
      ) : null}
    </View>
  );
};
