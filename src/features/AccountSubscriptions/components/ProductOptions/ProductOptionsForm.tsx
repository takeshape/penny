import { Disclosure, RadioGroup } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';
import Button from 'components/Button/Button';
import { Modal, ModalProps } from 'components/Modal/Modal';
import { DeliveryScheduleOption } from 'features/AccountSubscriptions/types';
import { useCallback, useEffect } from 'react';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { ProductVariant, ProductVariantOption, ProductVariantSelection } from 'types/product';
import classNames from 'utils/classNames';
import { findPriceOption, getVariant } from 'utils/products';
import { formatPrice } from 'utils/text';

function toFormOptions(selections: ProductVariantSelection[]): Record<string, string> {
  return selections.reduce((formOptions, { name, value }) => ({ ...formOptions, [name]: value }), {});
}

function toSelections(formOptions: Record<string, string>): ProductVariantSelection[] {
  return Object.entries(formOptions).map(([name, value]) => ({ name, value }));
}

const ProductOptionsPrice = ({ control, variants, deliverySchedule }) => {
  const options = useWatch({
    control,
    name: 'options'
  });

  const quantity = useWatch({
    control,
    name: 'quantity'
  });

  const variant = getVariant(variants, toSelections(options));
  const price = findPriceOption(variant.prices, deliverySchedule);
  const amount = price.amount * quantity;

  return (
    <div className="bg-gray-600 text-white rounded-md py-2">
      <p className="grid grid-cols-2 px-4 font-medium text-lg">
        <span className="inline-block">Price</span>
        <span className="inline-block ml-auto">{formatPrice(price.currencyCode, amount)}</span>
      </p>
    </div>
  );
};

export interface ProductOptionsFormProps extends ModalProps {
  variants: ProductVariant[];
  variantOptions: ProductVariantOption[];
  currentQuantity: number;
  currentSelections: ProductVariantSelection[];
  currentDeliverySchedule: DeliveryScheduleOption;
}

interface ProductOptionsFormValues {
  options: Record<string, string>;
  quantity: number;
}

/**
 * TODO Handle errors
 */
export const ProductOptionsForm = ({
  variants,
  variantOptions,
  currentQuantity,
  currentSelections,
  currentDeliverySchedule,
  isOpen,
  onClose
}: ProductOptionsFormProps) => {
  const {
    handleSubmit,
    control,
    reset,
    watch,
    formState: { isSubmitting, isSubmitSuccessful, errors }
  } = useForm<ProductOptionsFormValues>({
    defaultValues: {
      options: toFormOptions(currentSelections),
      quantity: currentQuantity
    }
  });

  // Set initial values
  useEffect(
    () =>
      reset({
        options: toFormOptions(currentSelections),
        quantity: currentQuantity
      }),
    [currentQuantity, currentSelections, reset]
  );

  const handleFormSubmit = useCallback(
    async ({ options, quantity }: ProductOptionsFormValues) => {
      const variantSelections = toSelections(options);

      // eslint-disable-next-line no-console
      console.log({ quantity, options: variantSelections });

      onClose();
    },
    [onClose]
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-12 lg:col-span-12">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">Product options</h2>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Update the product options for your subscription.</p>
          </div>

          <form className="mt-10" onSubmit={handleSubmit(handleFormSubmit)}>
            <section aria-labelledby="options-heading" className="md:h-[calc(1/2*100vh)] overflow-y-scroll p-[1px]">
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
                            <span className="ml-2 text-gray-500">{watch(`options.${option.name}`)}</span>
                          </div>
                          <ChevronUpIcon className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-gray-500`} />
                        </Disclosure.Button>

                        <Disclosure.Panel className="pt-4 pb-2 text-sm text-gray-500">
                          <Controller
                            name={`options.${option.name}`}
                            control={control}
                            render={({ field }) => (
                              <RadioGroup {...field}>
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
                            )}
                          />
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
                          <span className="ml-2 text-gray-500">{watch('quantity')}</span>
                        </div>
                        <ChevronUpIcon className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-gray-500`} />
                      </Disclosure.Button>

                      <Disclosure.Panel className="pt-4 pb-2 text-sm text-gray-500">
                        <Controller
                          name="quantity"
                          control={control}
                          render={({ field }) => (
                            <RadioGroup {...field}>
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
                          )}
                        />
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

              <ProductOptionsPrice variants={variants} control={control} deliverySchedule={currentDeliverySchedule} />
            </section>

            <div className="mt-8 flex justify-end gap-2">
              <Button disabled={isSubmitting} onClick={onClose} color="clear" type="button" className="mt-8">
                Cancel
              </Button>
              <Button disabled={isSubmitting} color="primary" type="submit" className="mt-8">
                Update subscription
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};
