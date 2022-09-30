import { useMutation } from '@apollo/client';
import Alert from 'components/Alert/Alert';
import Button from 'components/Button/Button';
import Captcha from 'components/Captcha';
import FormInput from 'components/Form/Input/Input';
import { Logo } from 'components/Logo/Logo';
import RecaptchaBranding from 'components/RecaptchaBranding/RecaptchaBranding';
import { FormEventHandler, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { RecoverCustomerPasswordMutationResponse, RecoverCustomerPasswordMutationVariables } from 'types/takeshape';
import { useRecaptcha } from 'utils/hooks/useRecaptcha';
import { RecoverCustomerPasswordMutation } from '../queries';

export interface AuthRecoverPasswordForm {
  email: string;
}

export interface AuthRecoverPasswordProps {
  callbackUrl: string;
}

export const AuthRecoverPassword = ({ callbackUrl }: AuthRecoverPasswordProps) => {
  const { handleSubmit, formState, control } = useForm<AuthRecoverPasswordForm>({ mode: 'onBlur' });

  const [setRecoverPasswordPayload, { data: recoverPasswordData }] = useMutation<
    RecoverCustomerPasswordMutationResponse,
    RecoverCustomerPasswordMutationVariables
  >(RecoverCustomerPasswordMutation);

  const { executeRecaptcha, recaptchaRef, handleRecaptchaChange } = useRecaptcha();

  const onSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    (e) => {
      e.preventDefault();
      executeRecaptcha((recaptchaToken) => {
        handleSubmit(async ({ email }: AuthRecoverPasswordForm) => {
          await setRecoverPasswordPayload({ variables: { email, recaptchaToken } });
        })();
      });
    },
    [executeRecaptcha, handleSubmit, setRecoverPasswordPayload]
  );

  const hasData = Boolean(recoverPasswordData);
  const hasErrors = (recoverPasswordData?.customerRecover?.customerUserErrors?.length ?? 0) > 0;

  return (
    <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Logo className="h-12 w-auto" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-body-900">Reset your password</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-background py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={onSubmit}>
            {hasErrors && (
              <Alert
                status="error"
                primaryText="There was a problem with your submission"
                secondaryText={recoverPasswordData?.customerRecover?.customerUserErrors.map((e) => e.message)}
              />
            )}

            {hasData && !hasErrors && (
              <Alert status="success" primaryText="Check your email for password reset instructions" />
            )}

            {!hasData && (
              <>
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
                <Captcha recaptchaRef={recaptchaRef} handleRecaptchaChange={handleRecaptchaChange} />
                <div>
                  <Button disabled={formState.isSubmitting} type="submit" color="primary" className="w-full">
                    Reset password
                  </Button>
                </div>
                <RecaptchaBranding />
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
