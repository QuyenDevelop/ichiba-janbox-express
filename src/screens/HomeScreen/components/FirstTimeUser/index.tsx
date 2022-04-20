/* eslint-disable react-native/no-inline-styles */
import { SCREENS } from "@configs";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, translate } from "@shared";
import { Images } from "@themes";
import React, { FunctionComponent } from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";
export const FirstTimeUser: FunctionComponent = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const gotoFirstTimeUser = () => {
    navigation.navigate(SCREENS.ACCOUNT_STACK, {
      screen: SCREENS.FIRST_TIME_USER,
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerLeft}>
        <Text style={styles.title}>{translate("label.firstTimeUser")}</Text>
        <Text style={styles.content}>
          {translate("labelFirstTimeUserContent")}
        </Text>
        <Button
          title={translate("buttonViewMore")}
          buttonChildStyle={{ alignSelf: "flex-start" }}
          onPress={gotoFirstTimeUser}
        />
      </View>
      <View style={styles.containerRight}>
        <Image source={Images.icQuestion} />
      </View>
    </View>
  );
};
