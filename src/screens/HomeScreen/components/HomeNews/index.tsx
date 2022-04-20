import { SCREENS } from "@configs";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { translate } from "@shared";
import { Images } from "@themes";
import React, { FunctionComponent, useCallback, useState } from "react";
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { HomeNewsItem, newsItem } from "./HomeItem";
import styles from "./styles";

const News: Array<newsItem> = [
  {
    id: 1,
    title: "Chiết khấu 6,8% thanh toán bằng ví janbox",
    image: Images.notificationSample,
  },
  {
    id: 2,
    title: "Chiết khấu 6,8% thanh toán bằng ví janbox",
    image: Images.notificationSample,
  },
  {
    id: 3,
    title: translate("buttonCreateFromPast"),
    image: Images.notificationSample,
  },
  {
    id: 3,
    title: translate("buttonCreateFromPast"),
    image: Images.notificationSample,
  },
];

export const HomeNews: FunctionComponent = () => {
  const [news] = useState<Array<newsItem>>(News);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const gotoSomewhere = useCallback(() => {}, []);
  const gotoNewsList = () => {
    navigation.navigate(SCREENS.NEWS_SCREEN);
  };

  const renderItem = ({ item }: { item: newsItem }) => {
    return <HomeNewsItem item={item} router={gotoSomewhere} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>
        <Text style={styles.headerNews}>{translate("labelNews")}</Text>
        <TouchableOpacity onPress={gotoNewsList}>
          <Text style={styles.btnViewAll}>{translate("buttonViewAll")}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        <FlatList
          data={news}
          keyExtractor={(item, index) => `${item.id}_${index}`}
          renderItem={renderItem}
          numColumns={news.length}
          scrollEnabled={false}
        />
      </ScrollView>
    </View>
  );
};
