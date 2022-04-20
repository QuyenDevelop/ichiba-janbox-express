import { ScreenUtils, Utils } from "@helpers";
import { translate } from "@shared";
import { FontFamily, Metrics, Themes } from "@themes";
import React, { FunctionComponent, useEffect, useRef } from "react";
import {
  ActivityIndicator,
  Alert,
  KeyboardTypeOptions,
  StyleProp,
  Text,
  TextInput as Input,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import CountryPicker, {
  Country,
  CountryCode,
} from "react-native-country-picker-modal";
import { Icon } from "../Icon";
import { styles } from "./styles";
interface OwnProps extends TextInputProps {
  label?: string;
  placeholder?: string;
  errorMessage?: string;
  countryCode?: CountryCode;
  onChangeText: (value: string) => void;
  onSelectCountry?: (value: Country) => void;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
  iconName?: string;
  iconColor?: string;
  iconNameSize?: number;
  iconRightName?: string;
  iconRightColor?: string;
  iconRightSize?: number;
  onPressIconRight?: () => void;
  isRequired?: boolean;
  loading?: boolean;
  phoneInput?: boolean;
  textRight?: string;
  keyboardType?: KeyboardTypeOptions;
  setValueDefault?: (value: string) => void;
  textRightStyle?: TextStyle;
}
type Props = OwnProps;
export const TextInputFormat: FunctionComponent<Props> = props => {
  const inputRef = useRef(null);
  const {
    errorMessage,
    value,
    onChangeText,
    label,
    containerStyle,
    iconName,
    iconNameSize,
    iconColor,
    iconRightName,
    iconRightColor,
    keyboardType,
    secureTextEntry,
    onPressIconRight,
    iconRightSize,
    isRequired,
    inputStyle,
    loading,
    phoneInput,
    countryCode,
    onSelectCountry,
    textRight,
    setValueDefault,
    textRightStyle,
    ...rest
  } = props;
  useEffect(() => {
    if (value) {
      let reFomatNumber = value.replace(/,/g, "");
      setValueDefault && setValueDefault(reFomatNumber);
      checkValiDate(reFomatNumber);
    }
  }, [value]);
  const getInputStyle = () => {
    if (errorMessage) {
      return styles.inputErrorContainer;
    }
    return styles.inputDefaultContainer;
  };
  const checkValiDate = (reFomatNumber: string) => {
    let numberArray = reFomatNumber?.split("");
    if (numberArray && numberArray.length > 16) {
      Alert.alert(
        translate("label.confirmation"),
        translate("label.limitNumber"),
        [{ text: "OK", onPress: () => onChangeText("") }],
      );
    }
  };
  useEffect(() => {
    // @ts-ignore
    inputRef?.current?.setNativeProps({
      style: {
        fontFamily: FontFamily.regular,
        height: ScreenUtils.scale(40),
      },
    });
  }, []);

  return (
    <View style={containerStyle}>
      {label && (
        <Text style={styles.label}>
          {label}
          <Text style={styles.required}>{isRequired ? " *" : ""}</Text>
        </Text>
      )}
      <View style={[getInputStyle(), inputStyle]}>
        {iconName && (
          <Icon
            name={iconName}
            size={iconNameSize ? iconNameSize : Metrics.icons.small}
            color={iconColor ? iconColor : Themes.colors.collGray40}
            styles={styles.leftIcon}
          />
        )}
        {phoneInput && (
          <CountryPicker
            countryCode={countryCode!}
            theme={{
              fontSize: 16,
              ...Themes.font.regular,
            }}
            withFilter
            withFlagButton
            withCountryNameButton={false}
            withCallingCodeButton
            withEmoji
            onSelect={onSelectCountry}
            translation="common"
            containerButtonStyle={{
              paddingTop: ScreenUtils.scale(9),
            }}
          />
        )}
        <Input
          ref={inputRef}
          allowFontScaling={false}
          editable={props.editable}
          {...rest}
          onChangeText={(value: string) =>
            onChangeText(Utils.onChangeFormatText(value))
          }
          value={value}
          keyboardType={keyboardType || "default"}
          secureTextEntry={secureTextEntry}
          placeholderTextColor={Themes.colors.collGray40}
          style={[styles.input, rest.style]}
          multiline={false}
        />
        {iconRightName &&
          (loading ? (
            <ActivityIndicator size="small" color={Themes.colors.collGray40} />
          ) : (
            <TouchableOpacity
              onPress={onPressIconRight ? () => onPressIconRight() : () => {}}
              style={styles.rightIcon}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Icon
                name={iconRightName}
                size={iconRightSize ? iconRightSize : Metrics.icons.small}
                color={iconRightColor ? iconRightColor : Themes.colors.coolGray}
              />
            </TouchableOpacity>
          ))}

        {textRight &&
          (loading ? (
            <ActivityIndicator size="small" color={Themes.colors.collGray40} />
          ) : (
            <TouchableOpacity
              onPress={onPressIconRight ? () => onPressIconRight() : () => {}}
              style={styles.rightIcon}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              {textRight ? (
                <Text
                  style={{ color: Themes.colors.coolGray, ...textRightStyle }}
                >
                  {textRight}
                </Text>
              ) : null}
            </TouchableOpacity>
          ))}
      </View>
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
    </View>
  );
};
