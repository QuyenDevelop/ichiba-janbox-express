/* eslint-disable react-native/no-inline-styles */
import { customerApi, locationApi } from "@api";
import { Header, LocationModal } from "@components";
import { CONSTANT } from "@configs";
import { Alert, ScreenUtils } from "@helpers";
import { useStatusBar } from "@hooks";
import { LocationResponse } from "@models";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Button, Checkbox, TextInput, translate } from "@shared";
import { Metrics } from "@themes";
import React, { FunctionComponent, useEffect, useState } from "react";
import {
  DeviceEventEmitter,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from "react-native";
import {
  Country,
  CountryCode,
  getCallingCode,
} from "react-native-country-picker-modal";
import * as RNLocalize from "react-native-localize";
import styles from "./styles";

export const AddAddressScreen: FunctionComponent = () => {
  useStatusBar("dark-content");
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [countryCode, setCountryCode] = useState({
    cca2: RNLocalize.getCountry() as CountryCode,
  } as Country);
  const [countries, setCountries] = useState([] as LocationResponse[]);
  const [provinces, setProvinces] = useState([] as LocationResponse[]);
  const [districts, setDistricts] = useState([] as LocationResponse[]);
  const [wards, setWards] = useState([] as LocationResponse[]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState(
    undefined as LocationResponse | undefined,
  );
  const [province, setProvince] = useState(
    undefined as LocationResponse | undefined,
  );
  const [provinceInput, setProvinceInput] = useState<string | undefined>();
  const [districtInput, setDistrictInput] = useState<string | undefined>();
  const [wardInput, setWardInput] = useState<string | undefined>();
  const [district, setDistrict] = useState(
    undefined as LocationResponse | undefined,
  );
  const [ward, setWard] = useState(undefined as LocationResponse | undefined);
  const [zip, setZip] = useState("");
  const [address, setAddress] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isButtonClickSubmit, setIsButtonClickSubmit] = useState(false);
  const [isShowCountry, setIsShowCountry] = useState(false);
  const [isShowProvince, setIsShowProvince] = useState(false);
  const [isShowDistrict, setIsShowDistrict] = useState(false);
  const [isShowWard, setIsShowWard] = useState(false);
  const [isLoadingProvince, setIsLoadingProvince] = useState(false);
  const [isLoadingDistrict, setIsLoadingDistrict] = useState(false);
  const [isLoadingWard, setIsLoadingWard] = useState(false);
  const [taxCode, setTaxCode] = useState("");

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

  const onChangeCountry = (data: LocationResponse) => {
    if (data !== country) {
      setProvince(undefined);
      setDistrict(undefined);
      setProvinceInput(undefined);
      setDistrictInput(undefined);
      setWardInput(undefined);
      setDistricts([]);
      setWards([]);
      setWard(undefined);
      setCountry(data);
      setTaxCode("");
      getCallingCode(RNLocalize.getCountry() as CountryCode).then(
        callingCode => {
          setCountryCode({
            cca2: data.code as CountryCode,
            callingCode: [callingCode],
          } as Country);
        },
      );
      locationApi?.getStateProvinceByCountry(data?.id)?.then(res => {
        setIsLoadingProvince(false);
        setProvinces(res?.data);
      });
    }
  };

  const onChangeProvince = (data: LocationResponse) => {
    setDistrict(undefined);
    setWard(undefined);
    setProvince(data);
    setIsLoadingDistrict(true);
    locationApi?.getDistrictByProvince(data?.id, country?.id)?.then(res => {
      setIsLoadingDistrict(false);
      setDistricts(res?.data);
    });
  };

  const onChangeDistrict = (newDistrict: LocationResponse) => {
    setWard(undefined);
    setDistrict(newDistrict);
    setIsLoadingWard(true);
    locationApi
      ?.getWardByDistrict(newDistrict?.id, province?.id, country?.id)
      ?.then(res => {
        setIsLoadingWard(false);
        setWards(res?.data);
      });
  };

  const submit = () => {
    setIsButtonClickSubmit(true);

    if (country?.code === "ID" && !taxCode) {
      return;
    }

    if (provinces[0] && districts[0] && wards[0]) {
      if (
        name &&
        phone &&
        country &&
        zip &&
        address &&
        province &&
        district &&
        ward
      ) {
        setIsSubmitting(true);
        customerApi
          .addAddress({
            name,
            phone: `+${countryCode?.callingCode?.[0]}${phone}`,
            country: country?.name,
            province: province?.name,
            district: district?.name,
            countryCode: country?.code,
            ward: ward?.name,
            address,
            active: isActive,
            postalCode: zip,
            taxCode: taxCode,
          })
          ?.then(() => {
            Alert.success("success.addAddress");
            DeviceEventEmitter.emit(CONSTANT.RELOAD_CONSTANTS.RELOAD_ADDRESS);
            navigation.goBack();
          })
          .finally(() => setIsSubmitting(false));
      }
    } else {
      if (
        name &&
        phone &&
        country &&
        zip &&
        address &&
        (provinces[0] || provinceInput) &&
        (districts[0] || districtInput) &&
        (wards[0] || wardInput)
      ) {
        setIsSubmitting(true);
        customerApi
          .addAddress({
            name,
            phone: `+${countryCode?.callingCode?.[0]}${phone}`,
            country: country?.name,
            province: provinces[0] ? provinces[0].name : provinceInput,
            district: districts[0] ? districts[0].name : districtInput,
            countryCode: country?.code,
            ward: wards[0] ? wards[0].name : wardInput,
            address,
            active: isActive,
            postalCode: zip,
            taxCode: taxCode,
          })
          ?.then(() => {
            DeviceEventEmitter.emit(CONSTANT.RELOAD_CONSTANTS.RELOAD_ADDRESS);
            Alert.success("success.addAddress");
            navigation.goBack();
          })
          .finally(() => setIsSubmitting(false));
      }
    }
  };

  return (
    <View style={[styles.container]}>
      <Header
        title={translate("label.addAddress")}
        iconLeftName={["ic_arrow_left"]}
        iconLeftOnPress={[() => navigation.goBack()]}
        isCenterTitle
      />
      <KeyboardAvoidingView
        enabled={Platform.OS === "ios"}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          style={styles.childContainer}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: ScreenUtils.scale(20),
          }}
        >
          <TextInput
            editable={!isSubmitting}
            label={translate("label.fullName")}
            placeholder={translate("placeholder.fullName")}
            containerStyle={styles.input}
            value={name}
            onChangeText={setName}
            isRequired
            errorMessage={
              isButtonClickSubmit && !name
                ? translate("error.validation.name")
                : ""
            }
          />
          <TextInput
            editable={false}
            label={translate("label.countries")}
            placeholder={translate("placeholder.countries")}
            containerStyle={styles.input}
            value={country?.name}
            isRequired
            errorMessage={
              isButtonClickSubmit && !country
                ? translate("error.validation.countries")
                : ""
            }
            iconRightName="ic_arrow_down"
            iconRightSize={Metrics.icons.smallSmall}
            onPressIconRight={() => setIsShowCountry(true)}
          />
          <TextInput
            editable={!isSubmitting}
            keyboardType="number-pad"
            label={translate("label.verifyYourPhone")}
            placeholder={translate("placeholder.verifyYourPhone")}
            containerStyle={styles.input}
            value={phone}
            onChangeText={setPhone}
            isRequired
            errorMessage={
              isButtonClickSubmit && !phone
                ? translate("error.validation.verifyYourPhone")
                : ""
            }
            phoneInput
            countryCode={countryCode.cca2}
            onSelectCountry={setCountryCode}
          />
          <TextInput
            editable={provinces[0] ? false : !isSubmitting}
            label={translate("label.provinces")}
            placeholder={translate("placeholder.provinces")}
            containerStyle={styles.input}
            value={province?.name}
            onChangeText={setProvinceInput}
            isRequired
            errorMessage={
              provinces[0]
                ? isButtonClickSubmit && !province
                  ? translate("error.validation.provinces")
                  : ""
                : isButtonClickSubmit && !provinceInput
                ? translate("error.validation.provinces")
                : ""
            }
            onPressIconRight={() => setIsShowProvince(true)}
            iconRightName={provinces[0] ? "ic_arrow_down" : undefined}
            iconRightSize={Metrics.icons.smallSmall}
            loading={isLoadingProvince}
          />
          <TextInput
            editable={districts[0] ? false : !isSubmitting}
            label={translate("label.district")}
            placeholder={translate("placeholder.district")}
            onChangeText={setDistrictInput}
            containerStyle={styles.input}
            value={district?.name}
            isRequired
            errorMessage={
              districts[0]
                ? isButtonClickSubmit && !district
                  ? translate("error.validation.district")
                  : ""
                : isButtonClickSubmit && !districtInput
                ? translate("error.validation.district")
                : ""
            }
            onPressIconRight={() => setIsShowDistrict(true)}
            iconRightName={districts[0] ? "ic_arrow_down" : undefined}
            iconRightSize={Metrics.icons.smallSmall}
            loading={isLoadingDistrict}
          />
          <TextInput
            editable={wards[0] ? false : !isSubmitting}
            label={translate("label.ward")}
            placeholder={translate("placeholder.ward")}
            onChangeText={setWardInput}
            containerStyle={styles.input}
            value={ward?.name}
            isRequired
            errorMessage={
              wards[0]
                ? isButtonClickSubmit && !ward
                  ? translate("error.validation.ward")
                  : ""
                : isButtonClickSubmit && !wardInput
                ? translate("error.validation.ward")
                : ""
            }
            onPressIconRight={() => setIsShowWard(true)}
            iconRightName={wards[0] ? "ic_arrow_down" : undefined}
            iconRightSize={Metrics.icons.smallSmall}
            loading={isLoadingWard}
          />
          <TextInput
            editable={!isSubmitting}
            label={translate("label.zip")}
            placeholder={translate("placeholder.zip")}
            containerStyle={styles.input}
            value={zip}
            onChangeText={setZip}
            isRequired
            errorMessage={
              isButtonClickSubmit && !zip
                ? translate("error.validation.zip")
                : ""
            }
          />
          <TextInput
            editable={!isSubmitting}
            label={translate("label.addressDetail")}
            placeholder={translate("placeholder.addressDetail")}
            containerStyle={styles.input}
            value={address}
            onChangeText={setAddress}
            isRequired
            errorMessage={
              isButtonClickSubmit && !address
                ? translate("error.validation.addressDetail")
                : ""
            }
          />
          {country?.code === "ID" && (
            <TextInput
              editable={!isSubmitting}
              label={translate("label.taxCode")}
              placeholder={translate("placeholder.taxCode")}
              containerStyle={styles.input}
              value={taxCode}
              onChangeText={setTaxCode}
              isRequired
              errorMessage={
                isButtonClickSubmit && !taxCode
                  ? translate("error.validation.taxCode")
                  : ""
              }
            />
          )}
          <Checkbox
            checked={isActive}
            title={translate("button.setDefault")}
            containerStyles={{ paddingTop: ScreenUtils.scale(22) }}
            onChange={() => setIsActive(!isActive)}
          />
          <Button
            isLoading={isSubmitting}
            buttonStyle={{ paddingTop: ScreenUtils.scale(62) }}
            onPress={submit}
            title={translate("button.confirm")}
          />
        </ScrollView>
        <LocationModal
          title={translate("label.chooseCountry")}
          onClose={() => setIsShowCountry(false)}
          isVisible={isShowCountry}
          data={countries}
          onPress={data => onChangeCountry(data)}
          selectedItem={country?.id}
        />
        <LocationModal
          title={translate("label.chooseProvince")}
          onClose={() => setIsShowProvince(false)}
          isVisible={isShowProvince}
          data={provinces}
          onPress={data => onChangeProvince(data)}
          selectedItem={province?.id}
        />
        <LocationModal
          title={translate("label.chooseDistrict")}
          onClose={() => setIsShowDistrict(false)}
          isVisible={isShowDistrict}
          data={districts}
          onPress={data => onChangeDistrict(data)}
          selectedItem={district?.id}
        />
        <LocationModal
          title={translate("label.chooseWard")}
          onClose={() => setIsShowWard(false)}
          isVisible={isShowWard}
          data={wards}
          onPress={data => setWard(data)}
          selectedItem={ward?.id}
        />
      </KeyboardAvoidingView>
    </View>
  );
};
