/* eslint-disable react-native/no-inline-styles */
import { Separator } from "@components";
import { CONSTANT } from "@configs";
import { ScreenUtils, Utils } from "@helpers";
import { Wallet } from "@models";
import { Button, translate } from "@shared";
import { Images, Themes } from "@themes";
import React, { FunctionComponent } from "react";
import { Image, Text, View } from "react-native";
import { TabModel } from "./HeaderTab";
import styles from "./styles";
interface Props {
  activeTab: TabModel;
  customerWallets: Array<Wallet>;
}
export const PointInformation: FunctionComponent<Props> = props => {
  const { activeTab, customerWallets } = props;
  // const navigation = useNavigation<StackNavigationProp<any>>();
  const walletInfo: Wallet | undefined = customerWallets.find(
    wallet => wallet.walletId === activeTab.key,
  );

  const goToDeposit = () => {
    // navigation.navigate(SCREENS.DepositStack, {
    //   screen: SCREENS.DEPOSIT_SCREEN,
    //   params: {
    //     walletId: walletInfo?.walletId,
    //   },
    // });
  };

  // const goToWithdraw = () => {
  //   navigation.navigate(SCREENS.DepositStack, {
  //     screen: SCREENS.WITHDRAW_SCREEN,
  //   });
  // };

  return (
    <View style={styles.pointView}>
      <View style={styles.pointInfoContainer}>
        <View style={{ flex: 0.6 }}>
          <Text style={styles.labelInfo}>{translate("labelAvailable")}</Text>
          <Text style={styles.availablePoint}>
            {walletInfo &&
              walletInfo.walletId === CONSTANT.WALLET_TYPE.PROMOTION_WALLET &&
              "$"}
            {walletInfo &&
              walletInfo.walletId === CONSTANT.WALLET_TYPE.VND_WALLET &&
              "₫"}
            {walletInfo?.cash
              ? Utils.formatNumber(
                  walletInfo.cash -
                    (walletInfo.cashFreeze ? walletInfo.cashFreeze : 0),
                )
              : 0}
          </Text>
          {walletInfo &&
            walletInfo.walletId === CONSTANT.WALLET_TYPE.JPY_WALLET && (
              <Text style={styles.labelInfo}>
                <Text style={[styles.labelInfo, { fontWeight: "700" }]}>
                  {translate("labelExchange")}:
                </Text>
                <Text style={styles.labelInfo}> 1 J point = 1¥</Text>
              </Text>
            )}
        </View>
        <View style={{ flex: 0.4 }}>
          <Button
            title={translate("buttonDeposit")}
            iconName="ic_plus"
            buttonChildStyle={{
              width: "100%",
              height: 40,
            }}
            onPress={goToDeposit}
          />
          {/* {walletInfo &&
            walletInfo.walletId === CONSTANT.WALLET_TYPE.VND_WALLET && (
              <Button
                title={translate("button.withdraw")}
                buttonChildStyle={{
                  backgroundColor: Themes.colors.white,
                  borderWidth: ScreenUtils.scale(2),
                  borderColor: Themes.colors.primary,
                  width: "100%",
                  height: 40,
                }}
                buttonStyle={{ marginTop: ScreenUtils.scale(8) }}
                titleStyle={{ color: Themes.colors.primary }}
                onPress={goToWithdraw}
              />
            )} */}
        </View>
      </View>
      <Separator />
      <View style={styles.holdPointContainer}>
        <View style={styles.holdPointInfo}>
          <Image source={Images.icHoldPoint} />
          <View style={{ marginLeft: ScreenUtils.scale(12) }}>
            <Text
              style={[styles.labelInfo, { color: Themes.colors.coolGray60 }]}
            >
              {translate("labelHoldPoint")}
            </Text>
            <Text
              style={[
                styles.availablePoint,
                {
                  fontSize: 16,
                  lineHeight: ScreenUtils.scale(24),
                  color: Themes.colors.coolGray60,
                },
              ]}
            >
              {Utils.formatNumber(walletInfo?.cashFreeze || 0)}
            </Text>
          </View>
        </View>
        <View style={styles.holdPointInfo}>
          <Image source={Images.icJGift} />
          <View style={{ marginLeft: ScreenUtils.scale(12) }}>
            <Text
              style={[styles.labelInfo, { color: Themes.colors.coolGray60 }]}
            >
              J Gift
            </Text>
            <Text
              style={[
                styles.availablePoint,
                {
                  fontSize: 16,
                  lineHeight: ScreenUtils.scale(24),
                },
              ]}
            >
              0
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
