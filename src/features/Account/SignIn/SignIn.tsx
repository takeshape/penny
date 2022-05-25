import Alert from 'components/Alert/Alert';
import Input from 'components/Input/Input';
import { siteLogo } from 'config';
import { signIn } from 'next-auth/react';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

export interface AccountSignInForm {
  email: string;
  password: string;
}

export interface AccountSignInProps {
  callbackUrl: string;
  error?: string;
  isNewAccount?: boolean;
}

export const AccountSignIn = ({ callbackUrl, error, isNewAccount }: AccountSignInProps) => {
  const { handleSubmit, formState, control } = useForm<AccountSignInForm>({ mode: 'onBlur' });

  const onSubmit = useCallback(
    async ({ email, password }: AccountSignInForm) => {
      await signIn('shopify', { email, password, callbackUrl });
    },
    [callbackUrl]
  );

  return (
    <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="mx-auto h-12 w-auto" src={siteLogo} alt="Workflow" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form action="#" method="POST" className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {isNewAccount && <Alert status="success" primaryText="Your account was successfully created!" />}
            {error && <Alert status="error" primaryText={error} />}

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

            <div>
              <button
                disabled={formState.isValid === false || formState.isSubmitting || (formState.isSubmitted && !error)}
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="mt-2 border-t border-gray-200 text-gray-500 pt-6 text-center">
                <a href="/account/create" className="text-sm font-medium hover:text-gray-900 cursor-pointer">
                  Sign up instead →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSignIn;
