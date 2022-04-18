import { ScreenUtils } from "@helpers";
import { Icon, translate } from "@shared";
import { Metrics, Themes } from "@themes";
import React, { FunctionComponent } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "./styles";
interface Props {
  showBaseSearch?: boolean;
  showTopSearch?: boolean;
  scrollY?: Animated.Value;
}

export const HomeHeaderAnimated: FunctionComponent<Props> = props => {
  const { scrollY } = props;
  const insets = useSafeAreaInsets();
  // const navigation = useNavigation<any>();

  // const searchOpacity = scrollY?.interpolate({
  //   inputRange: [
  //     0,
  //     insets.top + ScreenUtils.scale(22),
  //     insets.top + ScreenUtils.scale(44),
  //   ],
  //   outputRange: [0, 0.5, 1],
  //   extrapolate: "clamp",
  // });

  // const heightTopBar = scrollY?.interpolate({
  //   inputRange: [
  //     0,
  //     insets.top + ScreenUtils.scale(25),
  //     insets.top + ScreenUtils.scale(50),
  //   ],
  //   outputRange: [44 + insets.top, 22, 0],
  //   extrapolate: "clamp",
  // });

  const backgroundColor = scrollY?.interpolate({
    inputRange: [
      0,
      insets.top + ScreenUtils.scale(30),
      insets.top + ScreenUtils.scale(60),
    ],
    outputRange: [
      Themes.colors.transparent,
      Themes.colors.transparent,
      Themes.colors.primary,
    ],
    extrapolate: "clamp",
  });

  const goToSearch = () => {};
  const gotoScan = () => {};

  // const isLogin = (): boolean => {
  //   if (!profile) {
  //     goToLogin();
  //     return false;
  //   }

  //   return true;
  // };

  return (
    <View style={[styles.container]}>
      <Animated.View
        style={{
          paddingTop: insets.top,
          backgroundColor: backgroundColor,
        }}
      >
        <Animated.View style={[styles.topBarContainer]}>
          <TouchableOpacity hitSlop={styles.hitSlop} onPress={gotoScan}>
            <Icon
              name="ic_tracking_order"
              size={Metrics.icons.small}
              color={Themes.colors.white}
            />
          </TouchableOpacity>
          <TouchableOpacity
            hitSlop={styles.hitSlop}
            onPress={goToSearch}
            style={styles.inputSearch}
          >
            <Icon
              name="ic_search"
              size={Metrics.icons.small}
              color={Themes.colors.coolGray100}
            />
            <View style={styles.searchInput}>
              <Text>{translate("placeholder.search")}</Text>
            </View>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
      {/* {showTopSearch && (
        <Animated.View
          style={[styles.topBarContainer, { backgroundColor: backgroundColor }]}
        >
          <TouchableOpacity hitSlop={styles.hitSlop} onPress={gotoScan}>
            <Icon
              name="ic_tracking_order"
              size={Metrics.icons.small}
              color={Themes.colors.white}
            />
          </TouchableOpacity>
          <TouchableOpacity
            hitSlop={styles.hitSlop}
            onPress={goToSearch}
            style={styles.inputSearch}
          >
            <Icon
              name="ic_search"
              size={Metrics.icons.small}
              color={Themes.colors.coolGray100}
            />
            <TextInput
              placeholder={translate("placeholder.search")}
              style={styles.searchInput}
              returnKeyType="done"
            />
          </TouchableOpacity>
        </Animated.View>
      )} */}
    </View>
  );
};
