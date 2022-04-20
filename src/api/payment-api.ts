import {
  BaseResponseEntity,
  PaymentMethodResponse,
  PaymentRequest,
  PaymentWithOrderRequest,
  PayMETransactionFee,
  PaypalPaymentFee,
} from "@models";
import { BaseApi } from "./baseApi";

class PaymentApi extends BaseApi {
  // getCustomerAddressAndShipping() {
  //   return this.get<BaseResponseEntity<AddressShipping>>(
  //     "getcustomeraddressandshippingmethod",
  //     {},
  //   );
  // }

  orderPayment(paymentRequest: PaymentRequest) {
    return this.post("orderpayment", paymentRequest, {});
  }

  getFeeStandard(OrderType: string, Amount: number) {
    return this.get<BaseResponseEntity<number>>("getfeestandard", {
      OrderType,
      Amount,
    });
  }

  orderByWallet(paymentRequest: PaymentWithOrderRequest) {
    return this.post("orderpaymentfromwallet", paymentRequest, {});
  }

  getMemberPaymentInformation(paymentOption: string) {
    return this.get("getmemberpaymentinformation", { paymentOption });
  }

  checkExistGmoCard() {
    return this.get<BaseResponseEntity<boolean>>("checkexistcardgmo", {});
  }

  getLinkGmo() {
    return this.get<BaseResponseEntity<{ linkUrl: string }>>(
      "getlinkgmomanagement",
      {},
    );
  }

  getListCardGmo() {
    return this.get<BaseResponseEntity<Array<PaymentMethodResponse>>>(
      "listcardgmo",
      {},
    );
  }

  getPaypalPaymentFeeV2 = (currency: string) => {
    return this.get<BaseResponseEntity<PaypalPaymentFee>>(
      "getpaypalpaymentfee",
      { currency },
    );
  };

  getPaymeTransactionFee() {
    return this.get<BaseResponseEntity<Array<PayMETransactionFee>>>(
      "getpaymepaymentfee",
      {},
    );
  }
}

export default new PaymentApi("payment");
