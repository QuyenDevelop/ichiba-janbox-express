import { Icon, translate } from "@shared";
import { Images, Metrics, Themes } from "@themes";
import React, { FunctionComponent } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import FastImage from "react-native-fast-image";
import styles from "../styles";
interface Props {
  setVisible: (visible: boolean) => void;
}
export const ContentCreditctExistCard: FunctionComponent<Props> = ({
  setVisible,
}) => {
  return (
    <View style={styles.contentCardExsit}>
      <View style={styles.itemCard}>
        <View style={styles.flexRow}>
          <FastImage
            source={Images.card}
            resizeMode={FastImage.resizeMode.contain}
            style={styles.iconCard}
          />
          <View>
            <Text style={styles.textNotePayBank}>**** **** **** 6789</Text>
            <Text style={styles.titleCard}>Visa card</Text>
          </View>
        </View>
        <Icon
          name="ic_arrow_down"
          size={Metrics.icons.smallSmall}
          color={Themes.colors.coolGray60}
          //   styles={styles.iconDownCard}
        />
      </View>
      <View style={styles.itemCard}>
        <View>
          <Text style={styles.textNotePayBank}>
            {translate("button.currency")}
          </Text>
          <Text style={styles.titleCard}>USD</Text>
        </View>
        <Icon
          name="ic_arrow_down"
          size={Metrics.icons.smallSmall}
          color={Themes.colors.coolGray60}
          //   styles={styles.iconDownCard}
        />
      </View>
      <View style={styles.flexRow}>
        <Text style={styles.textNeed}>{translate("label.anotherCard")}</Text>
        <TouchableOpacity onPress={() => setVisible(true)}>
          <Text style={styles.addCard}>{translate("label.addCard")}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
