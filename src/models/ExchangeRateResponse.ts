export interface ExchangeRateResponse {
  code: string;
  name: string;
  buy: number | null;
  transfer: number | null;
  sell: number | null;
  add: number | null;
  rate: number;
}

export interface ExchangeRateResponseV2 {
  code: string;
  name: string;
  exchangerateItems: ExchangeRateItems[];
}

export interface ExchangeRateItems {
  fromCode: string;
  rate: number;
}
