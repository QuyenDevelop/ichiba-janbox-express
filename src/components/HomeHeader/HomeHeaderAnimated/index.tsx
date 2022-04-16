/* eslint-disable react-native/no-inline-styles */
import { ScreenUtils } from "@helpers";
import { Account } from "@models";
import { useNavigation } from "@react-navigation/native";
import { Icon, translate } from "@shared";
import { Metrics, Themes } from "@themes";
import React, { FunctionComponent } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { IRootState } from "src/redux/store";
import styles from "./styles";
interface Props {
  showBaseSearch?: boolean;
  showTopSearch?: boolean;
  scrollY?: Animated.Value;
}

export const HomeHeaderAnimated: FunctionComponent<Props> = props => {
  const { showTopSearch, scrollY } = props;
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<any>();

  const profile = useSelector(
    (state: IRootState) => state.user.profile,
  ) as Account;

  // const quantity = useSelector(
  //   (state: IRootState) => state.cart.quantity,
  // ) as number;

  const searchOpacity = scrollY?.interpolate({
    inputRange: [
      0,
      insets.top + ScreenUtils.scale(22),
      insets.top + ScreenUtils.scale(44),
    ],
    outputRange: [1, 0.1, 0],
    extrapolate: "clamp",
  });

  const heightTopBar = scrollY?.interpolate({
    inputRange: [
      0,
      insets.top + ScreenUtils.scale(25),
      insets.top + ScreenUtils.scale(50),
    ],
    outputRange: [44 + insets.top, 22, 0],
    extrapolate: "clamp",
  });

  const goToSearch = () => {};

  // const isLogin = (): boolean => {
  //   if (!profile) {
  //     goToLogin();
  //     return false;
  //   }

  //   return true;
  // };

  const showFreshDesk = () => {};

  return (
    <View style={[styles.container]}>
      <Animated.View
        style={{
          paddingTop: insets.top,
          // backgroundColor: backgroundColor,
          height: heightTopBar,
        }}
      >
        <Animated.View
          style={[styles.contentHeader, { opacity: searchOpacity }]}
        >
          <View style={styles.leftHeader}>
            <View>
              <Text style={styles.hiLabel}>
                {translate("labelSayHi")} {profile?.name}!
              </Text>
            </View>
          </View>
          <View style={styles.rightHeader}>
            <TouchableOpacity onPress={showFreshDesk}>
              <View style={styles.supportBtn}>
                <Icon
                  name="ic_chat"
                  size={Metrics.icons.smallSmall}
                  color={Themes.colors.coolGray100}
                />
              </View>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </Animated.View>
      {showTopSearch && (
        <Animated.View style={[styles.topBarContainer]}>
          <TouchableOpacity
            style={[
              styles.menu,
              { flexDirection: "row", alignItems: "center", flex: 1 },
            ]}
            onPress={() => navigation.goBack()}
          >
            <Icon
              name={"ic_arrow_left"}
              size={
                ScreenUtils.isPad() ? Metrics.icons.large : Metrics.icons.medium
              }
              color={Themes.colors.coolGray100}
            />
            <Text
              style={{
                ...Themes.font.regular,
                fontSize: 18,
                color: Themes.colors.primary,
                fontWeight: "700",
                marginLeft: ScreenUtils.scale(12),
              }}
              numberOfLines={1}
            >
              Janbox market
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            hitSlop={styles.hitSlop}
            onPress={goToSearch}
          >
            <Icon
              name={"ic_search"}
              size={
                ScreenUtils.isPad() ? Metrics.icons.large : Metrics.icons.small
              }
              color={Themes.colors.coolGray100}
            />
          </TouchableOpacity>
        </Animated.View>
      )}
    </View>
  );
};
