import { BaseBottomSheet, Icon, translate } from "@shared";
import { Metrics, Themes } from "@themes";
import React, { FunctionComponent } from "react";
import { Text, TouchableOpacity, View } from "react-native";
// import ImagePicker, { Options } from "react-native-image-crop-picker";
import styles from "./styles";
interface Props {
  isShowModal: boolean;
  onCloseModal: () => void;
  updateImage: (value: any) => void;
}

// const cameraOptions: Options = {
//   mediaType: "photo",
// };

// const mediaOptions: Options = {
//   mediaType: "photo",
//   multiple: true,
// };

export const ChooseImageModal: FunctionComponent<Props> = props => {
  const { isShowModal, onCloseModal } = props;

  const openCamera = () => {
    // ImagePicker.openCamera(cameraOptions).then(response => {
    //   updateImage([response]);
    //   onCloseModal();
    // });
  };

  const openPicker = () => {
    // ImagePicker.openPicker(mediaOptions).then(response => {
    //   updateImage(response);
    //   onCloseModal();
    // });
  };

  return (
    <BaseBottomSheet isShowModal={isShowModal} onCloseModal={onCloseModal}>
      <View style={styles.modalContainer}>
        <Text style={styles.titleText}>Chọn ảnh từ</Text>
        <TouchableOpacity style={styles.chooseButton} onPress={openCamera}>
          <Icon
            name="ic_camera-retro"
            size={Metrics.icons.smallSmall}
            color={Themes.colors.black}
          />
          <Text style={styles.buttonText}>{translate("buttonTakePhoto")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.chooseButton} onPress={openPicker}>
          <Icon
            name="ic_package_fill"
            size={Metrics.icons.smallSmall}
            color={Themes.colors.black}
          />
          <Text style={styles.buttonText}>
            {translate("buttonChooseLibrary")}
          </Text>
        </TouchableOpacity>
      </View>
    </BaseBottomSheet>
  );
};
