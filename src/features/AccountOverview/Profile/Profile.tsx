import { useMutation, useQuery } from '@apollo/client';
import Input from 'components/Form/Input/Input';
import { useSession } from 'next-auth/react';
import type { GetCustomerResponse, UpdateCustomerResponse } from 'queries';
import { GetCustomerQuery, UpdateCustomerMutation } from 'queries';
import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input/react-hook-form-input';
import type { MutationUpdateMyCustomerArgs } from 'types/takeshape';
import AccountSection from '../Section/Section';

interface AccountOverviewProfileForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export const AccountOverviewProfile = () => {
  const { data: session } = useSession({ required: true });
  const { handleSubmit, control, reset } = useForm<AccountOverviewProfileForm>();

  const { data: customerData, error: customerError } = useQuery<GetCustomerResponse>(GetCustomerQuery, {
    skip: !session
  });

  const [setCustomerPayload, { data: customerResponse }] = useMutation<
    UpdateCustomerResponse,
    MutationUpdateMyCustomerArgs
  >(UpdateCustomerMutation);

  const onSubmit = useCallback(
    async ({ firstName, lastName, email, phone }: AccountOverviewProfileForm) => {
      await setCustomerPayload({
        variables: {
          customer: { firstName, lastName, email, phone }
        }
      });
    },
    [setCustomerPayload]
  );

  useEffect(() => {
    if (customerData?.customer) {
      reset(customerData.customer);
    }
  }, [customerData, reset]);

  if (!session) {
    return null;
  }

  const ready = Boolean(customerData);

  return (
    <AccountSection primaryText="Profile" secondaryText="Tell us about yourself.">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <Input
                  disabled={!ready}
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
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <Input
                  disabled={!ready}
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
                />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <Input
                  disabled={!ready}
                  control={control}
                  name="email"
                  id="email"
                  label="Email address"
                  autoComplete="email"
                  defaultValue=""
                  type="email"
                  rules={{
                    required: 'This field is required',
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: 'Please enter a valid email'
                    }
                  }}
                />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                  Phone number
                </label>
                <PhoneInput
                  disabled={!ready}
                  name="phone"
                  type="tel"
                  defaultCountry="US"
                  withCountryCallingCode={true}
                  autoComplete="tel"
                  control={control}
                  rules={{ required: true }}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label className="block text-sm font-medium text-gray-700">Photo</label>
                <div className="mt-1 flex items-center">
                  <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                    <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span>
                  <button
                    type="button"
                    className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Change
                  </button>
                </div>
              </div>
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

export default AccountOverviewProfile;
