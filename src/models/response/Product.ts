export interface Product {
  id: number;
  brandName: string;
  imageSource: any;
  timeCountdown: string | undefined;
  title: string;
  author: string;
  starPoint: number | undefined;
  starCount: number | undefined;
  likeCount: number | undefined;
  primaryPrice: string | undefined;
  promotionPrice: string | undefined;
  percentPromotion: string | undefined;
  calculatedPrice: string | undefined;
  categories?: string | undefined;
}
