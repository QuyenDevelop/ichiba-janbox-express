/* eslint-disable react-native/no-inline-styles */
import { Icon, translate } from "@shared";
import { Images, Metrics, Themes } from "@themes";
import React, { FunctionComponent, useState } from "react";
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FastImage from "react-native-fast-image";
import styles from "../styles";
import { TextInputCredit } from "./TextInputCredit";
interface Props {
  visible: boolean;
  handleClose: (visible: boolean) => void;
}
export const ModalAddCard: FunctionComponent<Props> = ({
  visible,
  handleClose,
}) => {
  const [inputCardNumber, setInputCradNumber] = useState<string | undefined>(
    "",
  );
  const [inputCardholder, setInputCardholder] = useState<string | undefined>(
    "",
  );
  const [inputExpiration, setInputExpiration] = useState<string | undefined>(
    "",
  );
  const [inputCVV, setInputCVV] = useState<string | undefined>("");
  const [active, setActive] = useState(false);
  const handleAddCard = () => {
    handleClose(false);
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      statusBarTranslucent={true}
    >
      <KeyboardAvoidingView
        style={styles.flexModalAddCard}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.contentModalAddCard}>
          <View style={styles.headerModalAddLayor}>
            <View style={styles.headerModalAdd} />
          </View>
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
          <Text style={styles.titleAddCard}>{translate("label.addCard")}</Text>
          <ScrollView>
            <TextInputCredit
              title={translate("label.cardNumber")}
              textInput={inputCardNumber}
              onChangeText={setInputCradNumber}
              placeholder={translate("label.cardNumber")}
            />
            <TextInputCredit
              title={translate("label.cardholderName")}
              textInput={inputCardholder}
              onChangeText={setInputCardholder}
              placeholder={translate("label.cardholderName")}
            />
            <TextInputCredit
              title={translate("label.expirationDate")}
              textInput={inputExpiration}
              onChangeText={setInputExpiration}
              placeholder={translate("label.expirationDate")}
            />
            <View style={styles.flexCvv}>
              <View style={styles.itemLeft}>
                <TextInputCredit
                  title={translate("label.cvv")}
                  textInput={inputCVV}
                  onChangeText={setInputCVV}
                  placeholder={translate("label.cvv")}
                />
              </View>
              <View style={styles.itemLeft}>
                <View style={styles.contentInputCredit}>
                  <Text style={styles.titleItemInfo}>
                    {translate("button.currency")}
                  </Text>
                  <TouchableOpacity style={styles.inputCreditLayer}>
                    <Text style={styles.textCurrent}>USD</Text>
                    <Icon
                      name="ic_arrow_down"
                      size={Metrics.icons.smallTiny}
                      color={Themes.colors.coolGray100}
                      styles={styles.iconRight}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.flexRow}>
              <TouchableOpacity
                style={{
                  ...styles.selectItem,
                  borderWidth: active ? 0 : 1,
                  backgroundColor: active
                    ? Themes.colors.primary
                    : Themes.colors.white,
                }}
                onPress={() => setActive(!active)}
              >
                {active ? (
                  <Icon
                    name="ic_check"
                    size={Metrics.icons.smallTiny}
                    color={Themes.colors.white}
                  />
                ) : null}
              </TouchableOpacity>
              <Text style={styles.textRemember}>
                {translate("label.rememberCard")}
              </Text>
            </View>
            <View style={styles.provider}>
              <Text style={styles.textProvider}>
                {translate("label.providedByStripe")}
              </Text>
              <FastImage
                source={Images.secure}
                resizeMode={FastImage.resizeMode.contain}
                style={styles.iconSecure}
              />
              <View style={styles.paddingButoon} />
            </View>
            <View style={styles.buttonAddLayor}>
              <TouchableOpacity
                style={styles.buttonAddCrad}
                onPress={() => handleAddCard()}
              >
                <Text style={styles.textSubmit}>
                  {translate("label.addCard")}
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};
