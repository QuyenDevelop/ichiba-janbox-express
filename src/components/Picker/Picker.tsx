import { ScreenUtils } from "@helpers";
import { BottomSheet, Icon, translate } from "@shared";
import { Metrics, Themes } from "@themes";
import React, { FunctionComponent, useEffect, useState } from "react";
import {
  StyleProp,
  Text,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { styles } from "./styles";

interface OwnProps extends TextInputProps {
  label?: string;
  placeholder?: string;
  errorMessage?: string;
  onChangeText?: (value: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
  iconName?: string;
  iconColor?: string;
  iconNameSize?: number;
  iconRightName: string;
  iconRightColor?: string;
  iconRightSize?: number;
  onPressIconRight?: () => void;
  setValue: (value: string) => void;
  setObject?: (value: object) => void;
  isRequired?: boolean;
  setSelected?: (value: boolean) => void;
  dataApi?: any;
  setDataSelected?: any;
  isTranslated: boolean;
}

type Props = OwnProps;

export const Picker: FunctionComponent<Props> = props => {
  const [isShowChangeLanguageModal, setIsShowChangeLanguageModal] =
    useState(false);
  const {
    errorMessage,
    value,
    label,
    containerStyle,
    iconRightName,
    iconRightColor,
    iconRightSize,
    isRequired,
    inputStyle,
    setValue,
    setSelected,
    dataApi,
    setDataSelected,
    isTranslated,
    setObject,
  } = props;
  const [data, setData] = useState(value ? value : "");

  const getInputStyle = () => {
    if (errorMessage) {
      return styles.inputErrorContainer;
    }
    return styles.inputDefaultContainer;
  };

  const arrOptions = (): any[] => {
    let arrays: any[] = [];
    if (dataApi) {
      dataApi.forEach((obj: any) => {
        arrays.push({
          title: `${obj.name}`,
          onPress: () => {
            setDataSelected(obj);
            setData(isTranslated ? obj.name : translate(obj.name));
            setValue(isTranslated ? obj.name : translate(obj.name));
            setObject && setObject(obj);
            if (setSelected) {
              setSelected(true);
            }
            setIsShowChangeLanguageModal(false);
          },
        });
      });
    }
    return arrays;
  };

  useEffect(() => {
    arrOptions();
  }, [dataApi]);

  useEffect(() => {
    setData(value ? value : "");
  }, [value]);

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
          style={styles.rightIcon}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <View style={styles.pickerContainer}>
            <Text style={styles.dataContent}>{data}</Text>
            <Icon
              styles={{ marginRight: ScreenUtils.scale(10) }}
              name={iconRightName}
              size={iconRightSize ? iconRightSize : Metrics.icons.small}
              color={iconRightColor ? iconRightColor : Themes.colors.coolGray}
            />
          </View>
        </TouchableOpacity>
      </View>
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

      <BottomSheet
        isTranslated={isTranslated}
        titleSearch={translate("search.search")}
        isSearch={true}
        arrOption={arrOptions()}
        isShowModal={isShowChangeLanguageModal}
        onCloseModal={() => setIsShowChangeLanguageModal(false)}
      />
    </View>
  );
};
