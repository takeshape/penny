import { useMutation, useQuery } from '@apollo/client';
import Input from 'components/Form/Input/Input';
import Select from 'components/Form/Select/Select';
import { useSession } from 'next-auth/react';
import type { GetCustomerResponse, UpdateCustomerAddressResponse } from 'queries';
import { GetCustomerQuery, UpdateCustomerAddressMutation } from 'queries';
import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import type { MutationUpdateMyCustomerAddressArgs, QueryShopifyStorefront_CustomerArgs } from 'types/takeshape';
import useCountries from 'utils/hooks/useCountries';
import AccountSection from '../Section/Section';

interface AccountOverviewAddressForm {
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  countryCodeV2: string;
  city: string;
  provinceCode: string;
  postalCode: string;
}

export const AccountOverviewAddress = () => {
  const { data: session } = useSession({ required: true });
  const { handleSubmit, formState, control, watch, reset, register } = useForm<AccountOverviewAddressForm>();

  const { data: customerData, error: customerError } = useQuery<
    GetCustomerResponse,
    QueryShopifyStorefront_CustomerArgs
  >(GetCustomerQuery, { skip: !session });

  const [setCustomerAddressPayload, { data: customerAddressResponse }] = useMutation<
    UpdateCustomerAddressResponse,
    MutationUpdateMyCustomerAddressArgs
  >(UpdateCustomerAddressMutation);

  const onSubmit = useCallback(
    async ({ firstName, lastName, address1, address2 }: AccountOverviewAddressForm) => {
      await setCustomerAddressPayload({
        variables: {
          address: { firstName, lastName, address1, address2 },
          id: customerData.customer.defaultAddress.id
        }
      });
    },
    [setCustomerAddressPayload, customerData]
  );

  useEffect(() => {
    if (customerData?.customer?.defaultAddress) {
      reset(customerData.customer.defaultAddress);
    }
  }, [customerData, reset]);

  const countries = useCountries();
  const watchCountry = watch('countryCodeV2', 'US');
  const selectedCountry = watchCountry && countries?.find((c) => c.iso2 === watchCountry);

  if (!session) {
    return null;
  }

  const ready = Boolean(customerData);

  return (
    <AccountSection primaryText="Shipping Address" secondaryText="Use a permanent address where you can receive mail.">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <Input
                  control={control}
                  disabled={!ready}
                  name="firstName"
                  id="firstName"
                  label="First name"
                  autoComplete="given-name"
                  defaultValue=""
                  type="text"
                  rules={{
                    required: 'This field is required'
                  }}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <Input
                  control={control}
                  disabled={!ready}
                  name="lastName"
                  id="lastName"
                  label="Last name"
                  autoComplete="family-name"
                  defaultValue=""
                  type="text"
                  rules={{
                    required: 'This field is required'
                  }}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  Country
                </label>
                {countries?.length ? (
                  <select
                    {...register('countryCodeV2')}
                    id="countryCodeV2"
                    autoComplete="country-name"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    {countries.map(({ name, iso2, iso3 }) => (
                      <option key={iso3} value={iso2}>
                        {name}
                      </option>
                    ))}
                  </select>
                ) : null}
              </div>

              <Input
                control={control}
                disabled={!ready}
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

              <Input
                control={control}
                disabled={!ready}
                name="address2"
                id="address2"
                label="Address line 2"
                autoComplete="address-line2"
                defaultValue=""
                type="text"
                className="col-span-6"
              />

              <Input
                control={control}
                disabled={!ready}
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

              <Select
                control={control}
                disabled={!ready}
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

              <Input
                control={control}
                disabled={!ready}
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
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </AccountSection>
  );
};

export default AccountOverviewAddress;
