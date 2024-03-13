import FormCardPanel from '@/components/Form/CardPanel/CardPanel';
import FormInput from '@/components/Form/Input/Input';
import FormSelect from '@/components/Form/Select/Select';
import {
  CustomerAddressUpdateMutationResponse,
  CustomerAddressUpdateMutationVariables,
  CustomerQueryResponse,
  CustomerQueryVariables
} from '@/types/storefront';
import { countries } from '@/utils/countries/countries';
import { formatError } from '@/utils/errors';
import { useStorefrontLazyQuery, useStorefrontMutation } from '@/utils/storefront';
import { useSession } from 'next-auth/react';
import { useCallback, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { CustomerAddressUpdateMutation, CustomerQuery } from './queries.storefront';

interface AccountFormAddressForm {
  firstName: string | null;
  lastName: string | null;
  address1: string | null;
  address2: string | null;
  country: string | null;
  city: string | null;
  province: string | null;
  zip: string | null;
  company: string | null;
}

export const AccountFormAddress = () => {
  const { data: session } = useSession({ required: true });

  const {
    handleSubmit,
    control,
    watch,
    reset,
    formState: { isSubmitting, isSubmitSuccessful, errors }
  } = useForm<AccountFormAddressForm>();

  const [loadCustomer, { data: customerData }] = useStorefrontLazyQuery<CustomerQueryResponse, CustomerQueryVariables>(
    CustomerQuery
  );

  const [setCustomerAddressPayload, { data: customerAddressResponse }] = useStorefrontMutation<
    CustomerAddressUpdateMutationResponse,
    CustomerAddressUpdateMutationVariables
  >(CustomerAddressUpdateMutation);

  const timer: { current: NodeJS.Timeout | null } = useRef(null);

  const onSubmit = useCallback(
    async ({
      firstName,
      lastName,
      address1,
      address2,
      country,
      city,
      province,
      zip,
      company
    }: AccountFormAddressForm) => {
      if (timer.current) {
        clearTimeout(timer.current);
        timer.current = null;
      }

      if (!session?.user?.shopifyCustomerAccessToken || !customerData?.customer?.defaultAddress) {
        return;
      }

      await setCustomerAddressPayload({
        variables: {
          customerAccessToken: session.user.shopifyCustomerAccessToken,
          address: {
            firstName,
            lastName,
            address1,
            address2,
            country,
            city,
            province,
            zip,
            company,
            phone: ''
          },
          id: customerData.customer.defaultAddress.id
        }
      });
    },
    [setCustomerAddressPayload, session, customerData]
  );

  // Load the customer
  useEffect(() => {
    if (session?.user?.shopifyCustomerAccessToken) {
      loadCustomer({
        variables: {
          customerAccessToken: session.user.shopifyCustomerAccessToken
        }
      });
    }
  }, [loadCustomer, session]);

  // Set initial values
  useEffect(() => {
    if (customerData?.customer?.defaultAddress) {
      reset(customerData.customer.defaultAddress);
    }
  }, [customerData, reset]);

  // Reset form notices
  useEffect(() => {
    if (isSubmitSuccessful) {
      timer.current = setTimeout(() => reset(undefined, { keepValues: true }), 5000);
      return () => {
        if (timer.current) {
          clearTimeout(timer.current);
          timer.current = null;
        }
      };
    }
  }, [isSubmitSuccessful, reset]);

  const watchCountry = watch('country', 'United States');
  const selectedCountry = watchCountry ? countries.find((c) => c.name === watchCountry) : null;

  const isReady = Boolean(customerData);
  const error =
    customerAddressResponse?.customerAddressUpdate?.customerUserErrors &&
    formatError(customerAddressResponse.customerAddressUpdate.customerUserErrors);

  return (
    <FormCardPanel
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

        <FormInput
          control={control}
          disabled={!isReady}
          name="company"
          id="company"
          label="Company"
          autoComplete="organization"
          defaultValue=""
          type="text"
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
            countries.map(({ name, iso2 }) => ({
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
    </FormCardPanel>
  );
};
