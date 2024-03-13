import { ProductVariant, ProductVariantOption, ProductVariantSelection } from '@/types/product';
import { Dispatch, SetStateAction, useMemo, useState } from 'react';

export interface VariantOptionHookProps {
  name: string;
  variant: ProductVariant;
  options: ProductVariantOption[];
}

export interface VariantOptionHookData {
  selectedValue: string | null;
  selected: ProductVariantSelection | undefined;
  option: ProductVariantOption | undefined;
}

export function useVariantOption({
  name,
  variant,
  options
}: VariantOptionHookProps): [Dispatch<SetStateAction<string | null>>, VariantOptionHookData] {
  const variantOption = useMemo(
    () => options.find((opt) => opt.name.toLowerCase() === name.toLowerCase()),
    [name, options]
  );

  const initialVariantOptionValue = useMemo(
    () => variant.options?.find((o) => o.name.toLowerCase() === name.toLowerCase())?.value,
    [name, variant.options]
  );

  const initialVariantOption = useMemo(
    () => variantOption?.values.find((v) => v.value === initialVariantOptionValue),
    [initialVariantOptionValue, variantOption?.values]
  );

  const [selectedValue, setSelectedOptionValue] = useState<string | null>(initialVariantOption?.value ?? null);

  const selected = useMemo(() => {
    if (selectedValue) {
      return { name, value: selectedValue };
    }
  }, [name, selectedValue]);

  return [setSelectedOptionValue, { selectedValue, selected, option: variantOption }];
}
