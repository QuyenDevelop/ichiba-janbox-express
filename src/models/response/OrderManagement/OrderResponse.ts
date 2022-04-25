import { OrderPackagePieceResponse } from "@models";

export interface OrderResponseBargainMercari {
  id: number;
  state: string;
  status: OrderStatus | null;
  orderDetails: IOrderDetail[];
  orderServices: OrderService[];
  orderServiceMappings: OrderServiceMappingWithBargain[];
}

export interface OrderServiceMappingWithBargain {
  orderId: number;
  addServiceCode: string;
}

export interface OrderResponse {
  id: number;
  title: string;
  code: string;
  orderNumber: string;
  status: OrderStatus | null;
  orderDate: string;
  statusNote: string;
  orderType: string;
  state: string;
  note: string;
  paid: number | null;
  customerDistrict: string;
  customerAddress: string;
  customerPhone: string;
  customerName: string;
  customerProvince: string;
  customerWard: string;
  customerCountry: string;
  customerPostCode: string;
  purchaseAssign: string;
  purchaseAssignName: string;
  fastDelivery: number | null;
  shippingMethod: string;
  purchaseDate: string | null;
  purchaseBy: string;
  purchaseName: string;
  offerStatus: number | null;
  orderDetails: IOrderDetail[];
  orderReceivables: OrderReceivable[];
  orderPayments: OrderPayment[];
  orderServices: OrderServiceResponse[];
  orderSeller: OrderSeller;
  photos: string[];
  photoRequested: boolean;
  photoRequestPaid: boolean;
  paymentHistory: TransactionResponse[];
  orderPackages: OrderPackageWithOrderResponse[];
  isPaymentExpired: boolean;
  isAllowPaymentExpired: boolean;
  paymentExpiredDate: string | null;
  totalAmountReceivable: number;
  totalAmountPayment: number;
  isNeedPayment: boolean;
  feeCancelAuction: number;
  isAllowCancel: boolean;
  isAllowRefundBeforeCancel: boolean;
  prePaymentPercent?: number;
  currency?: string;
}

export interface TransactionResponse {
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

export interface CustomerPaymentTransaction {
  accountId: string;
  fullname: string;
  email: string;
  phone: string;
}

export interface OrderReceivable {
  id: number;
  amount: number | null;
  currency: string;
  exchangeRate: number | null;
  payType: string;
  payText: string;
  payNode: string;
  createdBy: string;
  createdDate: string | null;
  refCode: string;
  refType: string;
  accountId: string;
  payGroup: number | null;
  paid: boolean;
}

export interface OrderSeller {
  sellerId: string;
  name: string;
  ratting: number | null;
  review: number | null;
  email: string;
  phone: string;
  address: string;
  orderId: number;
}

export interface IOrderDetail {
  id: number;
  orderId: number;
  code: string;
  productName: string;
  productType: string;
  productLink: string;
  previewImage: string;
  trackingNumber: string;
  amount: number | null;
  amountUnit: string;
  price: number;
  priceExpected: number | null;
  priceBuy: number | null;
  tax: number | null;
  shippingFeeDate: string | null;
  shippingFee: number | null;
  exchangeRate: number | null;
  shippingFeeToLocal: number | null;
  shippingFeeLocal: number | null;
  buyFee: number | null;
  surcharge: number | null;
  status: number | null;
  note: string;
  refType: string;
  ref: string;
  noteOrder: string;
  proAttribute: string;
  quantity: number;
}

export interface OrderPayment {
  id: number;
  paymentType: string;
  paymentStatus: number | null;
  paymentTransaction: string;
  refundTransaction: string;
  paymentCount: number | null;
  amount: number;
  currency: string;
  exchangeRate: number | null;
  refCode: string;
  refType: string;
  accountId: string;
  createdDate: string | null;
  createdBy: string;
  payGroup: number | null;
}

export interface OrderService {
  id: number;
  code: string;
  name: string;
  description: string;
  active: boolean;
  icon: string;
  subs: string;
  ord: number | null;
  default: boolean | null;
  efexCode: string;
  addServiceType: string;
  childrenPrice: number;
  price: number;
  addServicePrice: AddServicePriceResponse[];
  children: OrderService[];
  group: string;
}

export interface AddServicePriceResponse {
  price: number | null;
  priceUSD: number | null;
  unitPrice: number | null;
  minPrice: number | null;
  unit: string;
  weight: number | null;
  currency: string;
}

export interface OrderTracking {
  id: number;
  orderId: number;
  tracking: string;
  transporter: string;
  trackingBox: string;
  pieces: number | null;
  createdBy: string;
  status: number;
  note: string;
  createdDate: string;
  router: string;
  mawb: string;
  packageCode: string;
  weight: number | null;
  width: number | null;
  height: number | null;
  length: number | null;
  orderPackageId: number | null;
  photos: string;
  whRef: string;
  postOffice: string;
  domesticShippingFee: number | null;
  internationalShippingFee: number | null;
  orderPackage: OrderPackage;
}

export interface OrderPackage {
  id: number;
  code: string;
  weight: number;
  image: string;
  status: number;
  createdDate: string;
  modifiedDate: string | null;
  modifiedBy: string;
  deliveryDate: string | null;
  deliveredDate: string | null;
  internationalShippingCode: string;
  refCode: string;
  shippingMethod: string;
  customerDistrict: string;
  customerAddress: string;
  customerPhone: string;
  customerName: string;
  customerProvince: string;
  customerWard: string;
  customerCountry: string;
  customerPostCode: string;
}

export enum OrderStatus {
  ChoXuLy = 0,
  TamUng = 1,
  MuaHang = 2,
  DaMuaHang = 3,
  DangVanChuyen = 4,
  DaNhapKho = 5,
  DangGiaoHang = 6,
  DaGiaoHang = 7,
  DaHuy = 8,
}

export interface ShippingMethod {
  id: string;
  name: string;
  icon: string;
  ord: number;
}

export interface CreateOrderResponse {
  orderId: number;
  isAllowPayment: boolean;
  couponId: number;
}

export interface OrderHistory {
  id: number;
  code: string;
  status: OrderStatus;
  totalAmount: number;
}

export interface OrderPackageWithOrderResponse {
  id: number;
  accountId: string;
  parentId: number | null;
  orderId: number | null;
  tracking: string;
  shipmentCode: string;
  status: number;
  totalPiece: number | null;
  domesticShippingFee: number | null;
  cod: number | null;
  storageFee: number | null;
  arrivedDate: string | null;
  deliveryDate: string | null;
  deliveredDate: string | null;
  partner: string;
  postOffice: string;
  transporter: string;
  trackingBox: string;
  weight: number | null;
  dimWeight: number | null;
  width: number | null;
  height: number | null;
  length: number | null;
  photos: string;
  photosFullUrl: string[];
  directShipment: number;
  shippingMethod: string;
  internationalShippingCode: string;
  internationalShipping: string;
  note: string;
  customerDistrict: string;
  customerAddress: string;
  customerPhone: string;
  customerName: string;
  customerProvince: string;
  customerWard: string;
  customerCountry: string;
  customerPostCode: string;
  createBy: string;
  createdDate: string;
  modifiedDate: string | null;
  modifiedBy: string;
  cargoSpservice: string;
  shipVia: string;
  daysLeftFree: number;
  orderPackagePieces: OrderPackagePieceResponse[];
  orderPackgeServiceMappings: OrderPackageServiceMappingsResponse[];
}

export interface OrderPackageServiceMappingsResponse {
  orderPackageId: number;
  price: number | null;
  status: number | null;
  pricePayment: number | null;
  pricePaymentBy: string;
  currency: string;
  exchange: number | null;
  addServiceCode: string;
}

export interface OrderServiceResponse {
  id: number;
  code: string;
  name: string;
  description: string;
  active: boolean;
  icon: string;
  subs: string;
  ord: number | null;
  default: boolean | null;
  efexCode: string;
  addServiceType: string;
  childrenPrice: number;
  price: number;
  addServicePrice: AddServicePriceResponse[];
  children: OrderServiceResponse[];
}

export interface AddServicePriceResponse {
  price: number | null;
  unitPrice: number | null;
  minPrice: number | null;
  unit: string;
  weight: number | null;
}
