export interface CustomerResponse {
  guid: string;
  id: number;
  accountId: string;
  fullname: string;
  email: string;
  phone: string;
  code: string;
  tranCode: string;
  gender: number | null;
  birthday: string | null;
  avatar: string;
  idName: string;
  idImages: string;
  userName: string;
  deviceToken: string;
  locate: string;
  careBy: string;
  deviceTokenMobile: string;
  country: string;
}

export interface CustomerConfig {
  key: string;
  value: string;
  accountId: string;
  description: string | null;
}

export interface CustomerWallet {
  walletId: string;
  cash: number;
  cashFreeze: number;
  cashAvailable: number;
  isDefault: boolean | null;
  currency: string;
  rateToPrimary: number;
}

export interface WalletWithPrimaryCurrency {
  listWallet: CustomerWallet[];
  cashPrimary: number;
  cashFreezePrimary: number;
  cashAvailablePrimary: number;
  rateToPrimary: number;
  rateFromJPYToPrimary: number;
  rateFromUSDToPrimary: number;
  currencyCodePrimary: string;
  isAllowWithDrawal: boolean;
}
export interface PaypalPaymentFee {
  percentFee: number;
  fixedFee: number;
}
