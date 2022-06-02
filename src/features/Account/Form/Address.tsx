import { useMutation, useQuery } from '@apollo/client';
import FormInput from 'components/Form/Input/Input';
import FormSelect from 'components/Form/Select/Select';
import type { GetCustomerResponse, UpdateCustomerAddressResponse } from 'queries';
import { GetCustomerQuery, UpdateCustomerAddressMutation } from 'queries';
import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import type { MutationUpdateMyCustomerAddressArgs, QueryShopifyStorefront_CustomerArgs } from 'types/takeshape';
import { formatError } from 'utils/errors';
import useCountries from 'utils/hooks/useCountries';
import FormTwoColumnCard from '../../../components/Form/TwoColumnCard/TwoColumnCard';

interface AccountFormAddressForm {
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  countryCodeV2: string;
  city: string;
  provinceCode: string;
  postalCode: string;
}

export const AccountFormAddress = () => {
  const {
    handleSubmit,
    control,
    watch,
    reset,
    formState: { isSubmitting, isSubmitSuccessful, errors }
  } = useForm<AccountFormAddressForm>();

  const { data: customerData, error: customerError } = useQuery<
    GetCustomerResponse,
    QueryShopifyStorefront_CustomerArgs
  >(GetCustomerQuery);

  const [setCustomerAddressPayload, { data: customerAddressResponse }] = useMutation<
    UpdateCustomerAddressResponse,
    MutationUpdateMyCustomerAddressArgs
  >(UpdateCustomerAddressMutation);

  const onSubmit = useCallback(
    async ({ firstName, lastName, address1, address2 }: AccountFormAddressForm) => {
      await setCustomerAddressPayload({
        variables: {
          address: { firstName, lastName, address1, address2 },
          id: customerData.customer.defaultAddress.id
        }
      });
    },
    [setCustomerAddressPayload, customerData]
  );

  // Set initial values
  useEffect(() => {
    if (customerData?.customer?.defaultAddress) {
      reset(customerData.customer.defaultAddress);
    }
  }, [customerData, reset]);

  // Reset form notices
  useEffect(() => {
    if (isSubmitSuccessful) {
      const timer = setTimeout(() => reset(undefined, { keepValues: true }), 5000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [isSubmitSuccessful, reset]);

  const countries = useCountries();
  const watchCountry = watch('countryCodeV2', 'US');
  const selectedCountry = watchCountry && countries?.find((c) => c.iso2 === watchCountry);

  const isReady = Boolean(customerData);
  const error =
    customerAddressResponse?.customerAddressUpdate?.customerUserErrors &&
    formatError(customerAddressResponse.customerAddressUpdate.customerUserErrors);

  return (
    <FormTwoColumnCard
      primaryText="Shipping Address"
      secondaryText="Use a permanent address where you can receive mail."
      onSubmit={handleSubmit(onSubmit)}
      isReady={isReady}
      isSubmitting={isSubmitting}
      isSubmitSuccessful={isSubmitSuccessful}
      isValid={Object.entries(errors).length === 0}
      error={error}
    >
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
          id="countryCodeV2"
          name="countryCodeV2"
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
          id="provinceCode"
          name="provinceCode"
          autoComplete="address-level2"
          label="State"
          options={
            selectedCountry?.states?.map(({ name, state_code }) => ({
              key: state_code,
              value: state_code,
              title: name
            })) ?? []
          }
          className="col-span-6 sm:col-span-3"
        />

        <FormInput
          control={control}
          disabled={!isReady}
          name="zip"
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
      </div>
    </FormTwoColumnCard>
  );
};

export default AccountFormAddress;
