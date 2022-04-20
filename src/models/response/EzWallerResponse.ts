import { CustomerPaymentTransaction, OrderPaymentTransaction } from "@models";

export interface TransactionHistoryResponse {
  id: number;
  amount: number;
  type: string;
  objectRef: string;
  transactionRef: string;
  source: string;
  metaData: string;
  status: number;
  walletId: string;
  matchingDate: string | null;
  customer: CustomerPaymentTransaction;
  createdDate: string;
  orderPayment: OrderPaymentTransaction;
  createdDateUtc: string;
  matchingDateUtc: string | null;
}
