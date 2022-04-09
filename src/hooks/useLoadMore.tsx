import { FlatListLoadMoreModel } from "@shared";
import { useState } from "react";

export function useLoadMore<T>() {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [items, setItems] = useState<T[] | undefined>(undefined);
  const [count, setCount] = useState(0);
  const [shouldRefreshWhenFocus, setShouldRefreshWhenFocus] = useState<
    boolean | undefined
  >(true);

  const processData = (args?: {
    page?: number;
    pageCount?: number;
    items?: T[];
    count?: number;
  }) => {
    setCount(args?.count || 0);
    setShouldRefreshWhenFocus(false);
    const isRefresh = (args?.page || 0) === 0 || args?.page === 1;
    let newItems = args?.items;
    if (isRefresh) {
      setItems(newItems);
    } else {
      if (newItems) {
        setItems(items?.concat(newItems ?? []));
      }
    }
    setLoading(false);
    return Promise.resolve<FlatListLoadMoreModel>({
      count: args?.count || 0,
      numberResultItems: newItems?.length ?? 0,
    });
  };

  const clear = () => {
    setItems([]);
  };

  return {
    isLoading,
    items,
    count,
    setLoading,
    processData,
    setItems,
    clear,
    shouldRefreshWhenFocus,
    setShouldRefreshWhenFocus,
  };
}
