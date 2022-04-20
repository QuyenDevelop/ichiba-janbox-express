import {
  Address,
  BankIcResponse,
  BasePagingResponseEntity,
  BaseResponseEntity,
  CustomerResponse,
  DepositRequest,
  DepositTransactionResponse,
  TransactionHistoryRequest,
  TransactionHistoryResponse,
  UpdateCustomerRequest,
  UpdateTransactionRequest,
  Wallet,
  WalletWithPrimaryCurrency,
} from "@models";
import { BaseApi } from "./baseApi";

class CustomerApi extends BaseApi {
  getListAddress() {
    return this.get<BaseResponseEntity<Array<Address>>>(
      "getlistbyaccountid",
      null,
    );
  }

  getAddress(id: number) {
    return this.get<BaseResponseEntity<Address>>("getcustomeraddressbyid", {
      id,
    });
  }

  addAddress(data: any) {
    return this.post("addcustomeraddress", data, {});
  }

  updateAddress(data: Address) {
    return this.put("updatecustomeraddress", data, {});
  }

  updateCustomer(data: UpdateCustomerRequest) {
    return this.put("updatecustomer", data, {});
  }

  setDefaultAddress(id: number) {
    return this.post("setdefaultcustomeraddress", { id }, {});
  }

  deleteAddress(id: number) {
    return this.delete("deletecustomeraddress", { id }, {});
  }

  getCustomerWallet() {
    return this.get<BaseResponseEntity<Wallet[]>>("getcustomerwallet", {});
  }

  // updateDeviceId(deviceTokenMobile: string) {
  //   return this.post("updatedevicetoken", { deviceTokenMobile }, {});
  // }

  // getSignalToken(anonymousId: string) {
  //   return this.get<BaseResponseEntity<string>>("generatesignaltoken", {
  //     anonymousId,
  //   });
  // }

  depositPaypal(depositRequest: DepositRequest) {
    return this.post("depositpaypal", depositRequest, {});
  }

  getAllBank() {
    return this.get<BaseResponseEntity<Array<BankIcResponse>>>(
      "getallbank",
      {},
    );
  }

  createDepositFromBank(amount: number, bankName: string, bankNumber: string) {
    return this.post(
      "createdepositfrombank",
      {
        amount: amount,
        bankName: bankName,
        bankNumber: bankNumber,
      },
      {},
    );
  }

  getDepositDetail(transactionId: number) {
    return this.get<BaseResponseEntity<DepositTransactionResponse>>(
      "getdepositdetail",
      { transactionId: transactionId },
    );
  }

  getTransactionHistory = (
    transactionHistoryRequest: TransactionHistoryRequest,
  ) => {
    return this.get<
      BasePagingResponseEntity<Array<TransactionHistoryResponse>>
    >("gettransactionhistory", transactionHistoryRequest);
  };

  getCustomerProfileById = () => {
    return this.get<BaseResponseEntity<CustomerResponse>>("getbyaccountid", {});
  };

  // updateLocale = (countryCode: string) => {
  //   return this.post("updatecustomerlocale", { countryCode }, {});
  // };

  // getCustomerProfile = () => {
  //   return this.get<BaseResponseEntity<Array<CustomerConfig>>>(
  //     "getcustomerprofile",
  //     {},
  //   );
  // };

  // customerCreateWithdrawalTransaction = (
  //   request: CustomerCreateWithdrawalTransactionRequest,
  // ) => {
  //   return this.post("customercreatewithdrawaltransaction", request, {});
  // };

  getWalletWithPrimaryCurrency = (currencyCode?: string) => {
    return this.get<BaseResponseEntity<WalletWithPrimaryCurrency>>(
      "getwalletwithprimarycurrency",
      { currencyCode },
    );
  };

  setDefaultWallet = (walletId: string) => {
    return this.post("setdefaultwallet", { walletId }, {});
  };

  // getListBank = () => {
  //   return this.get<BaseResponseEntity<Array<string>>>("getlistbank", {});
  // };

  depositPayME(depositRequest: DepositRequest) {
    return this.post("depositpayme", depositRequest, {});
  }

  updateWithdrawalTransaction(request: UpdateTransactionRequest) {
    return this.post("updatewithdrawaltransaction", request, {});
  }
}

export default new CustomerApi("customer");
