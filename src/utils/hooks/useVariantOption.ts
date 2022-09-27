import { Dispatch, SetStateAction, useMemo, useState } from 'react';
import { ProductVariant, ProductVariantOption, ProductVariantSelection } from 'types/product';

export interface VariantOptionHookProps {
  name: string;
  variant: ProductVariant;
  options: ProductVariantOption[];
}

export interface VariantOptionHookData {
  selectedValue: string;
  selected: ProductVariantSelection;
  option?: ProductVariantOption;
}

export function useVariantOption({
  name,
  variant,
  options
}: VariantOptionHookProps): [Dispatch<SetStateAction<string>>, VariantOptionHookData] {
  const variantOption = useMemo(
    () => options.find((opt) => opt.name.toLowerCase() === name.toLowerCase()),
    [name, options]
  );

  if (!variantOption) {
    throw new Error('Invalid variant name');
  }

  const initialVariantOptionValue = useMemo(
    () => variant.options?.find((o) => o.name.toLowerCase() === name.toLowerCase())?.value,
    [name, variant.options]
  );

  if (!initialVariantOptionValue) {
    throw new Error('Invalid variant option name');
  }

  const initialVariantOption = useMemo(
    () => variantOption?.values.find((v) => v.value === initialVariantOptionValue),
    [initialVariantOptionValue, variantOption?.values]
  );

  if (!initialVariantOption) {
    throw new Error('Invalid variant option');
  }

  const [selectedValue, setSelectedOptionValue] = useState(initialVariantOption.value);

  const selected = useMemo(() => ({ name, value: selectedValue }), [name, selectedValue]);

  return [setSelectedOptionValue, { selectedValue, selected, option: variantOption }];
}
