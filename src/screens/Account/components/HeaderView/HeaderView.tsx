/* eslint-disable react-native/no-inline-styles */
import { HeaderAccoutLoading } from "@components";
import { SCREENS } from "@configs";
import { ScreenUtils } from "@helpers";
import { Account } from "@models";
import { useNavigation } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { Icon } from "@shared";
import { Metrics, Themes } from "@themes";
import React, { FunctionComponent } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
interface OwnProps {
  profile: Account;
}

type Props = OwnProps;

export const HeaderView: FunctionComponent<Props> = props => {
  const { profile } = props;
  const navigation = useNavigation<StackNavigationProp<any>>();
  return (
    <>
      {profile ? (
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <Text style={styles.name} numberOfLines={1}>
                {profile?.name}
              </Text>
            </View>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.button}>
              <Icon
                name={"ic_envelope"}
                size={
                  ScreenUtils.isPad()
                    ? Metrics.icons.mediumLarge
                    : Metrics.icons.small
                }
                color={Themes.colors.coolGray60}
              />
              <View style={styles.badgeWrapper}>
                <Text style={styles.badge}>0</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate(SCREENS.MY_JANBOX_STACK)}
            >
              <Icon
                name={"ic_setting"}
                size={
                  ScreenUtils.isPad()
                    ? Metrics.icons.mediumLarge
                    : Metrics.icons.small
                }
                color={Themes.colors.coolGray60}
              />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <HeaderAccoutLoading />
      )}
    </>
  );
};
