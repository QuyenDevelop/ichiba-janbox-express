import { useCallback, useState } from "react";

export const useBoolean = (defaultValue?: boolean) => {
  const [value, setValue] = useState<boolean>(!!defaultValue);
  const isTrue = useCallback(() => {
    setValue(true);
  }, []);
  const isFalse = useCallback(() => {
    setValue(false);
  }, []);
  const toggle = useCallback(() => {
    setValue(prev => !prev);
  }, []);
  return [value, isTrue, isFalse, toggle] as const;
};
