import { SCREENS } from "@configs";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Button, translate } from "@shared";
import { Images } from "@themes";
import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import styles from "./styles";

export const NoComplaint: FunctionComponent = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const gotoCreateComplaintScreen = () => {
    navigation.navigate(SCREENS.CREATE_COMPLAINT_SCREEN);
  };
  return (
    <View style={styles.noComplaintsContainer}>
      <FastImage
        source={Images.noComplaintsImage}
        resizeMode="contain"
        style={styles.noComplaintsImage}
      />
      <View style={styles.noComplaintNotification}>
        <Text style={styles.titleText}>
          {translate("textComplaintNotification")}
        </Text>
        <Text style={styles.contentText}>
          {translate("textComplaintContent")}
        </Text>
      </View>
      <Button
        title={translate("buttonCreateComplaint")}
        onPress={gotoCreateComplaintScreen}
      />
    </View>
  );
};
