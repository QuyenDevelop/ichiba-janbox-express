import { useBoolean } from "@hooks";
import { Checkbox, Icon, translate } from "@shared";
import { Metrics, Themes } from "@themes";
import React, { FunctionComponent } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";

interface Props {
  isCheckAll: boolean;
  onCheckAll: () => void;
  total: number;
  totalChecked: number;
  searchContent: string;
  onChangeContent: (value: string) => void;
  onShowFilter: () => void;
  hideSelectAll?: boolean;
}

export const HeaderTool: FunctionComponent<Props> = props => {
  const {
    isCheckAll,
    total,
    totalChecked,
    onCheckAll,
    searchContent,
    onChangeContent,
    onShowFilter,
    hideSelectAll,
  } = props;

  const [isShowSearch, showSearch, hideSearch] = useBoolean();

  return (
    <View style={styles.headerTool}>
      <View style={styles.headerToolContainer}>
        {isShowSearch ? (
          <View style={styles.searchViewInput}>
            <TextInput
              placeholder={translate("placeholder.baseSearch")}
              style={styles.searchInput}
              value={searchContent}
              onChangeText={onChangeContent}
              autoFocus={true}
              placeholderTextColor={Themes.colors.coolGray60}
            />
            <TouchableOpacity>
              <Icon
                name="ic_search"
                size={Metrics.icons.smallSmall}
                color={Themes.colors.coolGray100}
              />
            </TouchableOpacity>
          </View>
        ) : hideSelectAll ? (
          <View />
        ) : (
          <View style={styles.headerToolLeft}>
            <Checkbox
              style={styles.checkbox}
              onChange={onCheckAll}
              checked={isCheckAll}
            />
            <Text>
              <Text style={styles.toolLabel}>
                {translate("labelSelected")}{" "}
              </Text>
              <Text
                style={[styles.toolLabel, { color: Themes.colors.coolGray60 }]}
              >
                ({totalChecked}/{total})
              </Text>
            </Text>
          </View>
        )}

        <View style={styles.headerToolRight}>
          {isShowSearch ? (
            <TouchableOpacity
              style={styles.toolBtn}
              onPress={() => {
                onChangeContent("");
                hideSearch();
              }}
            >
              <Icon
                name="ic_close"
                size={Metrics.icons.smallSmall}
                color={Themes.colors.coolGray100}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.toolBtn} onPress={showSearch}>
              <Icon
                name="ic_search"
                size={Metrics.icons.smallSmall}
                color={Themes.colors.coolGray100}
              />
            </TouchableOpacity>
          )}

          <TouchableOpacity style={styles.toolBtn} onPress={onShowFilter}>
            <Icon
              name="ic_filter"
              size={Metrics.icons.smallSmall}
              color={Themes.colors.coolGray100}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
