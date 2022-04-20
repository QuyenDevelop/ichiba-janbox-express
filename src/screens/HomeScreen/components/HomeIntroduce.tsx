import { SCREENS } from "@configs";
import { useNavigation } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { Icon, translate } from "@shared";
import { Metrics, Themes } from "@themes";
import React, { FunctionComponent } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

interface OwnProps {}

type Props = OwnProps;

export const HomeIntroduce: FunctionComponent<Props> = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  return (
    <TouchableOpacity
      style={styles.introduceContainer}
      onPress={() => {
        navigation.navigate(SCREENS.WHY_CHOOSE_US);
      }}
    >
      <View style={styles.introduceChildContainer}>
        <View style={styles.introduceContent}>
          <Text style={styles.introduceTitle}>
            {translate("labelWhyChooseUs")}
          </Text>
          <Text style={styles.introduceText} numberOfLines={1}>
            {`${translate("textConvenientPurchase")},${translate(
              "textEasyPayment",
            )}, ...`}
          </Text>
        </View>
        <Icon
          name={"ic_arrow_right_circle"}
          size={Metrics.icons.smallSmall}
          color={Themes.colors.collGray40}
        />
      </View>
    </TouchableOpacity>
  );
};
