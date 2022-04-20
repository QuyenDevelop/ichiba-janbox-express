import { Header, ListProductSearchLoader, Separator } from "@components";
import { SCREENS } from "@configs";
import { ScreenUtils } from "@helpers";
import { useStatusBar } from "@hooks";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Flatlist, Icon, NoData, translate } from "@shared";
import { Metrics, Themes } from "@themes";
import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from "react";
import {
  ActivityIndicator,
  RefreshControl,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SearchItem, SearchItemResponse } from "./SearchItem";
import styles from "./styles";

interface Props {}

const Data: Array<SearchItemResponse> = [
  {
    shipmentId: "IA08210049204JP",
    ref: "129664825931",
    date: "07/19/2021 07:27",
  },
  {
    shipmentId: "IA08210049205JP",
    ref: "129664825932",
    date: "07/19/2021 07:27",
  },
];

export const SearchScreen: FunctionComponent<Props> = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  useStatusBar("dark-content");
  const insets = useSafeAreaInsets();
  const [timer, setTimer] = useState<any>();

  const [data, setData] = useState<Array<SearchItemResponse>>(Data);
  const [searchValue, setSearchValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isRefresh, setIsRefresh] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);

  const goBack = () => {
    navigation.goBack();
  };
  const gotoScan = () => {
    navigation.navigate(SCREENS.SEARCH_STACK, {
      screen: SCREENS.SCAN_SCREEN,
    });
  };

  const fetchData = () => {
    setIsLoading(true);
    // TODO: first time call api get data history search
    setData([]);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handleOnChangeTextInput = (value: string) => {
    clearTimeout(timer);
    setSearchValue(value);
    setTimer(
      setTimeout(() => {
        // searchAutoComplete(value);
      }, 1000),
    );
  };

  const handleSubmittedSearch = () => {
    if (searchValue !== "" && searchValue !== undefined) {
      searchKeyword();
    }
  };

  const searchKeyword = () => {
    console.log("Handle submit search");
    // TODO: call api Search with value
  };

  const handleClearAll = () => {
    // TODO: clear all history search
  };

  const renderListHeaderComponent = () => {
    return (
      <View style={styles.headerContent}>
        <Text style={styles.headerNews}>{translate("labelNews")}</Text>
        <TouchableOpacity onPress={handleClearAll}>
          <Text style={styles.btnViewAll}>{translate("buttonClearAll")}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderListEmptyComponent = useCallback(() => {
    return isLoading ? <ListProductSearchLoader /> : <NoData />;
  }, [isLoading]);

  const renderListFooterComponent = useCallback(() => {
    return (
      <>
        {isLoadingMore ? (
          <ActivityIndicator size={"small"} color={Themes.colors.coolGray60} />
        ) : null}
      </>
    );
  }, [isLoadingMore]);

  const goToDetail = () => {};

  const handleOnEndReached = () => {
    setIsLoadingMore(false);
    // TODO: call api load more history search list
  };

  const handleRefresh = () => {
    setIsRefresh(false);
    // TODO: call api refreshing history search list
  };

  const renderItem = ({ item }: { item: SearchItemResponse }) => {
    return <SearchItem item={item} router={goToDetail} />;
  };

  useEffect(() => {
    fetchData;
  }, []);

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Header
        title={translate("search.search")}
        iconLeftName={["ic_arrow_left"]}
        iconLeftOnPress={[goBack]}
        isCenterTitle
      />
      <Separator height={ScreenUtils.scale(2)} />
      <View style={[styles.container]}>
        <View style={[styles.topBarContainer]}>
          <TouchableOpacity hitSlop={styles.hitSlop} onPress={gotoScan}>
            <Icon
              name="ic_tracking_order"
              size={Metrics.icons.small}
              color={Themes.colors.coolGray60}
            />
          </TouchableOpacity>
          <View hitSlop={styles.hitSlop} style={styles.inputSearch}>
            <Icon
              name="ic_search"
              size={Metrics.icons.small}
              color={Themes.colors.coolGray60}
            />
            <TextInput
              placeholder={translate("placeholder.search")}
              style={styles.searchInput}
              value={searchValue}
              onChangeText={handleOnChangeTextInput}
              returnKeyType="done"
              onSubmitEditing={handleSubmittedSearch}
              autoFocus
            />
          </View>
        </View>
        <Flatlist
          data={data}
          keyExtractor={(item, index) => `${item.id}_${index}`}
          renderItem={renderItem}
          onEndReached={handleOnEndReached}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={renderListEmptyComponent}
          ListHeaderComponent={renderListHeaderComponent}
          ListFooterComponent={renderListFooterComponent}
          numColumns={1}
          refreshControl={
            <RefreshControl refreshing={isRefresh} onRefresh={handleRefresh} />
          }
        />
      </View>
    </View>
  );
};
