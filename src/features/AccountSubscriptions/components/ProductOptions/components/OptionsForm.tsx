import { Disclosure, RadioGroup } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';
import { useCallback, useEffect, useMemo, useState } from 'react';
import classNames from 'utils/classNames';
import { getVariant } from 'utils/products';
import { formatPrice } from 'utils/text';
import { SubscriptionProductForUpdate } from '../../../types';

export interface OptionsFormProps {
  product: SubscriptionProductForUpdate;
  onClose: () => void;
  currentQuantity: number;
  currentOptions: Record<string, string>;
}

/**
 * TODO
 *
 * price option preselected via props
 * initial variant options preselected via props
 * stock is not a concern, since that would be handled out of band
 * initial quantity
 */

export const OptionsForm = ({ product, currentQuantity, currentOptions, onClose }: OptionsFormProps) => {
  const { variantOptions } = product;

  const [options, setOptions] = useState(currentOptions);
  const [quantity, setQuantity] = useState(currentQuantity);

  const variant = useMemo(
    () =>
      getVariant(
        product.variants,
        Object.entries(options).map(([name, value]) => ({ name, value }))
      ),
    [product, options]
  );

  const [price, setPrice] = useState(variant.prices[0]);

  useEffect(() => {
    setPrice(variant.prices[0]);
  }, [variant]);

  const handleAddToCart = useCallback(
    (e) => {
      e.preventDefault();
      console.log('UPDATE THE PRODUCT');
      // addToCart({
      //   product,
      //   variant: selectedVariant,
      //   price: selectedPrice
      // });
      // setIsCartOpen(true);
      onClose();
    },
    [onClose]
  );

  return (
    <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
      <div className="sm:col-span-12 lg:col-span-12">
        <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">{product.name}</h2>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Update the product options for your subscription.</p>

        <form>
          <section aria-labelledby="options-heading" className="mt-10">
            <h3 id="options-heading" className="sr-only">
              Product options
            </h3>

            {variantOptions.map((option) => (
              <div key={option.id} className="mx-auto w-full rounded-2xl bg-white py-2">
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
                        <div className="inline-block">
                          <span>{option.name}</span>
                          <span className="ml-2 text-gray-500">{options[option.name]}</span>
                        </div>
                        <ChevronUpIcon className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-gray-500`} />
                      </Disclosure.Button>

                      <Disclosure.Panel className="pt-4 pb-2 text-sm text-gray-500">
                        <RadioGroup
                          value={options[option.name]}
                          onChange={(value) => setOptions({ ...options, [option.name]: value })}
                        >
                          <RadioGroup.Label className="sr-only">{option.name}</RadioGroup.Label>
                          <div className="bg-white rounded-md -space-y-px">
                            {option.values.map((value, valueIdx) => (
                              <RadioGroup.Option
                                key={value.value}
                                value={value.value}
                                className={({ checked }) =>
                                  classNames(
                                    valueIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                                    valueIdx === option.values.length - 1 ? 'rounded-bl-md rounded-br-md' : '',
                                    checked ? 'bg-indigo-50 border-indigo-200 z-10' : 'border-gray-200',
                                    'relative border p-4 flex cursor-pointer focus:outline-none'
                                  )
                                }
                              >
                                {({ active, checked }) => (
                                  <>
                                    <span
                                      className={classNames(
                                        checked ? 'bg-indigo-600 border-transparent' : 'bg-white border-gray-300',
                                        active ? 'ring-2 ring-offset-2 ring-indigo-500' : '',
                                        'h-4 w-4 mt-0.5 cursor-pointer shrink-0 rounded-full border flex items-center justify-center'
                                      )}
                                      aria-hidden="true"
                                    >
                                      <span className="rounded-full bg-white w-1.5 h-1.5" />
                                    </span>
                                    <span className="ml-3 flex flex-col">
                                      <RadioGroup.Label
                                        as="span"
                                        className={classNames(
                                          checked ? 'text-indigo-900' : 'text-gray-900',
                                          'block text-sm font-medium'
                                        )}
                                      >
                                        {value.name}
                                      </RadioGroup.Label>
                                      {value.description && (
                                        <RadioGroup.Description
                                          as="span"
                                          className={classNames(
                                            checked ? 'text-indigo-700' : 'text-gray-500',
                                            'block text-sm'
                                          )}
                                        >
                                          {value.description as string}
                                        </RadioGroup.Description>
                                      )}
                                    </span>
                                  </>
                                )}
                              </RadioGroup.Option>
                            ))}
                          </div>
                        </RadioGroup>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            ))}

            {/* Quantity */}
            <div className="mx-auto w-full rounded-2xl bg-white py-2">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
                      <div className="inline-block">
                        <span>Quantity</span>
                        <span className="ml-2 text-gray-500">{quantity}</span>
                      </div>
                      <ChevronUpIcon className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-gray-500`} />
                    </Disclosure.Button>

                    <Disclosure.Panel className="pt-4 pb-2 text-sm text-gray-500">
                      <RadioGroup value={quantity} onChange={(value) => setQuantity(value)}>
                        <RadioGroup.Label className="sr-only">Quantity</RadioGroup.Label>
                        <div className="bg-white rounded-md -space-y-px">
                          {Array(8)
                            .fill(null)
                            .map((_, idx) => (
                              <RadioGroup.Option
                                key={idx + 1}
                                value={idx + 1}
                                className={({ checked }) =>
                                  classNames(
                                    idx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                                    idx === 7 ? 'rounded-bl-md rounded-br-md' : '',
                                    checked ? 'bg-indigo-50 border-indigo-200 z-10' : 'border-gray-200',
                                    'relative border p-4 flex cursor-pointer focus:outline-none'
                                  )
                                }
                              >
                                {({ active, checked }) => (
                                  <>
                                    <span
                                      className={classNames(
                                        checked ? 'bg-indigo-600 border-transparent' : 'bg-white border-gray-300',
                                        active ? 'ring-2 ring-offset-2 ring-indigo-500' : '',
                                        'h-4 w-4 mt-0.5 cursor-pointer shrink-0 rounded-full border flex items-center justify-center'
                                      )}
                                      aria-hidden="true"
                                    >
                                      <span className="rounded-full bg-white w-1.5 h-1.5" />
                                    </span>
                                    <span className="ml-3 flex flex-col">
                                      <RadioGroup.Label
                                        as="span"
                                        className={classNames(
                                          checked ? 'text-indigo-900' : 'text-gray-900',
                                          'block text-sm font-medium'
                                        )}
                                      >
                                        {idx + 1}
                                      </RadioGroup.Label>
                                    </span>
                                  </>
                                )}
                              </RadioGroup.Option>
                            ))}
                        </div>
                      </RadioGroup>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </section>

          <section aria-labelledby="information-heading" className="mt-4">
            <h3 id="information-heading" className="sr-only">
              Product information
            </h3>

            <p className="grid grid-cols-2 px-4 font-medium text-lg">
              <div>Price</div>
              <div className="ml-auto">{formatPrice(price.currencyCode, price.amount * quantity)}</div>
            </p>
          </section>

          <button
            onClick={handleAddToCart}
            type="submit"
            className="mt-12 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Update subscription
          </button>
        </form>
      </div>
    </div>
  );
};
