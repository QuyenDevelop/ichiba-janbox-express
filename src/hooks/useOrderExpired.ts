import { orderApi } from "@api";
import { useEffect, useState } from "react";

export function useOrderExpired() {
  const [countExpired, setCountExpired] = useState(0);
  const reloadAuctionExpireCount = () => {
    orderApi.getCountOrderAuctionPaymentExpiredDate()?.then(response => {
      response && setCountExpired(response?.data);
    });
  };
  useEffect(() => {
    orderApi.getCountOrderAuctionPaymentExpiredDate()?.then(response => {
      response && setCountExpired(response?.data);
    });
  }, []);
  return { countExpired, reloadAuctionExpireCount };
}
