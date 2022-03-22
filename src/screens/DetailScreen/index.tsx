import { SCREENS } from "@configs";
import { IPhoto } from "@models";
import { HomeStackParamsList } from "@navigation";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { FunctionComponent } from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import FastImage from "react-native-fast-image";
import styles from "./styles";

export interface IDetailScreenParams {
  item: IPhoto;
}

type DetailScreenNavigationProp = NativeStackNavigationProp<
  HomeStackParamsList,
  SCREENS.DETAIL_SCREEN
>;

type DetailScreenRouteProp = RouteProp<
  HomeStackParamsList,
  SCREENS.DETAIL_SCREEN
>;

export const DetailScreen: FunctionComponent = () => {
  const navigation = useNavigation<DetailScreenNavigationProp>();
  const route = useRoute<DetailScreenRouteProp>();
  const { item } = route.params || {};

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <>
      {item ? (
        <TouchableWithoutFeedback onPress={goBack}>
          <View style={[styles.container, { backgroundColor: item.avg_color }]}>
            <Text>Photographer: {item.photographer}</Text>
            <FastImage
              source={{
                uri: item.src.portrait,
                priority: FastImage.priority.high,
              }}
              resizeMode={FastImage.resizeMode.contain}
              style={styles.photoDimensions}
            />
          </View>
        </TouchableWithoutFeedback>
      ) : (
        <Text>No data</Text>
      )}
    </>
  );
};
