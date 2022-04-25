import { Header } from "@components";
import { ScreenUtils } from "@helpers";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { translate } from "@shared";
import { Icons, Themes } from "@themes";
import React, { FunctionComponent, useState } from "react";
import { SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { UploadPhoto } from "./components/UploadPhoto";
import styles from "./styles";
export * from "./types";

interface IProps {
  id: any;
  item: any;
  title: string;
  image: string;
  detail: string;
}
// eslint-disable-next-line no-sparse-arrays
const dataQuantity = [
  { id: 1, txt: "Great quality" },
  { id: 2, txt: "Fast delivery" },
  { id: 3, txt: "Good price" },
  { id: 4, txt: "Trustworthy, enthusiastic" },
  ,
];
export const ReviewScreen: FunctionComponent<IProps> = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const goBack = () => {
    navigation.goBack();
  };
  const [defaultRating, setDefaultRating] = useState(1);
  const [maxRating] = useState([1, 2, 3, 4, 5]);
  const [suggestCmt] = useState(dataQuantity);
  const [checkChooseSuggest, setChooseSuggest] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        titleLeft={translate("labelReview")}
        iconLeftName={["ic_arrow_left"]}
        iconLeftOnPress={[goBack]}
        isGoBack={true}
      />
      <ScrollView>
        <View style={styles.titleContainer}>
          <Text style={styles.txtTitle}>Shipment</Text>
          <Text style={{ marginVertical: ScreenUtils.scale(4) }}>
            Please, Rate us here
          </Text>
          <View style={styles.customRatingBarStyle}>
            {maxRating.map(item => (
              <Icons.FontAwesome
                key={item}
                style={styles.betweenStar}
                name="star"
                size={37}
                color={
                  item <= defaultRating
                    ? Themes.colors.orangeF27
                    : Themes.colors.colGray20
                }
                onPress={() => setDefaultRating(item)}
              />
            ))}
          </View>
          <View style={styles.suggestContainer}>
            {suggestCmt.map((item, key: number) => (
              <View
                key={item?.id}
                onTouchStart={() => setChooseSuggest(key)}
                style={
                  checkChooseSuggest === key
                    ? [
                        styles.btnSuggest,
                        { backgroundColor: Themes.colors.orangeF27 },
                      ]
                    : styles.btnSuggest
                }
              >
                <Text>{item?.txt}</Text>
              </View>
            ))}
          </View>
        </View>
        <Text style={styles.txtDescription}>Description</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Content rated..."
            style={styles.txtInput}
            maxLength={100}
            numberOfLines={3}
            multiline={true}
          />
        </View>
        <Text style={styles.maxCharacter}>Maximum 100 characters</Text>
        <UploadPhoto />
        <TouchableOpacity style={styles.btnSubmitReview}>
          <Text style={styles.txtSubmitReview}>Submit Review</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
