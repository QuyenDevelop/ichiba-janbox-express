import { Button, translate } from "@shared";
import { Icons, Themes } from "@themes";
import React, { FunctionComponent } from "react";
import { Modal, Text, View } from "react-native";
import styles from "./styles";

interface Props {
  isShowModal: boolean;
  closeModal: () => void;
  title: string;
  content: string;
}
export const SuccessModal: FunctionComponent<Props> = props => {
  const { isShowModal, closeModal, title, content } = props;
  const goBack = () => {
    closeModal();
  };
  return (
    <Modal visible={isShowModal} transparent={true}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Icons.FontAwesome5
            name="check-circle"
            solid
            size={56}
            color={Themes.colors.success60}
          />
          <Text style={styles.successTitle}>{title}</Text>
          <Text style={styles.successContent}>{content}</Text>
          <Button
            title={translate("button.close")}
            onPress={goBack}
            buttonStyle={styles.withdrawBtn}
            buttonChildStyle={styles.withdrawBtn}
          />
        </View>
      </View>
    </Modal>
  );
};
