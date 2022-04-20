import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import React, { FunctionComponent } from "react";
import ContentLoader, { Rect } from "react-content-loader/native";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface OwnProps {
  height: number;
}

type Props = OwnProps;

export const BannerContentLoader: FunctionComponent<Props> = props => {
  const { height } = props;
  const insets = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: insets.top }}>
      <ContentLoader
        speed={1}
        backgroundColor={Themes.colors.border}
        foregroundColor={Themes.colors.backgroundOpacity}
        height={"100%"}
      >
        <Rect
          x={0}
          y={0}
          rx={16}
          ry={16}
          width={"100%"}
          height={ScreenUtils.scale(height)}
        />
      </ContentLoader>
    </View>
  );
};
