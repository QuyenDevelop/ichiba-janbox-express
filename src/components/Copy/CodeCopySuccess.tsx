import { Icon, translate } from "@shared";
import { Metrics, Themes } from "@themes";
import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";
import styles from "./styles";

interface OwnProps {
  isShowCopy: boolean;
}

type Props = OwnProps;

export const CodeCopySuccess: FunctionComponent<Props> = ({ isShowCopy }) => {
  return (
    <>
      {isShowCopy && (
        <View style={styles.copyContainer}>
          <Icon
            name="ic_check-circle-outline"
            color={Themes.colors.white}
            size={Metrics.icons.smallSmall}
          />
          <Text style={styles.copyText}>{translate("success.copy")}</Text>
        </View>
      )}
    </>
  );
};
