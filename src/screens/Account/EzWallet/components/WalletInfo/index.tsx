import { customerApi } from "@api";
import { CONSTANT, SCREENS } from "@configs";
import { Alert, Utils } from "@helpers";
import { useAppDispatch, useAppSelector, useBoolean } from "@hooks";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { IRootState, updatePrimaryWallet } from "@redux";
import { Icon, translate } from "@shared";
import { Metrics, Themes } from "@themes";
import React, { FunctionComponent } from "react";
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import styles from "./styles";

interface Props {
  image: any;
  walletName: string;
  currency: string;
  cashAvailable: number;
  cashHold: number;
  rate: number;
  walletId: string;
  isWithdraw?: boolean;
  isDeposit?: boolean;
  style?: ViewStyle;
}

export const WalletInfo: FunctionComponent<Props> = (props: Props) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const primaryCurrency = useAppSelector(
    (state: IRootState) => state.user.primaryCurrency,
  );
  const {
    image,
    walletName,
    currency,
    cashAvailable,
    cashHold,
    rate,
    walletId,
    isWithdraw,
    isDeposit = true,
    style,
  } = props;
  const [isLoading, showLoading, hideLoading] = useBoolean();

  const goToDeposit = () => {
    navigation.navigate(SCREENS.DEPOSIT_STACK, {
      screen: SCREENS.DEPOSIT_SCREEN,
      params: {
        walletId: walletId,
      },
    });
  };

  const goToWithdraw = () => {
    navigation.navigate(SCREENS.DEPOSIT_STACK, {
      screen: SCREENS.WITHDRAW_SCREEN,
      params: {
        walletId: walletId,
      },
    });
  };

  const setPrimaryCurrency = () => {
    showLoading();
    customerApi
      .setDefaultWallet(walletId)
      ?.then(response => {
        if (response.status) {
          dispatch(updatePrimaryWallet(currency));
          AsyncStorage.setItem(
            CONSTANT.TOKEN_STORAGE_KEY.PRIMARY_CURRENCY,
            currency,
          );
        } else {
          Alert.error("error.errorServer");
        }
      })
      .catch(() => {
        Alert.error("error.errorServer");
      })
      .finally(() => {
        hideLoading();
      });
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.headerView}>
        <Image source={image} />
        <Text style={styles.walletName}>{walletName}</Text>
        {currency === primaryCurrency ? (
          <View style={styles.primaryCurrency}>
            <Icon
              name="ic_check"
              size={Metrics.icons.smallSmall}
              color={Themes.colors.white}
            />
            <Text style={styles.primaryCurrencyText}>
              {translate("labelPrimary")}
            </Text>
          </View>
        ) : (
          <TouchableOpacity onPress={setPrimaryCurrency}>
            {isLoading ? (
              <View style={styles.primaryCurrencyBtn}>
                <ActivityIndicator size="small" color={Themes.colors.info60} />
              </View>
            ) : (
              <View style={styles.primaryCurrencyBtn}>
                <Text style={styles.primaryCurrencyBtnText}>
                  {translate("labelSetPrimaryCurrency")}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.headerView}>
        <View style={styles.balanceInfo}>
          <Text style={styles.balanceTitle}>
            {translate("labelTotalAvailable")}
          </Text>
          <Text style={styles.balanceContent}>
            {Utils.formatMoneyCurrency(cashAvailable, currency)}
          </Text>
          <Text>
            <Text style={styles.exchangeTitle}>
              {translate("labelExchange")}:{" "}
            </Text>
            <Text style={styles.exchangeContent}>
              {Utils.formatMoneyCurrency(
                cashAvailable,
                rate === 1 ? currency : primaryCurrency,
                rate,
              )}
            </Text>
          </Text>
        </View>
        <View style={styles.balanceInfo}>
          <Text style={styles.balanceTitle}>
            {translate("labelTotalOnHold")}
          </Text>
          <Text style={styles.balanceContent}>
            {Utils.formatMoneyCurrency(cashHold, currency)}
          </Text>
          <Text>
            <Text style={styles.exchangeTitle}>
              {translate("labelExchange")}:{" "}
            </Text>
            <Text style={styles.exchangeContent}>
              {Utils.formatMoneyCurrency(
                cashHold,
                rate === 1 ? currency : primaryCurrency,
                rate,
              )}
            </Text>
          </Text>
        </View>
      </View>
      <View style={styles.headerView}>
        {isDeposit && (
          <TouchableOpacity style={styles.depositBtn} onPress={goToDeposit}>
            <Text style={styles.depositBtnText}>
              + {translate("buttonDeposit")}
            </Text>
          </TouchableOpacity>
        )}

        {isWithdraw && (
          <TouchableOpacity style={styles.withdrawBtn} onPress={goToWithdraw}>
            <Text style={styles.withdrawBtnText}>
              {translate("labelWithdraw")}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
