import { Icons, Metrics, Themes } from "@themes";
import React, { FunctionComponent } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../styles";

interface Props {
  title: string;
  iconRight?: string;
  onPressRight?: () => void;
  textRight?: string;
  textInput: string | undefined;
}

export const InputBankInfo: FunctionComponent<Props> = ({
  title,
  iconRight,
  textInput,
  textRight,
  onPressRight,
}) => {
  return (
    <View style={styles.contentInputInfo}>
      <Text style={styles.titleItemInfo}>{title}</Text>
      <View style={styles.inputLayer}>
        <Text numberOfLines={1} style={styles.inpuInfo}>
          {textInput}
        </Text>
        {iconRight ? (
          <TouchableOpacity
            onPress={() => (onPressRight ? onPressRight() : {})}
          >
            <Icons.FontAwesome
              name={iconRight}
              size={Metrics.icons.smallSmall}
              color={Themes.colors.coolGray100}
            />
          </TouchableOpacity>
        ) : null}
        {textRight ? (
          <Text numberOfLines={1} style={styles.inpuInfo}>
            {textRight}
          </Text>
        ) : null}
      </View>
    </View>
  );
};
