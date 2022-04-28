import { HomeHeaderAnimated } from "@components";
import { ScreenUtils } from "@helpers";
import { useStatusBar } from "@hooks";
import React, { useRef } from "react";
import { Animated, View } from "react-native";
import {
  BannerKeys,
  FirstTimeUser,
  HomeAction,
  HomeBanner,
  HomeNews,
  HomeOptions,
  HomeUseGuide,
} from "./components";
import styles from "./styles";

export const HomeScreen = () => {
  useStatusBar("dark-content");
  const scrollRef = React.useRef(null);
  const scrollY = useRef(new Animated.Value(0)).current;
  // const profile = useAppSelector(state => state.user.profile);

  return (
    <View style={styles.container}>
      <HomeHeaderAnimated showTopSearch={true} scrollY={scrollY} />
      <Animated.ScrollView
        scrollEventThrottle={1}
        ref={scrollRef}
        style={styles.container}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: ScreenUtils.scale(10),
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false },
        )}
      >
        <HomeBanner
          containerStyle={styles.containerStyle}
          group={BannerKeys.TOP_HOME_APP}
        />
        <View>
          <HomeOptions />
          <HomeNews />
          <HomeUseGuide />
          <FirstTimeUser />
        </View>
      </Animated.ScrollView>
      <HomeAction />
    </View>
  );
};
