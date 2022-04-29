import { Header, Separator } from "@components";
import { SCREENS } from "@configs";
import { ScreenUtils } from "@helpers";
import { useStatusBar } from "@hooks";
import { RootStackParamList } from "@navigation";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, Checkbox, Flatlist, translate } from "@shared";
import { Icons } from "@themes";
import React, { FunctionComponent, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ShipmentDetailOption } from "./components/ShipmentDetailOption";
import styles from "./styles";

export interface CreateShipmentDetailScreenParams {
  shipmentType: string;
  receiveId: number;
  postOfficeId: number;
  senderAddress: number | null;
}

// type NavigationProp = StackNavigationProp<
//   RootStackParamList,
//   SCREENS.CREATE_SHIPMENT_DETAIL_SCREEN
// >;

type CreateShipmentDetailNavigationRoute = RouteProp<
  RootStackParamList,
  SCREENS.CREATE_SHIPMENT_DETAIL_SCREEN
>;

interface Props {}

export const CreateShipmentDetailScreen: FunctionComponent<Props> = () => {
  useStatusBar("dark-content");
  const routeNavigation = useRoute<CreateShipmentDetailNavigationRoute>();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const {} = routeNavigation?.params || {};
  const [service] = useState("");
  const [dataImage, setDataImage] = useState<Array<string>>([]);

  const gotoHome = () => {
    navigation.navigate(SCREENS.HOME_STACK);
  };

  const keyExtractor = ({ item, index }: { item: string; index: number }) =>
    `${item}_${index}`;

  const deleteAllImages = () => {
    setDataImage([]);
  };

  const renderImage = ({ item }: { item: string }) => {
    const {} = item;
    return (
      <>
        <View style={styles.images}>
          <Text>ảnh</Text>
        </View>
        <TouchableOpacity style={styles.deleteImage}>
          <Text style={styles.delete}>x</Text>
        </TouchableOpacity>
      </>
    );
  };

  const renderListFooterComponent = () => {
    return (
      <TouchableOpacity style={styles.buttonImage}>
        <Icons.FontAwesome name="camera" size={24} />
      </TouchableOpacity>
    );
  };

  const handleCancel = () => {};
  const handleConfirm = () => {};

  return (
    <View style={styles.container}>
      <Header
        title={translate("buttonAnalytics")}
        iconLeftName={["ic_arrow_left"]}
        iconLeftOnPress={[navigation.goBack]}
        isCenterTitle
        iconRightName={["ic_home"]}
        iconRightOnPress={[gotoHome]}
      />
      <Separator height={ScreenUtils.scale(2)} />
      <ScrollView style={styles.childrenContainer}>
        <View style={styles.shipmentDetailContainer}>
          <Text style={styles.headerHeader}>Shipment Details</Text>
        </View>
        <Separator height={ScreenUtils.scale(8)} />
        <ShipmentDetailOption
          titleLeft={"Choose Optional Services"}
          titleRight={service}
          iconRight={"arrow-forward-ios"}
          onPress={() => {}}
        />
        <Separator height={ScreenUtils.scale(8)} />
        <ShipmentDetailOption
          titleLeft={"Proxy Payment"}
          titleRight={"$10.000"}
          iconRight={"arrow-forward-ios"}
          onPress={() => {}}
        />
        <Separator height={ScreenUtils.scale(8)} />
        <ShipmentDetailOption
          titleLeft={"Protect your shipment"}
          titleRight={"$10.000"}
          iconRight={"arrow-forward-ios"}
          onPress={() => {}}
        />
        <Separator height={ScreenUtils.scale(8)} />
        <View style={styles.shipmentDetailImageContainer}>
          <View style={styles.headerView}>
            <Text style={styles.header}>Add image</Text>
            <TouchableOpacity onPress={deleteAllImages}>
              <Text style={styles.header}>Delete All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal style={styles.listImage}>
            <Flatlist
              data={dataImage}
              horizontal
              scrollEnabled={false}
              keyExtractor={keyExtractor}
              renderItem={renderImage}
              ListFooterComponent={renderListFooterComponent}
            />
          </ScrollView>
        </View>
      </ScrollView>
      <View style={styles.shipmentDetailFooterContainer}>
        <View style={styles.footerContentView}>
          <Checkbox />
          <Text style={styles.footerText}>Payment at Vietnam post office</Text>
          {/* <Icon
            name="ic_check"
            size={Metrics.icons.smallSmall}
            color={Themes.colors.white}
          /> */}
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={handleCancel}
            title={translate("buttonCancel")}
            titleStyle={styles.titleStyle}
            buttonChildStyle={styles.buttonCancelChildStyle}
            buttonStyle={styles.button}
          />
          <Button
            onPress={handleConfirm}
            title={translate("labelConfirm")}
            // isLoading={isLoading}
            buttonChildStyle={styles.buttonChildStyle}
            buttonStyle={styles.button}
          />
        </View>
      </View>
    </View>
  );
};
