import { BaseResponseEntity, LocationResponse } from "@models";
import { BaseApi } from "./baseApi";

class LocationApi extends BaseApi {
  getStateProvinceByCountry(countryId: string) {
    return this.post(
      "getstateprovincebycountry",
      {
        countryId,
      },
      {},
    );
  }

  getDistrictByProvince(provinceId: string, countryId?: string) {
    return this.post(
      "getdistrictbyprovince",
      {
        provinceId,
        countryId,
      },
      {},
    );
  }

  getWardByDistrict(
    districtId: string,
    provinceId?: string,
    countryId?: string,
  ) {
    return this.post(
      "getwardbydistrict",
      {
        districtId,
        provinceId,
        countryId,
      },
      {},
    );
  }

  getAllCountry() {
    return this.get<BaseResponseEntity<LocationResponse[]>>(
      "getallcountry",
      {},
    );
  }
}

export default new LocationApi("commondata");
