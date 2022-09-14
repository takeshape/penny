import { useCallback } from 'react';
import { ProductVariantSelection } from 'types/product';

export interface HasStockForHookProps {
  name: string;
  selections: ProductVariantSelection[];
}

export function useHasStockFor({ name, selections }: HasStockForHookProps) {
  const hasStockFor = useCallback(
    (optionValue) => {
      return selections.every((selection) => {
        if (selection.name == name) {
          return true;
        }

        return optionValue.hasStockFor.find((stock) => {
          return stock.name === selection.name && stock.value === selection.value;
        });
      });
    },
    [name, selections]
  );

  return hasStockFor;
}
