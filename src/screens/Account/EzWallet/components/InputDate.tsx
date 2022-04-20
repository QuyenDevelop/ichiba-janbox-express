import { Utils } from "@helpers";
import { useBoolean } from "@hooks";
import { Icon, translate } from "@shared";
import { Metrics, Themes } from "@themes";
import React, { FunctionComponent } from "react";
import { Text, TouchableOpacity, View, ViewStyle } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import styles from "./styles";
interface Props {
  title: string;
  value: Date | undefined;
  containerStyle?: ViewStyle;
  updateDate: (value?: Date) => void;
}
export const InputDate: FunctionComponent<Props> = props => {
  const { title, containerStyle, value, updateDate } = props;
  const [isShowDatePicker, showDatePicker, hideDatePicker] = useBoolean();
  return (
    <View style={[styles.inputDate, containerStyle]}>
      <Text style={styles.inputDateTitle}>{title}</Text>
      <TouchableOpacity style={styles.inputDateButton} onPress={showDatePicker}>
        <Text style={styles.inputDateText}>
          {value ? Utils.date.formatDate(value) : translate("labelPickDate")}
        </Text>
        <Icon
          name="ic_arrow_down"
          size={Metrics.icons.smallSmall}
          color={Themes.colors.coolGray100}
        />
      </TouchableOpacity>
      <DateTimePicker
        date={value}
        isVisible={isShowDatePicker}
        onConfirm={date => {
          hideDatePicker();
          updateDate(date);
        }}
        onCancel={hideDatePicker}
        headerTextIOS={translate("labelPickDate")}
        confirmTextIOS={translate("labelConfirm")}
        cancelTextIOS={translate("labelCancel")}
        maximumDate={new Date()}
      />
    </View>
  );
};
