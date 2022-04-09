export interface CustomerNotifyConfigRequest {
  id: number;
  notifyConfigCode: string;
  sendEmail: number | null;
  sendWeb: number | null;
  sendMobile: number | null;
  sendDesktop: number | null;
}
export interface UpdateCustomerNotifyConfigRequest {
  appId: string;
  accountId: string;
  customerNotifyConfigs: CustomerNotifyConfigRequest[];
}

export interface UpdateCustomerNotifyConfigRequestClient {
  customerNotifyConfigs: CustomerNotifyConfigRequest[];
}
export interface WhatNewsRequest {
  pageIndex: number;
  pageSize: number;
}
