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
    title: translate("buttonCreateShipment"),
    image: Images.notificationSample,
  },
  {
    id: 2,
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
  // const navigation = useNavigation<StackNavigationProp<any>>();

  const gotoSomewhere = useCallback(() => {}, []);
  const gotoNewsList = () => {};

  const renderItem = ({ item }: { item: newsItem }) => {
    return <HomeNewsItem item={item} router={gotoSomewhere} />;
  };

  return (
    <>
      <View style={styles.headerContent}>
        <Text style={styles.headerNews}>{translate("labelNews")}</Text>
        <TouchableOpacity onPress={gotoNewsList}>
          <Text style={styles.btnViewAll}>{translate("buttonViewAll")}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        contentContainerStyle={styles.container}
        horizontal
        scrollEnabled={false}
      >
        <View>
          <FlatList
            data={news}
            keyExtractor={(item, index) => `${item.id}_${index}`}
            renderItem={renderItem}
            numColumns={news.length}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </>
  );
};
