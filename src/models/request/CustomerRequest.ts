export interface CustomerCreateWithdrawalTransactionRequest {
  amount: number;
  walletId: string;
  paymentMethod: string;
  bankName: string;
  bankNumber: string;
  description: string;
  accountHolder: string;
  bankBrand: string;
}
