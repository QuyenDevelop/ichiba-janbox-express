import { Images } from "@themes";
import React, { FunctionComponent } from "react";
import { View } from "react-native";
import FastImage from "react-native-fast-image";
import styles from "../styles";
interface Props {}

export const ListCard: FunctionComponent<Props> = props => {
  const {} = props;
  return (
    <View style={styles.flexRow}>
      <FastImage
        source={Images.VisaCardMethod}
        resizeMode={FastImage.resizeMode.contain}
        style={styles.iconLogoVisa}
      />
      <FastImage
        source={Images.Amex}
        resizeMode={FastImage.resizeMode.contain}
        style={styles.iconLogoAmex}
      />
      <FastImage
        source={Images.MasterCardMethod}
        resizeMode={FastImage.resizeMode.contain}
        style={styles.iconLogoMasterCard}
      />
      <FastImage
        source={Images.maestro}
        resizeMode={FastImage.resizeMode.contain}
        style={styles.iconLogoMasterCard}
      />
    </View>
  );
};
