import { Utils } from "@helpers";
import { Icon, translate } from "@shared";
import { Metrics, Themes } from "@themes";
import React, { FunctionComponent, useState } from "react";
import {
  StyleProp,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
  ViewStyle,
} from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import styles from "./styles";

interface OwnProps {
  label?: string;
  placeholder?: string;
  errorMessage?: string;
  onChangeText?: (value: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
  iconName?: string;
  iconColor?: string;
  iconNameSize?: number;
  iconRightName?: string;
  iconRightColor?: string;
  iconRightSize?: number;
  onPressIconRight?: () => void;
  isRequired?: boolean;
  value: Date;
  onChange: (event: any, selectedDate: any) => void;
  setBirthDate: (value: string) => void;
}

type Props = OwnProps;

export const DateTime: FunctionComponent<Props> = props => {
  const {
    errorMessage,
    label,
    containerStyle,
    isRequired,
    inputStyle,
    value,
    setBirthDate,
  } = props;

  const colorScheme = useColorScheme();
  const isDarkModeEnabled = colorScheme === "dark";
  const [isVisible, setVisible] = useState(false);
  const [date, setDate] = useState(value ? value.toDateString() : "");
  const getInputStyle = () => {
    if (errorMessage) {
      return styles.inputErrorContainer;
    }
    return styles.inputDefaultContainer;
  };

  return (
    <View style={containerStyle}>
      {label && (
        <Text style={styles.label}>
          {label}
          <Text style={styles.required}>{isRequired ? " *" : ""}</Text>
        </Text>
      )}
      <TouchableOpacity
        style={[getInputStyle(), inputStyle]}
        activeOpacity={0}
        onPress={() => setVisible(true)}
      >
        <TextInput
          editable={false}
          style={styles.input}
          value={Utils.date.formatDate(date)}
        />
        <Icon
          name={"ic_clock_fill"}
          size={Metrics.icons.smallSmall}
          color={Themes.colors.coolGray60}
        />
      </TouchableOpacity>
      <DateTimePicker
        isDarkModeEnabled={isDarkModeEnabled}
        isVisible={isVisible}
        onConfirm={(newDate: any) => {
          setVisible(false); // <- first thing
          setDate(newDate.toDateString());
          setBirthDate(newDate.toDateString());
        }}
        onCancel={() => setVisible(false)}
        headerTextIOS={translate("label.pickDate")}
        confirmTextIOS={translate("label.confirm")}
        cancelTextIOS={translate("label.cancel")}
      />
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
    </View>
  );
};
