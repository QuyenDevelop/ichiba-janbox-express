export interface PaymentMethodResponse {
  cardSeq: number;
  defaultFlag: number;
  cardName: string;
  cardNo: string;
  expire: {
    month: number;
    year: number;
  };
  holderName: string;
  deleteFlag: number;
}

export interface PaymentWithOrderRequest {
  orders: Array<OrderWithCoupon>;
  walletId: string;
}

export interface OrderWithCoupon {
  orderId: number;
  couponId: number;
}

export interface PaymentWithOrderRequestV2 {
  orders: Array<OrderWithCoupon>;
}

export interface PayMETransactionFee {
  key?: string;
  value?: string;
  content?: string;
}
