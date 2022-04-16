/* eslint-disable react-native/no-inline-styles */
import { Banner, BannerContentLoader } from "@components";
import { ScreenUtils } from "@helpers";
import { BannerResponse } from "@models";
import { Images } from "@themes";
import React, { FunctionComponent, useEffect, useState } from "react";
import { Image, View, ViewStyle } from "react-native";

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

  // const isMounted = useIsMounted();
  // const fetchHomeBanner = () => {
  //   setIsLoading(true);
  //   CommonApi.getHomeBanner("", group || "")
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

  return (
    <View style={containerStyle}>
      {isLoading && <BannerContentLoader height={250} />}
      {headerBannerHome?.length > 0 ? (
        <Banner
          items={headerBannerHome}
          style={{
            height:
              group === BannerKeys.TOP_HOME_APP
                ? ScreenUtils.scale(250)
                : ScreenUtils.scale(136),
          }}
        />
      ) : (
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
      )}
    </View>
  );
};
