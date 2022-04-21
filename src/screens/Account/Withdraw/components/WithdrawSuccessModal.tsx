import { Utils } from "@helpers";
import { useNavigation } from "@react-navigation/native";
import { Button, translate } from "@shared";
import { Images, Themes } from "@themes";
import React, { FunctionComponent } from "react";
import { Image, Modal, StyleSheet, Text, View } from "react-native";
import styles from "./styles";

interface Props {
  isShowModal: boolean;
  closeModal: () => void;
  amount: number;
  currency: string;
}
export const WithdrawSuccessModal: FunctionComponent<Props> = props => {
  const navigation = useNavigation();
  const { isShowModal, closeModal, amount, currency } = props;
  const goBack = () => {
    closeModal();
    navigation.goBack();
  };
  return (
    <Modal visible={isShowModal} transparent={true}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Image source={Images.icWithdrawSuccess} />
          <Text style={styles.successTitle}>{translate("label.success")}!</Text>
          <Text style={styles.successContent}>
            {translate("labelCommandWithdraw")}:
          </Text>
          <Text style={styles.successAmount}>
            {Utils.formatMoneyCurrency(amount, currency)}
          </Text>
          <Button
            title={`+ ${translate("buttonNewTransaction")}`}
            onPress={closeModal}
            buttonStyle={styles.withdrawBtn}
            buttonChildStyle={[
              styles.withdrawBtn,
              {
                backgroundColor: Themes.colors.white,
                borderWidth: 2 * StyleSheet.hairlineWidth,
                borderColor: Themes.colors.primary,
              },
            ]}
            titleStyle={{ color: Themes.colors.primary }}
          />
          <Button
            title={translate("buttonBackToWallet")}
            onPress={goBack}
            buttonStyle={styles.withdrawBtn}
            buttonChildStyle={styles.withdrawBtn}
          />
        </View>
      </View>
    </Modal>
  );
};
