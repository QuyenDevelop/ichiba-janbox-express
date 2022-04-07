import { ConfirmDialog, Header, Separator } from "@components";
import { SCREENS } from "@configs";
import { ScreenUtils } from "@helpers";
import { useAppDispatch, useAppSelector, useStatusBar } from "@hooks";
import { Account } from "@models";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { logout } from "@redux";
import { Button, Icon, translate } from "@shared";
import { Metrics, Themes } from "@themes";
import React, { FunctionComponent, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { IRootState } from "src/redux/store";
import { AccountOptions } from "./components/AccountOptions/AccountOptions";
import { HeaderView } from "./components/HeaderView/HeaderView";
// import { IRootState } from "src/redux/reducers";
// import { BalanceView, HeaderView } from "./AccountScreen/components";
import styles from "./styles";

interface OwnProps {}

type Props = OwnProps;

export const HomeAccountScreen: FunctionComponent<Props> = () => {
  useStatusBar("dark-content");
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [isShowConfirm, setIsShowConfirm] = useState(false);
  // const [isShowModalChangeLanguge, setIsShowModalChangeLanguge] =
  //   useState(false);
  // const anonymousId = useAppSelector(
  //   (state: IRootState) => state.user.anonymousId,
  // ) as string;
  const profile = useAppSelector(
    (state: IRootState) => state.user.profile,
  ) as Account;
  const language = useAppSelector(state => state.user.language);
  const dispatch = useAppDispatch();
  // const [customerWallet, setCustomerWallet] = useState<Wallet[] | undefined>();
  // const [dataCustomerLevel, setDataCustomerLevel] =
  //   useState<CustomerLevelResponse>();
  // const [allExchange, setAllExchange] = useState<ExchangeRateResponseV2[]>([]);

  const handleLogout = () => {
    dispatch(logout());
    setIsShowConfirm(false);
    navigation.navigate(SCREENS.AUTH_STACK, {
      screen: SCREENS.LOGIN,
    });
  };

  const headerViewNotLogged = () => {
    return (
      <View style={styles.buttonContainer}>
        <Button
          buttonStyle={styles.buttonHeader}
          buttonChildStyle={styles.buttonTitleSignUpStyles}
          titleStyle={[styles.buttonTitleSignUp]}
          title={translate("button.login")}
          onPress={() =>
            navigation.navigate(SCREENS.AUTH_STACK, {
              screen: SCREENS.LOGIN,
            })
          }
        />
        <Button
          buttonStyle={styles.buttonHeader}
          buttonChildStyle={styles.constWidth}
          title={translate("button.signup")}
          onPress={() =>
            navigation.navigate(SCREENS.AUTH_STACK, {
              screen: SCREENS.REGISTER,
            })
          }
        />
      </View>
    );
  };

  const optionTopView = () => {
    return (
      <View>
        <AccountOptions
          title={translate("label.points")}
          rightTitle={translate("label.points")}
          // onPress={() => navigation.navigate(SCREENS.CHANGE_PASSWORD)}
          iconLeftName={"ic_gavel_fill"}
          iconRightName={"arrow-forward-ios"}
        />
        <AccountOptions
          title={translate("label.wallet")}
          rightTitle={translate("label.wallet")}
          // onPress={() => navigation.navigate(SCREENS.CHANGE_PASSWORD)}
          iconLeftName={"ic_gavel_fill"}
          iconRightName={"arrow-forward-ios"}
        />
        <AccountOptions
          title={translate("label.addressList")}
          // onPress={() => navigation.navigate(SCREENS.CHANGE_PASSWORD)}
          iconLeftName={"ic_gavel_fill"}
          iconRightName={"arrow-forward-ios"}
        />
        <AccountOptions
          title={translate("label.history")}
          // onPress={() => navigation.navigate(SCREENS.CHANGE_PASSWORD)}
          iconLeftName={"ic_gavel_fill"}
          iconRightName={"arrow-forward-ios"}
        />
      </View>
    );
  };

  const optionView = () => {
    return (
      <View>
        <View style={styles.logsTitle}>
          <Text style={styles.supportTitle}>Support</Text>
        </View>
        <AccountOptions
          title={translate("label.firstTimeUser")}
          onPress={() =>
            navigation.navigate(SCREENS.ACCOUNT_STACK, {
              screen: SCREENS.FIRST_TIME_USER,
            })
          }
          iconLeftName={"ic_gavel_fill"}
          iconRightName={"arrow-forward-ios"}
        />
        <AccountOptions
          title={translate("label.usageGuide")}
          // onPress={() => navigation.navigate(SCREENS.CHANGE_PASSWORD)}
          iconLeftName={"ic_heart_fill"}
          iconRightName={"arrow-forward-ios"}
        />
        <AccountOptions
          title={translate("label.faq")}
          // onPress={() => navigation.navigate(SCREENS.CHANGE_PASSWORD)}
          iconLeftName={"ic_heart_fill"}
          iconRightName={"arrow-forward-ios"}
        />
        <AccountOptions
          title={translate("label.manageComplaint")}
          // onPress={() => navigation.navigate(SCREENS.CHANGE_PASSWORD)}
          iconLeftName={"ic_comment_dots"}
          iconRightName={"arrow-forward-ios"}
        />
        <AccountOptions
          title={translate("label.language")}
          rightTitle={language ? language : translate("label.language")}
          // onPress={() => navigation.navigate(SCREENS.CHANGE_PASSWORD)}
          iconLeftName={"ic_globe"}
          iconRightName={"arrow-forward-ios"}
        />
        <AccountOptions
          title={translate("label.setting")}
          rightTitle={translate("label.passAndSecurity")}
          onPress={() =>
            profile
              ? navigation.navigate(SCREENS.ACCOUNT_STACK, {
                  screen: SCREENS.ACCOUNT_SETTING_SCREEN,
                })
              : navigation.navigate(SCREENS.AUTH_STACK, {
                  screen: SCREENS.LOGIN,
                })
          }
          iconLeftName={"ic_setting"}
          iconRightName={"arrow-forward-ios"}
        />
      </View>
    );
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        <Header isCenterTitle={true} title={translate("label.account")} />
        <Separator />
        {profile ? (
          <>
            <HeaderView profile={profile} />
          </>
        ) : (
          headerViewNotLogged()
        )}
        {/*{profile ? auctionView() : null}*/}
        <Separator height={ScreenUtils.scale(5)} />
        {optionTopView()}
        <Separator height={ScreenUtils.scale(5)} />
        {optionView()}
        {profile && (
          <>
            <Separator height={ScreenUtils.scale(5)} />
            <View style={styles.optionWrapper}>
              <TouchableOpacity
                onPress={() => setIsShowConfirm(true)}
                style={styles.buttonOption}
              >
                <View style={styles.swapperOptionItem}>
                  <View style={styles.icons}>
                    <Icon
                      name={"ic_sign-out"}
                      size={Metrics.icons.smallSmall}
                      color={Themes.colors.danger4933}
                    />
                  </View>
                  <Text
                    style={[
                      styles.optionTitle,
                      { color: Themes.colors.danger4933 },
                    ]}
                  >
                    {translate("button.logout")}
                  </Text>
                </View>
                <Icon
                  name={"ic_long_arrow_right"}
                  size={Metrics.icons.smallSmall}
                  color={Themes.colors.coolGray100}
                />
              </TouchableOpacity>
            </View>
          </>
        )}
      </ScrollView>

      <ConfirmDialog
        message={translate("button.confirmLogout")}
        isVisible={isShowConfirm}
        onDismiss={() => setIsShowConfirm(false)}
        onDeclinePress={() => setIsShowConfirm(false)}
        onAcceptPress={handleLogout}
        acceptText={translate("button.logout")}
      />
    </View>
  );
};
