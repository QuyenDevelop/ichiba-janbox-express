import { View, Text, TouchableOpacity } from "react-native";
import React, { FunctionComponent } from "react";
import styles from "../styles";
import { Icon } from "@shared";
import { Icons, Themes } from "@themes";
import { ScreenUtils } from "@helpers";

export interface GuideItem {
  id: number;
  titleWarehouse: string;
  area: string;
  address: string;
  name: string;
  phone: number;
  isActive: boolean;
}

interface Props {
  item: GuideItem;
  changeStatus: (id: number) => void;
  active?: boolean;
}
export const RenderInfoWarehouse: FunctionComponent<Props> = props => {
  const { item, changeStatus } = props;

  //   const onPress = () => {
  //     changeStatus();
  //   };
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
          onPress={() => changeStatus(item.id)}
        >
          <Text style={item.isActive ? styles.txtActive : styles.txtActivated}>
            {item.isActive ? "Activate" : "Activated"}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentWarehouse}>
        <Text style={[styles.titleItem, { marginTop: ScreenUtils.scale(8) }]}>
          Area
        </Text>
        <View style={styles.infoDetailItem}>
          <Text style={styles.txtDetail}>{item.area}</Text>
          <Icons.FontAwesome5
            name="copy"
            size={24}
            color={Themes.colors.black}
            style={styles.iconCopy}
          />
        </View>
        <View style={styles.line} />

        <Text style={styles.titleItem}>Address</Text>
        <View style={styles.infoDetailItem}>
          <Text style={styles.txtDetail}>{item.address}</Text>
          <Icons.FontAwesome5
            name="copy"
            size={24}
            color={Themes.colors.black}
            style={styles.iconCopy}
          />
        </View>
        <View style={styles.line} />

        <View style={styles.footerContentContainer}>
          <View style={styles.leftFooterContent}>
            <Text style={styles.titleItem}>Name</Text>
            <View style={styles.detailContainerFooter}>
              <Text style={styles.txtPhone}>{item.name}</Text>
              <Icons.FontAwesome5
                name="copy"
                size={24}
                color={Themes.colors.black}
                style={styles.iconCopyFooter}
              />
            </View>
          </View>
          <View style={styles.rightFooterContent}>
            <Text style={styles.titleItem}>Phone number</Text>
            <View style={styles.detailContainerFooter}>
              <Text style={styles.txtPhone}>{item.phone}</Text>
              <Icons.FontAwesome5
                name="copy"
                size={24}
                color={Themes.colors.black}
                style={styles.iconCopyFooter}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
