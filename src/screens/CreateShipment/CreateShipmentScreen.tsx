import {
  ChooseAddressModal,
  ChooseWarehouseModal,
  Header,
  Separator,
  WarehouseItem,
} from "@components";
import { CONSTANT, SCREENS } from "@configs";
import { ScreenUtils } from "@helpers";
import { useBoolean, useStatusBar } from "@hooks";
import { Address } from "@models";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, Checkbox, translate } from "@shared";
import { Icons, Metrics, Themes } from "@themes";
import React, { FunctionComponent, useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { CreateEcomShipment, CreateGiftShipment } from "./components";
import styles from "./styles";

export interface CreateShipmentScreenParams {}

interface Props {}

export const CreateShipmentScreen: FunctionComponent<Props> = () => {
  useStatusBar("dark-content");
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const [shipmentType, setShipmentType] = useState<string>(
    CONSTANT.SHIPMENT_TYPE.ECOMMERCE,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [showAddressModal, setShowAddressModal, setHideAddressModal] =
    useBoolean();
  const [showOfficerModal, setShowOfficerModal, setHideOfficerModal] =
    useBoolean();
  const [receivedAddress, setReceivedAddress] = useState<Address>();
  const [postOfficerAddress, setPostOfficeAddress] = useState<WarehouseItem>();
  const [senderAddress, setSenderAddress] = useState<Address>();

  const goBack = () => {
    navigation.goBack();
  };
  const handleContinue = () => {
    setIsLoading(true);

    // TODO: check validate and continue
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };
  const handleCancel = () => {
    navigation.navigate(SCREENS.HOME_SCREEN);
  };

  const onChangeGiftTab = () => {
    setReceivedAddress(undefined);
    setPostOfficeAddress(undefined);
    setSenderAddress(undefined);
    setShipmentType(CONSTANT.SHIPMENT_TYPE.GIFT);
  };
  const onChangeEcomTab = () => {
    setReceivedAddress(undefined);
    setPostOfficeAddress(undefined);
    setSenderAddress(undefined);
    setShipmentType(CONSTANT.SHIPMENT_TYPE.ECOMMERCE);
  };
  return (
    <View style={[styles.container]}>
      <Header
        title={translate("titleCreateShipment")}
        iconLeftName={["ic_arrow_left"]}
        iconLeftOnPress={[goBack]}
        isCenterTitle
      />
      <Separator height={ScreenUtils.scale(1)} />
      <ScrollView style={[styles.container]}>
        <View style={styles.choseShipmentContainer}>
          <View style={styles.choseItemContainer}>
            <Checkbox
              checked={
                shipmentType === CONSTANT.SHIPMENT_TYPE.ECOMMERCE ? true : false
              }
              title={translate("labelEcommerce")}
              onChange={onChangeEcomTab}
            />
            <TouchableOpacity style={styles.iconButton}>
              <Icons.FontAwesome5
                name="question-circle"
                size={Metrics.icons.smallSmall}
                color={Themes.colors.coolGray60}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.choseItemContainer}>
            <Checkbox
              checked={
                shipmentType === CONSTANT.SHIPMENT_TYPE.GIFT ? true : false
              }
              title={translate("labelGift")}
              onChange={onChangeGiftTab}
            />
            <TouchableOpacity style={styles.iconButton}>
              <Icons.FontAwesome5
                name="question-circle"
                size={Metrics.icons.smallSmall}
                color={Themes.colors.coolGray60}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          {shipmentType === CONSTANT.SHIPMENT_TYPE.ECOMMERCE && (
            <CreateEcomShipment
              address={receivedAddress}
              postOffice={postOfficerAddress}
              chooseAddress={setShowAddressModal}
              chooseOfficer={setShowOfficerModal}
            />
          )}
          {shipmentType === CONSTANT.SHIPMENT_TYPE.GIFT && (
            <CreateGiftShipment
              address={receivedAddress}
              postOffice={postOfficerAddress}
              sender={senderAddress}
              chooseAddress={setShowAddressModal}
              chooseOfficer={setShowOfficerModal}
              chooseSender={() => {}}
            />
          )}
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          onPress={handleCancel}
          title={translate("buttonCancel")}
          titleStyle={styles.titleStyle}
          buttonChildStyle={styles.buttonCancelChildStyle}
          buttonStyle={styles.button}
        />
        <Button
          onPress={handleContinue}
          title={translate("buttonContinue")}
          isLoading={isLoading}
          buttonChildStyle={styles.buttonChildStyle}
          buttonStyle={styles.button}
        />
      </View>
      <ChooseAddressModal
        title={translate("labelChooseAddress")}
        onClose={setHideAddressModal}
        isVisible={showAddressModal}
        onPress={data => setReceivedAddress(data)}
        selectedItem={receivedAddress?.id}
      />
      <ChooseWarehouseModal
        title={translate("labelChooseAddress")}
        onClose={setHideOfficerModal}
        isVisible={showOfficerModal}
        onPress={data => setPostOfficeAddress(data)}
        selectedItem={postOfficerAddress?.id}
      />
    </View>
  );
};
