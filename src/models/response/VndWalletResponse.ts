export interface BankIcResponse {
  id: number;
  bankName: string;
  bankFullName: string;
  picture: string;
  icon: string;
  accountNumber: string;
  accountName: string;
  branch: string;
  province: string;
  address: string;
  description: string;
  status: number | null;
  forDeposit: number | null;
  disabled: boolean;
}

export interface DepositTransactionResponse {
  id: number;
  amount: number;
  accountId: string;
  walletId: string;
  type: string;
  objectRef: string;
  transactionRef: string;
  source: string;
  metaData: string;
  metaDataModel: MetaDataModel;
  status: number;
  createdDate: Date | string;
  code: string;
  bankName: string;
  bankNumber: string;
  bankIc: BankIcResponse;
  contentResult: string;
  matchingDate: string | null;
  bankTransactionDate: string | null;
  bankDescription: string;
}

export interface MetaDataModel {
  code: string;
  BankName: string;
  BankNumber: string;
}
