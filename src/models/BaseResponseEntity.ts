export interface BaseResponseEntity<T> {
  statusCode: number;
  errorCodeApi: string | null;
  message: string | null;
  data: T;
  status: boolean;
  detailError: [];
}
export interface BasePagingResponseEntity<T> extends BaseResponseEntity<T> {
  total: number;
  pageSize: number;
  pageIndex: number;
}
export interface Paging {
  pageSize: number;
  pageIndex: number;
}

export interface FilterConditions {
  queryParams: string;
  name: string;
  id: string;
  types: string;
  // asdford
  parentQueryParams: string;
  childrenQueryParams: string;
  isDisabled: boolean;
}
export interface Dictionary<T> {
  [Key: string]: T;
}
