import { useMutation } from '@apollo/client';
import Alert from 'components/Alert/Alert';
import Input from 'components/Form/Input/Input';
import { siteLogo } from 'config';
import { signIn } from 'next-auth/react';
import type { CreateCustomerResponse } from 'queries';
import { CreateCustomerMutation } from 'queries';
import { useCallback, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import type { MutationShopifyStorefront_CustomerCreateArgs } from 'types/takeshape';

export interface AccountCreateForm {
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface AccountCreateProps {
  callbackUrl: string;
}

export const AccountCreate = ({ callbackUrl }) => {
  const { handleSubmit, formState, control, watch } = useForm<AccountCreateForm>();

  const [setCustomerPayload, { data: customerResponse }] = useMutation<
    CreateCustomerResponse,
    MutationShopifyStorefront_CustomerCreateArgs
  >(CreateCustomerMutation);

  const watched = useRef({ email: '', password: '' });

  watched.current.email = watch('email', '');
  watched.current.password = watch('password', '');

  useEffect(() => {
    if (customerResponse?.customerCreate?.customer?.id) {
      const { email, password } = watched.current;
      signIn('shopify', { email, password, callbackUrl });
    }
  }, [customerResponse, callbackUrl]);

  const onSubmit = useCallback(
    async ({ email, password }: AccountCreateForm) => {
      await setCustomerPayload({ variables: { input: { email, password } } });
    },
    [setCustomerPayload]
  );

  const hasErrors = customerResponse?.customerCreate?.customerUserErrors?.length > 0;

  return (
    <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="mx-auto h-12 w-auto" src={siteLogo} alt="Workflow" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {hasErrors && (
              <Alert
                status="error"
                primaryText="There was a problem with your submission"
                secondaryText={customerResponse.customerCreate.customerUserErrors.map((e) => e.message)}
              />
            )}

            <Input
              className="sm:col-span-2"
              control={control}
              name="email"
              id="email"
              label="Email Address"
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

            <Input
              className="sm:col-span-2"
              control={control}
              name="password"
              id="password"
              label="Password"
              autoComplete="none"
              defaultValue=""
              type="password"
              rules={{
                required: 'This field is required',
                pattern: {
                  value: /[^\r\n]{8,}/,
                  message: 'Password is too short'
                }
              }}
            />

            <Input
              className="sm:col-span-2"
              control={control}
              name="passwordConfirm"
              id="passwordConfirm"
              label="Confirm Password"
              autoComplete="none"
              defaultValue=""
              type="password"
              rules={{
                required: 'This field is required',
                validate: (value) => value === watched.current.password || 'The passwords do not match'
              }}
            />

            <div>
              <button
                disabled={formState.isSubmitting || (formState.isSubmitSuccessful && !hasErrors)}
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Sign up
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="mt-2 border-t border-gray-200 text-gray-500 pt-6 text-center">
                <a
                  href={`/api/auth/signin`}
                  onClick={(e) => {
                    e.preventDefault();
                    signIn(undefined, { callbackUrl });
                  }}
                  className="text-sm font-medium hover:text-gray-900 cursor-pointer"
                >
                  Sign in instead →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountCreate;
