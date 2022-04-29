import { WarehouseItem } from "@components";
import { ScreenUtils } from "@helpers";
import Clipboard from "@react-native-community/clipboard";
import { Icon } from "@shared";
import { Icons, Themes } from "@themes";
import React, { FunctionComponent } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../styles";

interface Props {
  item: WarehouseItem;
  changeStatus?: (id: number) => void;
  active?: boolean;
}
export const RenderInfoWarehouse: FunctionComponent<Props> = props => {
  const { item, changeStatus } = props;

  return (
    <View style={styles.warehouseContainer}>
      <View style={styles.headerItem}>
        <Icon
          name="ic_home_fill"
          size={24}
          color={Themes.colors.orangeF27C}
          styles={styles.iconHouse}
        />
        <Text style={styles.nameWarehouse}>{item.titleWarehouse}</Text>
        <TouchableOpacity
          style={styles.activeWarehouse}
          disabled={item.isActive === true}
          onPress={() => changeStatus?.(item.id)}
        >
          <Text style={item.isActive ? styles.txtActivated : styles.txtActive}>
            {item.isActive ? "Activated" : "Activate"}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentWarehouse}>
        <Text style={[styles.titleItem, { marginTop: ScreenUtils.scale(8) }]}>
          Area
        </Text>
        <View style={styles.infoDetailItem}>
          <Text style={styles.txtDetail}>{item.area}</Text>
          <TouchableOpacity onPress={() => Clipboard.setString(item.area)}>
            <Icons.FontAwesome5
              name="copy"
              size={24}
              color={Themes.colors.black}
              style={styles.iconCopy}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.line} />

        <Text style={styles.titleItem}>Address</Text>
        <View style={styles.infoDetailItem}>
          <Text style={styles.txtDetail}>{item.address}</Text>
          <TouchableOpacity onPress={() => Clipboard.setString(item.address)}>
            <Icons.FontAwesome5
              name="copy"
              size={24}
              color={Themes.colors.black}
              style={styles.iconCopy}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.line} />

        <View style={styles.footerContentContainer}>
          <View style={styles.leftFooterContent}>
            <Text style={styles.titleItem}>Name</Text>
            <View style={styles.detailContainerFooter}>
              <Text style={styles.txtPhone}>{item.name}</Text>
              <TouchableOpacity onPress={() => Clipboard.setString(item.name)}>
                <Icons.FontAwesome5
                  name="copy"
                  size={24}
                  color={Themes.colors.black}
                  style={styles.iconCopyFooter}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.rightFooterContent}>
            <Text style={styles.titleItem}>Phone number</Text>
            <View style={styles.detailContainerFooter}>
              <Text style={styles.txtPhone}>{item.phone}</Text>
              <TouchableOpacity onPress={() => Clipboard.setString(item.phone)}>
                <Icons.FontAwesome5
                  name="copy"
                  size={24}
                  color={Themes.colors.black}
                  style={styles.iconCopyFooter}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
