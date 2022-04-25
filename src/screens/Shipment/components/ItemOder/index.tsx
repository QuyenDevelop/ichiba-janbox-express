import { DATA_CONSTANT, SCREENS } from "@configs";
import {
  DetailFee,
  OrderPackageCollectionResponse,
  OrderService,
} from "@models";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Checkbox, translate } from "@shared";
import { Themes } from "@themes";
import React, { FunctionComponent, useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

interface Props {
  order: OrderPackageCollectionResponse;
  showDetailsFeeModal?: () => void;
  updateFeeDetails?: (value: DetailFee[]) => void;
  isChecked: boolean;
  onCheck: (order: OrderPackageCollectionResponse) => void;
  existOrderExpire?: boolean;
  services?: OrderService[];
  showSuccessModal?: () => void;
}

export const ItemOrder: FunctionComponent<Props> = props => {
  const { order } = props;
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [packageStatus, setPackageStatus] = useState(
    DATA_CONSTANT.PACKAGE_STATUS.find(item => item.value === order?.status),
  );

  useEffect(() => {
    setPackageStatus(
      DATA_CONSTANT.PACKAGE_STATUS.find(item => item.value === order?.status),
    );
  }, [order?.status]);

  const goToDetail = () => {};
  const goToReview = () => {
    navigation.navigate(SCREENS.SHIPMENT_MANAGE_SCREEN, {
      screen: SCREENS.REVIEW_SCREEN,
      params: {
        item: order,
      },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.PackageItemContainer}>
        <View style={styles.PackageItemHeader}>
          <View style={styles.line}>
            <Checkbox />
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
                  backgroundColor: [7].includes(packageStatus?.value || -1)
                    ? Themes.colors.primary
                    : [6].includes(packageStatus?.value || -1)
                    ? Themes.colors.danger60
                    : [5].includes(packageStatus?.value || -1)
                    ? Themes.colors.success60
                    : Themes.colors.warningMain,
                },
              ]}
            >
              <Text style={styles.packageStatus}>
                {translate(packageStatus?.name)}
              </Text>
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
        {order.status !== 7 && (
          <View style={styles.packageFooter}>
            <TouchableOpacity style={styles.touchDetail} onPress={goToDetail}>
              <Text style={styles.packageDetailText}>Detail</Text>
            </TouchableOpacity>
            {[6, 5].includes(packageStatus?.value || -1) && (
              <TouchableOpacity
                style={styles.touchRecreate}
                onPress={goToReview}
              >
                <Text style={styles.packageRecreateText}>Rate</Text>
              </TouchableOpacity>
            )}
            {[1, 3, 4].includes(packageStatus?.value || -1) && (
              <TouchableOpacity style={styles.touchRecreate}>
                <Text style={styles.packageRecreateText}>Payment</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>
    </View>
  );
};
