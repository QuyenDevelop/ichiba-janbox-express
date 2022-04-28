import { Header, Separator } from "@components";
import { CONSTANT, SCREENS } from "@configs";
import { ScreenUtils } from "@helpers";
import { useAppSelector, useStatusBar } from "@hooks";
import { Address, PackageShipmentResponse } from "@models";
import { CreateShipmentParamList } from "@navigation";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, Checkbox, translate } from "@shared";
import { Icons, Metrics, Themes } from "@themes";
import React, { FunctionComponent, useEffect, useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { CreateEcomShipment, CreateGiftShipment } from "./components";
import styles from "./styles";

export interface CreateShipmentScreenParams {
  address?: Address | {};
  shipment?: PackageShipmentResponse | {};
}

type NavigationRoute = RouteProp<
  CreateShipmentParamList,
  SCREENS.CREATE_SHIPMENT_SCREEN
>;

interface Props {}

export const CreateShipmentScreen: FunctionComponent<Props> = () => {
  useStatusBar("dark-content");
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const routeNavigation = useRoute<NavigationRoute>();
  const { address, shipment } = routeNavigation?.params;
  console.log("🚀🚀🚀 => address", address);
  console.log("🚀🚀🚀 => shipment", shipment);
  const language = useAppSelector(state => state.user.language);
  useEffect(() => {}, [language]);

  const [shipmentType, setShipmentType] = useState<string>(
    CONSTANT.SHIPMENT_TYPE.ECOMMERCE,
  );
  const [isLoading, setIsLoading] = useState(false);

  const goBack = () => {
    navigation.goBack();
  };
  const handleContinue = () => {
    setIsLoading(true);

    // TODO: check validate and continue
  };
  const handleCancel = () => {
    navigation.navigate(SCREENS.HOME_SCREEN);
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
              onChange={() => setShipmentType(CONSTANT.SHIPMENT_TYPE.ECOMMERCE)}
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
              onChange={() => setShipmentType(CONSTANT.SHIPMENT_TYPE.GIFT)}
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
            <CreateEcomShipment />
          )}
          {shipmentType === CONSTANT.SHIPMENT_TYPE.GIFT && (
            <CreateGiftShipment />
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
    </View>
  );
};
