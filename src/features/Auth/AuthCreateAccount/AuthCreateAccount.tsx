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
import { MutationCreateCustomerArgs } from 'types/takeshape';
import { useRecaptcha } from 'utils/hooks/useRecaptcha';
import { CreateCustomerMutation, CreateCustomerResponse } from '../queries';

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
    CreateCustomerResponse,
    MutationCreateCustomerArgs
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

            <div>
              <Button
                disabled={formState.isSubmitting || (formState.isSubmitSuccessful && !error)}
                color="primary"
                type="submit"
                size="medium"
                className="w-full"
              >
                Sign up
              </Button>
            </div>

            <RecaptchaBranding />
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
