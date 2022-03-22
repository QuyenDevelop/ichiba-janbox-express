import { ISearchRequest, ISearchResponse } from "@models";
import { BaseApi } from "./baseApi";

class ImageApi extends BaseApi {
  search(req: ISearchRequest) {
    return this.get<ISearchResponse>("search", req);
  }
}

export default new ImageApi("v1");
