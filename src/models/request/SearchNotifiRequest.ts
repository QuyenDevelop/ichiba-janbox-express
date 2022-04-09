import { NotificationStatus } from "@models";
export interface SearchAppNotificationRequestClient {
  refType?: string | undefined;
  pageIndex: number | undefined;
  pageSize: number | undefined;
  status?: NotificationStatus | undefined;
}
