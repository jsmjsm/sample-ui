import { useMemo } from "react";

export const useRentForData = (dataLength: number) => {
  return useMemo(
    () =>
      (
        Math.round((0.00089088 + 0.00000696 * dataLength) * 100) /
        100
      ).toFixed(2),
    [dataLength]
  );
};
