import { HeaderAccoutLoading } from "@components";
import { SCREENS } from "@configs";
import { ScreenUtils } from "@helpers";
import { Account } from "@models";
import { useNavigation } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { translate } from "@shared";
import { Icons, Images, Metrics, Themes } from "@themes";
import React, { FunctionComponent } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import FastImage from "react-native-fast-image";
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
        <TouchableOpacity
          style={styles.header}
          onPress={() =>
            navigation.navigate(SCREENS.ACCOUNT_STACK, {
              screen: SCREENS.ACCOUNT_INFORMATION,
            })
          }
        >
          <View style={styles.headerLeft}>
            <View style={styles.avatar}>
              <FastImage
                resizeMode={FastImage.resizeMode.contain}
                source={profile?.avatar ? profile.avatar : Images.lockedAccount}
                style={styles.image}
              />
            </View>
            <View style={styles.headerLeftContent}>
              <Text style={styles.name} numberOfLines={1}>
                {profile?.name}
              </Text>
              <Text style={styles.phoneNumber} numberOfLines={1}>
                {profile?.phone_number}
              </Text>
            </View>
          </View>
          <View style={styles.headerRight}>
            {!profile.phone_number_verified && (
              <View style={styles.notAccept}>
                <Text style={styles.notAcceptText}>
                  {translate("label.unconfirmed")}
                </Text>
              </View>
            )}
            <Icons.MaterialIcons
              name={"arrow-forward-ios"}
              size={
                ScreenUtils.isPad()
                  ? Metrics.icons.mediumLarge
                  : Metrics.icons.small
              }
              color={Themes.colors.coolGray60}
            />
          </View>
        </TouchableOpacity>
      ) : (
        <HeaderAccoutLoading />
      )}
    </>
  );
};
