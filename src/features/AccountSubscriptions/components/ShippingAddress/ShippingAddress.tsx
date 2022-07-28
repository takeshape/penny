import Button from 'components/Button/Button';
import FormInput from 'components/Form/Input/Input';
import FormSelect from 'components/Form/Select/Select';
import { Modal, ModalProps } from 'components/Modal/Modal';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import useCountries from 'utils/hooks/useCountries';

interface ShippingAddressFormValues {
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  country: string;
  city: string;
  province: string;
  zip: string;
}

interface ShippingAddressFormProps extends ModalProps {}

export const ShippingAddressForm = ({ isOpen, onClose }: ShippingAddressFormProps) => {
  const isReady = true;

  const {
    handleSubmit,
    control,
    watch,
    formState: { isSubmitting, isSubmitSuccessful, errors }
  } = useForm<ShippingAddressFormValues>({
    defaultValues: {}
  });

  const handleFormSubmit = useCallback(
    async (formData: ShippingAddressFormValues) => {
      // eslint-disable-next-line no-console
      console.log(formData);

      onClose();
    },
    [onClose]
  );

  const countries = useCountries();
  const watchCountry = watch('country', 'United States');
  const selectedCountry = watchCountry && countries?.find((c) => c.name === watchCountry);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-12 lg:col-span-12">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">Shipping address</h2>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Update the shipping address for your subscription.</p>
          </div>

          <form className="mt-10" onSubmit={handleSubmit(handleFormSubmit)}>
            <section aria-labelledby="form-heading" className="md:max-h-[calc(1/2*100vh)] overflow-scroll">
              <h3 id="form-heading" className="sr-only">
                Shipping address form
              </h3>

              <div className="grid grid-cols-6 gap-6">
                <FormInput
                  control={control}
                  disabled={!isReady}
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
                  disabled={!isReady}
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
                  disabled={!isReady}
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  label="Country"
                  defaultValue="US"
                  options={
                    countries?.map(({ name, iso2 }) => ({
                      key: iso2,
                      value: name,
                      title: name
                    })) ?? []
                  }
                  className="col-span-6 sm:col-span-3"
                />

                <FormInput
                  control={control}
                  disabled={!isReady}
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
                  disabled={!isReady}
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
                  disabled={!isReady}
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
                  disabled={!isReady}
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
                  disabled={!isReady}
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
