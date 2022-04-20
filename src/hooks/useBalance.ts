import { customerApi } from "@api";
import { CONSTANT } from "@configs";
import { useBoolean } from "@hooks";
import { Wallet } from "@models";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { updatePrimaryWallet } from "@redux";
import { useCallback, useEffect, useState } from "react";
import { useAppDispatch } from "./useAppDispatch";

export const useBalance = (currencyCode?: string) => {
  const dispatch = useAppDispatch();
  const [customerWallets, setCustomerWallets] = useState<Wallet[]>([]);
  const [cashPrimary, setCashPrimary] = useState<number>(0);
  const [cashFreezePrimary, setCashFreezePrimary] = useState<number>(0);
  const [cashAvailablePrimary, setCashAvailablePrimary] = useState<number>(0);
  const [rateToPrimary, setRateToPrimary] = useState<number>(0);
  const [rateJPYToPrimary, setRateJPYToPrimary] = useState<number>(0);
  const [rateUSDToPrimary, setRateUSDToPrimary] = useState<number>(0);
  const [currencyCodePrimary, setCurrencyCodePrimary] = useState<string>(
    CONSTANT.CURRENCY.JA,
  );
  const [isFetching, showIsFetching, hideFetching] = useBoolean();

  const fetchDataCustomerWallet = useCallback(() => {
    showIsFetching();
    customerApi
      .getWalletWithPrimaryCurrency(currencyCode)
      ?.then(response => {
        if (response?.status) {
          setCustomerWallets(response.data.listWallet);
          setCashPrimary(response.data.cashPrimary);
          setCashFreezePrimary(response.data.cashFreezePrimary);
          setCashAvailablePrimary(response.data.cashAvailablePrimary);
          setRateToPrimary(response.data.rateToPrimary);
          setRateJPYToPrimary(response.data.rateFromJPYToPrimary);
          setRateUSDToPrimary(response.data.rateFromUSDToPrimary);
          setCurrencyCodePrimary(response.data.currencyCodePrimary);
          dispatch(updatePrimaryWallet(response.data.currencyCodePrimary));
          AsyncStorage.setItem(
            CONSTANT.TOKEN_STORAGE_KEY.PRIMARY_CURRENCY,
            response.data.currencyCodePrimary,
          );
        }
      })
      .finally(() => {
        hideFetching();
      });
  }, [currencyCode, dispatch, hideFetching, showIsFetching]);

  const updateBalance = useCallback(() => {
    fetchDataCustomerWallet();
  }, [fetchDataCustomerWallet]);

  useEffect(() => {
    updateBalance();
  }, [updateBalance]);

  return {
    cashPrimary,
    cashFreezePrimary,
    cashAvailablePrimary,
    rateToPrimary,
    rateJPYToPrimary,
    rateUSDToPrimary,
    currencyCodePrimary,
    customerWallets,
    isFetching,
    updateBalance,
  };
};
