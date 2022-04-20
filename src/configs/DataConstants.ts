import { Themes } from "@themes";
import moment from "moment";

const languageCodes = [
  { code: "vi", tag: "vi-VN" },
  { code: "en", tag: "en-US" },
  { code: "ja", tag: "ja-JP" },
  // { code: "cn", tag: "zh-CN" },
  // { code: "tw", tag: "zh-TW" },
];

export enum sortPaymentMethods {
  STRIPE = 0,
  PAYPAL = 1,
  WALLET = 2,
  GMO = 3,
  JPY_WALLET = 4,
  VND_WALLET = 5,
  USD_WALLET = 6,
  VND_BANK = 7,
  COUPON = 8,
}

const paymentMethods = [
  {
    id: 0,
    name: "paymentMethod.stripe",
    value: sortPaymentMethods.STRIPE,
    color: Themes.colors.warningMain,
  },
  {
    id: 1,
    name: "paymentMethod.paypal",
    value: sortPaymentMethods.PAYPAL,
    color: Themes.colors.warningMain,
  },
  {
    id: 2,
    name: "paymentMethod.wallet",
    value: sortPaymentMethods.WALLET,
    color: Themes.colors.warningMain,
  },
  {
    id: 3,
    name: "paymentMethod.gmo",
    value: sortPaymentMethods.GMO,
    color: Themes.colors.warningMain,
  },
  {
    id: 4,
    name: "paymentMethod.jpyWallet",
    value: sortPaymentMethods.JPY_WALLET,
    color: Themes.colors.warningMain,
  },
  {
    id: 5,
    name: "paymentMethod.vndWallet",
    value: sortPaymentMethods.VND_WALLET,
    color: Themes.colors.warningMain,
  },
  {
    id: 6,
    name: "paymentMethod.usdWallet",
    value: sortPaymentMethods.USD_WALLET,
    color: Themes.colors.warningMain,
  },
  {
    id: 7,
    name: "paymentMethod.vndBank",
    value: sortPaymentMethods.VND_BANK,
    color: Themes.colors.warningMain,
  },
  {
    id: 8,
    name: "paymentMethod.coupon",
    value: sortPaymentMethods.COUPON,
    color: Themes.colors.warningMain,
  },
];

export enum sortTransactionTypes {
  DEPOSIT = 0,
  PAY_ORDER = 1,
  AUTHORIZE_PAY_ORDER = 2,
  AUTHORIZE_AUTION = 3,
  PAY = 4,
  REFUND = 5,
  PAY_PACKAGE = 6,
  FREEZE = 7,
  FREEZE_CANCEL = 8,
  PAY_CANCEL_ORDER_AUCTION = 9,
  CASHBACK_PACKAGE = 10,
  CASHBACK_ORDER = 11,
  WITHDRAW = 12,
}
const transactionTypes = [
  {
    id: 0,
    name: "transactionTypes.deposit",
    value: sortTransactionTypes.DEPOSIT,
    stringValue: "DEPOSIT",
    color: Themes.colors.warningMain,
  },
  {
    id: 1,
    name: "transactionTypes.payOrder",
    value: sortTransactionTypes.PAY_ORDER,
    stringValue: "PAY_ORDER",
    color: Themes.colors.warningMain,
  },
  {
    id: 2,
    name: "transactionTypes.authorizePayOrder",
    value: sortTransactionTypes.AUTHORIZE_PAY_ORDER,
    stringValue: "AUTHORIZE_PAY_ORDER",
    color: Themes.colors.warningMain,
  },
  {
    id: 3,
    name: "transactionTypes.authorizeAuction",
    value: sortTransactionTypes.AUTHORIZE_AUTION,
    stringValue: "AUTHORIZE_AUTION",
    color: Themes.colors.warningMain,
  },
  {
    id: 4,
    name: "transactionTypes.pay",
    value: sortTransactionTypes.PAY,
    stringValue: "PAY",
    color: Themes.colors.warningMain,
  },
  {
    id: 5,
    name: "transactionTypes.refund",
    value: sortTransactionTypes.REFUND,
    stringValue: "REFUND",
    color: Themes.colors.warningMain,
  },
  {
    id: 6,
    name: "transactionTypes.payPackage",
    value: sortTransactionTypes.PAY_PACKAGE,
    stringValue: "PAY_PACKAGE",
    color: Themes.colors.warningMain,
  },
  {
    id: 7,
    name: "transactionTypes.freeze",
    value: sortTransactionTypes.FREEZE,
    stringValue: "FREEZE",
    color: Themes.colors.warningMain,
  },
  {
    id: 8,
    name: "transactionTypes.freezeCancel",
    value: sortTransactionTypes.FREEZE_CANCEL,
    stringValue: "FREEZE_CANCEL",
    color: Themes.colors.warningMain,
  },
  {
    id: 9,
    name: "transactionTypes.payCancelOrderAuction",
    value: sortTransactionTypes.PAY_CANCEL_ORDER_AUCTION,
    stringValue: "PAY_CANCEL_ORDER_AUCTION",
    color: Themes.colors.warningMain,
  },
  {
    id: 10,
    name: "transactionTypes.cashbackPackage",
    value: sortTransactionTypes.CASHBACK_PACKAGE,
    stringValue: "CASHBACK_PACKAGE",
    color: Themes.colors.warningMain,
  },
  {
    id: 11,
    name: "transactionTypes.cashbackOrder",
    value: sortTransactionTypes.CASHBACK_ORDER,
    stringValue: "CASHBACK_ORDER",
    color: Themes.colors.warningMain,
  },
  {
    id: 12,
    name: "transactionTypes.withdraw",
    value: sortTransactionTypes.WITHDRAW,
    stringValue: "WITHDRAW",
    color: Themes.colors.warningMain,
  },
];

const today = new Date();
const rangeDay = [
  {
    id: "0",
    name: "rangeDay.all",
    value: "",
    startDate: undefined,
    endDate: undefined,
  },
  {
    id: "1",
    name: "rangeDay.last30days",
    value: "",
    startDate: new Date(moment().subtract(30, "days").valueOf()),
    endDate: today,
  },
  {
    id: "2",
    name: "rangeDay.last90days",
    value: "",
    startDate: new Date(moment().subtract(90, "days").valueOf()),
    endDate: today,
  },
  {
    id: "3",
    name: "rangeDay.inYear",
    value: "",
    startDate: new Date(moment().startOf("year").valueOf()),
    endDate: today,
  },
];

const transactionTypesValue = {
  DEPOSIT: "DEPOSIT",
  PAY_ORDER: "PAY_ORDER",
  AUTHORIZE_PAY_ORDER: "AUTHORIZE_PAY_ORDER",
  AUTHORIZE_AUTION: "AUTHORIZE_AUTION",
  PAY: "PAY",
  REFUND: "REFUND",
  PAY_PACKAGE: "PAY_PACKAGE",
  FREEZE: "FREEZE",
  FREEZE_CANCEL: "FREEZE_CANCEL",
  PAY_CANCEL_ORDER_AUCTION: "PAY_CANCEL_ORDER_AUCTION",
  CASHBACK_PACKAGE: "CASHBACK_PACKAGE",
  CASHBACK_ORDER: "CASHBACK_ORDER",
  WITHDRAW: "WITHDRAW",
};

const transactionStatus = [
  {
    value: 0,
    name: "transactionStatus.unknown",
  },
  {
    value: 1,
    name: "transactionStatus.requiresPaymentMethod",
  },
  {
    value: 2,
    name: "transactionStatus.requiresConfirmation",
  },
  {
    value: 3,
    name: "transactionStatus.requiresAction",
  },
  {
    value: 4,
    name: "transactionStatus.processing",
  },
  {
    value: 5,
    name: "transactionStatus.success",
  },
  {
    value: 6,
    name: "transactionStatus.canceled",
  },
  {
    value: 7,
    name: "transactionStatus.refund",
  },
  {
    value: 8,
    name: "transactionStatus.freeze",
  },
  {
    value: 9,
    name: "transactionStatus.payCancelOrderAuction",
  },
  {
    value: 10,
    name: "transactionStatus.cashbackPackage",
  },
  {
    value: 11,
    name: "transactionStatus.cashbackOrder",
  },
  {
    value: 12,
    name: "transactionStatus.withdraw",
  },
];

const transactionSource = [
  {
    value: "STRIPE",
    name: "paymentMethod.stripe",
  },
  {
    value: "PAYPAL",
    name: "paymentMethod.paypal",
  },
  {
    value: "WALLET",
    name: "paymentMethod.wallet",
  },
  {
    value: "GMO",
    name: "paymentMethod.gmo",
  },
  {
    value: "VND_WALLET",
    name: "paymentMethod.vndWallet",
  },
  {
    value: "VND_BANK",
    name: "paymentMethod.vndBank",
  },
  {
    value: "PAYME",
    name: "paymentMethod.payMe",
  },
];

export const DATA_CONSTANT = {
  LANGUAGE_CODE: languageCodes,
  PAYMENT_METHODS: paymentMethods,
  TRANSACTION_TYPES: transactionTypes,
  TRANSACTION_TYPES_VALUE: transactionTypesValue,
  RANGE_DAY: rangeDay,
  TRANSACTION_STATUS: transactionStatus,
  TRANSACTION_SOURCE: transactionSource,
};
