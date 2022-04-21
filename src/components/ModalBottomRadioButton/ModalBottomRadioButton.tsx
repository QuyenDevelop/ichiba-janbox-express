/* eslint-disable react-native/no-inline-styles */
import { ScreenUtils } from "@helpers";
import { BottomSheetOption, RadioButton, TextInput, translate } from "@shared";
import { Icons, Metrics } from "@themes";
import React, { FunctionComponent, useEffect, useState } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import Modal from "react-native-modal";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "./styles";

interface OwnProps {
  header?: string;
  isShowModal: boolean;
  titleModal: string;
  arrOption: BottomSheetOption[];
  onCloseModal: Function;
  onModalHide?: () => void;
  isSearch: boolean;
  titleSearch?: string;
  isTranslated?: boolean;
  itemStyle?: ViewStyle;
  contentContainerStyle?: ViewStyle;
  keyActive: string | "";
  handleSubmitSearch: (item: BottomSheetOption) => void;
  disabledRadioButton?: boolean;
}

type Props = OwnProps;

export const ModalBottomRadioButton: FunctionComponent<Props> = props => {
  const {
    onCloseModal,
    titleModal,
    arrOption,
    isShowModal,
    onModalHide,
    isSearch,
    titleSearch,
    isTranslated,
    itemStyle,
    contentContainerStyle,
    keyActive,
    handleSubmitSearch,
    disabledRadioButton,
  } = props;
  const [isShowModalState, setIsShowModalState] = useState(isShowModal);
  const [dataSource, setDataSource] = useState(arrOption);
  const insets = useSafeAreaInsets();

  const hideModal = function () {
    setIsShowModalState(false);

    if (onCloseModal) {
      onCloseModal();
    }
  };

  const searchFilterFunction = (searchText: string, data: any) => {
    let newData = [];
    if (searchText) {
      newData = data.filter(function (item: any) {
        const itemData = item.title.toUpperCase();
        const textData = searchText.toUpperCase();
        return itemData.includes(textData);
      });
      setDataSource(newData);
    } else {
      setDataSource(arrOption);
    }
  };

  useEffect(() => {
    if (!isShowModal) {
      setDataSource(arrOption);
    }
    setIsShowModalState(isShowModal);
  }, [arrOption, isShowModal]);

  useEffect(() => {
    setDataSource(arrOption);
  }, [arrOption]);

  return (
    <Modal
      useNativeDriver
      useNativeDriverForBackdrop
      statusBarTranslucent
      propagateSwipe={true}
      hardwareAccelerated={false}
      onBackdropPress={() => hideModal()}
      onBackButtonPress={() => hideModal()}
      onSwipeComplete={() => hideModal()}
      onModalHide={onModalHide ? () => onModalHide() : () => {}}
      swipeDirection="down"
      style={styles.modalContainer}
      isVisible={isShowModalState}
      hideModalContentWhileAnimating={true}
      backdropTransitionOutTiming={0}
    >
      <View
        style={{
          maxHeight:
            Metrics.screenHeight -
            insets.top -
            ScreenUtils.scale(Metrics.baseMargin * 20),
        }}
      >
        <View style={styles.headerContainer} />

        <View
          style={[
            styles.contentContainer,
            contentContainerStyle,
            { paddingBottom: insets.bottom },
          ]}
        >
          {titleModal !== "" && (
            <View style={styles.titleModalContainer}>
              <Text style={styles.titleModalText}>
                {isTranslated ? titleModal : translate(titleModal)}
              </Text>
              <TouchableOpacity
                onPress={() => hideModal()}
                hitSlop={styles.hitSlop}
              >
                <Icons.Ionicons
                  name={"ios-close-outline"}
                  size={Metrics.icons.medium}
                />
              </TouchableOpacity>
            </View>
          )}

          {isSearch ? (
            <View style={styles.searchBarContainer}>
              <TextInput
                onChangeText={(text: string) => {
                  searchFilterFunction(text, arrOption);
                }}
                placeholder={titleSearch}
                inputStyle={styles.search}
                containerStyle={{ flex: 1 }}
                iconName={"ic_search"}
              />
            </View>
          ) : null}

          <ScrollView showsVerticalScrollIndicator={false}>
            {dataSource &&
              dataSource.map((item: BottomSheetOption, index: number) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleSubmitSearch(item)}
                  style={[styles.itemContainer, itemStyle]}
                >
                  <View style={styles.titleContainer}>
                    {!disabledRadioButton && (
                      <RadioButton
                        checked={item.key === keyActive}
                        style={{ marginRight: ScreenUtils.scale(10) }}
                        onChange={() => handleSubmitSearch(item)}
                      />
                    )}

                    <Text
                      numberOfLines={1}
                      style={[
                        styles.text,
                        item.titleColor ? { color: item.titleColor } : {},
                      ]}
                    >
                      {isTranslated ? item.title : translate(item.title)}
                    </Text>
                  </View>

                  {item.content ? (
                    <View style={styles.contentDetailContainer}>
                      <Text
                        numberOfLines={2}
                        style={[
                          styles.textContent,
                          item.contentColor ? { color: item.contentColor } : {},
                        ]}
                      >
                        {isTranslated ? item.content : translate(item.content)}
                      </Text>
                    </View>
                  ) : null}
                </TouchableOpacity>
              ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};
