import { useMutation } from '@apollo/client';
import Alert from 'components/Alert/Alert';
import Button from 'components/Button/Button';
import Captcha from 'components/Captcha';
import FormInput from 'components/Form/Input/Input';
import RecaptchaBranding from 'components/RecaptchaBranding/RecaptchaBranding';
import { siteLogo } from 'config';
import { signIn } from 'next-auth/react';
import { useCallback, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { CreateCustomerMutationResponse, CreateCustomerMutationVariables } from 'types/takeshape';
import { useRecaptcha } from 'utils/hooks/useRecaptcha';
import { CreateCustomerMutation } from '../queries';

export interface AuthCreateAccountForm {
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface AuthCreateAccountProps {
  callbackUrl: string;
  signIn: typeof signIn;
}

export const AuthCreateAccount = ({ callbackUrl, signIn }: AuthCreateAccountProps) => {
  const { handleSubmit, formState, control, watch } = useForm<AuthCreateAccountForm>();

  const [setCustomerPayload, { data: customerResponse, error }] = useMutation<
    CreateCustomerMutationResponse,
    CreateCustomerMutationVariables
  >(CreateCustomerMutation);

  const watched = useRef({ email: '', password: '' });

  watched.current.email = watch('email', '');
  watched.current.password = watch('password', '');

  useEffect(() => {
    if (customerResponse?.customerCreate?.customer?.id) {
      const { email, password } = watched.current;
      signIn('shopify', { email, password, callbackUrl });
    }
  }, [customerResponse, signIn, callbackUrl]);

  const { executeRecaptcha, recaptchaRef, handleRecaptchaChange } = useRecaptcha();

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      executeRecaptcha((recaptchaToken) => {
        handleSubmit(async ({ email, password }: AuthCreateAccountForm) => {
          await setCustomerPayload({
            variables: { input: { email, password, recaptchaToken } }
          });
        })();
      });
    },
    [executeRecaptcha, handleSubmit, setCustomerPayload]
  );

  const signinGoogle = useCallback(() => {
    signIn('google', { callbackUrl });
  }, [callbackUrl, signIn]);

  return (
    <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="mx-auto h-12 w-auto" src={siteLogo} alt="Workflow" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={onSubmit}>
            {error && (
              <Alert
                status="error"
                primaryText="There was a problem with your submission"
                secondaryText={error.message}
              />
            )}

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

            <FormInput
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

            <Captcha recaptchaRef={recaptchaRef} handleRecaptchaChange={handleRecaptchaChange} />

            <Button
              disabled={formState.isSubmitting || (formState.isSubmitSuccessful && !error)}
              color="primary"
              type="submit"
              size="medium"
              className="w-full"
            >
              Sign up
            </Button>

            <div className="text-gray-500 text-sm">
              Already have an account?
              <a
                href={`/api/auth/signin`}
                onClick={(e) => {
                  e.preventDefault();
                  signIn(undefined, { callbackUrl });
                }}
                className="ml-1 text-sm font-medium text-indigo-500 hover:text-indigo-500 cursor-pointer"
              >
                Sign in
              </a>
            </div>
          </form>

          <div className="mt-6">
            <div className="mt-4">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">OR</span>
                </div>
              </div>

              <div className="mt-4">
                <div>
                  <button
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
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

          <div className="mt-6">
            <RecaptchaBranding />
          </div>
        </div>
      </div>
    </div>
  );
};
