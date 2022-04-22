/* eslint-disable react-native/no-inline-styles */
import { Banner, BannerContentLoader, Triangle } from "@components";
import { SCREENS } from "@configs";
import { ScreenUtils } from "@helpers";
import { BannerResponse } from "@models";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Icon, translate } from "@shared";
import { Icons, Images, Metrics, Themes } from "@themes";
import React, { FunctionComponent, useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import styles from "../styles";

interface OwnProps {
  containerStyle?: ViewStyle;
  group: BannerKeys;
}

type Props = OwnProps;

export enum BannerKeys {
  TOP_HOME_APP = "EZ.BANNER.HomePage.TOP_HOME_APP",
  TOP_HOME_APP_WEBSITE = "EZ.BANNER.HomePage.TOP_HOME_APP_WEBSITE",
}

export const HomeBanner: FunctionComponent<Props> = ({
  containerStyle,
  group,
}) => {
  const [headerBannerHome] = useState<Array<BannerResponse>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  // const isMounted = useIsMounted();
  // const fetchHomeBanner = () => {
  //   setIsLoading(true);
  //   commonApi.getHomeBanner("", group || "")
  //     ?.then(response => {
  //       if (response?.status && isMounted.current) {
  //         setHeaderBannerHome(response.data || []);
  //       }
  //     })
  //     .finally(() => {
  //       isMounted.current && setIsLoading(false);
  //     });
  // };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    // fetchHomeBanner();
  }, []);

  const gotoPoint = () => {};
  const gotoWallet = () => {
    navigation.navigate(SCREENS.DEPOSIT_STACK, {
      screen: SCREENS.EZ_WALLET_SCREEN,
    });
  };

  return (
    <View style={containerStyle}>
      {isLoading && <BannerContentLoader height={250} />}
      {headerBannerHome?.length > 0 ? (
        <>
          <Banner
            items={headerBannerHome}
            style={{
              height:
                group === BannerKeys.TOP_HOME_APP
                  ? ScreenUtils.scale(250)
                  : ScreenUtils.scale(136),
            }}
          />
          <View />
        </>
      ) : (
        <>
          <Image
            source={
              group === BannerKeys.TOP_HOME_APP
                ? Images.bannerHomeDefault
                : Images.bannerHomeBrandDefault
            }
            style={{
              width: "100%",
              height:
                group === BannerKeys.TOP_HOME_APP
                  ? ScreenUtils.scale(250)
                  : ScreenUtils.scale(136),
            }}
          />
          <View />
        </>
      )}

      <Triangle />

      <View style={styles.childContainer}>
        <TouchableOpacity style={styles.pointContainer} onPress={gotoPoint}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.icons}>
              <Icon
                name={"ic_star"}
                size={Metrics.icons.smallSmall}
                color={Themes.colors.primary}
              />
            </View>
            <View style={styles.titleContent}>
              <Text style={styles.title}>{translate("titlePoint")}</Text>
              <Text style={styles.subTitle}>441</Text>
            </View>
          </View>
          <View style={styles.icons}>
            <Icons.MaterialIcons
              name={"arrow-forward-ios"}
              size={Metrics.icons.smallSmall}
              color={Themes.colors.coolGray60}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.heightSeparator} />
        <TouchableOpacity style={styles.walletContainer} onPress={gotoWallet}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.icons}>
              <Icons.Entypo
                name={"wallet"}
                size={Metrics.icons.smallSmall}
                color={Themes.colors.wallet}
              />
            </View>
            <View style={styles.titleContent}>
              <Text style={styles.title}>{translate("titleWallet")}</Text>
              <Text style={styles.subTitle}>Activation</Text>
            </View>
          </View>
          <View style={styles.icons}>
            <Icons.MaterialIcons
              name={"arrow-forward-ios"}
              size={Metrics.icons.smallSmall}
              color={Themes.colors.coolGray60}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
