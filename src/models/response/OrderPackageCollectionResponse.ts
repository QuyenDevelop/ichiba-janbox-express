import {
  AddServicePriceResponse,
  OrderPayment,
  OrderReceivable,
  OrderResponse,
  TransactionResponse,
} from "@models";
export interface OrderPackageCollectionResponse {
  id: number;
  accountId: string;
  parentId: number | null;
  orderId: number | null;
  tracking: string;
  shipmentCode: string;
  status: number;
  totalPiece: number | null;
  domesticShippingFee: number | null;
  internationalShippingFee: number | null;
  surcharge: number | null;
  cod: number | null;
  storageFee: number | null;
  arrivedDate: string | null;
  deliveryDate: string | null;
  deliveredDate: string | null;
  partner: string;
  postOffice: string;
  postOfficeCurrent: string;
  postOfficeCurrentName: string;
  transporter: string;
  trackingBox: string;
  weight: number | null;
  dimWeight: number | null;
  chargeWeight: number | null;
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
  daysLeftFree: number;
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
  order: OrderResponse;
  orders: OrderResponse[];
  orderPackagePieces: OrderPackagePieceResponse[];
  serviceSelected: AddServiceResponse[];
  orderPackageReceivables: OrderReceivable[];
  orderPackagePayments: OrderPayment[];
  listChildren: OrderPackageCollectionResponse[];
  dimensionStr: string[];
  shippingMethodName: string;
  route: string;
  currency: string;
  isAllowMerge?: boolean;
  isChecked?: boolean;
}

export interface IOrderPackageCollection {
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
  chargeWeight: number | null;
  width: number | null;
  height: number | null;
  length: number | null;
  photos: string;
  photosFullUrl: string[];
  directShipment: number;
  shippingMethod: string;
  internationalShippingCode: string;
  internationalShipping: string;
  internationalShippingFee: number | null;
  note: string;
  customerDistrict: string;
  customerAddress: string;
  customerPhone: string;
  customerName: string;
  customerProvince: string;
  customerWard: string;
  customerCountry: string;
  customerCountryCode: string;
  customerPostCode: string;
  createBy: string;
  createdDate: string;
  modifiedDate: string | null;
  modifiedBy: string;
  cargoSpservice: string;
  shipVia: string;
  daysLeftFree: number;
  order: CollectionOrder;
  orders: CollectionOrder[];
  orderPackagePieces: OrderPackagePieceDto[];
  serviceSelected: AddServiceDto[];
  orderPackageReceivables: MdOrderReceivable[];
  orderPackagePayments: MdOrderPayment[];
  listChildren: CollectionOrderPackage[];
  dimensionStr: string[];
  isWeightValid: boolean;
  shippingMethodName: string;
  isAllowMerge?: boolean;
  currency: string;
  route: string;
  internationalShippingDate: string;
  mawb: string;
  exportOnUtcDate: string;
  importOnUtcDate: string;
  postOfficeCurrent: string;
  postOfficeCurrentName: string;
}

export interface OrderPackagePieceResponse {
  id: number;
  orderPackageId: number;
  weight: number | null;
  width: number | null;
  height: number | null;
  length: number | null;
  pieceNumber: string;
  dimWeight: number | null;
}

export interface AddServiceResponse {
  code: string;
  name: string;
  description: string;
  addServiceType: string;
  active: boolean;
  subs: string;
  icon: string;
  default: boolean | null;
  ord: number | null;
  addServicePrice: AddServicePriceResponse[];
  amount: number;
}

export interface DetailFee {
  name: string;
  value: number;
  currency?: string;
}

export interface OrderPackageDetails {
  orderPackage: IOrderPackageCollection;
  transactions: TransactionResponse[];
  orderPackageReceivables: MdOrderReceivable[];
}

export interface MdOrderReceivable {
  id: number;
  amount: number | null;
  currency: string;
  exchangeRate: number | null;
  payType: string;
  payNode: string;
  createdBy: string;
  createdDate: string | null;
  refCode: string;
  refType: string;
  accountId: string;
  payGroup: number | null;
  description: string;
}

export interface CollectionOrder {
  id: number;
  guidId: string;
  title: string;
  accountId: string;
  code: string;
  orderNumber: string;
  status: number | null;
  statusNote: string;
  orderType: string;
  orderDate: string;
  state: string;
  note: string;
  paid: number | null;
  modifiedDate: string | null;
  modifiedBy: string;
  version: string;
  bidStatus: boolean | null;
  bidAccount: string;
  customerDistrict: string;
  customerAddress: string;
  customerPhone: string;
  customerName: string;
  customerProvince: string;
  customerWard: string;
  customerCountry: string;
  customerCountryCode: string;
  customerPostCode: string;
  shippingMethod: string;
  shipVia: string;
  supporter: string;
  purchaseAssignDate: string | null;
  purchaseAssign: string;
  purchaseAssignName: string;
  paymentStatus: boolean | null;
  reasonCancel: string;
  cancelDate: string | null;
  cancelBy: string;
  domesticShippingFee: number | null;
  internationalShippingCode: string;
  fastDelivery: number | null;
  cargoSPService: string;
  packageStatus: number | null;
  source: string;
  paymentExpiredDate: string | null;
  purchaseDate: string | null;
  purchaseBy: string;
  purchaseName: string;
  offerStatus: number | null;
  orderDetails: MdOrderdetail[];
  orderReceivables: MdOrderReceivable[];
  orderPayments: MdOrderPayment[];
  orderServiceMappings: MdOrderServiceMapping[];
  orderServices: MdAddService[];
  orderPackages: MdOrderPackage[];
  orderSeller: MdOrderSeller;
  orderPayables: MdOrderPayable[];
  document: MdDocument;
  createdDate: string;
  createdDateTicks: number;
  duration: number | null;
  currency: string;
  route: string;
  partner: string;
  postOffice: string;
}

export interface MdDocument {
  id: number;
  path: string;
  size: number;
  name: string;
  ext: string;
  refType: string;
  refCode: string;
  docType: string;
  createdBy: string;
  createdDate: string | null;
}
export interface MdAddService {
  code: string;
  name: string;
  description: string;
  addServiceType: string;
  active: boolean;
  subs: string;
  icon: string;
  default: boolean | null;
  ord: number | null;
  amount: number;
  addServicePrice: MdAddServicePrice[];
}

export interface MdAddServicePrice {
  price: number | null;
  unitPrice: number | null;
  minPrice: number | null;
  unit: string;
  weight: number | null;
}
export interface MdOrderSeller {
  sellerId: string;
  name: string;
  ratting: number | null;
  review: number | null;
  email: string;
  phone: string;
  address: string;
  orderId: number;
}

export interface MdOrderPayable {
  id: number;
  amount: number | null;
  currency: string;
  exchangeRate: number | null;
  payType: string;
  payNode: string;
  createdBy: string;
  createdDate: string | null;
  refCode: string;
  refType: string;
  supplier: string;
}

export interface OrderPackagePieceDto {
  id: number;
  orderPackageId: number;
  weight: number | null;
  width: number | null;
  height: number | null;
  length: number | null;
  pieceNumber: string;
  dimWeight: number | null;
  dimWeightCal: number | null;
}

export interface AddServiceDto {
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
  amount: number;
  addServicePrice: AddServicePriceDto[];
  children: AddServiceDto[];
}

export interface AddServicePriceDto {
  price: number | null;
  unitPrice: number | null;
  minPrice: number | null;
  unit: string;
  weight: number | null;
}

export interface MdOrderPayment {
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

export interface CollectionOrderPackage {
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
  directShipment: number;
  shippingMethod: string;
  internationalShippingCode: string;
  internationalShipping: string;
  internationalShippingFee: number | null;
  chargeWeight: number | null;
  note: string;
  customerDistrict: string;
  customerAddress: string;
  customerPhone: string;
  customerName: string;
  customerProvince: string;
  customerWard: string;
  customerCountry: string;
  customerCountryCode: string;
  customerPostCode: string;
  createBy: string;
  createdDate: string;
  modifiedDate: string | null;
  modifiedBy: string;
  cargoSpservice: string;
  shipVia: string;
  order: CollectionOrder;
  orders: CollectionOrder[];
  orderPackagePieces: MdOrderPackagePiece[];
  serviceSelected: MdAddService[];
  orderPackageReceivables: MdOrderReceivable[];
  orderPackagePayments: MdOrderPayment[];
  listChildren: CollectionOrderPackage[];
  photosFullUrl: string[];
}

export interface MdOrderPackagePiece {
  id: number;
  orderPackageId: number;
  weight: number | null;
  width: number | null;
  height: number | null;
  length: number | null;
  pieceNumber: string;
  dimWeight: number | null;
}

export interface MdOrderdetail {
  id: number;
  orderId: number;
  code: string;
  productName: string;
  productType: string;
  productOrigin: string;
  productLink: string;
  previewImage: string;
  images: string;
  productCategory: string;
  barCode: string;
  quantity: number | null;
  price: number | null;
  priceExpected: number | null;
  pricePurchase: number | null;
  tax: number | null;
  status: number | null;
  ref: string;
  refType: string;
  noteOrder: string;
  proAttribute: string;
  orderDate: string | null;
  bidAccount: string;
  bidStatus: boolean | null;
  shippingFee: number | null;
  isBargainOrder: boolean | null;
  customName: string;
  customPrice: number | null;
  description: string;
}

export interface MdOrderServiceMapping {
  orderPackageId: number;
  orderPackageServiceId: number;
  price: number | null;
  status: number | null;
  pricePayment: number | null;
  pricePaymentBy: string;
  currency: string;
  exchange: number | null;
}

export interface MdOrderPackage {
  id: number;
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
  chargeWeight: number | null;
  width: number | null;
  height: number | null;
  length: number | null;
  photos: string;
  directShipment: number;
  shippingMethod: string;
  internationalShippingCode: string;
  internationalShipping: string;
  internationalShippingFee: number | null;
  note: string;
  customerDistrict: string;
  customerAddress: string;
  customerPhone: string;
  customerName: string;
  customerProvince: string;
  customerWard: string;
  customerCountry: string;
  customerCountryCode: string;
  customerPostCode: string;
  createBy: string;
  createdDate: string;
  modifiedDate: string | null;
  modifiedBy: string;
  cargoSpservice: string;
  shipVia: string;
}
