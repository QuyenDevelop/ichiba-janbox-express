import { ScreenUtils } from "@helpers";
import { Icon, translate } from "@shared";
import { Metrics, Themes } from "@themes";
import React, { FunctionComponent, useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../styles";
interface Props {}

export const ContentPurchase: FunctionComponent<Props> = () => {
  const dataTab = [
    { id: 1, title: translate("label.makeAPurchase") },
    { id: 2, title: translate("label.placeABid") },
  ];
  const [activeTab, setActiveTab] = useState<number>(dataTab[0].id);
  const dataPurchars1 = [
    {
      title: translate("label.searchForItems"),
      content: translate("label.youCanSearch"),
      image: "ic_search",
    },
    {
      title: translate("label.readInformationCarefully"),
      content: translate("label.pleaseReadCarefully"),
      image: "ic_first_time_user",
    },
    {
      title: translate("label.theFirstCharge"),
      content: translate("label.afterConfirm"),
      image: "ic_credit-card",
    },
    {
      title: translate("label.waitACoupleOfDays"),
      content: translate("label.ezPurchase"),
      image: "ic_basket",
    },
    {
      title: translate("label.specialInternational"),
      content: translate("label.afterTheItem"),
      image: "ic_box",
    },
    {
      title: translate("label.theSecondCharge"),
      content: translate("label.payForDomestic"),
      image: "ic_credit-card",
    },
    {
      title: translate("label.receiveYourPackageDelivered"),
      content: translate("label.theItemDelivered"),
      image: "ic_super_fast_delivery",
    },
  ];
  const dataPurchars2 = [
    {
      title: translate("label.searchForItems"),
      content: translate("label.selectYahoo"),
      image: "ic_search",
    },
    {
      title: translate("label.depositpoints"),
      content: translate("label.depositPoint"),
      image: "ic_first_time_user",
    },
    {
      title: translate("label.placeABid"),
      content: translate("label.readCarefully"),
      image: "ic_credit-card",
    },
    {
      title: translate("label.waitACoupleOfDays"),
      content: translate("label.afterTheAuction"),
      image: "ic_basket",
    },
    {
      title: translate("label.specialInternational"),
      content: translate("label.afterTheItem"),
      image: "ic_box",
    },
    {
      title: translate("label.theSecondCharge"),
      content: translate("label.payForDomestic"),
      image: "ic_credit-card",
    },
    {
      title: translate("label.receiveYourPackageDelivered"),
      content: translate("label.theItemDelivered"),
      image: "ic_super_fast_delivery",
    },
  ];
  const [dataActive, setDataActive] = useState(dataPurchars1);
  useEffect(() => {
    if (activeTab === 1) {
      setDataActive(dataPurchars1);
    } else {
      setDataActive(dataPurchars2);
    }
  }, [activeTab]);
  return (
    <>
      <View style={styles.TabContent}>
        {dataTab.map((item, index) => (
          <TouchableOpacity
            style={styles.itemTab}
            onPress={() => setActiveTab(item.id)}
            key={index}
          >
            <Text style={styles.textTab}>{item.title}</Text>
            {activeTab === item.id ? <View style={styles.activeTab} /> : null}
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.br} />
      <View style={styles.headerPurchase}>
        <View style={styles.purCharseLeft}>
          <Text style={styles.textHeaderPurcharse}>
            {translate("label.step")}
          </Text>
          <View style={styles.topLayor} />
          <View style={styles.leftLayor} />
          <View style={styles.bottomLayor} />
        </View>
        <View style={styles.rightPurCharse}>
          <View style={styles.topLayor} />
          <View style={styles.bottomLayor} />
          <Text style={styles.textRightPurcharse}>
            {activeTab === 1
              ? translate("label.makeAPurchase")
              : translate("label.placeABid")}
          </Text>
        </View>
      </View>
      {dataActive.map((item, index) => (
        <View style={styles.itemPurcharse} key={index}>
          <View
            style={{
              ...styles.purCharseLeft,
              height: index === 6 ? ScreenUtils.scale(60) : undefined,
            }}
          >
            <Text style={styles.numberTitle}>{index + 1}</Text>
            <View style={styles.topLayor} />
            <View style={styles.leftLayor} />
            <View style={styles.bottomLayor} />
          </View>
          <View style={styles.rightPurCharse}>
            <View style={styles.IconPurchaseLayor}>
              <Icon
                name={item.image}
                size={Metrics.icons.smallSmall}
                color={Themes.colors.primary}
              />
            </View>
            <View style={styles.contentRightLayor}>
              <Text style={styles.titleContentItem}>{item.title}</Text>
              <Text style={styles.valueContentPur}>{item.content}</Text>
            </View>
          </View>
        </View>
      ))}
    </>
  );
};
