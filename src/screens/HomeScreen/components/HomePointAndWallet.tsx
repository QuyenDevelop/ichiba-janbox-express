import { Icon, translate } from "@shared";
import { Icons, Metrics, Themes } from "@themes";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../styles";

export const HomePointAndWallet = () => {
  const gotoPoint = () => {};
  const gotoWallet = () => {};

  return (
    <View style={styles.contentContainer}>
      <View style={styles.childContainer}>
        <TouchableOpacity style={styles.pointContainer} onPress={gotoPoint}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.icons}>
              <Icon
                name={"ic_logo_janbox"}
                size={Metrics.icons.smallSmall}
                color={Themes.colors.primary}
              />
            </View>
            <View style={styles.titleContent}>
              <Text style={styles.title}>{translate("titlePoint")}</Text>
              <Text style={styles.subTitle}>441</Text>
            </View>
          </View>
          <View style={styles.icons}>
            <Icons.MaterialIcons
              name={"arrow-forward-ios"}
              size={Metrics.icons.smallSmall}
              color={Themes.colors.coolGray60}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.heightSeparator} />
        <TouchableOpacity style={styles.walletContainer} onPress={gotoWallet}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.icons}>
              <Icons.Entypo
                name={"wallet"}
                size={Metrics.icons.smallSmall}
                color={Themes.colors.wallet}
              />
            </View>
            <View style={styles.titleContent}>
              <Text style={styles.title}>{translate("titleWallet")}</Text>
              <Text style={styles.subTitle}>Activation</Text>
            </View>
          </View>
          <View style={styles.icons}>
            <Icons.MaterialIcons
              name={"arrow-forward-ios"}
              size={Metrics.icons.smallSmall}
              color={Themes.colors.coolGray60}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
