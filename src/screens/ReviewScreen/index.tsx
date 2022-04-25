import { Header } from "@components";
import { ScreenUtils } from "@helpers";
import { useAppSelector } from "@hooks";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { translate } from "@shared";
import React, { FunctionComponent, useEffect } from "react";
import { SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ButtonSuggestCmt } from "./components/ButtonSuggestCmt";
import { CustomRatingBar } from "./components/CustomRatingBar";
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

export const ReviewScreen: FunctionComponent<IProps> = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const language = useAppSelector(state => state.user.language);
  useEffect(() => {}, [language]);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        titleLeft={translate("labelReview")}
        iconLeftName={["ic_arrow_left"]}
        iconLeftOnPress={[() => navigation.goBack()]}
        isGoBack={true}
      />
      <ScrollView>
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
            // eslint-disable-next-line react-native/no-inline-styles
            style={{ paddingVertical: 5 }}
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
