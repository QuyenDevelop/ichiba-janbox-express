import { locationApi } from "@api";
import { Header, LocationModal, Separator } from "@components";
import { ScreenUtils } from "@helpers";
import { useBoolean, useStatusBar } from "@hooks";
import { LocationResponse } from "@models";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TextInput, translate } from "@shared";
import { Metrics } from "@themes";
import React, { FunctionComponent, useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import {
  Country,
  CountryCode,
  getCallingCode,
} from "react-native-country-picker-modal";
import * as RNLocalize from "react-native-localize";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ShipmentInfo } from "./components/ShipmentInfo";
import { Warning } from "./components/Warning";
import styles from "./styles";

interface Props {}

export const RateAndTimeScreen: FunctionComponent<Props> = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  useStatusBar("dark-content");
  const insets = useSafeAreaInsets();

  const [countryCode, setCountryCode] = useState({
    cca2: RNLocalize.getCountry() as CountryCode,
  } as Country);
  const [isShowFromCountry, showFromCountry, hideShowFromCountry] =
    useBoolean(false);
  const [isShowToCountry, showToCountry, hideShowToCountry] = useBoolean(false);
  const [isButtonClickSubmit, setIsButtonClickSubmit] = useState(false);
  const [countries, setCountries] = useState([] as LocationResponse[]);
  const [fromCountry, setFromCountry] = useState(
    undefined as LocationResponse | undefined,
  );
  const [toCountry, setToCountry] = useState(
    undefined as LocationResponse | undefined,
  );

  useEffect(() => {
    Promise.all([
      locationApi?.getAllCountry()!,
      getCallingCode(RNLocalize.getCountry() as CountryCode),
    ]).then(([res, callingCode]) => {
      setCountries(res?.data!);
      setCountryCode({
        cca2: RNLocalize.getCountry() as CountryCode,
        callingCode: [callingCode],
      } as Country);
    });
  }, []);
  const onChangeFromCountry = (data: LocationResponse) => {
    if (data !== fromCountry) {
      setFromCountry(data);
      // getCallingCode(RNLocalize.getCountry() as CountryCode).then(
      //   callingCode => {
      //     setCountryCode({
      //       cca2: data.code as CountryCode,
      //       callingCode: [callingCode],
      //     } as Country);
      //   },
      // );
      // locationApi?.getStateProvinceByCountry(data?.id)?.then(res => {
      //   setIsLoadingProvince(false);
      //   setProvinces(res?.data);
      // });
    }
  };
  const onChangeToCountry = (data: LocationResponse) => {
    if (data !== toCountry) {
      setToCountry(data);
      // getCallingCode(RNLocalize.getCountry() as CountryCode).then(
      //   callingCode => {
      //     setCountryCode({
      //       cca2: data.code as CountryCode,
      //       callingCode: [callingCode],
      //     } as Country);
      //   },
      // );
      // locationApi?.getStateProvinceByCountry(data?.id)?.then(res => {
      //   setIsLoadingProvince(false);
      //   setProvinces(res?.data);
      // });
    }
  };

  const handleSubmit = () => {
    setIsButtonClickSubmit(true);
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <Header
        title={translate("buttonRateAndTime")}
        iconLeftName={["ic_arrow_left"]}
        iconLeftOnPress={[goBack]}
        isCenterTitle
      />
      <Separator height={ScreenUtils.scale(2)} />
      <View style={styles.titleView}>
        <Text style={styles.titleRateTime}>{translate("labelShippingAs")}</Text>
      </View>
      <View style={[styles.countryContainer]}>
        <TextInput
          editable={false}
          label={translate("labelFrom")}
          placeholder={translate("placeholder.countries")}
          containerStyle={styles.input}
          value={fromCountry?.name}
          isRequired
          errorMessage={
            isButtonClickSubmit && !fromCountry
              ? translate("error.validation.countries")
              : ""
          }
          iconRightName="ic_arrow_down"
          iconRightSize={Metrics.icons.smallSmall}
          onPressIconRight={showFromCountry}
        />
        <TextInput
          editable={false}
          label={translate("labelTo")}
          placeholder={translate("placeholder.countries")}
          containerStyle={styles.input}
          value={toCountry?.name}
          isRequired
          errorMessage={
            isButtonClickSubmit && !toCountry
              ? translate("error.validation.countries")
              : ""
          }
          iconRightName="ic_arrow_down"
          countryCode={countryCode.cca2}
          iconRightSize={Metrics.icons.smallSmall}
          onPressIconRight={showToCountry}
        />
      </View>
      <Separator height={ScreenUtils.scale(8)} />
      <View style={styles.titleView}>
        <Text style={styles.titleRateTime}>{translate("titleShipment")}</Text>
      </View>
      <ShipmentInfo />
      <Warning />
      <View style={styles.submitButton}>
        <TouchableOpacity style={styles.buttonSubmit} onPress={handleSubmit}>
          <Text style={styles.textSubmit}>{translate("buttonGetQuote")}</Text>
        </TouchableOpacity>
      </View>
      <LocationModal
        title={translate("label.chooseCountry")}
        onClose={hideShowFromCountry}
        isVisible={isShowFromCountry}
        data={countries}
        onPress={onChangeFromCountry}
        selectedItem={fromCountry?.id}
      />
      <LocationModal
        title={translate("label.chooseCountry")}
        onClose={hideShowToCountry}
        isVisible={isShowToCountry}
        data={countries}
        onPress={onChangeToCountry}
        selectedItem={toCountry?.id}
      />
    </ScrollView>
  );
};
