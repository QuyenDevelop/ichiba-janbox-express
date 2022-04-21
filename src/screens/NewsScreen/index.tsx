/* eslint-disable react-native/no-inline-styles */
import { Header } from "@components";
import { useAppSelector } from "@hooks";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Flatlist, translate } from "@shared";
import { Images } from "@themes";
import React, { FunctionComponent, useEffect } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "./styles";

interface IProps {
  id: any;
  item: any;
  title: string;
  image: string;
  detail: string;
}

export const NewsScreen: FunctionComponent<IProps> = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const insets = useSafeAreaInsets();
  const language = useAppSelector(state => state.user.language);
  useEffect(() => {}, [language]);
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
  ];
  const Item = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.containerItems} onPress={() => {}}>
      <Image source={item.image} style={styles.imgStyle} />

      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.detail}>{item.detail}</Text>
    </TouchableOpacity>
  );
  const renderItem = ({ item }: { item: any }) => <Item item={item} />;

  return (
    <SafeAreaView style={[styles.container, { paddingTop: insets.top }]}>
      <Header
        title={translate("labelNews")}
        iconLeftName={["ic_arrow_left"]}
        iconLeftOnPress={[() => navigation.goBack()]}
        isCenterTitle
      />
      <View style={{ flex: 0.9 }}>
        <Flatlist
          keyExtractor={item => {
            return item.id;
          }}
          automaticallyAdjustContentInsets={false}
          scrollEventThrottle={1}
          data={data}
          renderItem={renderItem}
          disableRefresh
          disableLoadMore
        />
      </View>
    </SafeAreaView>
  );
};
