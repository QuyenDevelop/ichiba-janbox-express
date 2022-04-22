/* eslint-disable react-native/no-inline-styles */
import { accountApi } from "@api";
import { Header, PhoneNumber, Separator } from "@components";
import { Alert, ScreenUtils, Utils } from "@helpers";
import { useAppDispatch, useAppSelector, useStatusBar } from "@hooks";
import { Account, LocationResponse, UpdateProfileRequest } from "@models";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { getUserAction } from "@redux";
import { Button, TextInput, translate } from "@shared";
import { Images, Themes } from "@themes";
import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FastImage from "react-native-fast-image";
import { ListCountry } from "./ListCountry";
import styles from "./styles";
const prefixPhones = require("../../../themes/prefixPhone.json");

interface OwnProps {}

type Props = OwnProps;

// let genders = [
//   {
//     name: "label.sex.male",
//     value: "0",
//   },
//   {
//     name: "label.sex.female",
//     value: "1",
//   },
//   {
//     name: "label.sex.other",
//     value: "2",
//   },
// ];

const getPhone = (profile?: Account | null) => {
  let prefixPhone = prefixPhones.find((x: any) =>
    profile?.phone_number?.startsWith(x.dial_code),
  );
  return prefixPhone && profile?.phone_number
    ? {
        phoneNumber: profile.phone_number
          .replace(prefixPhone.dial_code, "")
          .trim(),
        prefixPhone: prefixPhone.dial_code,
        code: prefixPhone.code,
      }
    : {
        phoneNumber: "",
        prefixPhone: "+84",
        code: "VN",
      };
};

export const AccountInformationScreen: FunctionComponent<Props> = () => {
  const profile = useAppSelector(state => state.user.profile);
  useStatusBar("dark-content");
  const dispatch = useAppDispatch();
  const navigation = useNavigation<StackNavigationProp<any>>();

  const [isLoading, setIsLoading] = useState(false);
  const [isButtonClickSubmit, setIsButtonClickSubmit] = useState(false);

  const [phonePrefix, setPhonePrefix] = useState<string>(
    getPhone(profile).prefixPhone,
  );
  const [fullName, setFullName] = useState(profile?.name);
  // const [birthDate, setBirthDate] = useState(
  //   profile?.birthdate ? profile?.birthdate : new Date().toString(),
  // );
  // const [date, setDate] = useState(
  //   profile?.birthdate ? new Date(profile.birthdate as string) : new Date(),
  // );
  // const [dataSelectedGender, setDataSelectedGender] = useState(
  //   genders.find(x => x.value === profile?.gender)
  //     ? genders.find(x => x.value === profile?.gender)
  //     : {
  //         name: "label.sex.male",
  //         value: "0",
  //       },
  // );
  // const [gender, setGender] = useState(
  //   genders.find(x => x.value === profile?.gender)
  //     ? genders.find(x => x.value === profile?.gender)?.name
  //     : "",
  // );
  // const [genderData] = useState(genders);

  const [phone, setPhone] = useState<string>(getPhone(profile).phoneNumber);
  const [isSendVerify, setIsSendVerify] = useState<boolean>(false);
  const [, setConfirmCode] = useState("");
  const [countryData] = useState<Array<LocationResponse>>();
  const [country, setCountry] = useState<string>("");
  const [idCountrySelect, setIdCountrySelect] = useState(
    getPhone(profile).code,
  );

  // const onChange = (event: any, selectedDate: any) => {
  //   const currentDate = selectedDate || date;
  //   setDate(currentDate);
  // };

  const getCountryApi = useCallback(() => {
    // locationApi
    //   .getAllCountry()
    //   ?.then(
    //     (response: {
    //       status: any;
    //       data:
    //         | any[]
    //         | ((
    //             prevState: LocationResponse[] | undefined,
    //           ) => LocationResponse[] | undefined)
    //         | undefined;
    //     }) => {
    //       if (response?.status && response?.data.length > 0) {
    //         const countryUser = response?.data.find(
    //           (item: { code: string | undefined }) =>
    //             item.code === profile?.locale,
    //         );
    //         setCountry(countryUser?.name || "");
    //         setCountryData(response.data);
    //       }
    //     },
    //   );
  }, []);

  useEffect(() => {
    getCountryApi();
  }, [getCountryApi]);

  const submit = () => {
    setIsButtonClickSubmit(true);
    const fullPhoneNumber = `${phonePrefix.trim()}${phone?.trim()}`;
    if (Utils.isEmpty(fullName!) && Utils.isPhone(fullPhoneNumber)) {
      setIsLoading(true);
      const updateProfile: UpdateProfileRequest = {
        fullName: fullName ? fullName : "",
        birthDate: "",
        gender: "",
        phoneNumber: fullPhoneNumber,
        countryCode: idCountrySelect ? idCountrySelect : "",
      };
      // const updateCustomer: UpdateCustomerRequest = {
      //   fullName: fullName ? fullName : "",
      //   birthDate: "",
      //   gender: 2,
      //   phone: fullPhoneNumber,
      //   countryCode: idCountrySelect ? idCountrySelect : "",
      // };
      accountApi
        .updateProfile(updateProfile)
        ?.then((response: any) => {
          if (response) {
            Alert.success("success.updateAccount");
            setIsLoading(false);
            dispatch(getUserAction());
            // customerApi
            //   .updateCustomer(updateCustomer)
            //   ?.catch((err: any) => console.log(err))
            //   .finally(() => setIsLoading(false));
            setIsLoading(false);
            setIsButtonClickSubmit(false);
            navigation.goBack();
          } else {
            Alert.error(response.detail, true);
          }
        })
        .catch((err: any) => {
          Alert.error(err.detail, true);
          console.log(err);
          setIsLoading(false);
        });
    }
  };

  const updateCountry = (newCountry: string) => {
    setCountry(newCountry);
    if (newCountry && countryData) {
      let countrySelect = countryData.filter(item => item.name === newCountry);
      setIdCountrySelect(countrySelect[0]?.code);
    }
  };

  return (
    <View style={[styles.container]}>
      <Header
        title={translate("label.information")}
        iconLeftName={["ic_arrow_left"]}
        iconLeftOnPress={[() => navigation.goBack()]}
        isCenterTitle
      />
      <Separator height={ScreenUtils.scale(4)} />
      <KeyboardAvoidingView
        enabled={Platform.OS === "ios"}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          style={styles.childContainer}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.topContentContainer}>
            <FastImage
              source={Images.shield}
              resizeMode={FastImage.resizeMode.contain}
              style={[styles.topContentImage]}
            />
            <Text style={styles.topContent}>
              {translate("text.confirmAccount")}
            </Text>
            <TouchableOpacity
              onPress={() => {}}
              style={[
                styles.buttonConfirm,
                {
                  backgroundColor: profile?.phone_number_verified
                    ? Themes.colors.success60
                    : Themes.colors.info10,
                },
              ]}
            >
              <Text
                style={[
                  styles.unconfirmed,
                  {
                    color: profile?.phone_number_verified
                      ? Themes.colors.success70
                      : Themes.colors.info60,
                  },
                ]}
              >
                {profile?.phone_number_verified
                  ? translate("button.confirmed")
                  : translate("button.unconfirmed")}
              </Text>
            </TouchableOpacity>
          </View>
          <Separator height={ScreenUtils.scale(4)} />
          <View>
            <TextInput
              editable={false}
              label={translate("label.email")}
              placeholder={translate("label.email")}
              returnKeyType="next"
              containerStyle={styles.input}
              inputStyle={styles.disabledInput}
              value={profile?.email}
            />

            <TextInput
              editable={!isLoading}
              label={translate("label.fullName")}
              placeholder={translate("label.fullName")}
              textContentType="name"
              keyboardType="default"
              autoCapitalize={"none"}
              returnKeyType="next"
              containerStyle={styles.input}
              value={fullName}
              onChangeText={(text: string) => setFullName(text)}
              isRequired
              errorMessage={
                isButtonClickSubmit && fullName && !Utils.isEmpty(fullName)
                  ? translate("error.validation.required")
                  : ""
              }
            />
            <ListCountry
              countryApi={countryData}
              setCountry={updateCountry}
              country={country}
              phone={phone!}
            />
            <PhoneNumber
              setPhonePrefix={(value: string) => setPhonePrefix(value)}
              setIsSendVerify={(value: boolean) => setIsSendVerify(value)}
              isSearchBottom={true}
              editable={!isLoading}
              // isButtonVerify={profile?.phone_number_verified ? false : true}
              label={translate("label.verifyYourPhone")}
              placeholder={translate("placeholder.verifyYourPhone")}
              returnKeyType="next"
              containerStyle={styles.input}
              value={phone!}
              onChangeText={(text: string) => {
                setPhone(text);
                setIsSendVerify(false);
              }}
              keyboardType={"numeric"}
              isRequired
              isSendVerify={isSendVerify}
              phone={phone!}
              setPhoneWrap={() => {}}
              confirmCode={setConfirmCode}
              errorMessage={
                isButtonClickSubmit &&
                !Utils.isPhone(`${phonePrefix.trim()}${phone?.trim()}`)
                  ? translate("error.validation.phone")
                  : ""
              }
              idCountrySelect={idCountrySelect}
            />
            {/* <DateTime
            setBirthDate={(value: string) => setBirthDate(value)}
            label={translate("label.birthDate")}
            placeholder={translate("label.birthDate")}
            containerStyle={styles.input}
            isRequired={false}
            value={date}
            onChange={(event: any, selectedDate: any) =>
              onChange(event, selectedDate)
            }
            errorMessage={
              isButtonClickSubmit && birthDate && !Utils.isEmpty(birthDate)
                ? translate("error.validation.required")
                : ""
            }
          />

          {genders && genders.length > 0 ? (
            <Picker
              isTranslated={false}
              setDataSelected={(value: any) => {
                setDataSelectedGender(value);
              }}
              dataApi={genderData}
              editable={!isLoading}
              label={translate("label.gender")}
              returnKeyType="next"
              containerStyle={styles.input}
              value={gender}
              isRequired={false}
              iconRightName={"ic_arrow_down"}
              setValue={(value: any) => {
                setGender(value);
              }}
              iconRightSize={Metrics.icons.smallSmall}
              errorMessage={
                isButtonClickSubmit &&
                dataSelectedGender &&
                !Utils.isEmpty(dataSelectedGender?.value)
                  ? translate("error.validation.required")
                  : ""
              }
            />
          ) : null} */}
            {/* <Text style={styles.noteInfo}>{translate("text.noteBirthday")}</Text> */}
            <Button
              onPress={() => submit()}
              title={translate("button.confirm")}
              isLoading={isLoading}
              buttonChildStyle={{ width: "100%" }}
              buttonStyle={styles.button}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};
