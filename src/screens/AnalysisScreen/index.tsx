import { Header } from "@components";
import { ScreenUtils } from "@helpers";
import { useAppSelector } from "@hooks";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { translate } from "@shared";
import { Icons, Themes } from "@themes";
import React, { FunctionComponent, useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import Pie from "react-native-pie";
import { InfoDetail } from "./components";
import styles from "./styles";

export const AnalysisScreen: FunctionComponent = () => {
  const language = useAppSelector(state => state.user.language);
  useEffect(() => {}, [language]);
  const data = [
    {
      id: 1,
      colorDot: Themes.colors.blue25,
      title: translate("text.analysis.createOrder"),
      value: 0,
    },
    {
      id: 2,
      colorDot: Themes.colors.blue45,
      title: translate("text.analysis.waitForPayment"),
      value: 10,
    },
    {
      id: 3,
      colorDot: Themes.colors.green4B,
      title: translate("text.analysis.paymentCOD"),
      value: 32,
    },
    {
      id: 4,
      colorDot: Themes.colors.coolGrayCC,
      title: translate("text.analysis.arrivedAtWarehousePostal"),
      value: 26,
    },
    {
      id: 5,
      colorDot: Themes.colors.orangeB74,
      title: translate("text.analysis.waitProcessingInfo"),
      value: 26,
    },
    {
      id: 6,
      colorDot: Themes.colors.pink9B,
      title: translate("text.analysis.saveAtWareHouse"),
      value: 52,
    },
    {
      id: 7,
      colorDot: Themes.colors.colGray919,
      title: translate("text.analysis.pastTheStoragePeriod"),
      value: 0,
    },

    {
      id: 8,
      colorDot: Themes.colors.blue25,
      title: translate("text.analysis.internationalShipping"),
      value: 0,
    },
    {
      id: 9,
      colorDot: Themes.colors.orangeE77,
      title: translate("text.analysis.arrivedAtWarehouseRecieve"),
      value: 0,
    },
    {
      id: 10,
      colorDot: Themes.colors.orangeF27C,
      title: translate("text.analysis.commingProvince"),
      value: 0,
    },
    {
      id: 11,
      colorDot: Themes.colors.orangeF27C,
      title: translate("text.analysis.recievingProvince"),
      value: 0,
    },
    {
      id: 12,
      colorDot: Themes.colors.orangeF27C,
      title: translate("text.analysis.postmanDelivery"),
      value: 0,
    },
    {
      id: 13,
      colorDot: Themes.colors.success60,
      title: translate("text.analysis.successDelivery"),
      value: 0,
    },
    {
      id: 14,
      colorDot: Themes.colors.pink9B,
      title: translate("text.analysis.deliveryAgain"),
      value: 0,
    },
    {
      id: 15,
      colorDot: Themes.colors.danger60,
      title: translate("text.analysis.cancelOrder"),
      value: 0,
    },
    {
      id: 16,
      colorDot: Themes.colors.orangeF27C,
      title: translate("text.analysis.refundOrder"),
      value: 0,
    },
  ];
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View style={[styles.container]}>
      <Header
        title={translate("label.labelAnalysis")}
        iconLeftName={["ic_arrow_left"]}
        iconLeftOnPress={[() => navigation.goBack()]}
        isCenterTitle
      />
      <View style={styles.frameInfo}>
        <View style={styles.containerChart}>
          <View style={styles.contentLeft}>
            <Pie
              radius={80}
              innerRadius={50}
              sections={[
                {
                  percentage: 33.33,
                  color: Themes.colors.blue006,
                },
                {
                  percentage: 33.33,
                  color: Themes.colors.green3ED,
                },
                {
                  percentage: 33.33,
                  color: Themes.colors.yellowFFC,
                },
              ]}
              strokeCap={"butt"}
            />
            <View style={styles.gauge}>
              <Icons.FontAwesome5 name="dolly" size={14} />
              <Text style={styles.gaugeText}>$30.000</Text>
              <Text style={styles.gaugeText2}>Total</Text>
            </View>
          </View>
        </View>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flexDirection: "column",
          }}
        >
          <View style={styles.frame20530}>
            <View style={styles.rectangle68} />
            <View style={styles.frameContainer}>
              <Text style={styles.titleFrame}>Paid</Text>
              <Text style={styles.valueFrame}>100.00$</Text>
            </View>
          </View>
          <View style={styles.frame20529}>
            <View style={styles.rectangle682} />
            <View style={styles.frameContainer}>
              <Text style={styles.titleFrame}>Unpaid</Text>
              <Text style={styles.valueFrame}>100.00$</Text>
            </View>
          </View>
          <View style={styles.frame20530}>
            <View style={styles.rectangle683} />
            <View style={styles.frameContainer}>
              <Text style={styles.titleFrame}>Need to handle</Text>
              <Text style={styles.valueFrame}>100 item</Text>
            </View>
          </View>
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            marginTop: ScreenUtils.scale(40),
          }}
        >
          {data.map(item => (
            <InfoDetail
              colorDot={item.colorDot}
              title={item.title}
              value={item.value}
            />
          ))}
          {/* <Flatlist
            keyExtractor={item => item.id}
            data={data}
            renderItem={renderItem}
          /> */}
        </View>
      </ScrollView>
    </View>
  );
};
