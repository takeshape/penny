import FormInput from '@/components/Form/Input/Input';
import FormSelect from '@/components/Form/Select/Select';
import { ModalProps } from '@/components/Modal/Modal';
import { ModalForm } from '@/components/Modal/ModalForm';
import { ModalFormActions } from '@/components/Modal/ModalFormActions';
import { countries } from '@/utils/countries/countries';
import { isBefore, lastDayOfMonth } from 'date-fns';
import IMask, { MaskedDynamic, MaskedPattern } from 'imask';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

export type AddFormProps = {
  customerId: string;
} & ModalProps;

export type AddFormValues = {
  number: string;
  name: string;
  expiration: string;
  verificationValue: string;
  countryCode: string;
  zip: string;
};

// TODO Handle submit errors
export const AddForm = ({ isOpen, onClose, customerId }: AddFormProps) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting, isSubmitSuccessful }
  } = useForm<AddFormValues>();

  const handleFormSubmit = useCallback(
    async (formData: AddFormValues) => {
      // eslint-disable-next-line no-console
      console.log({ formData, customerId });
      // TODO Mutate payment methods list
    },
    [customerId]
  );

  const resetState = useCallback(() => reset(), [reset]);

  const ccNumberMask = new MaskedDynamic({
    mask: [
      {
        mask: '1234 1234 1234 1234',
        lazy: true,
        maxLength: 16,
        blocks: {
          '1234': {
            mask: IMask.MaskedRange,
            from: 0,
            to: 9999,
            autofix: true
          }
        }
      },
      {
        mask: '3412 123456 12345',
        // @ts-expect-error custom prop
        startsWith: '34',
        maxLength: 15,
        lazy: true,
        blocks: {
          '3412': {
            mask: IMask.MaskedRange,
            from: 0,
            to: 9999,
            autofix: true
          },
          '123456': {
            mask: IMask.MaskedRange,
            from: 0,
            to: 999999,
            autofix: true
          },
          '12345': {
            mask: IMask.MaskedRange,
            from: 0,
            to: 99999,
            autofix: true
          }
        }
      },
      {
        mask: '3712 123456 12345',
        // @ts-expect-error custom prop
        startsWith: '37',
        maxLength: 15,
        lazy: true,
        blocks: {
          '3712': {
            mask: IMask.MaskedRange,
            from: 0,
            to: 9999,
            autofix: true
          },
          '123456': {
            mask: IMask.MaskedRange,
            from: 0,
            to: 999999,
            autofix: true
          },
          '12345': {
            mask: IMask.MaskedRange,
            from: 0,
            to: 99999,
            autofix: true
          }
        }
      }
    ],
    dispatch: (appended, dynamicMasked) => {
      const number = (dynamicMasked.value + appended).replace(/\D/g, '');
      // @ts-expect-error custom prop
      const mask = dynamicMasked.compiledMasks.find((m) => number.startsWith(m.startsWith));
      return mask ?? dynamicMasked.compiledMasks[0];
    }
  });

  const ccExpirationMask = new MaskedPattern({
    mask: 'MM/YY',
    lazy: true,
    blocks: {
      MM: {
        mask: IMask.MaskedRange,
        from: 1,
        to: 12,
        autofix: 'pad'
      },
      YY: {
        mask: IMask.MaskedRange,
        from: 24,
        to: 99
      }
    }
  });

  return (
    <ModalForm
      isOpen={isOpen}
      onClose={onClose}
      primaryText="Add payment method"
      secondaryText="Add a new payment method to use with subscriptions and purchases."
      afterLeave={resetState}
      onSubmit={handleSubmit(handleFormSubmit)}
      isSubmitSuccessful={isSubmitSuccessful}
      autoCloseDelay={3000}
    >
      <div className="md:max-h-[calc(7/8*100vh)] overflow-y-scroll p-[1px] flex flex-col">
        {isSubmitSuccessful ? (
          <div className="h-full font-medium flex flex-col items-center justify-center text-body-600">
            <p className="mb-4">Your payment method has been added.</p>
          </div>
        ) : (
          <section aria-labelledby="details-heading" className="h-full">
            <h3 id="details-heading" className="sr-only">
              Add payment method details
            </h3>

            <div className="grid grid-cols-6 gap-6">
              <FormInput
                control={control}
                name="number"
                id="number"
                label="Card number"
                autoComplete="cc-number"
                defaultValue=""
                mask={ccNumberMask}
                placeholder="1234 1234 1234 1234"
                type="text"
                rules={{
                  required: 'This field is required'
                }}
                className="col-span-6 sm:col-span-6"
              />

              <FormInput
                control={control}
                name="expiration"
                id="expiration"
                label="Expiration"
                autoComplete="cc-exp"
                defaultValue=""
                type="text"
                mask={ccExpirationMask}
                placeholder="MM/YY"
                rules={{
                  required: 'This field is required',
                  validate: {
                    isValid: (value: string) => {
                      const now = new Date();
                      const [month, year] = value.split('/');
                      const exp = new Date(Number(`20${year}`), Number(month), 1);
                      if (isBefore(lastDayOfMonth(exp), now)) {
                        return 'Invalid expiration date';
                      }
                      return true;
                    }
                  }
                }}
                className="col-span-3 sm:col-span-3"
              />

              <FormInput
                control={control}
                name="verificationValue"
                id="verificationValue"
                label="CVV"
                autoComplete="cc-csc"
                defaultValue=""
                placeholder="CVC"
                type="text"
                maxLength={4}
                rules={{
                  required: 'This field is required'
                }}
                className="col-span-3 sm:col-span-3"
              />

              <FormInput
                control={control}
                name="name"
                id="name"
                label="Name"
                autoComplete="cc-name"
                defaultValue=""
                type="text"
                rules={{
                  required: 'This field is required'
                }}
                className="col-span-6 sm:col-span-6"
              />

              <FormSelect
                control={control}
                id="countryCode"
                name="countryCode"
                autoComplete="country"
                label="Country"
                defaultValue="US"
                options={
                  countries.map(({ name, iso2 }) => ({
                    key: iso2,
                    value: iso2,
                    title: name
                  })) ?? []
                }
                className="col-span-6 sm:col-span-3"
              />

              <FormInput
                control={control}
                name="zip"
                id="zip"
                label="ZIP / Postal code"
                autoComplete="postal-code"
                defaultValue=""
                type="text"
                rules={{
                  required: 'This field is required'
                }}
                className="col-span-6 sm:col-span-3"
              />
            </div>
          </section>
        )}
      </div>

      <ModalFormActions
        isSubmitted={isSubmitSuccessful}
        isSubmitting={isSubmitting}
        onCancel={onClose}
        className="mt-8 flex justify-end gap-2"
        submitText="Add card"
      />
    </ModalForm>
  );
};
