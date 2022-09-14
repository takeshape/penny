import { RadioGroup } from '@headlessui/react';
import { Dispatch, SetStateAction } from 'react';
import { ProductVariantOption, ProductVariantSelection } from 'types/product';
import classNames from 'utils/classNames';
import { useHasStockFor } from 'utils/hooks/useHasStockFor';

export interface ProductColorSelectProps {
  value: string;
  option: ProductVariantOption;
  onChange: Dispatch<SetStateAction<string>>;
  selections: ProductVariantSelection[];
}

export const ProductColorSelect = ({ value, onChange, option, selections }: ProductColorSelectProps) => {
  const hasStockFor = useHasStockFor({ name: option.name, selections });

  return (
    <RadioGroup value={value} onChange={onChange} className="mt-4">
      <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
      <div className="flex items-center space-x-3">
        {option.values.map((optionValue) => {
          const disabled = !optionValue.hasStock || !hasStockFor(optionValue);
          return (
            <RadioGroup.Option
              key={optionValue.value}
              value={optionValue.value}
              disabled={disabled}
              className={({ active, checked }) =>
                classNames(
                  optionValue.selectedClass,
                  active && checked ? 'ring ring-offset-1' : '',
                  !active && checked ? 'ring-2' : '',
                  disabled ? 'cursor-not-allowed' : 'cursor-pointer',
                  '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center focus:outline-none'
                )
              }
            >
              <RadioGroup.Label as="span" className="sr-only">
                {optionValue.name}
              </RadioGroup.Label>
              <span
                aria-hidden="true"
                className={classNames(optionValue.class, 'h-8 w-8 border border-body border-opacity-10 rounded-full')}
              />
            </RadioGroup.Option>
          );
        })}
      </div>
    </RadioGroup>
  );
};

export default ProductColorSelect;
