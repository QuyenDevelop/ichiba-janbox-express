import { ConfirmDialog, Header, Separator } from "@components";
import { CONSTANT, SCREENS } from "@configs";
import { ScreenUtils } from "@helpers";
import {
  useAppDispatch,
  useAppSelector,
  useBoolean,
  useStatusBar,
} from "@hooks";
import { Account, PickerItemsResponse } from "@models";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { logout } from "@redux";
import { Button, Icon, translate } from "@shared";
import { Icons, Metrics, Themes } from "@themes";
import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from "react";
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

let dataLanguages: Array<PickerItemsResponse> = [
  {
    id: "1",
    name: "Tiếng Việt",
    value: "vi-VN",
  },
  {
    id: "2",
    name: "English",
    value: "en-US",
  },
  {
    id: "3",
    name: "日本語",
    value: "ja-JP",
  },
];

export const HomeAccountScreen: FunctionComponent<Props> = () => {
  useStatusBar("dark-content");
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [showConfirm, setShowConfirm, setHideConfirm] = useBoolean(false);
  // const [isShowModalChangeLanguge, setIsShowModalChangeLanguge] =
  //   useState(false);
  // const anonymousId = useAppSelector(
  //   (state: IRootState) => state.user.anonymousId,
  // ) as string;
  const profile = useAppSelector(
    (state: IRootState) => state.user.profile,
  ) as Account;
  const language = useAppSelector(state => state.user.language);
  const [selectedLanguage, setSelectedLanguage] =
    useState<PickerItemsResponse>();
  const dispatch = useAppDispatch();
  // const [customerWallet, setCustomerWallet] = useState<Wallet[] | undefined>();
  // const [dataCustomerLevel, setDataCustomerLevel] =
  //   useState<CustomerLevelResponse>();
  // const [allExchange, setAllExchange] = useState<ExchangeRateResponseV2[]>([]);

  const handleLogout = () => {
    setHideConfirm();
    dispatch(logout());
    setTimeout(() => {
      navigation.navigate(SCREENS.AUTH_STACK, {
        screen: SCREENS.LOGIN,
      });
    }, 100);
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
          iconLeftName={"ic_star"}
          iconLeftColor={Themes.colors.red0033}
          iconRightName={"arrow-forward-ios"}
        />
        <AccountOptions
          title={translate("label.wallet")}
          rightTitle={translate("label.wallet")}
          // onPress={() => navigation.navigate(SCREENS.CHANGE_PASSWORD)}
          icon={() => {
            return (
              <Icons.Entypo
                name={"wallet"}
                size={Metrics.icons.smallSmall}
                color={Themes.colors.wallet}
              />
            );
          }}
          iconRightName={"arrow-forward-ios"}
        />
        <AccountOptions
          title={translate("label.addressList")}
          onPress={() =>
            profile
              ? navigation.navigate(SCREENS.ACCOUNT_STACK, {
                  screen: SCREENS.ADDRESS_LIST_SCREEN,
                })
              : navigation.navigate(SCREENS.AUTH_STACK, {
                  screen: SCREENS.LOGIN,
                })
          }
          iconLeftName={"ic_location"}
          iconLeftColor={Themes.colors.location}
          iconRightName={"arrow-forward-ios"}
        />
        <AccountOptions
          title={translate("label.history")}
          // onPress={() => navigation.navigate(SCREENS.CHANGE_PASSWORD)}
          icon={() => {
            return (
              <Icons.FontAwesome5
                name={"hands-helping"}
                size={Metrics.icons.smallSmall}
                color={Themes.colors.coolGray60}
              />
            );
          }}
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
          iconLeftName={"ic_first_time_user"}
          iconRightName={"arrow-forward-ios"}
        />
        <AccountOptions
          title={translate("label.usageGuide")}
          // onPress={() => navigation.navigate(SCREENS.CHANGE_PASSWORD)}
          icon={() => {
            return (
              <Icons.FontAwesome5
                name={"hands-helping"}
                size={Metrics.icons.smallSmall}
                color={Themes.colors.coolGray60}
              />
            );
          }}
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
          rightTitle={
            selectedLanguage
              ? selectedLanguage.name
              : translate("label.language")
          }
          onPress={() =>
            navigation.navigate(SCREENS.ACCOUNT_STACK, {
              screen: SCREENS.LANGUAGES,
              params: {
                language: selectedLanguage
                  ? selectedLanguage.name
                  : CONSTANT.LANGUAGES.EN,
              },
            })
          }
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

  const checkedSelectedLanguage = useCallback(() => {
    if (language) {
      let selected = dataLanguages.find(x => x.value === language);
      if (selected) {
        setSelectedLanguage(selected);
      }
    }
  }, [language]);

  useEffect(() => {
    checkedSelectedLanguage();
  }, [checkedSelectedLanguage]);

  useEffect(() => {
    return navigation.addListener("focus", () => {
      checkedSelectedLanguage();
    });
  }, [checkedSelectedLanguage, navigation]);

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Header isCenterTitle={true} title={translate("label.account")} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
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
                onPress={setShowConfirm}
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

      {showConfirm && (
        <ConfirmDialog
          message={translate("button.confirmLogout")}
          isVisible={showConfirm}
          onDismiss={setHideConfirm}
          onDeclinePress={setHideConfirm}
          onAcceptPress={handleLogout}
          acceptText={translate("button.logout")}
        />
      )}
    </View>
  );
};
