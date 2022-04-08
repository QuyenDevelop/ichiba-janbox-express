import { Themes } from "@themes";
import * as React from "react";
import { FunctionComponent } from "react";
import { TouchableOpacity, View, ViewStyle } from "react-native";
import styles from "./style";

interface OwnProps {
  checked?: boolean;
  onChange?: () => void;
  style?: ViewStyle;
  disable?: boolean;
}

type Props = OwnProps;

export const RadioButton: FunctionComponent<Props> = props => {
  const { onChange, checked, style, disable } = props;

  return (
    <TouchableOpacity
      disabled={disable}
      onPress={() => (onChange ? onChange() : {})}
      style={[
        styles.container,
        {
          backgroundColor: Themes.colors.white,
        },
        checked ? styles.check : styles.uncheck,
        style,
      ]}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
    >
      {checked && <View style={styles.circleCheckedContainer} />}
    </TouchableOpacity>
  );
};
