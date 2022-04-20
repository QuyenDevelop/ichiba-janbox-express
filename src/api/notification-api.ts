import {
  AppNotificationResponse,
  BasePagingResponseEntity,
  BaseResponseEntity,
  NotificationStatus,
  NotifyConfigAndNotifyConfigGroupResponse,
  SearchAppNotificationRequestClient,
  UpdateCustomerNotifyConfigRequestClient,
  WhatNewResponse,
  WhatNewsRequest,
} from "@models";
import { BaseApi } from "./baseApi";
class NotificationApi extends BaseApi {
  markReadAll(data: {}) {
    return this.put("updatereadallappnotification", data, {});
  }

  markRead(data: { id: string; status: NotificationStatus }) {
    return this.put("updateappnotificationstatus", data, {});
  }
  getNotifiConfig() {
    return this.get<
      BaseResponseEntity<Array<NotifyConfigAndNotifyConfigGroupResponse>>
    >("getcustomerconfig", {});
  }
  putNotifiCustomerConfig(data: UpdateCustomerNotifyConfigRequestClient) {
    return this.put("updatecustomernotifyconfig", data, {});
  }
  getListNotify = async (request: SearchAppNotificationRequestClient) => {
    return this.get<BasePagingResponseEntity<Array<AppNotificationResponse>>>(
      "searchappnotification",
      request,
    );
  };
  getWhatNews(request: WhatNewsRequest) {
    return this.get<BasePagingResponseEntity<Array<WhatNewResponse>>>(
      `getWhatNews?pageIndex=${request.pageIndex}&pageSize=${request.pageSize}`,
      null,
    );
  }
  dismissWhatNew(emailNotifyId: number) {
    return this.post(`dismissWhatNew/${emailNotifyId}`, null, emailNotifyId);
  }
}

export default new NotificationApi("notify");
