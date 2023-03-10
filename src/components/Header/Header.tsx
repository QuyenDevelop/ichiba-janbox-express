/* eslint-disable no-sparse-arrays */
import { ScreenUtils } from "@helpers";
import { useAppDispatch, useAppSelector } from "@hooks";
import { useNavigation } from "@react-navigation/core";
import { changeLanguage } from "@redux";
import { BottomSheet, Icon, translate } from "@shared";
import { Metrics, Themes } from "@themes";
import React, { FunctionComponent, useEffect, useState } from "react";
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./styles";

interface OwnProps {
  colorIconGoBack?: string;
  isHiddenTextBack?: boolean;
  isGoBack?: boolean;
  iconColor?: string;
  iconLeftName?: string[];
  iconLeftColor?: Array<string>;
  iconLeftSize?: Array<number>;
  iconLeftStyle?: Array<StyleProp<ViewStyle>>;
  iconLeftOnPress?: Array<() => void>;
  iconRightName?: string[];
  iconRightColor?: Array<string>;
  iconRightSize?: Array<number>;
  iconRightStyle?: Array<StyleProp<ViewStyle>>;
  iconRightOnPress?: Array<() => void>;
  titleRight?: string;
  titleLeft?: string;
  titleRightStyle?: StyleProp<TextStyle>;
  titleRightOnPress?: () => void;
  title?: string;
  isCenterTitle?: boolean;
  titleColor?: string;
  titleStyle?: TextStyle;
  style?: ViewStyle;
  searchPlaceholder?: string;
  onChangeSearchValue?: (value: string) => void;
  searchValue?: string;
  autoFocusSearch?: boolean;
  isEnableSearch?: boolean;
  isEnableChangeLanguage?: boolean;
  onGoBack?: () => void;
}

const languageList = {
  VietNam: { label: "Tiếng Việt", value: "vi-VN" },
  English: { label: "English", value: "en-US" },
  Japan: { label: "日本語", value: "ja-JP" },
  // China: { label: "中国", value: "zh-CN" },
  // Taiwan: { label: "台灣", value: "zh-TW" },
};

type Props = OwnProps;

export const Header: FunctionComponent<Props> = props => {
  const {
    isGoBack,
    style,
    iconColor,
    iconLeftName,
    iconLeftColor,
    iconLeftSize,
    iconLeftStyle,
    iconLeftOnPress,
    iconRightName,
    iconRightColor,
    iconRightOnPress,
    iconRightSize,
    iconRightStyle,
    titleRight,
    titleLeft,
    titleRightStyle,
    titleRightOnPress,
    title,
    isCenterTitle,
    titleColor,
    titleStyle,
    isEnableSearch,
    isEnableChangeLanguage,
    isHiddenTextBack,
    colorIconGoBack,
    onGoBack,
  } = props;
  const insets = useSafeAreaInsets();
  const language = useAppSelector(state => state.user.language);
  const [isShowChangeLanguageModal, setIsShowChangeLanguageModal] =
    useState(false);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  // const [accLanguage] = useState(useAppSelector(state => state.user.language));
  const [languageSelected, setLanguageSelected] = useState(
    Object.values(languageList).find(item => item.value === language),
  );
  useEffect(() => {
    setLanguageSelected(
      Object.values(languageList).find(item => item.value === language),
    );
  }, [language]);

  const arrOptions = [
    {
      title: languageList.VietNam.label,
      onPress: () => {
        setLanguage(languageList.VietNam.value);
        setIsShowChangeLanguageModal(false);
      },
    },
    {
      title: languageList.English.label,
      onPress: () => {
        setLanguage(languageList.English.value);
        setIsShowChangeLanguageModal(false);
      },
    },
    {
      title: languageList.Japan.label,
      onPress: () => {
        setLanguage(languageList.Japan.value);
        setIsShowChangeLanguageModal(false);
      },
    },
    // {
    //   title: languageList.China.label,
    //   onPress: () => {
    //     setLanguage(languageList.China.value);
    //     setIsShowChangeLanguageModal(false);
    //   },
    // },
    // {
    //   title: languageList.Taiwan.label,
    //   onPress: () => {
    //     setLanguage(languageList.Taiwan.value);
    //     setIsShowChangeLanguageModal(false);
    //   },
    // },
  ];

  const setLanguage = (value: string) => {
    dispatch(changeLanguage(value));
  };

  const getIconWidth = () => {
    const itemRightLength = iconRightName ? iconRightName.length : 0;
    const itemLeftLength = iconLeftName ? iconLeftName.length : 0;
    if (itemRightLength > itemLeftLength) {
      return itemRightLength * ScreenUtils.scale(40);
    } else {
      return itemLeftLength * ScreenUtils.scale(40);
    }
  };

  const getIconLeftColor = function (index: number) {
    if (iconColor) {
      return iconColor;
    }
    if (iconLeftColor && iconLeftColor[index]) {
      return iconLeftColor[index];
    }
    return Themes.colors.coolGray;
  };

  const renderLeftIcon = function () {
    return (
      <View
        style={[
          styles.leftContainer,
          isCenterTitle ? { width: getIconWidth() } : {},
        ]}
      >
        {iconLeftName?.map((item: string, index: number) => (
          <TouchableOpacity
            onPress={iconLeftOnPress ? iconLeftOnPress[index] : () => {}}
            key={index}
            style={[
              iconLeftStyle && iconLeftStyle[index] && iconLeftStyle[index],
              styles.leftIconButton,
            ]}
            hitSlop={{ top: 20, bottom: 20, right: 20, left: 20 }}
          >
            <Icon
              color={getIconLeftColor(index)}
              name={item}
              size={
                iconLeftSize && iconLeftSize[index]
                  ? iconLeftSize[index]
                  : Metrics.icons.small
              }
              key={index}
              styles={[styles.leftIcon]}
            />
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const getIconRightColor = function (index: number) {
    if (iconColor) {
      return iconColor;
    }
    if (iconRightColor && iconRightColor[index]) {
      return iconRightColor[index];
    }
    return Themes.colors.coolGray;
  };

  const renderRightIcon = function () {
    return (
      <View
        style={[
          styles.rightContainer,
          isCenterTitle ? { width: getIconWidth() } : {},
        ]}
      >
        {iconRightName?.map((item: string, index: number) => (
          <TouchableOpacity
            onPress={iconRightOnPress ? iconRightOnPress[index] : () => {}}
            key={index}
            style={[
              iconRightStyle && iconRightStyle[index] && iconRightStyle[index],
              { marginLeft: ScreenUtils.scale(12) },
            ]}
            hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
          >
            <Icon
              color={getIconRightColor(index)}
              name={item}
              size={
                iconRightSize && iconRightSize[index]
                  ? iconRightSize[index]
                  : Metrics.icons.small
              }
              key={index}
              styles={styles.rightIcon}
            />
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderRight = () => {
    return (
      <View style={[styles.rightContainer]}>
        <TouchableOpacity
          onPress={titleRightOnPress ? titleRightOnPress : () => {}}
          style={[styles.rightIconButton]}
        >
          <Text style={[styles.titleRightStyle, titleRightStyle]}>
            {titleRight}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderGoback = () => {
    return (
      <View style={[styles.leftContainer]}>
        <TouchableOpacity
          onPress={() => (onGoBack ? onGoBack() : navigation.goBack())}
          style={[styles.goBackContainer]}
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
        >
          <Icon
            color={colorIconGoBack ? colorIconGoBack : Themes.colors.primary}
            name={"ic_arrow_left"}
            size={Metrics.icons.small}
            styles={styles.iconGoBack}
          />
          {isHiddenTextBack ? null : (
            <Text style={styles.goBack}>
              {titleLeft ? titleLeft : translate("button.back")}
            </Text>
          )}
        </TouchableOpacity>
      </View>
    );
  };

  const renderChangeLanguage = () => {
    return (
      <TouchableOpacity
        onPress={() => setIsShowChangeLanguageModal(true)}
        style={styles.changeLanguageContainer}
      >
        <Icon
          color={Themes.colors.coolGray60}
          name={"ic_globe"}
          size={Metrics.icons.small}
          styles={styles.iconGoBack}
        />
        <Text style={styles.language}>
          {languageSelected?.label || translate("button.language")}
        </Text>
        <Icon
          color={Themes.colors.coolGray60}
          name={"ic_arrow_down"}
          size={Metrics.icons.smallSmall}
          styles={styles.iconGoBack}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, style, { paddingTop: insets.top }]}>
      {isGoBack ? renderGoback() : renderLeftIcon()}
      {!isEnableSearch && title ? (
        <Text
          numberOfLines={1}
          style={[
            styles.titleCenter,
            {
              color: titleColor ? titleColor : Themes.colors.textPrimary,
            },
            titleStyle,
          ]}
        >
          {title}
        </Text>
      ) : null}
      {titleRight
        ? renderRight()
        : isEnableChangeLanguage
        ? renderChangeLanguage()
        : renderRightIcon()}
      <BottomSheet
        isTranslated={true}
        isSearch={false}
        arrOption={arrOptions}
        isShowModal={isShowChangeLanguageModal}
        onCloseModal={() => setIsShowChangeLanguageModal(false)}
        showTitle={false}
        chooseValue={languageSelected?.label}
      />
    </View>
  );
};
