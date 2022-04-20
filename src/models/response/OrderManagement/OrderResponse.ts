export interface CustomerPaymentTransaction {
  accountId: string;
  fullname: string;
  email: string;
  phone: string;
}

export interface OrderPaymentTransaction {
  id: number;
  title: string;
  code: string;
  status: number | null;
  trackingStatus: number | null;
  orderType: string;
  orderDate: string;
  state: string;
  note: string;
  images: string;
}
