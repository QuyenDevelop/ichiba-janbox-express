import { SCREENS } from "@configs";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Icons } from "@themes";
import React, { FunctionComponent } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";

interface Props {}

export const CreateGiftShipment: FunctionComponent<Props> = props => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const {} = props;
  return (
    <View style={styles.container}>
      <View style={styles.chooseContainer}>
        <Text style={styles.title}>Choose a post office to send to</Text>
        <View style={styles.chooseBtn}>
          <TextInput
            style={styles.textChoose}
            placeholder="Choose a post office"
          />
          <TouchableOpacity>
            <Icons.FontAwesome
              name="angle-right"
              size={16}
              style={styles.iconArrRight}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.line} />
      </View>
      <View style={styles.chooseContainer}>
        <Text style={styles.title}>Receiver's address</Text>
        <View style={styles.chooseBtn}>
          <TextInput style={styles.textChoose} placeholder="Delivery address" />
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(SCREENS.ACCOUNT_STACK, {
                screen: SCREENS.ADDRESS_LIST_SCREEN,
              })
            }
          >
            <Icons.FontAwesome
              name="angle-right"
              size={16}
              style={styles.iconArrRight}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.line} />
      </View>
      <View style={styles.chooseContainer}>
        <Text style={styles.title}>Sender address</Text>
        <TouchableOpacity style={styles.chooseBtnSender}>
          <Text>+</Text>
          <Text>Add address</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
