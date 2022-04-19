import { Header, Separator } from "@components";
import { Alert, ScreenUtils } from "@helpers";
import { useStatusBar } from "@hooks";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { translate } from "@shared";
import React, { FunctionComponent } from "react";
import { Text, Vibration, View } from "react-native";
import BarcodeMask from "react-native-barcode-mask";
import { RNCamera } from "react-native-camera";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "./styles";

interface Props {}

export const ScanQRCodeScreen: FunctionComponent<Props> = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  useStatusBar("dark-content");
  const insets = useSafeAreaInsets();

  const onBarCodeRead = (scanResult: any) => {
    Vibration.vibrate();
    if (scanResult && scanResult.data) {
    } else {
      Alert.error("Scan failed");
    }
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Header
        title={translate("titleScanQRCode")}
        iconLeftName={["ic_arrow_left"]}
        iconLeftOnPress={[goBack]}
        isCenterTitle
      />
      <Separator height={ScreenUtils.scale(2)} />
      <RNCamera
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.auto}
        style={styles.RNcameraView}
        onBarCodeRead={onBarCodeRead}
        captureAudio={false}
      >
        <BarcodeMask
          width={ScreenUtils.scale(300)}
          height={ScreenUtils.scale(100)}
          edgeColor={"#62B1F6"}
          showAnimatedLine={false}
        />
        <View style={styles.RNCChildView}>
          <Text style={styles.labelScan}>
            {translate("labelScanBarCodeTitle")}
          </Text>
        </View>
      </RNCamera>
    </View>
  );
};
