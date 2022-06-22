import Alert from 'components/Alert/Alert';
import Button from 'components/Button/Button';
import FormInput from 'components/Form/Input/Input';
import { siteLogo } from 'config';
import { SignInErrorTypes } from 'next-auth/core/pages/signin';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

export interface AuthSignInForm {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface AuthSignInProps {
  signIn: typeof signIn;
  callbackUrl: string;
  error?: string;
}

export const errors: Record<SignInErrorTypes | 'CheckoutSessionRequired', string> = {
  Signin: 'Try signing in with a different account.',
  OAuthSignin: 'Try signing in with a different account.',
  OAuthCallback: 'Try signing in with a different account.',
  OAuthCreateAccount: 'Try signing in with a different account.',
  EmailCreateAccount: 'Try signing in with a different account.',
  Callback: 'Try signing in with a different account.',
  OAuthAccountNotLinked: 'To confirm your identity, sign in with the same account you used originally.',
  EmailSignin: 'The e-mail could not be sent.',
  CredentialsSignin: 'Email address or password are incorrect.',
  SessionRequired: 'Please sign in to access this page.',
  CheckoutSessionRequired: 'Please sign in to checkout.',
  default: 'Unable to sign in.'
};

export const AuthSignIn = ({ callbackUrl, error, signIn }: AuthSignInProps) => {
  const { handleSubmit, formState, control, register } = useForm<AuthSignInForm>();

  const onSubmit = useCallback(
    async ({ email, password, rememberMe }: AuthSignInForm) => {
      await signIn('shopify', { email, password, rememberMe, callbackUrl });
    },
    [callbackUrl, signIn]
  );

  const hasErrors = Boolean(error);
  const errorMessage = error && (errors[error] ?? errors.default);

  return (
    <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="mx-auto h-12 w-auto" src={siteLogo} alt="Workflow" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {hasErrors && <Alert status="error" primaryText={errorMessage} />}

            <FormInput
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

            <FormInput
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

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  {...register('rememberMe')}
                  id="remember-me"
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link href="/auth/reset-password">
                  <a className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
                </Link>
              </div>
            </div>

            <div>
              <Button
                disabled={formState.isSubmitting || (formState.isSubmitSuccessful && !error)}
                type="submit"
                color="primary"
                className="w-full"
              >
                Sign in
              </Button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="mt-2 border-t border-gray-200 text-gray-500 pt-6 text-center">
                <Link href="/auth/create">
                  <a className="text-sm font-medium hover:text-gray-900 cursor-pointer">Sign up instead →</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
