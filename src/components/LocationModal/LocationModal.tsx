import { Header } from "@components";
import { LocationResponse } from "@models";
import { Flatlist, Icon, TextInput, translate } from "@shared";
import { Metrics, Themes } from "@themes";
import Fuse from "fuse.js";
import React, { FunctionComponent, useState } from "react";
import { Modal, SafeAreaView, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const DEFAULT_FUSE_OPTION = {
  shouldSort: true,
  threshold: 0.3,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: ["name"],
};

interface IProps {
  onClose: () => void;
  isVisible: boolean;
  data: LocationResponse[];
  onPress: (data: LocationResponse) => void;
  title: string;
  selectedItem?: string;
}

export const LocationModal: FunctionComponent<IProps> = props => {
  const { onClose, isVisible, data, onPress, title, selectedItem } = props;
  const [filter, setFilter] = useState("");
  let fuse: Fuse<LocationResponse>;

  const onSelect = (location: LocationResponse) => {
    onPress(location);
    handleClose();
  };

  const handleClose = () => {
    setFilter("");
    onClose();
  };

  const search = (
    filter: string = "",
    data: LocationResponse[] = [],
    options: Fuse.IFuseOptions<any> = DEFAULT_FUSE_OPTION,
  ) => {
    if (data.length === 0) {
      return [];
    }
    if (!fuse) {
      fuse = new Fuse(data, options);
    }
    if (filter && filter !== "") {
      const result = fuse.search(filter);
      return result.map(r => r.item);
    } else {
      return data;
    }
  };

  const RenderItem = ({ item: location }: { item: LocationResponse }) => (
    <TouchableOpacity style={styles.item} onPress={() => onSelect(location)}>
      <Text style={styles.text} numberOfLines={2}>
        {location?.name}
      </Text>
      {selectedItem === location.id && (
        <Icon
          name={"ic_check"}
          size={Metrics.icons.smallSmall}
          color={Themes.colors.primary}
        />
      )}
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
          iconLeftOnPress={[() => onClose()]}
          isCenterTitle
        />
        <TextInput
          placeholder={translate("placeholder.searchLocation")}
          containerStyle={styles.input}
          value={filter}
          onChangeText={(text: string) => setFilter(text)}
        />
        <Flatlist
          automaticallyAdjustContentInsets={false}
          scrollEventThrottle={1}
          data={search(filter, data)}
          renderItem={RenderItem}
          disableRefresh
          disableLoadMore
        />
      </SafeAreaView>
    </Modal>
  );
};
