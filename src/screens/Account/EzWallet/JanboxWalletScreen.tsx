import { commonApi } from "@api";
import { BalanceLoading, Header, Separator } from "@components";
import { CONSTANT } from "@configs";
import { Alert, ScreenUtils } from "@helpers";
import { useAppSelector, useBalance, useBoolean } from "@hooks";
import { ExchangeRateResponseV2, Wallet } from "@models";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { IRootState } from "@redux";
import { translate } from "@shared";
import { Images, Themes } from "@themes";
import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from "react";
import {
  ActivityIndicator,
  DeviceEventEmitter,
  ScrollView,
  Text,
  View,
} from "react-native";
import { TabBar, TabBarIndicator, TabView } from "react-native-tab-view";
import { BalanceView } from "../components/BalanceView/BalanceView";
import { DebtInfo, TransactionHistory, WalletInfo } from "./components";
import styles from "./styles";

const tabKey = {
  DEBT: "DEBT",
  TRANSACTION_HISTORY: "TRANSACTION_HISTORY",
};

export const JanboxWalletScreen: FunctionComponent = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const primaryCurrency = useAppSelector(
    (state: IRootState) => state.user.primaryCurrency,
  );
  const [isRefresh, showRefresh, hideRefresh] = useBoolean();
  const { customerWallets, isFetching, updateBalance } = useBalance();
  const locale = useAppSelector(
    (state: IRootState) => state.user.profile?.locale,
  );
  const [allExchange, setAllExchange] = useState<ExchangeRateResponseV2[]>([]);
  const [index, setIndex] = useState<number>(0);
  const routes = [
    {
      key: tabKey.TRANSACTION_HISTORY,
      title: translate("labelTransactionHistory"),
    },
    { key: tabKey.DEBT, title: translate("labelDebt") },
  ];
  const exchange = allExchange.find(item => item.code === primaryCurrency);
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

  const jpyWallet = customerWallets.find(
    (wallet: Wallet) => wallet.walletId === CONSTANT.WALLET_TYPE.JPY_WALLET,
  );

  const usdWallet = customerWallets.find(
    (wallet: Wallet) => wallet.walletId === CONSTANT.WALLET_TYPE.USD_WALLET,
  );

  const vnWallet = customerWallets.find(
    (wallet: Wallet) => wallet.walletId === CONSTANT.WALLET_TYPE.VND_WALLET,
  );

  const fetchDataCurrency = () => {
    commonApi.getAllExchangeRateV2()?.then(response => {
      if (response && response.data && response.data.length > 0) {
        setAllExchange(response.data);
      }
    });
  };

  const refreshData = useCallback(
    (timeOut: number = 0) => {
      showRefresh();
      setTimeout(() => {
        updateBalance();
        hideRefresh();
      }, timeOut);
    },
    [hideRefresh, showRefresh, updateBalance],
  );

  useEffect(() => {
    fetchDataCurrency();
    const reloadData = DeviceEventEmitter.addListener(
      CONSTANT.RELOAD_ACTION.RELOAD_WALLET,
      (message?: string) => {
        if (message) {
          Alert.success(message, true);
        }
        refreshData(5000);
      },
    );
    return () => {
      reloadData.remove();
    };
  }, [refreshData]);

  const renderScene = useCallback(
    ({ route }: { route: { key: string; title: string } }) => {
      switch (route.key) {
        case tabKey.TRANSACTION_HISTORY:
          return <TransactionHistory />;
        case tabKey.DEBT:
          return <DebtInfo />;
        default:
          return null;
      }
    },
    [],
  );

  const renderTabBar = useCallback(props => {
    return (
      <TabBar
        {...props}
        style={styles.tabBar}
        renderIndicator={indicatorProps => (
          <TabBarIndicator {...indicatorProps} style={styles.indicatorStyle} />
        )}
        renderLabel={({ route, focused }) => (
          <Text
            style={[
              styles.tabBarLabel,
              {
                color: focused
                  ? Themes.colors.coolGray100
                  : Themes.colors.coolGray60,
              },
            ]}
          >
            {route.title}
          </Text>
        )}
      />
    );
  }, []);

  return (
    <View style={[styles.container]}>
      <Header
        title={translate("labelEzWallet")}
        iconLeftName={["ic_arrow_left"]}
        iconLeftOnPress={[() => navigation.goBack()]}
        isCenterTitle
      />
      <Separator />

      {isRefresh ? (
        <ActivityIndicator
          size="small"
          color={Themes.colors.coolGray60}
          style={styles.indicator}
        />
      ) : (
        <View style={styles.childContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {isFetching ? (
              <BalanceLoading />
            ) : (
              <BalanceView
                customerWallet={customerWallets}
                allExchange={allExchange}
              />
            )}
            {jpyWallet && (
              <WalletInfo
                image={Images.icJapan}
                walletName="Japanese Yen"
                currency={CONSTANT.CURRENCY.JA}
                cashAvailable={jpyWallet.cashAvailable}
                cashHold={jpyWallet.cashFreeze}
                style={{ marginTop: ScreenUtils.scale(16) }}
                rate={jpyRate}
                walletId={CONSTANT.WALLET_TYPE.JPY_WALLET}
              />
            )}
            {vnWallet && (
              <WalletInfo
                image={Images.icVietNam}
                walletName="Vietnam Dong"
                currency={CONSTANT.CURRENCY.VND}
                cashAvailable={vnWallet.cashAvailable}
                cashHold={vnWallet.cashFreeze}
                rate={vnRate}
                walletId={CONSTANT.WALLET_TYPE.VND_WALLET}
                isDeposit={locale !== CONSTANT.REGION.US}
                isWithdraw
              />
            )}

            {usdWallet && (
              <WalletInfo
                image={Images.icUSA}
                walletName="US Dollar"
                currency={CONSTANT.CURRENCY.USD}
                cashAvailable={usdWallet.cashAvailable}
                cashHold={usdWallet.cashFreeze}
                rate={usdRate}
                walletId={CONSTANT.WALLET_TYPE.USD_WALLET}
              />
            )}

            <Separator style={{ height: ScreenUtils.scale(12) }} />
            <View style={styles.dataContainer}>
              {/* <TransactionHistory /> */}
              <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: ScreenUtils.WIDTH_SCREEN }}
                renderTabBar={renderTabBar}
              />
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
};
