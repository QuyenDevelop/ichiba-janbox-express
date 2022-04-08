export interface PickerItemsResponse {
  id: string | undefined;
  name: string | undefined;
  icon?: any | undefined;
  code?: string | null;
  value: string | undefined;
  refType?: string | null;
  endPoint?: string | null;
  color?: string | null;
}

export interface PickerItemsRangeDate extends PickerItemsResponse {
  startDate: Date | undefined;
  endDate: Date | undefined;
}
