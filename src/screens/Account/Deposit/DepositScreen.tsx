import { customerApi } from "@api";
import { Header, Separator } from "@components";
import { CONSTANT, SCREENS } from "@configs";
import { Alert, ScreenUtils } from "@helpers";
import { BankIcResponse, CustomerResponse } from "@models";
import { DepositStackParamList } from "@navigation";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { IRootState } from "@redux";
import { translate } from "@shared";
import { Themes } from "@themes";
import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TabBar, TabBarIndicator, TabView } from "react-native-tab-view";
import { useSelector } from "react-redux";
import { DepositCurrency, DepositVND } from "./Component";
import styles from "./styles";

export interface DepositParams {
  walletId: string;
}

type DepositScreenRoute = RouteProp<
  DepositStackParamList,
  SCREENS.DEPOSIT_SCREEN
>;

const TabKey = {
  VND: "VND",
  JPY: "JPY",
  USD: "USD",
};

const routes = [
  {
    key: TabKey.JPY,
    title: TabKey.JPY,
    walletId: CONSTANT.WALLET_TYPE.JPY_WALLET,
  },
  {
    key: TabKey.VND,
    title: TabKey.VND,
    walletId: CONSTANT.WALLET_TYPE.VND_WALLET,
  },
  {
    key: TabKey.USD,
    title: TabKey.USD,
    walletId: CONSTANT.WALLET_TYPE.USD_WALLET,
  },
];

export const DepositScreen: FunctionComponent = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const route = useRoute<DepositScreenRoute>();
  const { walletId } = route.params || {};
  const locale = useSelector((state: IRootState) => state.user.profile?.locale);
  const insets = useSafeAreaInsets();
  const [index, setIndex] = useState<number>(
    routes.findIndex(item => item.walletId === walletId),
  );

  const [dataBank, setDataBank] = useState<Array<BankIcResponse>>();

  const [customerInfo, setCustomerInfo] = useState<CustomerResponse>();

  const renderScene = useCallback(
    ({ route }: { route: { key: string; title: string } }) => {
      switch (route.key) {
        case TabKey.VND:
          return (
            <DepositVND dataBank={dataBank || []} customerInfo={customerInfo} />
          );
        case TabKey.JPY:
          return <DepositCurrency walletId={CONSTANT.WALLET_TYPE.JPY_WALLET} />;
        case TabKey.USD:
          return <DepositCurrency walletId={CONSTANT.WALLET_TYPE.USD_WALLET} />;
        default:
          return null;
      }
    },
    [customerInfo, dataBank],
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

  useEffect(() => {
    customerApi.getCustomerProfileById()?.then(response => {
      if (response?.status) {
        setCustomerInfo(response?.data);
      }
    });

    customerApi
      .getAllBank()
      ?.then(response => {
        response?.data && setDataBank(response.data);
      })
      .catch(() => Alert.error("error.generic"));
  }, []);

  return (
    <View style={{ ...styles.container, paddingTop: insets.top }}>
      <Header
        title={translate("label.deposit")}
        iconLeftName={["ic_arrow_left"]}
        iconLeftOnPress={[() => navigation.goBack()]}
        isCenterTitle
      />
      <Separator />
      {locale === CONSTANT.REGION.US ? (
        <DepositCurrency walletId={CONSTANT.WALLET_TYPE.JPY_WALLET} />
      ) : (
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: ScreenUtils.WIDTH_SCREEN }}
          renderTabBar={renderTabBar}
        />
      )}
    </View>
  );
};
