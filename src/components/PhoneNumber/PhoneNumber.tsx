import { AccountApi } from "@api";
import { Alert, Utils } from "@helpers";
import { BaseBottomSheet, BottomSheet, Button, Icon, translate } from "@shared";
import { FontFamily, Metrics, Themes } from "@themes";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import {
  StyleProp,
  Text,
  TextInput as Input,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { styles } from "./styles";

const prefixPhones = require("../../themes/prefixPhone.json");

interface OwnProps extends TextInputProps {
  label?: string;
  placeholder?: string;
  errorMessage?: string;
  onChangeText?: (value: string) => void;
  isSearchBottom: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
  iconName?: string;
  iconColor?: string;
  iconNameSize?: number;
  iconRightName?: string;
  iconRightColor?: string;
  iconRightSize?: number;
  onPressIconRight?: () => void;
  setPhoneWrap: (value: string) => void;
  isRequired?: boolean;
  phone: string;
  isSendVerify?: boolean;
  setIsSendVerify: (value: boolean) => void;
  confirmCode?: (code: string) => void;
  setPhonePrefix?: (value: string) => void;
  isButtonVerify?: boolean;
  idCountrySelect?: string;
}

type Props = OwnProps;

export const PhoneNumber: FunctionComponent<Props> = props => {
  const inputRef = useRef<Input>(null);
  const [prefixPhone, setPrefixPhone] = useState("+84");
  const {
    errorMessage,
    value,
    onChangeText,
    label,
    containerStyle,
    secureTextEntry,
    isRequired,
    inputStyle,
    phone,
    isSearchBottom,
    setPhoneWrap,
    isSendVerify,
    setIsSendVerify,
    confirmCode,
    isButtonVerify,
    setPhonePrefix,
    idCountrySelect,
    ...rest
  } = props;

  const [isShowChangeLanguageModal, setIsShowChangeLanguageModal] =
    useState(false);
  const [, setIsButtonClickSubmit] = useState(false);
  const [isShowOTPInputModal, setIsShowOTPInputModal] = useState(false);
  const handleVerify = () => {
    setIsButtonClickSubmit(true);
    let phoneWrap = `${prefixPhone}${phone}`;
    if (Utils.isPhone(phoneWrap)) {
      AccountApi.verifyOtp(phoneWrap)?.then((response: any) => {
        if (response.status === 500 || response.status === 400) {
          setIsSendVerify(false);
          Alert.error("error.generic");
        } else if (response === false) {
          setIsShowOTPInputModal(true);
          setIsSendVerify(true);
          setPhoneWrap(phoneWrap);
          Alert.success("success.verifyPhone");
        }
      });
    } else {
      Alert.error("error.validation.phone");
    }
  };

  useEffect(() => {
    let phoneCode = prefixPhones.find((x: any) => x.code === idCountrySelect);
    phoneCode && setPhonePrefix && setPhonePrefix(phoneCode?.dial_code!);
    phoneCode && setPrefixPhone(phoneCode?.dial_code!);
  }, [idCountrySelect]);

  const resendOTP = () => {
    let phoneWrap = `${prefixPhone}${phone}`;
    if (Utils.isPhone(phoneWrap)) {
      AccountApi.verifyOtp(phoneWrap)?.then((response: any) => {
        if (response.status === 500 || response.status === 400) {
          setIsSendVerify(false);
          Alert.error("error.generic");
        } else if (response === false) {
          Alert.success("success.verifyPhone");
        }
      });
    } else {
      Alert.error("error.validation.phone");
    }
  };

  const arrOptions = (): any[] => {
    let arrays: any[] = [];
    prefixPhones.forEach((obj: any) => {
      arrays.push({
        title: `${obj.name}(${obj.dial_code})`,
        onPress: () => {
          setPrefixPhone(obj.dial_code);
          setPhonePrefix && setPhonePrefix(obj.dial_code);
          setIsShowChangeLanguageModal(false);
        },
      });
    });
    return arrays;
  };

  const getInputStyle = () => {
    if (errorMessage) {
      return styles.inputErrorContainer;
    }
    return styles.inputDefaultContainer;
  };

  useEffect(() => {
    inputRef?.current?.setNativeProps({
      style: {
        fontFamily: FontFamily.regular,
      },
    });
  }, []);

  const onCodeFilled = (code: string) => {
    confirmCode?.(code);
    setIsShowOTPInputModal(false);
  };

  const convertPhone = (phon: string) => {
    return `${phon.substr(0, 1)}xxxxxx${phone.substr(phon.length - 2, 2)}`;
  };
  return (
    <View style={containerStyle}>
      {label && (
        <Text style={styles.label}>
          {label}
          <Text style={styles.required}>{isRequired ? " *" : ""}</Text>
        </Text>
      )}
      <View style={[getInputStyle(), inputStyle]}>
        <TouchableOpacity
          onPress={() => setIsShowChangeLanguageModal(true)}
          style={styles.changeNumberPhoneContainer}
        >
          <View style={styles.numberContainer}>
            <Text style={styles.numberPhoneText}>{prefixPhone}</Text>
          </View>
          <Icon
            color={Themes.colors.coolGray60}
            name={"ic_arrow_down"}
            size={Metrics.icons.smallSmall}
            styles={styles.iconDown}
          />
        </TouchableOpacity>
        <Input
          ref={inputRef}
          allowFontScaling={false}
          {...rest}
          onChangeText={(val: string) => onChangeText && onChangeText(val)}
          value={value}
          keyboardType={"number-pad"}
          secureTextEntry={secureTextEntry}
          placeholderTextColor={Themes.colors.collGray40}
          style={[styles.input, rest.style]}
          multiline={false}
        />
        {isButtonVerify && (
          <Button
            onPress={() => handleVerify()}
            buttonChildStyle={styles.verifyBtn}
            title={translate("button.verify")}
            isDisable={isSendVerify ? isSendVerify : false}
          />
        )}
      </View>
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

      <BottomSheet
        titleSearch={translate("search.prefixPhone")}
        isSearch={isSearchBottom}
        arrOption={arrOptions()}
        isShowModal={isShowChangeLanguageModal}
        onCloseModal={() => setIsShowChangeLanguageModal(false)}
      />
      <BaseBottomSheet
        isShowModal={isShowOTPInputModal}
        onCloseModal={() => setIsShowOTPInputModal(false)}
      >
        <View style={styles.contentChildren}>
          <View style={styles.contentTitle}>
            <Text style={styles.label}>{translate("label.verify")}</Text>
            <TouchableOpacity onPress={() => setIsShowOTPInputModal(false)}>
              <Icon
                color={Themes.colors.coolGray60}
                name={"ic_close"}
                size={Metrics.icons.medium}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.normalText}>
            {translate("text.verifyPhone.notification")}
          </Text>
          <Text style={styles.phoneText}>
            {translate("text.verifyPhone.sentTo")} {prefixPhone}
            {convertPhone(phone)}
          </Text>
          <OTPInputView
            pinCount={6}
            style={styles.otpInput}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            onCodeFilled={onCodeFilled}
            placeholderCharacter="_"
          />
          <View style={styles.resentContent}>
            <Text style={styles.phoneText}>
              {translate("text.verifyPhone.notReceived")}{" "}
            </Text>
            <TouchableOpacity onPress={resendOTP}>
              <Text style={styles.resentOTP}>
                {translate("text.verifyPhone.resentOTP")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </BaseBottomSheet>
    </View>
  );
};
