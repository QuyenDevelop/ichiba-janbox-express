import { Picker } from "@components";
import { Utils } from "@helpers";
import { LocationResponse } from "@models";
import { translate } from "@shared";
import { Metrics } from "@themes";
import React, { FunctionComponent, useState } from "react";
import styles from "./styles";

interface Props {
  countryApi: Array<LocationResponse> | undefined;
  country: string;
  setCountry: (value: string) => void;
  setPhoneWrap?: (value: string) => void;
  setPhone?: (value: string) => void;
  phone?: string;
}

export const ListCountry: FunctionComponent<Props> = ({
  countryApi,
  setCountry,
  country,
  setPhoneWrap,
  // phone,
  setPhone,
}) => {
  const [dataSelectedCountry, setDataSelectedCountry] =
    useState<LocationResponse>();
  const [isLoading] = useState(false);
  const [, setIsCountrySelected] = useState(false);
  const [isButtonClickSubmit] = useState(false);

  // const getPhone = (code: string) => {
  //   let prefixPhone = prefixPhones.find((x: any) => x.code === code);
  //   return `${prefixPhone.dial_code}${phone}`;
  // };
  return (
    <>
      {countryApi && countryApi.length > 0 ? (
        <Picker
          isTranslated={true}
          setDataSelected={(value: LocationResponse) => {
            setDataSelectedCountry(value);
            setPhoneWrap && setPhoneWrap("");
            setPhone && setPhone("");
          }}
          dataApi={countryApi}
          editable={!isLoading}
          label={translate("label.countries")}
          returnKeyType="done"
          containerStyle={styles.input}
          value={country}
          isRequired
          iconRightName={"ic_arrow_down"}
          setValue={(value: string) => {
            setCountry(value);
          }}
          iconRightSize={Metrics.icons.smallSmall}
          errorMessage={
            isButtonClickSubmit &&
            dataSelectedCountry &&
            !Utils.isEmpty(dataSelectedCountry?.code)
              ? translate("error.validation.required")
              : ""
          }
          setSelected={(value: boolean) => {
            setIsCountrySelected(value);
          }}
        />
      ) : null}
    </>
  );
};
