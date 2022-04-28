import { PackageShipmentResponse } from "@models";
import { Themes } from "@themes";
import React, { FunctionComponent } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

interface Props {
  item: PackageShipmentResponse;
}

export const PackageItem: FunctionComponent<Props> = props => {
  const { item } = props;
  const gotoDetails = () => {};
  const gotoRecreate = () => {};

  return (
    <View style={styles.PackageItemContainer}>
      <View style={styles.PackageItemHeader}>
        <View style={styles.line}>
          {/* <Checkbox /> */}
          <View style={styles.marginLeft}>
            <Text style={styles.packageId}>#AUC123456789</Text>
            <Text style={styles.packageTitle}>EZTESTNVT000556</Text>
          </View>
        </View>
        <View>
          <Text style={styles.packageType}>Type: Ecommerce</Text>
          <View
            style={[
              styles.statusView,
              {
                backgroundColor: item.status
                  ? Themes.colors.success60
                  : Themes.colors.warning50,
              },
            ]}
          >
            <Text style={styles.packageStatus}>Compeleted</Text>
          </View>
        </View>
      </View>
      <View style={styles.packageContent}>
        <View style={styles.packageItem}>
          <Text style={styles.packageItemText}>
            Arrived storage: 15:01 17/03/2021
          </Text>
        </View>
        <View style={styles.packageItem}>
          <Text style={styles.packageItemText}>Route: [SG] - [VN]</Text>
        </View>
        <View style={styles.packageItem}>
          <Text style={styles.packageItemText}>
            Original post office: tokyo_02
          </Text>
        </View>
        <View style={styles.packageItemFooter}>
          <View>
            <Text style={styles.packageItemText}>
              <Text style={styles.default}>GW</Text> 5000(g)
            </Text>
          </View>
          <View>
            <Text style={styles.packageItemText}>
              <Text style={styles.default}>DW</Text> 5000(g)
            </Text>
          </View>
          <View>
            <Text style={styles.packageItemText}>
              <Text style={styles.default}>CW</Text> 5000(g)
            </Text>
          </View>
        </View>
      </View>
      {item.status && (
        <View style={styles.packageFooter}>
          <TouchableOpacity style={styles.touchDetail} onPress={gotoDetails}>
            <Text style={styles.packageDetailText}>Detail</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchRecreate} onPress={gotoRecreate}>
            <Text style={styles.packageRecreateText}>Recreate</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
