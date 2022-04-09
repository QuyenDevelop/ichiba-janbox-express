import { NotificationApi } from "@api";
import { CustomerNotifyConfigRequest } from "@models";
import { translate } from "@shared";
import { Themes } from "@themes";
import React, { FunctionComponent, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
interface Props {
  item: any;
  index: number;
  dataRequet: Array<CustomerNotifyConfigRequest> | undefined;
}

export const ItemConfixNotifi: FunctionComponent<Props> = ({
  item,
  index,
  dataRequet,
}) => {
  const [active, setActive] = useState(
    item.state === 1 || item.state === 0 ? true : false,
  );
  const handleChangeActive = () => {
    if (dataRequet) {
      let requestNotifi: Array<CustomerNotifyConfigRequest> = [...dataRequet];
      let locationItemChange: number = 0;
      let itemChange: CustomerNotifyConfigRequest = {
        id: 0,
        notifyConfigCode: "",
        sendDesktop: 0,
        sendEmail: 0,
        sendMobile: 0,
        sendWeb: 0,
      };
      dataRequet.map((items, index) => {
        if (items.notifyConfigCode === item.type) {
          locationItemChange = index;
          itemChange = items;
          switch (item.name) {
            case translate("label.viaEmail"):
              if (active) {
                itemChange.sendEmail = 4;
              } else {
                itemChange.sendEmail = 1;
              }
              break;
            case translate("label.viaWebsite"):
              if (active) {
                itemChange.sendWeb = 4;
              } else {
                itemChange.sendWeb = 1;
              }
              break;
            case translate("label.viaDesktop"):
              if (active) {
                itemChange.sendDesktop = 4;
              } else {
                itemChange.sendDesktop = 1;
              }
              break;
            case translate("label.viaMobile"):
              if (active) {
                itemChange.sendMobile = 4;
              } else {
                itemChange.sendMobile = 1;
              }
              break;
          }
        }
      });
      requestNotifi.splice(locationItemChange, 1, itemChange);
      handlePutRequest(requestNotifi);
    }
  };
  const handlePutRequest = (
    requestNotifi: Array<CustomerNotifyConfigRequest>,
  ) => {
    NotificationApi.putNotifiCustomerConfig({
      customerNotifyConfigs: requestNotifi,
    })
      ?.then(res => {
        if (res.status) {
          setActive(!active);
        }
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {});
  };

  return (
    <View
      key={index}
      style={[
        styles.wrapContainer,
        item.code ? { backgroundColor: Themes.colors.colGray10 } : {},
      ]}
    >
      <View style={styles.action}>
        {item.code ? (
          <Text style={styles.parentItem}>{item.name}</Text>
        ) : (
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              ...styles.childItem,
              opacity: item.state === 2 || item.type === 3 ? 0.4 : 1,
            }}
          >
            <Text style={styles.childItemText}>{item.name}</Text>
            {item.type === 3 || item.state === 2 ? (
              <View
                style={{
                  ...styles.buttonConfix,
                  borderColor: active
                    ? Themes.colors.primary
                    : Themes.colors.collGray40,
                }}
              >
                <View style={styles.buttonLayor}>
                  <View style={styles.dotButtonOff} />
                  <Text style={styles.textOff}>Off</Text>
                </View>
              </View>
            ) : (
              <TouchableOpacity
                style={{
                  ...styles.buttonConfix,
                  borderColor: active
                    ? Themes.colors.primary
                    : Themes.colors.collGray40,
                }}
                onPress={() => handleChangeActive()}
              >
                {active ? (
                  <View style={styles.buttonLayor}>
                    <Text style={styles.textOn}>On</Text>
                    <View style={styles.dotButton} />
                  </View>
                ) : (
                  <View style={styles.buttonLayor}>
                    <View style={styles.dotButtonOff} />
                    <Text style={styles.textOff}>Off</Text>
                  </View>
                )}
              </TouchableOpacity>
            )}
            {/* <Switch
              trackColor={{
                false: Themes.colors.colGray10,
                true: Themes.colors.primary,
              }}
              thumbColor={Themes.colors.collGray40}
              ios_backgroundColor={Themes.colors.colGray10}
              value={active}
              disabled={item.state === 2 || item.type === 3 ? true : false}
              onValueChange={handleChangeActive}
            /> */}
          </View>
        )}
      </View>
    </View>
  );
};
