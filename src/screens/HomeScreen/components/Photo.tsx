import { SCREENS } from "@configs";
import { IPhoto } from "@models";
import { useNavigation } from "@react-navigation/core";
import { HomeScreenNavigationProp } from "@screens";
import React, { FunctionComponent } from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import FastImage from "react-native-fast-image";
import styles from "./styles";

interface Props {
  item: IPhoto;
}

const Photo: FunctionComponent<Props> = ({ item }) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const goToDetail = () => {
    navigation.navigate(SCREENS.DETAIL_SCREEN, { item: item });
  };

  return (
    <View style={styles.photoContainer}>
      <TouchableWithoutFeedback onPress={goToDetail}>
        <FastImage
          style={styles.photoDimensions}
          source={{
            uri: item.src.portrait,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Photo;
