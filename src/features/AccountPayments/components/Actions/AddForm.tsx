import FormInput from 'components/Form/Input/Input';
import FormPhoneInput from 'components/Form/PhoneInput/PhoneInput';
import FormSelect from 'components/Form/Select/Select';
import { ModalProps } from 'components/Modal/Modal';
import { ModalForm } from 'features/AccountSubscriptions/components/Actions/ModalForm';
import { ModalFormActions } from 'features/AccountSubscriptions/components/Actions/ModalFormActions';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import useCountries from 'utils/hooks/useCountries';

export interface AddFormProps extends ModalProps {
  customerId: string;
}

export interface AddFormValues {
  number: string;
  first_name: string;
  last_name: string;
  month: string;
  year: string;
  verification_value: string;
  billingAddress: {
    address1: string;
    address2: string;
    city: string;
    company: string;
    countryCode: string;
    phone: string;
    provinceCode: string;
    zip: string;
  };
}

/**
 * TODO Handle submit errors
 */
export const AddForm = ({ isOpen, onClose, customerId }: AddFormProps) => {
  const {
    handleSubmit,
    control,
    reset,
    watch,
    formState: { isSubmitting, isSubmitSuccessful, isSubmitted }
  } = useForm<AddFormValues>();

  const countries = useCountries();
  const watchCountry = watch('billingAddress.countryCode', 'US');
  const selectedCountry = watchCountry && countries?.find((c) => c.iso2 === watchCountry);

  const handleFormSubmit = useCallback(
    async (formData: AddFormValues) => {
      // eslint-disable-next-line no-console
      console.log({ formData, customerId });
      // TODO Mutate payment methods list
    },
    [customerId]
  );

  const resetState = useCallback(() => reset(), [reset]);

  return (
    <ModalForm
      isOpen={isOpen}
      onClose={onClose}
      primaryText="Add payment method"
      afterLeave={resetState}
      onSubmit={handleSubmit(handleFormSubmit)}
      isSubmitSuccessful={isSubmitSuccessful}
      autoCloseDelay={3000}
    >
      <div className="md:h-[calc(1/2*100vh)] overflow-y-scroll p-[1px] flex flex-col">
        {isSubmitSuccessful ? (
          <div className="h-full font-medium flex flex-col items-center justify-center text-gray-600">
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
                type="text"
                rules={{
                  required: 'This field is required'
                }}
                className="col-span-6 sm:col-span-3"
              />

              <FormInput
                control={control}
                name="month"
                id="month"
                label="Expiration month"
                autoComplete="cc-exp-month"
                defaultValue=""
                type="text"
                rules={{
                  required: 'This field is required'
                }}
                className="col-span-6 sm:col-span-3"
              />

              <FormInput
                control={control}
                name="year"
                id="year"
                label="Expiration year"
                autoComplete="cc-exp-year"
                defaultValue=""
                type="text"
                rules={{
                  required: 'This field is required'
                }}
                className="col-span-6 sm:col-span-3"
              />

              <FormInput
                control={control}
                name="verification_value"
                id="verification_value"
                label="CVV"
                autoComplete="cc-csc"
                defaultValue=""
                type="text"
                rules={{
                  required: 'This field is required'
                }}
                className="col-span-6 sm:col-span-3"
              />

              <FormInput
                control={control}
                name="first_name"
                id="first_name"
                label="First name"
                autoComplete="given-name"
                defaultValue=""
                type="text"
                rules={{
                  required: 'This field is required'
                }}
                className="col-span-6 sm:col-span-3"
              />

              <FormInput
                control={control}
                name="last_name"
                id="last_name"
                label="Last name"
                autoComplete="family-name"
                defaultValue=""
                type="text"
                rules={{
                  required: 'This field is required'
                }}
                className="col-span-6 sm:col-span-3"
              />

              <FormInput
                control={control}
                name="billingAddress.address1"
                id="address1"
                label="Address Line 1"
                autoComplete="address-line1"
                defaultValue=""
                type="text"
                rules={{
                  required: 'This field is required'
                }}
                className="col-span-6 sm:col-span-3"
              />

              <FormInput
                control={control}
                name="billingAddress.address2"
                id="address2"
                label="Address Line 2"
                autoComplete="address-line2"
                defaultValue=""
                type="text"
                rules={{
                  required: 'This field is required'
                }}
                className="col-span-6 sm:col-span-3"
              />

              <FormInput
                control={control}
                name="billingAddress.address2"
                id="address2"
                label="Address Line 2"
                autoComplete="address-line2"
                defaultValue=""
                type="text"
                rules={{
                  required: 'This field is required'
                }}
                className="col-span-6 sm:col-span-3"
              />

              <FormInput
                control={control}
                name="billingAddress.city"
                id="city"
                label="City"
                autoComplete="address-level1"
                defaultValue=""
                type="text"
                rules={{
                  required: 'This field is required'
                }}
                className="col-span-3"
              />

              <FormSelect
                control={control}
                id="billingAddress.provinceCode"
                name="billingAddress.provinceCode"
                autoComplete="address-level2"
                label="State"
                options={
                  selectedCountry?.states?.map(({ name, state_code }) => ({
                    key: state_code,
                    value: name,
                    title: name
                  })) ?? []
                }
                className="col-span-6 sm:col-span-3"
              />

              <FormInput
                control={control}
                name="billingAddress.zip"
                id="zip"
                label="ZIP / Postal code"
                autoComplete="postal-code"
                defaultValue=""
                type="text"
                rules={{
                  required: 'This field is required'
                }}
                className="col-span-6"
              />

              <FormPhoneInput
                label="Phone number"
                id="billingAddress.phone"
                name="billingAddress.phone"
                defaultCountry="US"
                withCountryCallingCode={true}
                control={control}
                defaultErrorMessage="Please enter a valid phone number"
                className="col-span-6 sm:col-span-4"
              />
            </div>
          </section>
        )}
      </div>

      <ModalFormActions
        isSubmitted={isSubmitted}
        isSubmitting={isSubmitting}
        onCancel={onClose}
        className="mt-8 flex justify-end gap-2"
        submitText="Add"
      />
    </ModalForm>
  );
};
