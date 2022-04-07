import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import React, { FunctionComponent } from "react";
import ContentLoader, { Rect } from "react-content-loader/native";
import { Dimensions, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface OwnProps {}

type Props = OwnProps;

export const HeaderAccoutLoading: FunctionComponent<Props> = () => {
  const insets = useSafeAreaInsets();
  const heightIcon = ScreenUtils.scale(20);
  const heightLineTitle = ScreenUtils.scale(24);
  const heightLine = ScreenUtils.scale(12);
  return (
    <View style={{ paddingTop: insets.top }}>
      <ContentLoader
        speed={1}
        backgroundColor={Themes.colors.border}
        foregroundColor={Themes.colors.backgroundOpacity}
        height={Dimensions.get("window").height * 0.07}
      >
        <Rect
          x={ScreenUtils.scale(10)}
          y={0}
          rx={10}
          ry={10}
          width={"30%"}
          height={heightLineTitle}
        />
        <Rect
          x={ScreenUtils.scale(10)}
          y={heightLineTitle + 10}
          rx={6}
          ry={6}
          width={"30%"}
          height={heightLine}
        />
        <Rect
          x={"70%"}
          y={10}
          width={ScreenUtils.scale(28)}
          height={heightIcon}
        />
        <Rect
          x={"86%"}
          y={10}
          rx={12}
          ry={12}
          width={ScreenUtils.scale(20)}
          height={heightIcon}
        />
      </ContentLoader>
    </View>
  );
};
