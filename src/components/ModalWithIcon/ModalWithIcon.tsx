/* eslint-disable react-native/no-inline-styles */
import { ScreenUtils } from "@helpers";
import { Button, Icon, translate } from "@shared";
import { Icons, Themes } from "@themes";
import React, { FunctionComponent } from "react";
import {
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import Modal from "react-native-modal";
import styles from "./styles";

export interface PropsModal {
  onDismiss: () => void;
  isVisible?: boolean;
  iconAtHead?: boolean;
  iconName: string;
  containerStyle?: StyleProp<ViewStyle>;
  onModalHide?: () => void;
  disableDismissOnTouchOutside?: boolean;
  title?: string;
  message?: string;
  acceptText?: string;
  declineText?: string;
  isHyperLink?: boolean;
  txtHyperLink?: string;
  onPressHyperLink?: () => void;
  onAcceptPress?: () => void;
  onDeclinePress?: () => void;
  disableCancelButton?: boolean;
}

export const ModalWithIcon: FunctionComponent<PropsModal> = props => {
  const {
    isVisible,
    iconAtHead,
    iconName,
    onDismiss,
    disableDismissOnTouchOutside,
    containerStyle,
    title,
    message,
    isHyperLink,
    txtHyperLink,
    onPressHyperLink,
    declineText,
    onDeclinePress,
    acceptText,
    onAcceptPress,
    disableCancelButton,
  } = props;
  return (
    <Modal
      useNativeDriver
      useNativeDriverForBackdrop
      statusBarTranslucent
      propagateSwipe={true}
      hardwareAccelerated={false}
      swipeDirection="down"
      isVisible={isVisible}
      onBackButtonPress={!disableDismissOnTouchOutside ? onDismiss : undefined}
      onBackdropPress={!disableDismissOnTouchOutside ? onDismiss : undefined}
      avoidKeyboard={true}
      {...props}
    >
      <View style={[styles.container, containerStyle]}>
        <TouchableOpacity style={styles.iconClose} onPress={onDeclinePress}>
          <Icons.AntDesign name="close" size={40} />
        </TouchableOpacity>
        {iconAtHead && (
          <View style={styles.iconContainer}>
            <Icon name={iconName} size={56} color={Themes.colors.orangeF27} />
          </View>
        )}
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
          {title ?? translate("label.activate")}
        </Text>
        <Text style={styles.message}>
          {message}
          {isHyperLink && (
            <Text style={{ color: "blue" }} onPress={onPressHyperLink}>
              {txtHyperLink}
            </Text>
          )}
        </Text>
        <View style={styles.button}>
          {!disableCancelButton && (
            <Button
              buttonStyle={{
                flex: 1,
                borderRadius: ScreenUtils.scale(8),
                backgroundColor: Themes.colors.colGray10,
                marginHorizontal: ScreenUtils.scale(7.5),
              }}
              titleStyle={{
                fontSize: 16,
                ...Themes.font.medium,
                color: Themes.colors.coolGray60,
              }}
              buttonChildStyle={{
                borderRadius: 0,
                backgroundColor: "transparent",
              }}
              title={declineText ?? translate("button.cancel")}
              onPress={onDeclinePress}
            />
          )}
          <Button
            buttonStyle={{
              flex: 1,
              borderRadius: ScreenUtils.scale(8),
              marginHorizontal: ScreenUtils.scale(7.5),
              backgroundColor: Themes.colors.orangeF27,
            }}
            titleStyle={{
              fontSize: 16,
              ...Themes.font.medium,
              color: Themes.colors.white,
            }}
            buttonChildStyle={{
              borderRadius: 0,
              backgroundColor: "transparent",
            }}
            title={acceptText ?? translate("button.activate")}
            onPress={onAcceptPress}
          />
        </View>
      </View>
    </Modal>
  );
};
