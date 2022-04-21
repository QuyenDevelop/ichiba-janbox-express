import { Header, PickerItems } from "@components";
import { CONSTANT } from "@configs";
import { ScreenUtils } from "@helpers";
import { useAppSelector, useStatusBar } from "@hooks";
import { PickerItemsResponse } from "@models";
import { translate } from "@shared";
import { Themes } from "@themes";
import React, { FunctionComponent } from "react";
import { ScrollView, View } from "react-native";
import styles from "./styles";

interface OwnProps {
  language: string;
}

type Props = OwnProps;

let dataLanguages: Array<PickerItemsResponse> = [
  {
    id: "1",
    name: "Tiếng Việt",
    value: "vi-VN",
    code: "VN",
  },
  {
    id: "2",
    name: "English",
    value: "en-US",
    code: "GB",
  },
  {
    id: "3",
    name: "日本語",
    value: "ja-JP",
    code: "JP",
  },
  // {
  //   id: "4",
  //   name: "中国",
  //   value: "zh-CN",
  //   code: "CN",
  // },
  // {
  //   id: "5",
  //   name: "台灣",
  //   value: "zh-TW",
  //   code: "TW",
  // },
];

export const LanguagesScreen: FunctionComponent<Props> = () => {
  const language = useAppSelector(state => state.user.language);
  useStatusBar("dark-content");
  const scrollRef = React.useRef(null);

  const renderData = () => {
    return (
      <PickerItems
        style={{ paddingHorizontal: ScreenUtils.scale(20) }}
        isRightIcon={false}
        isActive={true}
        type={CONSTANT.TYPE_PICKER.LANGUAGES}
        activeDefaultData={
          language
            ? dataLanguages.find(x => x.value === language)?.id
            : undefined
        }
        items={dataLanguages}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Header
        style={{ paddingHorizontal: ScreenUtils.scale(20) }}
        colorIconGoBack={Themes.colors.coolGray60}
        isHiddenTextBack={true}
        titleStyle={styles.headerTitle}
        title={translate("button.language")}
        isGoBack
      />
      <ScrollView
        ref={scrollRef}
        style={styles.childContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: ScreenUtils.scale(10),
        }}
      >
        {renderData()}
      </ScrollView>
    </View>
  );
};
