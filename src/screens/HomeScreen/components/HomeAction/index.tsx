import { CONSTANT } from "@configs";
import { useAppSelector, useBoolean } from "@hooks";
import { Icon, translate } from "@shared";
import { Metrics, Themes } from "@themes";
import React, { FunctionComponent, useEffect, useState } from "react";
import {
  LayoutAnimation,
  Linking,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
// import { Freshchat } from "react-native-freshchat-sdk";
import styles from "./styles";

export const HomeAction: FunctionComponent = () => {
  const [isShowAction, , , toggle] = useBoolean();
  const [unread] = useState<number>(0);
  const language = useAppSelector(state => state.user.language);

  // useEffect(() => {
  //   Freshchat.addEventListener(
  //     Freshchat.EVENT_UNREAD_MESSAGE_COUNT_CHANGED,
  //     () => {
  //       Freshchat.getUnreadCountAsync((data: any) => {
  //         let count = data.count;
  //         let status = data.status;
  //         if (status) {
  //           setUnread(count);
  //         }
  //       });
  //     },
  //   );
  // }, []);

  useEffect(() => {}, [language]);

  const showFreshDesk = () => {
    // toggle();
    // Freshchat.showConversations();
  };

  const onPressShow = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    toggle();
  };

  const estimatedPrice = () => {
    toggle();
  };

  return (
    <View style={styles.container}>
      {isShowAction && (
        <View style={styles.overView}>
          <TouchableOpacity
            style={styles.actionButton1}
            onPress={estimatedPrice}
          >
            <Icon
              name="ic_calculator"
              size={Metrics.icons.small}
              color={Themes.colors.coolGray100}
            />
            <Text style={styles.buttonText}>
              {translate("buttonEstimatedPrice")}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton1}
            onPress={() => {
              toggle();
              Linking.canOpenURL(CONSTANT.WHATSAPP_LINK).then(() => {
                Linking.openURL(CONSTANT.WHATSAPP_LINK);
              });
            }}
          >
            <Icon
              name="ic_phone_call"
              size={Metrics.icons.small}
              color={Themes.colors.coolGray100}
            />
            <Text style={styles.buttonText}>{translate("buttonWhatsapp")}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton1}
            onPress={showFreshDesk}
          >
            <Icon
              name="ic_live_chat"
              size={Metrics.icons.small}
              color={Themes.colors.coolGray100}
            />
            <Text style={styles.buttonText}>{translate("buttonLiveChat")}</Text>
            {unread > 0 && (
              <View style={styles.unreadMessage}>
                <Text style={styles.unreadMessageText}>{unread}</Text>
              </View>
            )}
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={styles.actionButton1}
            onPress={() => {
              toggle();
              const messengerLink =
                language === "vi-VN"
                  ? CONSTANT.MESSENGER_LINK.VN
                  : CONSTANT.MESSENGER_LINK.JP;
              Linking.canOpenURL(messengerLink).then(() => {
                Linking.openURL(messengerLink);
              });
            }}
          >
            <Icon
              name="ic_messenger_fill"
              size={Metrics.icons.small}
              color={Themes.colors.coolGray100}
            />
            <Text style={styles.buttonText}>
              {translate("button.messenger")}
            </Text>
          </TouchableOpacity> */}
        </View>
      )}
      <TouchableOpacity
        style={styles.actionButton}
        onPress={onPressShow}
        hitSlop={styles.hitSlop}
      >
        <Icon
          name={isShowAction ? "ic_close" : "ic_plus"}
          size={Metrics.icons.small}
          color={Themes.colors.coolGray80}
        />
      </TouchableOpacity>
    </View>
  );
};
