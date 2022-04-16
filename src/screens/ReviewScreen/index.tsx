import { Header } from "@components";
import { ScreenUtils } from "@helpers";
import { useAppSelector } from "@hooks";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { translate } from "@shared";
import { Icons, Themes } from "@themes";
import React, { FunctionComponent, useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";

interface IProps {
  id: any;
  item: any;
  title: string;
  image: string;
  detail: string;
}

export const ReviewScreen: FunctionComponent<IProps> = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const language = useAppSelector(state => state.user.language);
  useEffect(() => {}, [language]);

  const [defaultRating, setDefaultRating] = useState(1);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  const [suggestCmt, setSuggestCmt] = useState([
    { id: 1, txt: "Great quality" },
    { id: 2, txt: "Fast delivery" },
    { id: 3, txt: "Good price" },
    { id: 4, txt: "Trustworthy, enthusiastic" },
    ,
  ]);
  const [checkChooseSuggest, setChooseSuggest] = useState(false);
  const handleChooseSuggest = () => {
    setChooseSuggest(!checkChooseSuggest);
  };

  const CustomRatingBar = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setDefaultRating(item)}
            >
              <Icons.FontAwesome
                style={styles.betweenStar}
                name="star"
                size={37}
                color={
                  item <= defaultRating
                    ? Themes.colors.orangeF27
                    : Themes.colors.colGray20
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  const ButtonSuggestCmt = () => {
    return (
      <View style={styles.suggestContainer}>
        {suggestCmt.map((item, key) => {
          return (
            <TouchableOpacity
              key={item.id}
              onPress={handleChooseSuggest}
              style={
                item?.id == 1
                  ? [
                      styles.btnSuggest,
                      { backgroundColor: Themes.colors.orangeF27 },
                    ]
                  : styles.btnSuggest
              }
            >
              <Text>{item?.txt}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header
        titleLeft={translate("labelReview")}
        iconLeftName={["ic_arrow_left"]}
        iconLeftOnPress={[() => navigation.goBack()]}
        isGoBack={true}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.txtTitle}>Shipment</Text>
        <Text style={{ marginVertical: ScreenUtils.scale(4) }}>
          Please, Rate us here
        </Text>
        <CustomRatingBar />
        <ButtonSuggestCmt />
      </View>
      <Text style={styles.txtDescription}>Description</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Content rated..."
          style={{ paddingVertical: 5 }}
          maxLength={100}
          numberOfLines={3}
          multiline={true}
        />
      </View>
      <Text style={styles.maxCharacter}>Maximum 100 characters</Text>
      <TouchableOpacity style={styles.btnPhotos}>
        <Icons.FontAwesome name="camera" size={24} />
        <Text>More photos</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
