export interface GetListOrderPackageRequestClient {
  keywords?: string | null;
  status: number[];
  pageIndex: number;
  pageSize: number;
}

export interface GetListOrderPackageRequestClientV2 {
  keywords?: string;
  status?: number[];
  route?: string;
  pageSize: number | null;
  pageIndex: number | null;
  tab: number;
}
