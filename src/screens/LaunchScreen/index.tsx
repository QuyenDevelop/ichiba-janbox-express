import { CONSTANT, DATA_CONSTANT, SCREENS } from "@configs";
import { useAppDispatch } from "@hooks";
import { RootStackParamList } from "@navigation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import {
  changeCurrencyWithLaunch,
  changeLanguage,
  countNotifications,
  getUserAction,
  setAnonymousId,
  takeSetAnonymousId,
} from "@redux";
import { AnimationImages } from "@themes";
import LottieView from "lottie-react-native";
import React, { FunctionComponent, useCallback, useState } from "react";
import { Alert, Text, View } from "react-native";
import * as RNLocalize from "react-native-localize";
import uuid from "react-native-uuid";
import styles from "./styles";

type Props = NativeStackScreenProps<RootStackParamList>;

export const LaunchScreen: FunctionComponent<Props> = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const [currencyCodes] = useState({
    currencyCode: RNLocalize.getCurrencies(),
  });

  const [locates] = useState({
    locates: RNLocalize.getLocales(),
  });

  const authenticate = async (): Promise<void> => {
    const [accessToken, currency, anonymousId, language] = await Promise.all([
      AsyncStorage.getItem(CONSTANT.TOKEN_STORAGE_KEY.ACCESS_TOKEN),
      AsyncStorage.getItem(CONSTANT.TOKEN_STORAGE_KEY.CURRENCY),
      AsyncStorage.getItem(CONSTANT.TOKEN_STORAGE_KEY.ANONYMOUS_ID),
      AsyncStorage.getItem(CONSTANT.TOKEN_STORAGE_KEY.LANGUAGE),
    ]);
    console.log("🚀🚀🚀 => authenticate => accessToken", accessToken);
    const guid = uuid.v4();

    if (language != null) {
      dispatch(changeLanguage(language ? language : CONSTANT.LANGUAGES.EN));
    } else if (locates.locates.length > 0) {
      let location = DATA_CONSTANT.LANGUAGE_CODE.find(
        x => x.code === locates.locates[0].languageCode,
      );

      dispatch(changeLanguage(location ? location.tag : CONSTANT.LANGUAGES.EN));
    }

    if (currency) {
      dispatch(changeCurrencyWithLaunch(currency));
    } else if (currencyCodes && currencyCodes.currencyCode.length > 0) {
      dispatch(changeCurrencyWithLaunch(currencyCodes.currencyCode[0]));
    }

    if (accessToken) {
      dispatch(getUserAction());
      dispatch(
        countNotifications({
          pageIndex: 1,
          pageSize: 10,
        }),
      );
      dispatch(takeSetAnonymousId(guid));
      navigation.navigate(SCREENS.BOTTOM_TAB_NAVIGATION);
    } else {
      !anonymousId &&
        (await AsyncStorage.setItem(
          CONSTANT.TOKEN_STORAGE_KEY.ANONYMOUS_ID,
          guid.toString(),
        ));

      if (anonymousId) {
        dispatch(setAnonymousId(anonymousId));
      } else {
        dispatch(takeSetAnonymousId(guid));
      }

      // if (await checkIsFirstLaunch()) {
      //   navigation.navigate(SCREENS.ON_BOARDING);
      // } else {
      //   onContinueFlow();
      // }
      navigation.navigate(SCREENS.AUTH_STACK, {
        screen: SCREENS.LOGIN,
      });
      // navigation.navigate(SCREENS.AUTH_STACK);
    }
  };

  const checkConnectivity = (): void => {
    NetInfo.fetch()
      .then((state: NetInfoState): void => {
        if (state.isConnected) {
          authenticate();
        } else {
          Alert.alert("You are offline!");
        }
      })
      .catch((): void => {
        Alert.alert("Error");
      });
  };

  useFocusEffect(
    useCallback(() => {
      const timer = setTimeout(() => {
        checkConnectivity();
      }, 2000);
      return () => {
        clearTimeout(timer);
      };
    }, []),
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Janbox</Text>
      <LottieView
        style={styles.loadingView}
        autoPlay={true}
        loop={true}
        source={AnimationImages.launchAnimation}
      />
    </View>
  );
};
