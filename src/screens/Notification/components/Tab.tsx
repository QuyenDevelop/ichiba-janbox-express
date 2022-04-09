import { translate } from "@shared";
import React, { FunctionComponent } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export interface TabModel {
  type: "general" | "order" | "system";
  title: string;
}

interface Props {
  onPress: (type: "general" | "order" | "system") => void;
  activeTab: "general" | "order" | "system";
}

export const Tab: FunctionComponent<Props> = props => {
  const { onPress, activeTab } = props;

  const tabs: TabModel[] = [
    {
      type: "general",
      title: translate("labelGeneral"),
    },
    {
      type: "order",
      title: translate("labelOrder"),
    },
    {
      type: "system",
      title: translate("labelSystem"),
    },
  ];

  const tabView = (tab: TabModel) => {
    return (
      <TouchableOpacity
        style={[styles.tabItem, activeTab === tab.type && styles.tabItemActive]}
        onPress={() => onPress(tab.type)}
        key={tab.type}
      >
        <Text
          style={[
            styles.tabTitle,
            activeTab === tab.type && styles.tabTitleActive,
          ]}
        >
          {tab.title}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.tabContainer}>
      <ScrollView
        contentContainerStyle={styles.tabStyle}
        keyboardShouldPersistTaps="handled"
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        {tabs.map(item => tabView(item))}
      </ScrollView>
    </View>
  );
};
