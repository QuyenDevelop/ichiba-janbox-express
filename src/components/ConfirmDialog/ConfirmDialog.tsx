/* eslint-disable react-native/no-inline-styles */
import { Button, translate } from "@shared";
import { Themes } from "@themes";
import React, { FunctionComponent } from "react";
import { StyleProp, Text, View, ViewStyle } from "react-native";
import Modal from "react-native-modal";
import styles from "./styles";

export interface Props {
  onDismiss: () => void;
  isVisible?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  onModalHide?: () => void;
  disableDismissOnTouchOutside?: boolean;
  title?: string;
  message?: string;
  acceptText?: string;
  declineText?: string;
  onAcceptPress?: () => void;
  onDeclinePress?: () => void;
  disableCancelButton?: boolean;
}

export const ConfirmDialog: FunctionComponent<Props> = props => {
  const {
    isVisible,
    onDismiss,
    disableDismissOnTouchOutside,
    containerStyle,
    title,
    message,
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
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
          {title ?? translate("label.confirmation")}
        </Text>
        <Text style={styles.message}>{message}</Text>
        <View style={styles.bottom}>
          {!disableCancelButton && (
            <Button
              buttonStyle={{
                flex: 1,
                borderWidth: 1,
                borderColor: Themes.colors.colGray10,
                borderLeftWidth: 0,
                borderBottomWidth: 0,
              }}
              titleStyle={{
                fontSize: 16,
                ...Themes.font.medium,
                color: Themes.colors.danger60,
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
              borderWidth: 1,
              borderRightWidth: 0,
              borderBottomWidth: 0,
              borderColor: Themes.colors.colGray10,
            }}
            titleStyle={{
              fontSize: 16,
              ...Themes.font.semiBold,
              color: Themes.colors.primary,
            }}
            buttonChildStyle={{
              borderRadius: 0,
              backgroundColor: "transparent",
            }}
            title={acceptText ?? translate("button.submit")}
            onPress={onAcceptPress}
          />
        </View>
      </View>
    </Modal>
  );
};
