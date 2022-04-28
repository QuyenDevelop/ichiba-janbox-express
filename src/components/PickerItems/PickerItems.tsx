import { CONSTANT, SCREENS } from "@configs";
import { useAppDispatch, useBoolean } from "@hooks";
import { PickerItemsResponse } from "@models";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { changeLanguage } from "@redux";
import { translate } from "@shared";
import { Themes } from "@themes";
import React, { FunctionComponent, useEffect, useState } from "react";
import { ScrollView, View, ViewStyle } from "react-native";
import { ImageStyle } from "react-native-fast-image";
import { ConfirmDialog } from "../ConfirmDialog/ConfirmDialog";
import { PickerItem } from "./PickerItem";

interface OwnProps {
  items: PickerItemsResponse[];
  style?: ViewStyle;
  iconLeftStyle?: ImageStyle;
  activeDefaultData?: any;
  isActive?: boolean;
  isRightIcon: boolean;
  type: string;
}

type Props = OwnProps;

export const PickerItems: FunctionComponent<Props> = props => {
  const {
    items,
    activeDefaultData,
    type,
    isActive,
    isRightIcon,
    style,
    iconLeftStyle,
  } = props;
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [currentIndexActive, setCurrentIndexActive] =
    useState(activeDefaultData);

  const [isShowModal, showModal, hideModal] = useBoolean();
  const [languageUser, setLanguageUser] = useState("");

  const confirmChangeLanguage = () => {
    showModal();
    dispatch(changeLanguage(languageUser));

    //TODO: tạm thời vì chưa có code push nên chưa reset app nên cho navigate về màn LaunchScreen
    navigation.navigate(SCREENS.LAUNCH_SCREEN);
  };

  const setValue = (value: any, id: any) => {
    setCurrentIndexActive(id);
    switch (type) {
      case CONSTANT.TYPE_PICKER.LANGUAGES:
        showModal();
        setLanguageUser(value);
        break;
    }
  };

  useEffect(() => {}, [currentIndexActive, isShowModal]);

  return (
    <View>
      <ConfirmDialog
        message={translate("button.changeLanguage")}
        isVisible={isShowModal}
        onDismiss={hideModal}
        onDeclinePress={hideModal}
        onAcceptPress={confirmChangeLanguage}
        acceptText={translate("button.confirm")}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {items.map((item: PickerItemsResponse, index: number) => (
          <PickerItem
            type={type}
            style={style}
            iconLeftStyle={iconLeftStyle}
            iconRight={isRightIcon}
            isActive={isActive ? currentIndexActive === item.id : false}
            item={item}
            key={index}
            onPress={() => setValue(item.value, item.id)}
            isTranslated={true}
            titleColor={Themes.colors.coolGray100}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default PickerItems;
