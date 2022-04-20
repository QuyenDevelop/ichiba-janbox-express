import { Icon, translate } from "@shared";
import { Metrics, Themes } from "@themes";
import React, { FunctionComponent } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import styles from "../styles";

interface Props {
  visible: boolean;
  handleClose: (visible: boolean) => void;
  content: string;
}
export const ModalSucessPay: FunctionComponent<Props> = ({
  visible,
  handleClose,
  content,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      statusBarTranslucent={true}
    >
      <View style={styles.flexModal}>
        <View style={styles.contentModal}>
          <View style={styles.viewTrue}>
            <Icon
              name="ic_check"
              size={Metrics.icons.large}
              color={Themes.colors.green22}
            />
          </View>
          <Text style={styles.titleModal}>
            {translate("label.modal.infoConfirm")}
          </Text>
          <Text style={styles.textModal}>{content}</Text>
          <Text style={styles.textModal}>
            {translate("label.modal.anyRequest")}
          </Text>
          <TouchableOpacity
            style={styles.iconCloseModal}
            onPress={() => handleClose(false)}
          >
            <Icon
              name="ic_close"
              size={Metrics.icons.medium}
              color={Themes.colors.coolGray60}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
