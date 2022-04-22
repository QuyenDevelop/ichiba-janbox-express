import { FastImageLoading, Header, Separator } from "@components";
import { ScreenUtils } from "@helpers";
import { useBoolean, useStatusBar } from "@hooks";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Button, TextInput, translate } from "@shared";
import { Images, Metrics } from "@themes";
import React, { FunctionComponent, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput as BaseInput,
  View,
} from "react-native";
import FastImage from "react-native-fast-image";
import { ChooseImageModal } from "./component/ChooseImageModal";
// import { ImageOrVideo } from "react-native-image-crop-picker";
import styles from "./styles";

export const CreateComplaintScreen: FunctionComponent = () => {
  useStatusBar("dark-content");
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [image, setImage] = useState<Array<any>>([]);
  const [isShowChooseImage, showChooseImage, hideChooseImage] = useBoolean();

  const handleAddComplaint = () => {};
  const handleChooseComplaintType = () => {};

  return (
    <View style={[styles.container]}>
      <Header
        title={translate("labelCreateComplaints")}
        iconLeftName={["ic_arrow_left"]}
        iconLeftOnPress={[() => navigation.goBack()]}
        isCenterTitle
      />
      <Separator height={ScreenUtils.scale(1)} />
      <ScrollView
        keyboardShouldPersistTaps="always"
        keyboardDismissMode="on-drag"
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "position" : "height"}
        >
          <View style={styles.childContainer}>
            <TextInput
              editable={false}
              label={translate("labelSelectInquiryType")}
              placeholder={translate("placeholder.pleaseSelect")}
              containerStyle={styles.input}
              value={""}
              isRequired
              errorMessage=""
              iconRightName="ic_arrow_down"
              iconRightSize={Metrics.icons.smallSmall}
              onPressIconRight={handleChooseComplaintType}
            />
            <TextInput
              editable={true}
              label={translate("labelTitleRequestComplaint")}
              placeholder={translate("placeholder.enterTitle")}
              containerStyle={styles.input}
              value={""}
              errorMessage=""
            />
            <TextInput
              editable={true}
              label={translate("labelIdComplaint")}
              placeholder={translate("placeholder.enterID")}
              containerStyle={styles.input}
              value={""}
              errorMessage=""
            />
            <View style={styles.attachFileContainer}>
              <Text style={styles.label}>{translate("labelAttachFile")}</Text>
              <View style={styles.attachFileContent}>
                <Button
                  title={translate("buttonUploadFile")}
                  buttonChildStyle={styles.uploadFileButton}
                  titleStyle={styles.uploadFileButtonTitle}
                  onPress={showChooseImage}
                />
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {image.map((image, index) => {
                    return (
                      <FastImageLoading
                        key={index}
                        sourceLoading={Images.productDefault}
                        source={{ uri: image.path }}
                        resizeMode={FastImage.resizeMode.cover}
                        style={styles.image}
                      />
                    );
                  })}
                </ScrollView>

                {image.length === 0 && (
                  <Text style={styles.noFileChoose}>
                    {translate("labelNoFileChoose")}
                  </Text>
                )}
              </View>
            </View>
            <View style={styles.attachFileContainer}>
              <Text style={styles.label}>
                {translate("labelInquiryContent")}
              </Text>
              <BaseInput
                placeholder={translate("placeholder.enterContent")}
                style={styles.textArea}
                multiline={true}
                numberOfLines={5}
                maxLength={500}
                textAlignVertical="top"
              />
            </View>
            <Button
              title={translate("buttonAddComplaint")}
              buttonChildStyle={styles.addComplaintButton}
              onPress={handleAddComplaint}
            />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <ChooseImageModal
        isShowModal={isShowChooseImage}
        onCloseModal={hideChooseImage}
        updateImage={setImage}
      />
    </View>
  );
};
