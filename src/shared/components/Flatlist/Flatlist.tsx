import { Themes } from "@themes";
import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList as BaseFlatlist,
  FlatListProps,
  RefreshControl,
} from "react-native";

export interface FlatListLoadMoreModel {
  numberResultItems: number;
  count: number;
}

export interface Props<T> extends FlatListProps<T> {
  disableLoadMore?: boolean;
  disableRefresh?: boolean;
  onRefresh?: (
    page?: number,
    pageCount?: number,
  ) => Promise<FlatListLoadMoreModel> | undefined;
  onLoadMore?: (
    page?: number,
    pageCount?: number,
  ) => Promise<FlatListLoadMoreModel> | undefined;
  LoadingLoader?: JSX.Element | null;
  renderNoResult?: JSX.Element | null;
  isLoading?: boolean;
  shouldRefreshWhenFocus?: boolean;
}

export const DEFAULT_NUMBER_ITEM_PER_PAGE = 10;

type FlatlistType<T = any> = React.FC<Props<T>>;

export const Flatlist: FlatlistType = props => {
  const {
    refreshing,
    onLoadMore,
    onRefresh,
    disableLoadMore,
    LoadingLoader,
    isLoading,
    renderNoResult,
    data,
    disableRefresh,
    shouldRefreshWhenFocus,
  } = props;
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [canLoadMore, setCanLoadMore] = useState(false);
  const [page, setPage] = useState(1);
  const [numberOfItems, setNumberOfItems] = useState(0);

  useEffect(() => {
    shouldRefreshWhenFocus && handleRefresh();
  }, [shouldRefreshWhenFocus]);

  const isCanRefresh = () => {
    if (isLoadMore) {
      return false;
    } else {
      return isRefreshing || true || refreshing || true;
    }
  };

  const isCanLoadMore = () => {
    if (isRefreshing) {
      return false;
    } else {
      return (canLoadMore || false) && (isLoadMore || true);
    }
  };

  const handleLoadMore = () => {
    if (isCanLoadMore()) {
      if (onLoadMore) {
        setIsLoadMore(true);
        onLoadMore(page, DEFAULT_NUMBER_ITEM_PER_PAGE)
          ?.then((flatListLoadMoreModel?: FlatListLoadMoreModel) => {
            updatePageInfo(flatListLoadMoreModel);
            setIsLoadMore(false);
          })
          .catch(() => {
            setIsLoadMore(false);
          });
      }
    }
  };

  const updatePageInfo = (
    flatListLoadMoreModel?: FlatListLoadMoreModel,
    isRefresh?: boolean,
  ) => {
    if (flatListLoadMoreModel) {
      let canLoadMore = true;
      if (
        (isRefresh
          ? flatListLoadMoreModel.numberResultItems
          : flatListLoadMoreModel.numberResultItems + numberOfItems) >=
        flatListLoadMoreModel.count
      ) {
        canLoadMore = false;
      }
      setCanLoadMore(canLoadMore);
      setPage(isRefresh ? 2 : page + 1);
      setNumberOfItems(
        isRefresh
          ? flatListLoadMoreModel.numberResultItems
          : numberOfItems + flatListLoadMoreModel.numberResultItems,
      );
    }
  };

  const handleRefresh = () => {
    if (isCanRefresh()) {
      setIsRefreshing(true);
      if (onRefresh) {
        onRefresh(1, DEFAULT_NUMBER_ITEM_PER_PAGE)
          ?.then((flatListLoadMoreModel?: FlatListLoadMoreModel) => {
            updatePageInfo(flatListLoadMoreModel, true);
            setIsRefreshing(false);
          })
          .catch(() => {
            setIsRefreshing(false);
          });
      } else {
        setIsRefreshing(false);
      }
    }
  };

  const renderFooter = () => {
    let ret = null;
    if (canLoadMore) {
      ret = (
        <ActivityIndicator size={"small"} color={Themes.colors.collGray40} />
      );
    }
    return ret;
  };

  const renderListEmptyComponent = () => {
    let contentView = null;
    if (isLoading) {
      contentView = LoadingLoader ? LoadingLoader : renderLoadingIndicator();
    } else {
      contentView = renderNoResult;
    }
    return contentView ? contentView : null;
  };

  const renderLoadingIndicator = () => {
    return (
      <ActivityIndicator
        size={"small"}
        color={Themes.colors.collGray40}
        style={[{ flex: 1 }]}
      />
    );
  };

  const isNoData = () => {
    return isEmpty(data);
  };
  return (
    <BaseFlatlist
      keyboardShouldPersistTaps="handled"
      keyExtractor={(item, index) =>
        item?.id ? `${item?.id}_${String(index)}` : String(index)
      }
      // ref={(ref) => (refScroll = ref)}
      onEndReachedThreshold={0.4}
      onEndReached={() => {
        !disableLoadMore ? handleLoadMore() : null;
      }}
      refreshing={isRefreshing}
      onRefresh={!disableRefresh ? handleRefresh : null}
      refreshControl={
        !disableRefresh ? (
          <RefreshControl refreshing={false} onRefresh={handleRefresh} />
        ) : undefined
      }
      ListFooterComponent={renderFooter}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={renderListEmptyComponent}
      {...props}
      contentContainerStyle={[
        isNoData() ? { flexGrow: 1 } : { flexGrow: undefined },
        props?.contentContainerStyle,
      ]}
    />
  );
};
