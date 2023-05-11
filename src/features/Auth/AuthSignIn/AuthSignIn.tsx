import Alert from 'components/Alert/Alert';
import Button from 'components/Button/Button';
import FormInput from 'components/Form/Input/Input';
import { Logo } from 'components/Logo/Logo';
import NextLink from 'components/NextLink';
import { AccountInactiveForm } from 'features/Auth/AuthAccountInactive/AuthAccountInactive';
import { SigninError } from 'features/Auth/types';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useCallback, useMemo, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { sanitizeCallbackUrl } from 'utils/callbacks';

export interface AuthSignInForm {
  email: string;
  password: string;
  rememberMe: boolean;
}
export interface AuthSignInProps {
  signIn: typeof signIn;
  callbackUrl: string;
  error?: SigninError;
  useMultipass: boolean;
  email?: string;
}

export const errors: Record<string, string> = {
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
  CannotCreate: 'Email address already in use. Sign in instead.',
  EmailInUse: '',
  UNIDENTIFIED_CUSTOMER: 'Try signing in with a different account.',
  default: 'Unable to sign in.'
};

export const AuthSignIn = ({ callbackUrl, error, signIn, useMultipass, email }: AuthSignInProps) => {
  const sanitizedCallbackUrl = useMemo(() => sanitizeCallbackUrl(callbackUrl), [callbackUrl]);

  const { handleSubmit, formState, control, register, watch, reset } = useForm<AuthSignInForm>();
  const { push } = useRouter();
  const watched = useRef({ email: '' });

  watched.current.email = watch('email', '');

  const onSubmit = useCallback(
    async ({ email, password, rememberMe }: AuthSignInForm) => {
      await signIn('shopify', { email, password, rememberMe, callbackUrl });
    },
    [callbackUrl, signIn]
  );

  const hasErrors = Boolean(error);
  const errorMessage = error && (errors[error.code] ?? errors.default);

  const signupLink = useMemo(() => {
    let href = '/auth/create';
    if (sanitizedCallbackUrl) {
      href += `?callbackUrl=${encodeURIComponent(sanitizedCallbackUrl)}`;
    }
    return href;
  }, [sanitizedCallbackUrl]);

  const signinGoogle = useCallback(() => {
    signIn('google', { callbackUrl });
  }, [callbackUrl, signIn]);

  const inactiveCustomer = useMemo(() => {
    if (error?.code === 'EmailInUse') {
      return {
        email: error.email,
        id: error.customerId
      };
    }
  }, [error]);

  const isAccountInactiveOpen = useMemo(() => inactiveCustomer !== null, [inactiveCustomer]);
  const onAccountInactiveFormClose = useCallback(() => {
    push(window.location.pathname);
    reset();
  }, [reset, push]);

  return (
    <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      {inactiveCustomer && (
        <AccountInactiveForm
          customer={inactiveCustomer}
          isOpen={isAccountInactiveOpen}
          onClose={onAccountInactiveFormClose}
        />
      )}

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Logo className="h-12 w-auto" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-body-900">Sign in to your account</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-background py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {hasErrors && errorMessage && <Alert status="error" primaryText={errorMessage} />}

            <FormInput
              className="sm:col-span-2"
              control={control}
              name="email"
              id="email"
              label="Email Address"
              autoComplete="email"
              defaultValue={email ?? ''}
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
                  className="h-4 w-4 text-accent-600 focus:ring-accent-500 border-body-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-body-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <NextLink
                  href={`/auth/reset-password?callbackUrl=${encodeURIComponent('/auth/signin')}`}
                  className="font-medium text-accent-600 hover:text-accent-500"
                >
                  Forgot your password?
                </NextLink>
              </div>
            </div>

            <Button
              disabled={formState.isSubmitting || (formState.isSubmitSuccessful && !error)}
              type="submit"
              color="primary"
              className="w-full"
            >
              Sign in
            </Button>

            <div className="text-body-500 text-sm">
              Don&apos;t have an account?
              <NextLink
                href={signupLink}
                className="ml-1 font-medium text-accent-500 hover:text-accent-500 cursor-pointer"
              >
                Sign up
              </NextLink>
            </div>
          </form>

          {useMultipass && (
            <div className="mt-6">
              <div className="mt-4">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-body-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-background text-body-500">OR</span>
                  </div>
                </div>

                <div className="mt-4">
                  <div>
                    <button
                      className="w-full inline-flex justify-center py-2 px-4 border border-form-300 rounded-md shadow-sm bg-background text-sm font-medium text-form-500 hover:bg-form-50"
                      onClick={signinGoogle}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 1024 1024"
                        className="w-5 h-5"
                      >
                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm167 633.6C638.4 735 583 757 516.9 757c-95.7 0-178.5-54.9-218.8-134.9C281.5 589 272 551.6 272 512s9.5-77 26.1-110.1c40.3-80.1 123.1-135 218.8-135 66 0 121.4 24.3 163.9 63.8L610.6 401c-25.4-24.3-57.7-36.6-93.6-36.6-63.8 0-117.8 43.1-137.1 101-4.9 14.7-7.7 30.4-7.7 46.6s2.8 31.9 7.7 46.6c19.3 57.9 73.3 101 137 101 33 0 61-8.7 82.9-23.4 26-17.4 43.2-43.3 48.9-74H516.9v-94.8h230.7c2.9 16.1 4.4 32.8 4.4 50.1 0 74.7-26.7 137.4-73 180.1z" />
                      </svg>
                      <span className="ml-2">Continue with Google</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
