import { imageApi } from "@api";
import { SCREENS } from "@configs";
import { useAppSelector, useBoolean, useDebounce } from "@hooks";
import { IPhoto } from "@models";
import { HomeStackParamsList } from "@navigation";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Flatlist } from "@shared";
import React, { FunctionComponent, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Animated,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { IRootState } from "src/redux/store";
import Photo from "./components/Photo";
import styles from "./styles";

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackParamsList,
  SCREENS.HOME_SCREEN
>;

export const HomeScreen: FunctionComponent = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const userInfo = useAppSelector((state: IRootState) => state.user);
  const language = useAppSelector((state: IRootState) => state.user.language);
  console.log("🚀🚀🚀 => language", language);
  const [photos, setPhotos] = useState<Array<IPhoto>>([]);
  const [searchContent, setSearchContent] = useState<string>("");
  const searchText = useDebounce<string>(searchContent, 1000);
  const [isLoading, showLoading, hideLoading] = useBoolean();

  useEffect(() => {
    showLoading();
    imageApi
      .search({ query: searchText || "animal" })
      ?.then(response => {
        setPhotos(response?.photos || []);
      })
      .catch(() => {
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

  // const profile = useAppSelector(state => state.user.profile);
  // console.log("Profile:", JSON.stringify(profile));
  return (
    <View style={styles.container}>
      <View>
        {photos.map(photo => {
          return (
            <Animated.Image
              key={photo.id}
              source={{
                uri: photo.src.portrait,
              }}
              blurRadius={50}
            />
          );
        })}
      </View>
      <Flatlist
        data={photos}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        horizontal
        pagingEnabled
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
      <Text style={styles.userName}>{userInfo?.profile?.name}</Text>
      <TouchableOpacity style={styles.settingBtn} onPress={goToInfoScreen}>
        <Text style={styles.settingBtnText}>Setting</Text>
      </TouchableOpacity>
    </View>
  );
};
