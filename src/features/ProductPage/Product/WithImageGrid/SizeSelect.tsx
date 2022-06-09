import { RadioGroup } from '@headlessui/react';
import type { Dispatch, SetStateAction } from 'react';
import type { ProductOptionValue } from 'types/product';
import classNames from 'utils/classNames';

export interface SizeSelectProps {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  options: ProductOptionValue[];
}

export const SizeSelect = ({ value, onChange, options }: SizeSelectProps) => {
  return (
    <RadioGroup value={value} onChange={onChange} className="mt-4">
      <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
      <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
        {options.map((size) => (
          <RadioGroup.Option
            key={size.value}
            value={size.value}
            disabled={!size.hasStock}
            className={({ active }) =>
              classNames(
                size.hasStock
                  ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                  : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                active ? 'ring-2 ring-indigo-500' : '',
                'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
              )
            }
          >
            {({ active, checked }) => (
              <>
                <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                {size.hasStock ? (
                  <span
                    className={classNames(
                      active ? 'border' : 'border-2',
                      checked ? 'border-indigo-500' : 'border-transparent',
                      'absolute -inset-px rounded-md pointer-events-none'
                    )}
                    aria-hidden="true"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                      stroke="currentColor"
                    >
                      <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                    </svg>
                  </span>
                )}
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
};

export default SizeSelect;
