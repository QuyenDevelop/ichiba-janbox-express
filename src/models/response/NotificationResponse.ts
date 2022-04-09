export enum NotificationStatus {
  Unsent,
  Sent,
  Read,
}
export interface AppNotificationResponse {
  id: number;
  title: string;
  body: string;
  refId: string;
  refCode: string;
  refType: string;
  status: NotificationStatus;
  createdDate: string;
  accountId: string;
  image: string;
}
export interface WhatNewResponse {
  id: number;
  subject: string;
  refCode: string;
  createdDate: Date;
}
