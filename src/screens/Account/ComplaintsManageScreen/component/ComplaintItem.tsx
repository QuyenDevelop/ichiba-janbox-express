import { Separator } from "@components";
import { ScreenUtils } from "@helpers";
import { translate } from "@shared";
import { Themes } from "@themes";
import React, { FunctionComponent } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import FastImage from "react-native-fast-image";
import styles from "./styles";

export interface ComplaintsResponseItem {
  id: number;
  title: string;
  image: any;
  isDone: boolean;
  content: string;
  review: string;
  lastUpdate: string;
}

interface Props {
  item: ComplaintsResponseItem;
  router: (id: number) => void;
}

export const ComplaintsItem: FunctionComponent<Props> = props => {
  const { item, router } = props;
  const onPress = () => {
    router(item.id);
  };
  return (
    <TouchableOpacity style={styles.ComplaintsItemContainer} onPress={onPress}>
      <View style={styles.ComplaintsItemHeader}>
        <FastImage source={item.image} style={styles.imageContent} />
        <View style={styles.titleContent}>
          <Text style={styles.ComplaintsItemText}>{item.title}</Text>
          <Text style={styles.ComplaintReviewText}>{item.review}</Text>
        </View>
        <View
          style={[
            styles.status,
            {
              backgroundColor: item.isDone
                ? Themes.colors.primary
                : Themes.colors.warning50,
            },
          ]}
        >
          <Text style={styles.statusText}>
            {item.isDone ? translate("labelWaiting") : translate("labelDone")}
          </Text>
        </View>
      </View>
      <View style={styles.ComplaintsItemContent}>
        <Text style={styles.ComplaintContentText}>{item.content}</Text>
      </View>
      <View style={styles.ComplaintsItemDate}>
        <Text style={styles.ComplaintDateText}>{item.lastUpdate}</Text>
      </View>
      <View style={styles.ComplaintsSeparator}>
        <Separator height={ScreenUtils.scale(1)} />
      </View>
    </TouchableOpacity>
  );
};
