import { Icon } from "@shared";
import { Metrics, Themes } from "@themes";
import React, { FunctionComponent } from "react";
import { Text, TextInput, View } from "react-native";
import styles from "../styles";

interface Props {
  title: string;
  iconRight?: string;
  textInput: string | undefined;
  onChangeText: (text: string) => void;
  placeholder: string;
}
export const TextInputCredit: FunctionComponent<Props> = ({
  title,
  iconRight,
  onChangeText,
  textInput,
  placeholder,
}) => {
  return (
    <View style={styles.contentInputCredit}>
      <Text style={styles.titleItemInfo}>{title}</Text>
      <View style={styles.inputCreditLayer}>
        <TextInput
          onChangeText={(text: string) => {
            onChangeText(text);
          }}
          placeholder={placeholder}
          style={styles.textInputCredit}
          value={textInput}
        />
        {iconRight ? (
          <Icon
            name={iconRight}
            size={Metrics.icons.smallSmall}
            color={Themes.colors.coolGray100}
            styles={styles.iconRight}
          />
        ) : null}
      </View>
    </View>
  );
};
