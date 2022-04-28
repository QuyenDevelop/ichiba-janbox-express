import { customerApi } from "@api";
import { Header } from "@components";
import { Address } from "@models";
import { Flatlist } from "@shared";
import React, { FunctionComponent, useMemo, useState } from "react";
import { Modal, SafeAreaView, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

interface IProps {
  onClose: () => void;
  isVisible: boolean;
  onPress: (data: Address) => void;
  title: string;
  selectedItem?: number;
  setSelected?: (id: number) => {};
}

export const ChooseAddressModal: FunctionComponent<IProps> = props => {
  const { onClose, isVisible, onPress, title } = props;
  const [data, setData] = useState<Array<Address>>();

  useMemo(() => {
    customerApi.getListAddress()?.then(address => {
      console.log(address);
      setData(address?.data || []);
    });
  }, []);

  const onSelect = (location: Address) => {
    onPress(location);
    handleClose();
  };

  const handleClose = () => {
    onClose();
  };

  const RenderItem = ({ item: location }: { item: Address }) => (
    <TouchableOpacity style={styles.item} onPress={() => onSelect(location)}>
      <Text style={styles.text}>{location?.name}</Text>
      <Text style={styles.content}>{`${location?.address}, ${
        location?.ward || ""
      }, ${location?.district || ""}, ${location?.province || ""}, ${
        location?.postalCode || ""
      }`}</Text>
      <Text style={[styles.phone]}>{location?.phone}</Text>
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
