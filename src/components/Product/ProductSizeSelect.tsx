import { ProductVariantOption, ProductVariantSelection } from '@/types/product';
import classNames from '@/utils/classNames';
import { useHasStockFor } from '@/utils/hooks/useHasStockFor';
import { RadioGroup } from '@headlessui/react';
import { Dispatch, SetStateAction } from 'react';

export type ProductSizeSelectProps = {
  value: string | null;
  onChange: Dispatch<SetStateAction<string | null>>;
  option: ProductVariantOption;
  selections: ProductVariantSelection[];
  size?: 'large' | 'small';
};

export const ProductSizeSelect = ({
  value,
  onChange,
  option,
  selections,
  size: componentSize
}: ProductSizeSelectProps) => {
  componentSize = componentSize ?? 'large';
  const wrapperStyles = classNames(
    componentSize === 'large' && 'sm:grid-cols-8 lg:grid-cols-4',
    'grid grid-cols-4 gap-4'
  );
  const buttonStyles = classNames(
    componentSize === 'large' && 'sm:py-6',
    'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-primary-100 focus:outline-none sm:flex-1'
  );

  const hasStockFor = useHasStockFor({ name: option.name, selections });

  return (
    <RadioGroup value={value} onChange={onChange} className="mt-4">
      <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
      <div className={wrapperStyles}>
        {option.values.map((optionValue) => {
          const isDisabled = !optionValue.hasStock;
          const isSoftDisabled = !hasStockFor(optionValue);
          return (
            <RadioGroup.Option
              key={optionValue.value}
              value={optionValue.value}
              disabled={isDisabled}
              className={({ active }) =>
                classNames(
                  isSoftDisabled || isDisabled
                    ? 'bg-form-50 text-form-200'
                    : 'bg-background shadow-sm text-form-900 cursor-pointer',
                  isDisabled ? 'cursor-not-allowed' : 'cursor-pointer',
                  active ? 'ring-2 ring-accent-500' : '',
                  buttonStyles
                )
              }
              data-testid={isSoftDisabled ? 'size-picker-disabled' : 'size-picker-enabled'}
            >
              {({ active, checked }) => (
                <>
                  <RadioGroup.Label as="span">{optionValue.name}</RadioGroup.Label>
                  {!isDisabled ? (
                    <span
                      className={classNames(
                        active ? 'border' : 'border-2',
                        checked ? 'border-accent-500' : 'border-transparent',
                        'absolute -inset-px rounded-md pointer-events-none'
                      )}
                      aria-hidden="true"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="absolute -inset-px rounded-md border-2 border-form-200 pointer-events-none"
                    >
                      <svg
                        className="absolute inset-0 w-full h-full text-form-200 stroke-2"
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
          );
        })}
      </div>
    </RadioGroup>
  );
};

export default ProductSizeSelect;
