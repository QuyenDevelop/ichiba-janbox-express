/* eslint-disable react-native/no-inline-styles */
import { NotificationApi } from "@api";
import { FastImageLoading } from "@components";
import { Utils } from "@helpers";
import { useLoadMore } from "@hooks";
import { AppNotificationResponse } from "@models";
import { Flatlist, FlatListLoadMoreModel, NoData, translate } from "@shared";
import { Images } from "@themes";
import React, { FunctionComponent } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import FastImage from "react-native-fast-image";
import styles from "./styles";

interface Props {}

export const GeneralNotification: FunctionComponent<Props> = () => {
  const {
    items,
    processData,
    isLoading,
    setLoading,
    count,
    shouldRefreshWhenFocus,
    setShouldRefreshWhenFocus,
  } = useLoadMore<AppNotificationResponse>();
  const getData = (
    page?: number,
    pageSize?: number,
  ): Promise<FlatListLoadMoreModel> | undefined => {
    let request = {
      pageIndex: page ?? 1,
      pageSize: pageSize ?? 10,
    };
    setLoading(true);
    return NotificationApi.getListNotifi(request)
      ?.then(data => {
        return processData({
          page: page,
          pageCount: pageSize,
          count: data?.total,
          items: data?.data,
        });
      })
      .finally(() => setLoading(false));
  };
  const handleReadAll = () => {
    NotificationApi.markReadAll({})
      ?.then(res => {
        if (res?.status) {
          setShouldRefreshWhenFocus(true);
        }
      })
      .finally(() => {});
  };
  const renderItem = ({
    item,
    index,
  }: {
    item: AppNotificationResponse;
    index: number;
  }) => {
    return (
      <View
        style={[
          styles.notificationItem,
          index === (items?.length || 0) - 1 && { borderBottomWidth: 0 },
        ]}
        key={index}
      >
        <FastImageLoading
          sourceLoading={Images.productDefault}
          source={{ uri: item.image }}
          style={styles.image}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View
          style={{
            ...styles.rightContainer,
            opacity: item.status === 2 ? 0.5 : 1,
          }}
        >
          <Text style={styles.title} numberOfLines={2}>
            {item.title}
          </Text>
          <Text style={styles.date}>
            {Utils.date.formatDateTime(item.createdDate)}
          </Text>
          <Text style={styles.content}>{item.body}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {!isLoading ? (
        <View style={styles.notificationHeader}>
          <View style={styles.notificationCount}>
            <Text style={styles.countTitle}>{translate("labelResult")}</Text>
            <Text style={styles.countValue}>
              {translate("labelNotificationCount", { count: count })}
            </Text>
          </View>
          <TouchableOpacity
            disabled={isLoading}
            onPress={() => handleReadAll()}
          >
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
