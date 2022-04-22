import { Header, Separator } from "@components";
import { SCREENS } from "@configs";
import { ScreenUtils } from "@helpers";
import { useLoadMore, useStatusBar } from "@hooks";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Flatlist, FlatListLoadMoreModel, translate } from "@shared";
import { Images } from "@themes";
import React, { FunctionComponent, useCallback, useEffect } from "react";
import { View } from "react-native";
import {
  ComplaintsItem,
  ComplaintsResponseItem,
} from "./component/ComplaintItem";
import { NoComplaint } from "./component/NoComplaint";
import styles from "./styles";

const Data: Array<ComplaintsResponseItem> = [
  {
    id: 1,
    title: "Hỗ trợ tìm đơn hàng",
    image: Images.icVietNam,
    isDone: true,
    content:
      "Đơn hàng của tôi đặt từ ngày 13/02/2021 mà đến nay vẫn chưa thấy hàng về. Bên mình giải quyết giúp tôi kiểm tra lại đơn hàng xem đang ở đâu...",
    review: "Tuyệt vời",
    lastUpdate: "Thứ Hai, 26/3/2021",
  },
  {
    id: 2,
    title: "Hỗ trợ tìm đơn hàng",
    image: Images.icVietNam,
    isDone: false,
    content:
      "Đơn hàng của tôi đặt từ ngày 13/02/2021 mà đến nay vẫn chưa thấy hàng về. Bên mình giải quyết giúp tôi kiểm tra lại đơn hàng xem đang ở đâu...",
    review: "",
    lastUpdate: "Thứ Hai, 19/3/2021",
  },
  {
    id: 3,
    title: "Hỗ trợ tìm đơn hàng",
    image: Images.icVietNam,
    isDone: true,
    content:
      "Đơn hàng của tôi đặt từ ngày 13/02/2021 mà đến nay vẫn chưa thấy hàng về. Bên mình giải quyết giúp tôi kiểm tra lại đơn hàng xem đang ở đâu...",
    review: "Bình thường",
    lastUpdate: "Thứ Hai, 26/3/2021",
  },
];

interface Props {}

export const ComplaintManagementScreen: FunctionComponent<Props> = props => {
  const {} = props;
  useStatusBar("dark-content");
  const navigation = useNavigation<StackNavigationProp<any>>();
  const { items, processData, isLoading, setLoading, shouldRefreshWhenFocus } =
    useLoadMore<ComplaintsResponseItem>();

  const getData = (
    page?: number,
    pageCount?: number,
  ): Promise<FlatListLoadMoreModel> | undefined => {
    setLoading(true);
    return processData({
      page: page,
      pageCount: pageCount,
      count: 0,
      items: Data,
    }).finally(() => {
      setLoading(false);
    });
  };

  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  const goBack = () => {
    navigation.goBack();
  };

  const gotoCreateComplaints = () => {
    navigation.navigate(SCREENS.COMPLAINT_STACK, {
      screen: SCREENS.CREATE_COMPLAINT_SCREEN,
    });
  };

  const gotoSomewhere = useCallback(() => {}, []);
  const complaint = ({ item }: { item: ComplaintsResponseItem }) => {
    return <ComplaintsItem item={item} router={gotoSomewhere} />;
  };

  return (
    <View style={[styles.container]}>
      <Header
        title={translate("labelComplaints")}
        iconLeftName={["ic_arrow_left"]}
        iconLeftOnPress={[goBack]}
        isCenterTitle
        iconRightName={["ic_plus"]}
        iconRightOnPress={[gotoCreateComplaints]}
      />
      <Separator height={ScreenUtils.scale(1)} />
      <View style={styles.childContainer}>
        <Flatlist
          data={items || []}
          renderItem={complaint}
          onRefresh={getData}
          onLoadMore={getData}
          isLoading={isLoading}
          renderNoResult={<NoComplaint />}
          shouldRefreshWhenFocus={shouldRefreshWhenFocus}
        />
      </View>
    </View>
  );
};
