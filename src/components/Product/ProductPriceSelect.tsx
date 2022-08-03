import { RadioGroup } from '@headlessui/react';
import { Dispatch, SetStateAction } from 'react';
import { ProductPriceOption } from 'types/product';
import classNames from 'utils/classNames';
import { formatDiscount, formatPrice, pluralizeText } from 'utils/text';

export interface ProductPriceSelectProps {
  value: ProductPriceOption;
  onChange: Dispatch<SetStateAction<ProductPriceOption>>;
  options: ProductPriceOption[];
}

export const ProductPriceSelect = ({ value, onChange, options }: ProductPriceSelectProps) => {
  return (
    <RadioGroup value={value} onChange={onChange}>
      <RadioGroup.Label className="sr-only">Pricing plans</RadioGroup.Label>
      <div className="relative bg-white rounded-md -space-y-px">
        {options.map((price, priceIdx) => (
          <RadioGroup.Option
            key={price.id}
            value={price}
            className={({ checked }) =>
              classNames(
                priceIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                priceIdx === options.length - 1 ? 'rounded-bl-md rounded-br-md' : '',
                checked ? 'bg-accent-50 border-accent-200 z-10' : 'border-gray-200',
                'relative border p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-2 focus:outline-none'
              )
            }
          >
            {({ active, checked }) => (
              <>
                <span className="flex items-center text-sm">
                  <div>
                    <span
                      className={classNames(
                        checked ? 'bg-accent-600 border-transparent' : 'bg-white border-gray-300',
                        active ? 'ring-2 ring-offset-2 ring-accent-500' : '',
                        'h-4 w-4 rounded-full border flex items-center justify-center'
                      )}
                      aria-hidden="true"
                    >
                      <span className="rounded-full bg-white w-1.5 h-1.5" />
                    </span>
                  </div>
                  <RadioGroup.Label
                    as="span"
                    className={classNames(checked ? 'text-accent-900' : 'text-mainText-900', 'ml-3 font-medium')}
                  >
                    {price.name} {price.hasDiscount && `(${formatDiscount(price)})`}
                  </RadioGroup.Label>
                </span>
                <RadioGroup.Description
                  as="span"
                  className={classNames(
                    checked ? 'text-accent-700' : 'text-mainText-500',
                    'ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right flex items-center place-content-end'
                  )}
                >
                  {formatPrice(price.currencyCode, price.amount)}
                  {price.intervalCount > 0 &&
                    ` / ${pluralizeText(
                      price.intervalCount,
                      price.interval.toLowerCase(),
                      `${price.interval.toLowerCase()}s`
                    )}`}
                </RadioGroup.Description>
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
};

export default ProductPriceSelect;
