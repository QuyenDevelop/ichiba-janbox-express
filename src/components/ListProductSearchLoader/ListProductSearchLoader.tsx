import { ScreenUtils } from "@helpers";
import { Themes } from "@themes";
import React, { FunctionComponent } from "react";
import ContentLoader, { Rect } from "react-content-loader/native";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const ListProductSearchLoader: FunctionComponent = () => {
  const insets = useSafeAreaInsets();
  const lineHeight = ScreenUtils.scale(12);
  const heightProduct = ScreenUtils.scale(220);
  const heightImg = ScreenUtils.scale(132);
  return (
    <View style={{ paddingTop: insets.top }}>
      <ContentLoader
        speed={1}
        backgroundColor={Themes.colors.border}
        foregroundColor={Themes.colors.backgroundOpacity}
        height={"100%"}
      >
        <Rect x={"2%"} y={0} width={"46%"} height={heightImg} />
        <Rect
          x={"2%"}
          y={heightImg + 10}
          width={"45%"}
          rx={6}
          ry={6}
          height={lineHeight}
        />
        <Rect
          x={"2%"}
          y={heightImg + 32}
          width={"25%"}
          rx={6}
          ry={6}
          height={lineHeight}
        />
        <Rect
          x={"2%"}
          y={heightImg + 54}
          width={"35%"}
          rx={6}
          ry={6}
          height={lineHeight}
        />
        <Rect
          x={"2%"}
          y={heightImg + 76}
          width={"46%"}
          rx={6}
          ry={6}
          height={lineHeight}
        />
        <Rect x={"52%"} y={0} width={"46%"} height={heightImg} />
        <Rect
          x={"52%"}
          y={heightImg + 10}
          width={"45%"}
          rx={6}
          ry={6}
          height={lineHeight}
        />
        <Rect
          x={"52%"}
          y={heightImg + 32}
          width={"25%"}
          rx={6}
          ry={6}
          height={lineHeight}
        />
        <Rect
          x={"52%"}
          y={heightImg + 54}
          width={"35%"}
          rx={6}
          ry={6}
          height={lineHeight}
        />
        <Rect
          x={"52%"}
          y={heightImg + 76}
          width={"46%"}
          rx={6}
          ry={6}
          height={lineHeight}
        />
        <Rect
          x={"2%"}
          y={heightProduct + 20}
          width={"46%"}
          height={heightImg}
        />
        <Rect
          x={"2%"}
          y={heightProduct + heightImg + 30}
          width={"45%"}
          rx={6}
          ry={6}
          height={lineHeight}
        />
        <Rect
          x={"2%"}
          y={heightProduct + heightImg + 52}
          width={"25%"}
          rx={6}
          ry={6}
          height={lineHeight}
        />
        <Rect
          x={"2%"}
          y={heightProduct + heightImg + 74}
          width={"35%"}
          rx={6}
          ry={6}
          height={lineHeight}
        />
        <Rect
          x={"2%"}
          y={heightProduct + heightImg + 96}
          width={"46%"}
          rx={6}
          ry={6}
          height={lineHeight}
        />
        <Rect
          x={"52%"}
          y={heightProduct + 20}
          width={"46%"}
          height={heightImg}
        />
        <Rect
          x={"52%"}
          y={heightProduct + heightImg + 30}
          width={"45%"}
          rx={6}
          ry={6}
          height={lineHeight}
        />
        <Rect
          x={"52%"}
          y={heightProduct + heightImg + 52}
          width={"25%"}
          rx={6}
          ry={6}
          height={lineHeight}
        />
        <Rect
          x={"52%"}
          y={heightProduct + heightImg + 74}
          width={"35%"}
          rx={6}
          ry={6}
          height={lineHeight}
        />
        <Rect
          x={"52%"}
          y={heightProduct + heightImg + 96}
          width={"46%"}
          rx={6}
          ry={6}
          height={lineHeight}
        />
        {/* <Rect x={"80%"} y={0} width={"40%"} height={heightProduct} /> */}

        {/* <Rect
          x={0}
          y={heightProduct + 10}
          width={"40%"}
          height={heightProduct}
        />
        <Rect
          x={"35%"}
          y={heightProduct + 10}
          width={"40%"}
          height={heightProduct}
        />
        <Rect
          x={"80%"}
          y={heightProduct + 10}
          width={"40%"}
          height={heightProduct}
        /> */}
      </ContentLoader>
    </View>
  );
};
