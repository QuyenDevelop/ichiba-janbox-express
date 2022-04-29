import { WarehouseItem } from "@components";
import { ScreenUtils } from "@helpers";
import { Address } from "@models";
import { Icons } from "@themes";
import React, { FunctionComponent } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";

interface Props {
  address?: Address;
  postOffice?: WarehouseItem;
  chooseAddress?: () => void;
  chooseOfficer?: () => void;
}

export const CreateEcomShipment: FunctionComponent<Props> = props => {
  const { address, chooseAddress, chooseOfficer } = props;
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
          <TouchableOpacity onPress={chooseOfficer}>
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
        {address ? (
          <TouchableOpacity
            style={styles.addressButton}
            onPress={chooseAddress}
          >
            <View style={{ marginRight: ScreenUtils.scale(59) }}>
              <Text style={styles.addressText}>
                {address?.name} <Text> {address?.phone}</Text>
              </Text>
              <Text style={styles.addressContent}>{`${address?.address}, ${
                address?.ward || ""
              }, ${address?.district || ""}, ${address?.province || ""}, ${
                address?.postalCode || ""
              }`}</Text>
            </View>
            <Icons.FontAwesome
              name="angle-right"
              size={16}
              style={styles.iconArrRight1}
            />
          </TouchableOpacity>
        ) : (
          <>
            <View style={styles.chooseBtn}>
              <TextInput
                style={styles.textChoose}
                placeholder="Delivery address"
              />

              <TouchableOpacity>
                <Icons.FontAwesome
                  name="angle-right"
                  size={16}
                  style={styles.iconArrRight}
                  onPress={chooseAddress}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.line} />
          </>
        )}
      </View>
    </View>
  );
};
