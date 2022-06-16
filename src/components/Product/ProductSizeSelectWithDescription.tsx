import { RadioGroup } from '@headlessui/react';
import { Dispatch, SetStateAction } from 'react';
import { ProductOptionValue } from 'types/product';
import classNames from 'utils/classNames';

export interface ProductSizeSelectWithDescriptionProps {
  label: string;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  options: ProductOptionValue[];
}

export const ProductSizeSelectWithDescription = ({
  label,
  value,
  onChange,
  options
}: ProductSizeSelectWithDescriptionProps) => {
  const gridClasses = classNames(
    options.length >= 4 && 'sm:grid-cols-4',
    options.length === 3 && 'sm:grid-cols-3',
    options.length === 2 && 'sm:grid-cols-2',
    options.length === 1 && 'sm:grid-cols-1',
    'grid grid-cols-1 gap-4'
  );

  return (
    <RadioGroup value={value} onChange={onChange}>
      <RadioGroup.Label className="block text-sm font-medium text-gray-700">{label}</RadioGroup.Label>
      <div className={`mt-1 ${gridClasses}`}>
        {options.map((size) => (
          <RadioGroup.Option
            as="div"
            key={size.value}
            value={size.value}
            disabled={!size.hasStock}
            className={({ active }) =>
              classNames(
                active ? 'ring-2 ring-indigo-500' : '',
                'relative block border border-gray-300 rounded-lg p-4 cursor-pointer focus:outline-none'
              )
            }
          >
            {({ active, checked }) => (
              <>
                <RadioGroup.Label as="p" className="text-base font-medium text-gray-900">
                  {size.name}
                </RadioGroup.Label>
                <RadioGroup.Description as="p" className="mt-1 text-sm text-gray-500">
                  {(size.description as string) ?? ''}
                </RadioGroup.Description>
                <div
                  className={classNames(
                    active ? 'border' : 'border-2',
                    checked ? 'border-indigo-500' : 'border-transparent',
                    'absolute -inset-px rounded-lg pointer-events-none'
                  )}
                  aria-hidden="true"
                />
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
};

export default ProductSizeSelectWithDescription;
