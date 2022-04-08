/* eslint-disable react-native/no-inline-styles */
import { CustomerApi, LocationApi } from "@api";
import { Header, LocationModal } from "@components";
import { Alert, ScreenUtils } from "@helpers";
import { useStatusBar } from "@hooks";
import { Address, LocationResponse } from "@models";
import { Button, Checkbox, TextInput, translate } from "@shared";
import { Metrics } from "@themes";
import React, { FunctionComponent, useEffect, useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import {
  Country,
  CountryCode,
  getCallingCode,
} from "react-native-country-picker-modal";
import * as RNLocalize from "react-native-localize";
import Modal from "react-native-modal";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "./styles";

interface OwnProps {
  isShowModal: boolean;
  onCloseModal: Function;
  onModalHide?: () => void;
  setEdited?: (isEdited: boolean) => void;
  id: number;
}

type Props = OwnProps;

const EditAddressModal: FunctionComponent<Props> = props => {
  const { onCloseModal, onModalHide, isShowModal, id, setEdited } = props;
  const insets = useSafeAreaInsets();
  useStatusBar("dark-content");
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
  const [countryName, setCountryName] = useState("");
  const [province, setProvince] = useState(
    undefined as LocationResponse | undefined,
  );
  const [provinceName, setProvinceName] = useState("");
  const [district, setDistrict] = useState(
    undefined as LocationResponse | undefined,
  );
  const [districtName, setDistrictName] = useState("");
  const [ward, setWard] = useState(undefined as LocationResponse | undefined);
  const [wardName, setWardName] = useState("");
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
  const [customerAddress, setCustomerAddress] = useState<Address>();
  const [taxCode, setTaxCode] = useState("");

  useEffect(() => {
    Promise.all([
      LocationApi?.getAllCountry()!,
      CustomerApi?.getAddress(id),
    ]).then(([res, customerAddressResponse]) => {
      setCountries(res?.data!);
      setCountry({
        id: "",
        code: customerAddressResponse?.data.countryCode || "",
        name: customerAddressResponse?.data.country || "",
      });
      setTaxCode(customerAddressResponse?.data.taxCode || "");
      setCustomerAddress(customerAddressResponse?.data);
      setName(customerAddressResponse?.data.name!);
      setPhone(customerAddressResponse?.data.phone!.replace(/^\+[0-9]/, "")!);
      setZip(customerAddressResponse?.data.postalCode!);
      setAddress(customerAddressResponse?.data.address!);
      setIsActive(customerAddressResponse?.data.active!);
      setCountryName(customerAddressResponse?.data.country!);
      setProvinceName(customerAddressResponse?.data.province!);
      setDistrictName(customerAddressResponse?.data.district!);
      setWardName(customerAddressResponse?.data.ward!);
      let getCountryCode = customerAddressResponse?.data.countryCode
        ? customerAddressResponse?.data.countryCode
        : RNLocalize.getCountry();
      getCallingCode(getCountryCode as CountryCode)?.then(callingCode => {
        setCountryCode({
          cca2: getCountryCode as CountryCode,
          callingCode: [callingCode],
        } as Country);
      });
    });
  }, [id, isShowModal]);

  const onChangeCountry = (data: LocationResponse) => {
    setProvince(undefined);
    setProvinceName("");
    setDistrict(undefined);
    setDistrictName("");
    setWard(undefined);
    setWardName("");
    setCountryName(data.name);
    setCountry(data);
    setTaxCode("");
    setIsLoadingProvince(true);
    getCallingCode(RNLocalize.getCountry() as CountryCode).then(callingCode => {
      setCountryCode({
        cca2: data.code as CountryCode,
        callingCode: [callingCode],
      } as Country);
    });
    LocationApi?.getStateProvinceByCountry(data?.id)?.then(res => {
      setIsLoadingProvince(false);
      setProvinces(res?.data);
    });
  };

  const onChangeProvince = (data: LocationResponse) => {
    setDistrict(undefined);
    setDistrictName("");
    setWard(undefined);
    setWardName("");
    setProvince(data);
    setProvinceName(data.name);
    setIsLoadingDistrict(true);
    LocationApi?.getDistrictByProvince(data?.id, country?.id)?.then(res => {
      setIsLoadingDistrict(false);
      setDistricts(res?.data);
    });
  };

  const onChangeDistrict = (newDistrict: LocationResponse) => {
    setWard(undefined);
    setWardName("");
    setDistrict(newDistrict);
    setDistrictName(newDistrict.name);
    setIsLoadingWard(true);
    LocationApi?.getWardByDistrict(
      newDistrict?.id,
      province?.id,
      country?.id,
    )?.then(res => {
      setIsLoadingWard(false);
      setWards(res?.data);
    });
  };
  const submit = () => {
    setIsButtonClickSubmit(true);

    if (country?.code === "ID" && !taxCode) {
      return;
    }

    if (
      name &&
      phone &&
      countryName &&
      provinceName &&
      districtName &&
      wardName &&
      zip &&
      address
    ) {
      setIsSubmitting(true);
      CustomerApi.updateAddress({
        customerId: customerAddress?.customerId!,
        name,
        id,
        phone: `+${countryCode?.callingCode?.[0]}${phone}`,
        country: countryName,
        province: provinceName,
        district: districtName,
        countryCode: country ? country?.code! : customerAddress?.countryCode!,
        ward: wardName,
        address,
        active: isActive,
        postalCode: zip,
        taxCode: taxCode,
      })
        ?.then(() => {
          Alert.success("success.updateAddress");
          setEdited && setEdited(true);
          onCloseModal();
        })
        .finally(() => setIsSubmitting(false));
    }
  };

  return (
    <Modal
      useNativeDriver
      useNativeDriverForBackdrop
      statusBarTranslucent
      propagateSwipe={true}
      hardwareAccelerated={false}
      onBackdropPress={() => onCloseModal()}
      onBackButtonPress={() => onCloseModal()}
      onSwipeComplete={() => onCloseModal()}
      onModalHide={onModalHide ? () => onModalHide() : () => {}}
      swipeDirection="down"
      style={styles.modalContainer}
      isVisible={isShowModal}
      hideModalContentWhileAnimating={true}
      backdropTransitionOutTiming={0}
    >
      <View style={{ ...styles.container, paddingTop: insets.top }}>
        <Header
          title={translate("text.footer.address")}
          iconLeftName={["ic_close"]}
          iconLeftOnPress={[
            () => {
              onCloseModal();
            },
          ]}
          isCenterTitle
        />
        <KeyboardAvoidingView
          enabled={Platform.OS === "ios"}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <ScrollView
            style={{ paddingHorizontal: ScreenUtils.scale(20) }}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: ScreenUtils.scale(100),
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
              value={countryName}
              isRequired
              errorMessage={
                isButtonClickSubmit && !countryName
                  ? translate("error.validation.countries")
                  : ""
              }
              iconRightName="ic_arrow_down"
              iconRightSize={Metrics.icons.smallSmall}
              onPressIconRight={() => setIsShowCountry(true)}
            />
            <TextInput
              keyboardType={"number-pad"}
              editable={!isSubmitting}
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
              onChangeText={setProvinceName}
              value={provinceName}
              isRequired
              errorMessage={
                isButtonClickSubmit && !provinceName
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
              containerStyle={styles.input}
              onChangeText={setDistrictName}
              value={districtName}
              isRequired
              errorMessage={
                isButtonClickSubmit && !districtName
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
              containerStyle={styles.input}
              onChangeText={setWardName}
              value={wardName}
              isRequired
              errorMessage={
                isButtonClickSubmit && !wardName
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
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                isLoading={isSubmitting}
                buttonStyle={{
                  paddingTop: ScreenUtils.scale(10),
                  marginRight: ScreenUtils.scale(10),
                }}
                onPress={submit}
                title={translate("button.updateAddress")}
              />
              <Button
                buttonStyle={{ paddingTop: ScreenUtils.scale(10) }}
                onPress={() => onCloseModal()}
                title={translate("button.cancel")}
              />
            </View>
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
            onPress={data => {
              setWard(data);
              setWardName(data.name);
            }}
            selectedItem={ward?.id}
          />
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
};

export default EditAddressModal;
