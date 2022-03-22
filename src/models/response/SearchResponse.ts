export interface ISearchResponse {
  page: number;
  per_page: number;
  total_results: number;
  next_page: string;
  photos: Array<IPhoto>;
}

export interface IPhoto {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: ISrc;
  liked: boolean;
}

export interface ISrc {
  original: string;
  large2x: string;
  large: string;
  medium: string;
  small: string;
  portrait: string;
  landscape: string;
  tiny: string;
}
