import { BalanceLoading } from "@components";
import { CONSTANT } from "@configs";
import { Utils } from "@helpers";
import { useAppSelector } from "@hooks";
import { ExchangeRateResponseV2, Wallet } from "@models";
import { IRootState } from "@redux";
import { Icon, translate } from "@shared";
import { Metrics, Themes } from "@themes";
import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";
import styles from "./styles";

interface OwnProps {
  customerWallet?: Wallet[];
  allExchange?: ExchangeRateResponseV2[];
}

type Props = OwnProps;

export const BalanceView: FunctionComponent<Props> = props => {
  const { customerWallet, allExchange } = props;
  const primaryCurrency = useAppSelector(
    (state: IRootState) => state.user.primaryCurrency,
  );
  const currency =
    !allExchange || allExchange.length === 0
      ? CONSTANT.CURRENCY.JA
      : primaryCurrency;

  const exchange = allExchange?.find(item => item.code === primaryCurrency);

  const jpyWallet = customerWallet?.find(
    wallet => wallet.walletId === CONSTANT.WALLET_TYPE.JPY_WALLET,
  );

  const usdWallet = customerWallet?.find(
    wallet => wallet.walletId === CONSTANT.WALLET_TYPE.USD_WALLET,
  );

  const vnWallet = customerWallet?.find(
    wallet => wallet.walletId === CONSTANT.WALLET_TYPE.VND_WALLET,
  );

  const jpyRate =
    exchange?.exchangerateItems.find(
      item => item.fromCode === CONSTANT.CURRENCY.JA,
    )?.rate || 1;

  const usdRate =
    exchange?.exchangerateItems.find(
      item => item.fromCode === CONSTANT.CURRENCY.USD,
    )?.rate || 1;

  const vnRate =
    exchange?.exchangerateItems.find(
      item => item.fromCode === CONSTANT.CURRENCY.VND,
    )?.rate || 1;

  const totalAvailable =
    (jpyWallet?.cashAvailable || 0) * jpyRate +
    (usdWallet?.cashAvailable || 0) * usdRate +
    (vnWallet?.cashAvailable || 0) * vnRate;

  const totalHold =
    (jpyWallet?.cashFreeze || 0) * jpyRate +
    (usdWallet?.cashFreeze || 0) * usdRate +
    (vnWallet?.cashFreeze || 0) * vnRate;
  return (
    <>
      {customerWallet ? (
        <View style={styles.balanceContainer}>
          <View style={styles.balanceView}>
            <View style={styles.balanceInfo}>
              <Text style={styles.balanceTitle}>
                {translate("labelTotalAvailable")}
              </Text>
              <Text style={styles.balanceContent}>
                {Utils.formatMoneyCurrency(totalAvailable, currency)}
              </Text>
            </View>
            <View style={styles.balanceInfo}>
              <View style={styles.hView}>
                <Text style={styles.balanceTitle}>
                  {translate("labelTotalOnHold")}
                </Text>
                <Icon
                  name="ic_info-circle"
                  size={Metrics.icons.smallSmall}
                  color={Themes.colors.coolGray60}
                />
              </View>

              <Text style={styles.balanceContent}>
                {Utils.formatMoneyCurrency(totalHold, currency)}
              </Text>
            </View>
          </View>
          <Text style={styles.balanceNote}>
            {translate("labelBalanceNote")}
          </Text>
        </View>
      ) : (
        <BalanceLoading />
      )}
    </>
  );
};
