export interface BannerResponse {
  id: number;
  title: string;
  description: string;
  link: string;
  categoryId: string;
  positionId: number;
  order: number;
  image: string;
  target: string;
  languageId: string;
  imageFullUrl: string;
  imagePreview: string;
  imagePreviewFullUrl: string;
}

export interface HomePageBannerByWebsiteResponse {
  bannerResponses: Array<BannerResponse>;
  headerResponse: Array<BannerResponse>;
  websiteType: string;
}
