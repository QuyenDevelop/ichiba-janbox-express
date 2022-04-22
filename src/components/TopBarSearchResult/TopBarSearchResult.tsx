import { ScreenUtils } from "@helpers";
import { Icon } from "@shared";
import { Metrics, Themes } from "@themes";
import React, { FunctionComponent } from "react";
import { Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "./styles";

interface OwnProps {
  title: string;
  goBack: () => void;
  showSearch?: boolean;
  onSearch?: () => void;
  containerStyle?: ViewStyle;
  showFilter?: boolean;
  onFilter?: () => void;
}

type Props = OwnProps;

export const TopBarSearchResult: FunctionComponent<Props> = props => {
  const {
    title,
    goBack,
    onSearch,
    showSearch,
    containerStyle,
    onFilter,
    showFilter,
  } = props;

  const insets = useSafeAreaInsets();
  // const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <View
      style={[
        styles.hederContainer,
        { ...containerStyle, paddingTop: insets.top },
      ]}
    >
      <TouchableOpacity style={[styles.backButton]} onPress={() => goBack()}>
        <Icon
          name={"ic_arrow_left"}
          size={ScreenUtils.isPad() ? Metrics.icons.large : Metrics.icons.small}
          color={Themes.colors.black07}
        />
        <Text style={styles.searchValueStyle} numberOfLines={1}>
          {title}
        </Text>
      </TouchableOpacity>
      <View style={styles.rightContainer}>
        {!showSearch && (
          <TouchableOpacity
            onPress={onSearch}
            style={styles.rightButton}
            hitSlop={styles.hitSlop}
          >
            <Icon
              name={"ic_search"}
              size={
                ScreenUtils.isPad() ? Metrics.icons.large : Metrics.icons.small
              }
              color={Themes.colors.black07}
            />
          </TouchableOpacity>
        )}
        {!showFilter && (
          <TouchableOpacity style={styles.toolBtn} onPress={onFilter}>
            <Icon
              name="ic_filter"
              size={Metrics.icons.small}
              color={Themes.colors.coolGray80}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
