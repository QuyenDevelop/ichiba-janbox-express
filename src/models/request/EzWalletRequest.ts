export interface TransactionHistoryRequest {
  query?: string;
  pageIndex: number;
  pageSize: number;
  type?: number | null;
  source?: number | null;
  startDate?: string | null;
  endDate?: string | null;
}

export enum TransactionType {
  DEPOSIT,
  PAY_ORDER,
  PAY,
  REFUND,
  REFUND_FROM_CHARGE_ORDER,
  PAY_PACKAGE,
  FREEZE,
  FREEZE_CANCEL,
}

export enum DepositType {
  STRIPE,
  PAYPAL,
  WALLET,
  GMO,
  VND_WALLET,
  VND_BANK,
}
