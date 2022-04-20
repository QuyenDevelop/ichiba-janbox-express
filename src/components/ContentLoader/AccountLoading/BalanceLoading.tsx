import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import React, { FunctionComponent } from "react";
import ContentLoader, { Rect } from "react-content-loader/native";
import { Dimensions, View } from "react-native";

export const BalanceLoading: FunctionComponent = () => {
  const heightLineTitle = ScreenUtils.scale(24);
  const heightLine = ScreenUtils.scale(12);
  const heightButton = ScreenUtils.scale(48);
  return (
    <View style={{ paddingTop: ScreenUtils.scale(12) }}>
      <ContentLoader
        speed={1}
        backgroundColor={Themes.colors.border}
        foregroundColor={Themes.colors.backgroundOpacity}
        height={Dimensions.get("window").height * 0.07}
      >
        <Rect
          x={ScreenUtils.scale(20)}
          y={0}
          rx={6}
          ry={6}
          width={"20%"}
          height={heightLine}
        />
        <Rect
          x={ScreenUtils.scale(20)}
          y={heightLine + 10}
          rx={10}
          ry={10}
          width={"20%"}
          height={heightLineTitle}
        />
        <Rect x={"30%"} y={0} rx={6} ry={6} width={"10%"} height={heightLine} />
        <Rect
          x={"30%"}
          y={heightLine + 10}
          rx={10}
          ry={10}
          width={"20%"}
          height={heightLineTitle}
        />
        <Rect
          x={"60%"}
          y={0}
          rx={24}
          ry={24}
          width={"35%"}
          height={heightButton}
        />
      </ContentLoader>
    </View>
  );
};
