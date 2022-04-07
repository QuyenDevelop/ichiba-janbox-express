import { Icon, translate } from "@shared";
import { Metrics, Themes } from "@themes";
import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";
import styles from "../styles";
interface Props {}

export const ContentOptional: FunctionComponent<Props> = () => {
  const dataOptions = [
    {
      title: translate("label.packageConsolidation"),
      content: translate("label.whenYouBuy"),
      image: "ic_package",
    },
    {
      title: translate("label.checkingService"),
      content: translate("label.checkingSevice"),
      image: "ic_box-check",
    },
    {
      title: translate("label.photoService"),
      content: translate("label.ezSupportYou"),
      image: "ic_camera-retro",
    },
    {
      title: translate("label.insurance"),
      content: translate("label.insuranceIsSevice"),
      image: "ic_order",
    },
    {
      title: translate("label.protectivePackaging"),
      content: translate("label.protectivePackagingSevice"),
      image: "ic_package",
    },
  ];
  return (
    <View style={styles.contentDown}>
      <Text style={styles.titleContent}>
        {translate("label.ezbuyOptionalService")}
      </Text>
      {dataOptions.map((item, index) => (
        <View style={styles.itemOption} key={index}>
          <View style={styles.headerItemOption}>
            <View style={styles.iconOptionLayor}>
              <Icon
                name={item.image}
                size={Metrics.icons.medium}
                color={Themes.colors.primary}
              />
            </View>
            <Text style={styles.titleContentDown}>{item.title}</Text>
            <Icon
              name={"ic_long_arrow_right"}
              size={Metrics.icons.smallSmall}
              color={Themes.colors.primary}
            />
          </View>
          <Text style={styles.textContentDown}>{item.content}</Text>
        </View>
      ))}
    </View>
  );
};
