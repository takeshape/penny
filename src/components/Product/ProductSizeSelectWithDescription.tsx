import classNames from '@/lib/classNames';
import { useHasStockFor } from '@/lib/hooks/useHasStockFor';
import { ProductVariantOption, ProductVariantSelection } from '@/types/product';
import { RadioGroup } from '@headlessui/react';
import { Dispatch, SetStateAction } from 'react';

export type ProductSizeSelectWithDescriptionProps = {
  label: string;
  value: string | null;
  onChange: Dispatch<SetStateAction<string | null>>;
  option: ProductVariantOption;
  selections: ProductVariantSelection[];
};

export const ProductSizeSelectWithDescription = ({
  label,
  value,
  onChange,
  option,
  selections
}: ProductSizeSelectWithDescriptionProps) => {
  const gridClasses = classNames(
    option.values.length >= 4 && 'sm:grid-cols-4',
    option.values.length === 3 && 'sm:grid-cols-3',
    option.values.length === 2 && 'sm:grid-cols-2',
    option.values.length === 1 && 'sm:grid-cols-1',
    'grid grid-cols-1 gap-4'
  );

  const hasStockFor = useHasStockFor({ name: option.name, selections });

  return (
    <RadioGroup value={value} onChange={onChange}>
      <RadioGroup.Label className="block text-sm font-medium text-form-700">{label}</RadioGroup.Label>
      <div className={`mt-1 ${gridClasses}`}>
        {option.values.map((optionValue) => {
          const isDisabled = !optionValue.hasStock;
          const isSoftDisabled = !hasStockFor(optionValue);
          return (
            <RadioGroup.Option
              as="div"
              key={optionValue.value}
              value={optionValue.value}
              disabled={isDisabled}
              className={({ active }) =>
                classNames(
                  active ? 'ring-2 ring-accent-500' : '',
                  isDisabled ? 'cursor-not-allowed' : 'cursor-pointer',
                  'relative block border border-form-300 bg-background rounded-lg p-4 focus:outline-none'
                )
              }
            >
              {({ active, checked }) => (
                <>
                  <RadioGroup.Label as="p" className="text-base font-medium text-form-900">
                    {optionValue.name}
                  </RadioGroup.Label>
                  <RadioGroup.Description as="p" className="mt-1 text-sm text-form-500">
                    {(optionValue.description as string) ?? ''}
                  </RadioGroup.Description>
                  <div
                    className={classNames(
                      active ? 'border' : 'border-2',
                      checked ? 'border-accent-500' : 'border-transparent',
                      isSoftDisabled && 'bg-form-300',
                      'absolute -inset-px rounded-lg pointer-events-none'
                    )}
                    aria-hidden="true"
                  />
                </>
              )}
            </RadioGroup.Option>
          );
        })}
      </div>
    </RadioGroup>
  );
};

export default ProductSizeSelectWithDescription;
