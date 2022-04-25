import { Icons } from "@themes";
import React, { FunctionComponent } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";

interface Props {}

export const CreateEcomShipment: FunctionComponent<Props> = props => {
  const {} = props;
  // const navigation = useNavigation<NativeStackNavigationProp<any>>();
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
    </View>
  );
};
