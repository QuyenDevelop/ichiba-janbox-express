import { imageApi } from "@api";
import { SCREENS } from "@configs";
import { ScreenUtils } from "@helpers";
import { useBoolean, useDebounce } from "@hooks";
import { IPhoto } from "@models";
import { HomeStackParamsList } from "@navigation";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Animated,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import { IRootState } from "src/redux/store";
import Photo from "./components/Photo";
import styles from "./styles";

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackParamsList,
  SCREENS.HOME_SCREEN
>;

export const HomeScreen: FunctionComponent = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const userInfo = useSelector((state: IRootState) => state.user);
  const [photos, setPhotos] = useState<Array<IPhoto>>([]);
  const [searchContent, setSearchContent] = useState<string>("");
  const searchText = useDebounce<string>(searchContent, 1000);
  const [isLoading, showLoading, hideLoading] = useBoolean();
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    showLoading();
    imageApi
      .search({ query: searchText || "animal" })
      ?.then(response => {
        setPhotos(response?.photos || []);
      })
      .catch(err => {
        console.log("🚀🚀🚀 => useEffect => err", err);
        setPhotos([]);
      })
      .finally(() => {
        hideLoading();
      });
  }, [hideLoading, searchText, showLoading]);

  const keyExtractor = (item: IPhoto) => `${item.id}`;
  const renderItem = ({ item }: { item: IPhoto }) => {
    return <Photo item={item} />;
  };

  const goToInfoScreen = () => {
    navigation.navigate(SCREENS.INFO_SCREEN);
  };

  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFillObject}>
        {photos.map((photo, index) => {
          const opacity = scrollX.interpolate({
            inputRange: [
              (index - 1) * ScreenUtils.WIDTH,
              index * ScreenUtils.WIDTH,
              (index + 1) * ScreenUtils.WIDTH,
            ],
            outputRange: [0, 1, 0],
          });

          return (
            <Animated.Image
              key={photo.id}
              style={[StyleSheet.absoluteFillObject, { opacity }]}
              source={{
                uri: photo.src.portrait,
              }}
              blurRadius={50}
            />
          );
        })}
      </View>
      <Animated.FlatList
        data={photos}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true },
        )}
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.inputView}>
        <TextInput
          placeholder="Tìm kiếm"
          value={searchContent}
          onChangeText={setSearchContent}
          style={styles.textInput}
        />
        {isLoading && <ActivityIndicator />}
      </View>
      <Text style={styles.userName}>{userInfo.name}</Text>
      <TouchableOpacity style={styles.settingBtn} onPress={goToInfoScreen}>
        <Text style={styles.settingBtnText}>Setting</Text>
      </TouchableOpacity>
    </View>
  );
};
