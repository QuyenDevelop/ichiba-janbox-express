import { Header } from "@components";
import { Flatlist } from "@shared";
import { Icons, Themes } from "@themes";
import React, { FunctionComponent, useMemo, useState } from "react";
import {
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";

export interface WarehouseItem {
  id: number;
  titleWarehouse: string;
  area: string;
  address: string;
  name: string;
  phone: string;
  isActive: boolean;
}

let dataWarehouse: Array<WarehouseItem> = [
  {
    id: 1,
    titleWarehouse: "Shanghai",
    area: "浙江嘉兴秀洲区",
    address: "浙江省-嘉兴市秀洲区-王店镇梅秀路399号1号车间3楼转lexluthor",
    name: "蒋紫宸",
    phone: "15669302909",
    isActive: false,
  },
  {
    id: 2,
    titleWarehouse: "Sheng",
    area: "浙江嘉兴秀洲区",
    address: "浙江省-嘉兴市秀洲区-王店镇梅秀路399号1号车间3楼转lexluthor",
    name: "蒋紫宸",
    phone: "15669302910",
    isActive: false,
  },
  {
    id: 3,
    titleWarehouse: "Goku",
    area: "浙江嘉兴秀洲区",
    address: "浙江省-嘉兴市秀洲区-王店镇梅秀路399号1号车间3楼转lexluthor",
    name: "蒋紫宸",
    phone: "15669302911",
    isActive: false,
  },
  {
    id: 4,
    titleWarehouse: "Midnight",
    area: "浙江嘉兴秀洲区",
    address: "浙江省-嘉兴市秀洲区-王店镇梅秀路399号1号车间3楼转lexluthor",
    name: "蒋紫宸",
    phone: "15669302912",
    isActive: true,
  },
];

interface IProps {
  onClose: () => void;
  isVisible: boolean;
  onPress: (data: WarehouseItem) => void;
  title: string;
  selectedItem?: number;
  setSelected?: (id: number) => {};
}

export const ChooseWarehouseModal: FunctionComponent<IProps> = props => {
  const { onClose, isVisible, onPress, title, selectedItem } = props;
  const [data, setData] = useState<Array<WarehouseItem>>();

  useMemo(() => {
    setData(dataWarehouse);
  }, []);

  const onSelect = (location: WarehouseItem) => {
    onPress(location);
    handleClose();
  };

  const handleClose = () => {
    onClose();
  };

  const RenderItem = ({ item: location }: { item: WarehouseItem }) => (
    <TouchableOpacity
      style={[
        styles.item,
        {
          borderColor:
            selectedItem === location.id
              ? Themes.colors.primary
              : Themes.colors.colGray20,
        },
      ]}
      onPress={() => onSelect(location)}
    >
      <Icons.Ionicons name={"location"} style={styles.icon} size={28} />
      <View style={styles.container}>
        <Text style={styles.text}>{location?.name}</Text>
        <Text style={styles.content} numberOfLines={2}>
          {location?.address}
        </Text>
        <Text style={[styles.phone]}>{location?.phone}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <Modal
      onRequestClose={handleClose}
      onDismiss={handleClose}
      visible={isVisible}
      animationType="slide"
    >
      <SafeAreaView style={styles.container}>
        <Header
          title={title}
          iconLeftName={["ic_close"]}
          iconLeftOnPress={[handleClose]}
          isCenterTitle
        />
        <Flatlist
          automaticallyAdjustContentInsets={false}
          scrollEventThrottle={1}
          data={data}
          renderItem={RenderItem}
          disableRefresh
          disableLoadMore
        />
      </SafeAreaView>
    </Modal>
  );
};
