/* eslint-disable react-native/no-inline-styles */
import { FastImageLoading } from "@components";
import { Utils } from "@helpers";
import { useLoadMore } from "@hooks";
import { Notification } from "@models";
import {
  fakeServerNotification,
  Flatlist,
  FlatListLoadMoreModel,
  NoData,
  translate,
} from "@shared";
import { Images } from "@themes";
import React, { FunctionComponent } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import FastImage from "react-native-fast-image";
import styles from "./styles";

interface Props {}

export const SystemNotification: FunctionComponent<Props> = () => {
  const {
    items,
    processData,
    isLoading,
    setLoading,
    count,
    shouldRefreshWhenFocus,
  } = useLoadMore<Notification>();

  const getData = (
    skip?: number,
    take?: number,
  ): Promise<FlatListLoadMoreModel> | undefined => {
    setLoading(true);
    return fakeServerNotification(skip, take, true)
      .then(data => {
        return processData({
          skip: skip,
          take: take,
          count: data.count,
          items: data.items,
        });
      })
      .finally(() => setLoading(false));
  };

  const renderItem = ({
    item,
    index,
  }: {
    item: Notification;
    index: number;
  }) => {
    return (
      <View
        style={[
          styles.notificationItem,
          index === (items?.length || 0) - 1 && { borderBottomWidth: 0 },
        ]}
      >
        <FastImageLoading
          sourceLoading={Images.productDefault}
          source={item.image}
          style={styles.image}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={2}>
            {item.title}
          </Text>
          <Text style={styles.date}>
            {Utils.date.formatDateTime(item.date)}
          </Text>
          <Text style={styles.content}>{item.content}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {!isLoading && count ? (
        <View style={styles.notificationHeader}>
          <View style={styles.notificationCount}>
            <Text style={styles.countTitle}>{translate("labelResult")}</Text>
            <Text style={styles.countValue}>
              {translate("labelNotificationCount", { count: count })}
            </Text>
          </View>
          <TouchableOpacity disabled={isLoading}>
            <Text style={styles.markRead}>{translate("buttonMarkRead")}</Text>
          </TouchableOpacity>
        </View>
      ) : null}
      <Flatlist
        data={items || []}
        renderItem={renderItem}
        onRefresh={getData}
        onLoadMore={getData}
        isLoading={isLoading}
        renderNoResult={<NoData title={"labelNoNotification"} />}
        shouldRefreshWhenFocus={shouldRefreshWhenFocus}
      />
    </View>
  );
};
