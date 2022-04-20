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
import { GuideItem, HomeGuideItem } from "./HomeGuideItem";
import styles from "./styles";

const News: Array<GuideItem> = [
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

export const HomeUseGuide: FunctionComponent = () => {
  const [guide] = useState<Array<GuideItem>>(News);
  // const navigation = useNavigation<StackNavigationProp<any>>();

  const gotoSomewhere = useCallback(() => {}, []);
  const gotoNewsList = () => {};

  const renderItem = ({ item }: { item: GuideItem }) => {
    return <HomeGuideItem item={item} router={gotoSomewhere} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>
        <Text style={styles.headerNews}>{translate("labelUseGuide")}</Text>
        <TouchableOpacity onPress={gotoNewsList}>
          <Text style={styles.btnViewAll}>{translate("buttonViewAll")}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        horizontal
        scrollEnabled={false}
      >
        <FlatList
          data={guide}
          keyExtractor={(item, index) => `${item.id}_${index}`}
          renderItem={renderItem}
          numColumns={2}
          // columnWrapperStyle={{ justifyContent: "space-between" }}
          scrollEnabled={false}
          // onEndReachedThreshold={0.5}
        />
      </ScrollView>
    </View>
  );
};
