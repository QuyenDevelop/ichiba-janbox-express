/* eslint-disable react-native/no-inline-styles */
import { Header } from "@components";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Flatlist, translate } from "@shared";
import { Images } from "@themes";
import React, { FunctionComponent, useState } from "react";
import { SafeAreaView, View } from "react-native";
import { NewsItem } from "./NewsItem";
import styles from "./styles";
export * from "./NewsItem";

interface IProps {
  id: any;
  item: any;
  title: string;
  image: string;
  detail: string;
}
const data = [
  {
    id: 1,
    image: Images.imgDefautFirstTime,
    title: "Chiết khấu 6,8% thanh toán bằng ví Janbox 1",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec neque vel lectus feugiat feugiat quis sit amet magna 1.",
  },
  {
    id: 2,
    image: Images.shoe,
    title: "Chiết khấu 6,8% thanh toán bằng ví Janbox 2",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec neque vel lectus feugiat feugiat quis sit amet magna 2.",
  },
  {
    id: 3,
    image: Images.imgDefautFirstTime,
    title: "Chiết khấu 6,8% thanh toán bằng ví Janbox 3",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec neque vel lectus feugiat feugiat quis sit amet magna 3.",
  },
  {
    id: 4,
    image: Images.shoe,
    title: "Chiết khấu 6,8% thanh toán bằng ví Janbox 4",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec neque vel lectus feugiat feugiat quis sit amet magna 4.",
  },
  {
    id: 5,
    image: Images.shoe,
    title: "Chiết khấu 6,8% thanh toán bằng ví Janbox 5",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec neque vel lectus feugiat feugiat quis sit amet magna 4.",
  },
];

export const NewsScreen: FunctionComponent<IProps> = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [dataNews] = useState(data);

  const renderItem = ({ item }: { item: any }) => <NewsItem item={item} />;
  const setKey = (item: any) => {
    return item.id;
  };
  return (
    <SafeAreaView style={[styles.container]}>
      <Header
        title={translate("labelNews")}
        iconLeftName={["ic_arrow_left"]}
        iconLeftOnPress={[() => navigation.goBack()]}
        isCenterTitle
      />
      <View style={[styles.flatListContainer, { paddingBottom: 70 }]}>
        <Flatlist
          keyExtractor={setKey}
          automaticallyAdjustContentInsets={false}
          scrollEventThrottle={1}
          data={dataNews}
          renderItem={renderItem}
          disableRefresh
          disableLoadMore
        />
      </View>
    </SafeAreaView>
  );
};
