import { OrderWithCoupon } from "../response";

export interface PaymentRequest {
  orders: OrderWithCoupon[];
  currency: string;
  successUrl: string;
  cancelUrl: string;
  paymentOption: string;
}

export interface PaymentRequestV2 {
  orders: OrderWithCoupon[];
  successUrl: string;
  cancelUrl: string;
}

export interface DepositRequest {
  amount: number;
  currency: string;
  successUrl: string;
  cancelUrl: string;
  payMethod?: string;
}

export interface UpdateTransactionRequest {
  id: number;
  action: number;
  message: string;
  createdBy: string;
}
