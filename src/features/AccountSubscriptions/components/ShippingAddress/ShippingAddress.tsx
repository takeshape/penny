import Button from 'components/Button/Button';
import FormInput from 'components/Form/Input/Input';
import FormPhoneInput from 'components/Form/PhoneInput/PhoneInput';
import FormSelect from 'components/Form/Select/Select';
import { Modal, ModalProps } from 'components/Modal/Modal';
import { ShippingAddress } from 'features/AccountSubscriptions/types';
import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useCountries from 'utils/hooks/useCountries';

interface ShippingAddressFormValues extends ShippingAddress {}

interface ShippingAddressFormProps extends ModalProps {
  currentAddress: ShippingAddress;
}

/**
 * TODO Handle errors
 */
export const ShippingAddressForm = ({ isOpen, onClose, currentAddress }: ShippingAddressFormProps) => {
  const {
    handleSubmit,
    control,
    watch,
    reset,
    formState: { isSubmitting, isSubmitSuccessful, errors }
  } = useForm<ShippingAddress>();

  // Set initial values
  useEffect(() => reset(currentAddress), [currentAddress, reset]);

  const handleFormSubmit = useCallback(
    async (formData: ShippingAddressFormValues) => {
      // eslint-disable-next-line no-console
      console.log(formData);
      onClose();
    },
    [onClose]
  );

  const countries = useCountries();
  // Use countryCode here because inconsistent...
  const watchCountry = watch('countryCode', 'US');
  const selectedCountry = watchCountry && countries?.find((c) => c.iso2 === watchCountry);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-12 lg:col-span-12">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">Shipping address</h2>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Update the shipping address for your subscription.</p>
          </div>

          <form className="mt-10" onSubmit={handleSubmit(handleFormSubmit)}>
            <section aria-labelledby="form-heading" className="md:max-h-[calc(7/8*100vh)] overflow-y-scroll p-[1px]">
              <h3 id="form-heading" className="sr-only">
                Shipping address form
              </h3>

              <div className="grid grid-cols-6 gap-6">
                <FormInput
                  control={control}
                  name="firstName"
                  id="firstName"
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
                  name="lastName"
                  id="lastName"
                  label="Last name"
                  autoComplete="family-name"
                  defaultValue=""
                  type="text"
                  rules={{
                    required: 'This field is required'
                  }}
                  className="col-span-6 sm:col-span-3"
                />

                <FormSelect
                  control={control}
                  id="countryCode"
                  name="countryCode"
                  autoComplete="country-name"
                  label="Country"
                  defaultValue="US"
                  options={
                    countries?.map(({ name, iso2 }) => ({
                      key: iso2,
                      value: iso2,
                      title: name
                    })) ?? []
                  }
                  className="col-span-6 sm:col-span-3"
                />

                <FormInput
                  control={control}
                  name="address1"
                  id="address1"
                  label="Address line 1"
                  autoComplete="address-line1"
                  defaultValue=""
                  type="text"
                  rules={{
                    required: 'This field is required'
                  }}
                  className="col-span-6"
                />

                <FormInput
                  control={control}
                  name="address2"
                  id="address2"
                  label="Address line 2"
                  autoComplete="address-line2"
                  defaultValue=""
                  type="text"
                  className="col-span-6"
                />

                <FormInput
                  control={control}
                  name="city"
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
                  id="province"
                  name="province"
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
                  name="zip"
                  id="postalCode"
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
                  id="phone"
                  name="phone"
                  defaultCountry="US"
                  withCountryCallingCode={true}
                  control={control}
                  defaultErrorMessage="Please enter a valid phone number"
                  className="col-span-6 sm:col-span-4"
                />
              </div>
            </section>

            <Button disabled={isSubmitting} color="primary" type="submit" size="large" className="mt-6 w-full">
              Update subscription
            </Button>
          </form>
        </div>
      </div>
    </Modal>
  );
};
