import {
  BannerResponse,
  BaseResponseEntity,
  ExchangeRateResponse,
  ExchangeRateResponseV2,
} from "@models";
import { BaseApi } from "./baseApi";

class CommonApi extends BaseApi {
  getAllExchangeRate() {
    return this.get<BaseResponseEntity<Array<ExchangeRateResponse>>>(
      "getallexchangerate",
      {},
    );
  }

  getAllExchangeRateV2() {
    return this.get<BaseResponseEntity<Array<ExchangeRateResponseV2>>>(
      "v2/getallexchangerate",
      {},
    );
  }

  getHomeBanner(position: string, group: string) {
    return this.get<BaseResponseEntity<Array<BannerResponse>>>(
      "gethomebanner",
      {
        keybanner: group,
        position: position,
      },
    );
  }

  getExchangeRateByCode(code: string) {
    return this.get<BaseResponseEntity<ExchangeRateResponse>>(
      "getexchangeratebycode",
      { code: code },
    );
  }

  getCategoriesPopular(refType: string) {
    return this.get<BaseResponseEntity<Array<BannerResponse>>>(
      "getcategoriespopular",
      { refType },
    );
  }

  logIpRemote() {
    return this.get("https://api.ipify.org?format=json", {}, true)?.then(
      (response: any) => {
        return this.get("logipremote", { ip: response.ip });
      },
    );
  }
}

export default new CommonApi("commondata");
