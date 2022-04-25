import { Header, ModalWithIcon, Separator } from "@components";
import { ScreenUtils } from "@helpers";
import { useBoolean, useStatusBar } from "@hooks";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, translate } from "@shared";
import { Themes } from "@themes";
import React, { FunctionComponent, useCallback, useState } from "react";
import { FlatList, View } from "react-native";
import {
  GuideItem,
  RenderInfoWarehouse,
} from "./components/RenderInfoWarehouse";
import styles from "./styles";

let dataWarehouse: Array<GuideItem> = [
  {
    id: 1,
    titleWarehouse: "Shanghai",
    area: "浙江嘉兴秀洲区",
    address: "浙江省-嘉兴市秀洲区-王店镇梅秀路399号1号车间3楼转lexluthor",
    name: "蒋紫宸",
    phone: 15669302909,
    isActive: false,
  },
  {
    id: 2,
    titleWarehouse: "Shanghai",
    area: "浙江嘉兴秀洲区",
    address: "浙江省-嘉兴市秀洲区-王店镇梅秀路399号1号车间3楼转lexluthor",
    name: "蒋紫宸",
    phone: 15669302910,
    isActive: true,
  },
  {
    id: 3,
    titleWarehouse: "Shanghai",
    area: "浙江嘉兴秀洲区",
    address: "浙江省-嘉兴市秀洲区-王店镇梅秀路399号1号车间3楼转lexluthor",
    name: "蒋紫宸",
    phone: 15669302911,
    isActive: false,
  },
];

interface Props {}

export const WarehouseScreen: FunctionComponent<Props> = () => {
  const [isShowConfirm, setIsShowConfirm, hideConfirm] = useBoolean();
  const [data] = useState(dataWarehouse);

  const change = useCallback(() => {}, []);

  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  useStatusBar("dark-content");

  const goBack = () => {
    navigation.goBack();
  };

  const keyExtractor = (item: GuideItem, index: number) =>
    `${item.id}_${index}`;

  const renderItem = useCallback(({ item }: { item: GuideItem }) => {
    return (
      <RenderInfoWarehouse
        item={item}
        changeStatus={() => {
          setIsShowConfirm();
          item.id > 0;
        }}
      />
    );
  }, []);
  return (
    <View style={[styles.container]}>
      <Header
        title={translate("buttonWarehouse")}
        iconLeftName={["ic_arrow_left"]}
        iconLeftOnPress={[goBack]}
        isCenterTitle
        iconRightName={["ic_search"]}
        iconRightColor={[Themes.colors.orangeF27]}
      />
      <Separator height={ScreenUtils.scale(2)} />
      <FlatList
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
      <ModalWithIcon
        iconAtHead={true}
        iconName={"ic_home_fill"}
        message={translate("textActive")}
        isVisible={isShowConfirm}
        onDismiss={hideConfirm}
        onDeclinePress={hideConfirm}
        isHyperLink={true}
        txtHyperLink={translate("label.labelMoreInfo")}
        onAcceptPress={change}
        acceptText={translate("button.activate")}
      />
      <Button
        buttonStyle={styles.btnStyles}
        buttonChildStyle={styles.btnChildStyles}
        title={"Get a quote"}
        onPress={() => {}}
      />
    </View>
  );
};
