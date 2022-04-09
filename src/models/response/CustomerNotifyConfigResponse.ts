export interface CustomerNotifyConfigResponse {
  id: number;
  appId: string;
  notifyConfigCode: string;
  accountId: string;
  sendEmail: number | null;
  sendWeb: number | null;
  sendMobile: number | null;
  sendDesktop: number | null;
}
export interface NotifyConfigAndNotifyConfigGroupResponse {
  id: number;
  title: string;
  ord: number;
  appId: string;
  notifyConfigAndCustomerNotifyConfigDtos: NotifyConfigAndCustomerNotifyConfigResponse[];
}

export interface NotifyConfigAndCustomerNotifyConfigResponse {
  id: number;
  code: string;
  name: string;
  groupId: number;
  description: string;
  active: boolean;
  required: number | null;
  webRequired: number | null;
  mobileRequired: number | null;
  desktopRequired: number | null;
  ord: number | null;
  customerNotifyConfigDto: CustomerNotifyConfigResponse;
}
