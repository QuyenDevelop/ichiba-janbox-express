import { Header } from "@components";
import { SCREENS } from "@configs";
import { Account } from "@models";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { IRootState } from "@redux";
import { translate } from "@shared";
import { Images } from "@themes";
import React, { FunctionComponent } from "react";
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FastImage from "react-native-fast-image";
import { useSelector } from "react-redux";
import { ContentOptional, ContentPurchase, ItemChooseEz } from "./Component";
import styles from "./styles";
interface Props {}

export const FirstTimeUserScreen: FunctionComponent<Props> = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const profile = useSelector(
    (state: IRootState) => state.user.profile,
  ) as Account | null;
  const dataChooseItem = [
    {
      title: translate("label.multilingualInterface"),
      content: translate("label.ezHelpsYou"),
      image: Images.interface,
    },
    {
      title: translate("label.easyPayment"),
      content: translate("label.youCanMakeCard"),
      image: Images.easyPayment,
    },
    {
      title: translate("label.automatedProcess"),
      content: translate("label.byUsingTechnologi"),
      image: Images.automated,
    },
    {
      title: translate("label.commitment"),
      content: translate("label.weAreCommitment"),
      image: Images.deliveryTruck,
    },
  ];
  return (
    <View style={[styles.container]}>
      {/* <View style={styles.contentLayout}>
        <HomeHeader />
        <HomeTopBar />
      </View> */}
      <Header
        title={translate("label.firstTimeUser")}
        iconLeftName={["ic_arrow_left"]}
        iconLeftOnPress={[() => navigation.goBack()]}
        isCenterTitle
      />
      <ScrollView style={styles.content}>
        <View style={styles.contenUp}>
          <Text style={styles.titleContent}>{translate("label.whatKind")}</Text>
          <FastImage
            source={Images.imgDefautFirstTime}
            resizeMode={FastImage.resizeMode.contain}
            style={styles.imgDefautFirstTime}
          />
          <View style={styles.description}>
            <Text style={styles.textDescriptipon}>
              {translate("label.ezInJapan")}
            </Text>
          </View>
          <View style={styles.description}>
            <Text style={styles.textDescriptipon}>
              {translate("label.weWillDeliver")}
            </Text>
          </View>
          {profile ? null : (
            <TouchableOpacity
              style={styles.buttonSubMit}
              onPress={() =>
                navigation.navigate(SCREENS.AUTH_STACK, {
                  screen: SCREENS.REGISTER,
                })
              }
            >
              <Text style={styles.textSubmit}>
                {translate("button.signup")}
              </Text>
            </TouchableOpacity>
          )}
          <Text style={styles.titleContentChooseEz}>
            {translate("label.whyChooseEz")}
          </Text>
          <View style={styles.contentChoseEz}>
            {dataChooseItem.map((item, index) => (
              <ItemChooseEz
                key={index}
                title={item.title}
                content={item.content}
                image={item.image}
              />
            ))}
          </View>
          <Text style={styles.titleContent}>{translate("label.howUseEz")}</Text>
        </View>
        <View style={styles.contentFullWidth}>
          <ContentPurchase />
          <ImageBackground
            style={styles.delivery}
            source={Images.imgBackgroundDeliver}
            resizeMode={FastImage.resizeMode.contain}
          >
            <View style={styles.contentDelivery}>
              <Text style={styles.titleContent}>
                {translate("label.diverseShippingMethods")}
              </Text>
              <Text style={styles.textContentDeliver}>
                {translate("label.ezbuyIsPartner")}
              </Text>
            </View>
            <View style={styles.listLogo}>
              <FastImage
                source={Images.ems}
                resizeMode={FastImage.resizeMode.contain}
                style={styles.logoDeliver}
              />
              <FastImage
                source={Images.dhl}
                resizeMode={FastImage.resizeMode.contain}
                style={styles.logoDeliver}
              />
              <FastImage
                source={Images.fedEx}
                // resizeMode={FastImage.resizeMode.stretch}
                style={styles.logoDeliver}
              />
            </View>
          </ImageBackground>
        </View>
        <ContentOptional />
      </ScrollView>
    </View>
  );
};
