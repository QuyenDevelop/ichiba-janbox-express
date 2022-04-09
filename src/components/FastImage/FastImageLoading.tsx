import React, { FunctionComponent } from "react";
import FastImage, { FastImageProps, Source } from "react-native-fast-image";

interface OwnProps extends FastImageProps {
  sourceLoading: Source;
}

type Props = OwnProps;

export const FastImageLoading: FunctionComponent<Props> = props => {
  const { sourceLoading, resizeMode, source, style } = props;

  return (
    <FastImage
      source={source || sourceLoading}
      resizeMode={resizeMode}
      style={style}
    />
  );
};
