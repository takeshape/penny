import { ProductVariantOption, ProductVariantSelection } from '@/types/product';
import classNames from '@/utils/classNames';
import { useHasStockFor } from '@/utils/hooks/useHasStockFor';
import { RadioGroup } from '@headlessui/react';
import { Dispatch, SetStateAction } from 'react';

export type ProductColorSelectProps = {
  value: string | null;
  option: ProductVariantOption;
  onChange: Dispatch<SetStateAction<string | null>>;
  selections: ProductVariantSelection[];
};

export const ProductColorSelect = ({ value, onChange, option, selections }: ProductColorSelectProps) => {
  const hasStockFor = useHasStockFor({ name: option.name, selections });

  return (
    <RadioGroup value={value} onChange={onChange} className="mt-4">
      <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
      <div className="flex items-center space-x-3">
        {option.values.map((optionValue) => {
          const isDisabled = !optionValue.hasStock;
          const isSoftDisabled = !hasStockFor(optionValue);

          return (
            <RadioGroup.Option
              key={optionValue.value}
              value={optionValue.value}
              disabled={isDisabled}
              className={({ active, checked }) =>
                classNames(
                  (optionValue?.selectedClass as string) ?? '',
                  active && checked ? 'ring ring-offset-1' : '',
                  !active && checked ? 'ring-2' : '',
                  isDisabled ? 'cursor-not-allowed' : 'cursor-pointer',
                  '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center focus:outline-none'
                )
              }
            >
              <RadioGroup.Label as="span" className="sr-only">
                {optionValue.name}
              </RadioGroup.Label>
              <span
                aria-hidden="true"
                className={classNames(
                  (optionValue?.class as string) ?? '',
                  'h-8 w-8 border border-body border-opacity-10 rounded-full',
                  isSoftDisabled && 'opacity-50'
                )}
              />
            </RadioGroup.Option>
          );
        })}
      </div>
    </RadioGroup>
  );
};

export default ProductColorSelect;
