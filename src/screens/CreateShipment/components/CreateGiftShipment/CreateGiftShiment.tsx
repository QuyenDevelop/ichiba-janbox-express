/* eslint-disable react-native/no-inline-styles */
import { WarehouseItem } from "@components";
import { Address } from "@models";
import { Icons } from "@themes";
import React, { FunctionComponent } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";

interface Props {
  address?: Address;
  postOffice?: WarehouseItem;
  sender?: Address;
  chooseAddress: () => void;
  chooseOfficer: () => void;
  chooseSender: () => void;
}

export const CreateGiftShipment: FunctionComponent<Props> = props => {
  const { address, chooseAddress, postOffice, chooseOfficer } = props;
  return (
    <View style={styles.container}>
      <View style={styles.chooseContainer}>
        <Text style={styles.title}>Choose a post office to send to</Text>
        {postOffice ? (
          <TouchableOpacity
            style={styles.addressButton}
            onPress={chooseOfficer}
          >
            <View style={styles.iconLeft}>
              <Icons.FontAwesome5 name="map-marker-alt" size={28} />
            </View>
            <View style={styles.txtAddressContent}>
              <Text style={styles.addressNameText}>{postOffice?.name}</Text>
              <Text style={styles.addressContent}>{postOffice?.address}</Text>
              <Text style={styles.addressText}> {postOffice?.phone}</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <>
            <TouchableOpacity style={styles.chooseBtn} onPress={chooseOfficer}>
              <TextInput
                style={styles.textChoose}
                placeholder="Choose a post office"
                editable={false}
              />
              <TouchableOpacity>
                <Icons.FontAwesome
                  name="angle-right"
                  size={16}
                  style={styles.iconArrRight}
                  onPress={chooseOfficer}
                />
              </TouchableOpacity>
            </TouchableOpacity>
            <View style={styles.line} />
          </>
        )}
      </View>
      <View style={styles.chooseContainer}>
        <Text style={styles.title}>Receiver's address</Text>
        {address ? (
          <TouchableOpacity
            style={[styles.addressButton, { justifyContent: "space-between" }]}
            onPress={chooseAddress}
          >
            <View style={styles.txtAddressContent}>
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
            <TouchableOpacity style={styles.chooseBtn} onPress={chooseAddress}>
              <TextInput
                style={styles.textChoose}
                placeholder="Delivery address"
                editable={false}
              />
              <TouchableOpacity>
                <Icons.FontAwesome
                  name="angle-right"
                  size={16}
                  style={styles.iconArrRight}
                  onPress={chooseAddress}
                />
              </TouchableOpacity>
            </TouchableOpacity>
            <View style={styles.line} />
          </>
        )}
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
