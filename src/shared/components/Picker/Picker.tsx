import { Flatlist, RadioButton, translate } from "@shared";
import React, { FunctionComponent, useEffect, useState } from "react";
import { StyleProp, Text, TextInputProps, View, ViewStyle } from "react-native";
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
  isRequired?: boolean;
  setSelected?: (value: boolean) => void;
  dataApi?: any;
  setDataSelected?: any;
  isTranslated: boolean;
}

type Props = OwnProps;

export const Picker: FunctionComponent<Props> = props => {
  const [, setIsShowChangeLanguageModal] = useState(false);
  const {
    errorMessage,
    value,
    label,
    containerStyle,
    isRequired,
    setValue,
    setSelected,
    dataApi,
    setDataSelected,
    isTranslated,
  } = props;
  const [data, setData] = useState(value ? value : "");
  // const getInputStyle = () => {
  //   if (errorMessage) {
  //     return styles.inputErrorContainer;
  //   }
  //   return styles.inputDefaultContainer;
  // };

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

  const renderItem = ({ item }: { item: { name: string; value: string } }) => {
    return (
      <View style={styles.pickButton}>
        <RadioButton
          onChange={() => {
            setDataSelected(item);
            setData(item.name);
            setValue(item.name);
          }}
          checked={data === item.name ? true : false}
          style={styles.radioButton}
        />
        <Text style={styles.titleRadioButton}>{translate(item.name)}</Text>
      </View>
    );
  };

  return (
    <View style={containerStyle}>
      {label && (
        <Text style={styles.label}>
          {label}
          <Text style={styles.required}>{isRequired ? " *" : ""}</Text>
        </Text>
      )}
      <Flatlist
        data={dataApi || []}
        renderItem={renderItem}
        horizontal
        contentContainerStyle={styles.listPicker}
      />
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
    </View>
  );
};
