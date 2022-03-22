import { ScreenUtils } from "@helpers";

export const Sizes = {
  font: {
    mediumLargeToMedium: {
      ...(ScreenUtils.isPad() ? { fontSize: 24 } : { fontSize: 16 }),
    },
    mediumToMedium: {
      ...(ScreenUtils.isPad() ? { fontSize: 18 } : { fontSize: 16 }),
    },
    mediumToSmall: {
      ...(ScreenUtils.isPad() ? { fontSize: 18 } : { fontSize: 14 }),
    },
    smallToSmall: {
      ...(ScreenUtils.isPad() ? { fontSize: 16 } : { fontSize: 14 }),
    },
    smallToSmallSmall: {
      ...(ScreenUtils.isPad() ? { fontSize: 14 } : { fontSize: 12 }),
    },
    smallToSmallMini: {
      ...(ScreenUtils.isPad() ? { fontSize: 12 } : { fontSize: 10 }),
    },
  },
};
