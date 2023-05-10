import { useMutation } from '@apollo/client';
import Alert from 'components/Alert/Alert';
import Button from 'components/Button/Button';
import FormInput from 'components/Form/Input/Input';
import { Logo } from 'components/Logo/Logo';
import RecaptchaBranding from 'components/RecaptchaBranding/RecaptchaBranding';
import { useCallback, useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AuthResetPasswordMutationResponse, AuthResetPasswordMutationVariables } from 'types/storefront';
import { RecoverCustomerPasswordMutation } from '../queries';

export interface AuthResetPasswordForm {
  password: string;
  passwordConfirm: string;
}

export interface AuthResetPasswordProps {
  callbackUrl: string;
  customerId: string;
  resetToken?: string;
  activationToken?: string;
}

export const AuthResetPassword = ({ customerId, resetToken, activationToken, callbackUrl }: AuthResetPasswordProps) => {
  const { handleSubmit, formState, control, watch } = useForm<AuthResetPasswordForm>({ mode: 'onBlur' });

  const [setResetPasswordPayload, { data: resetPasswordData }] = useMutation<
    AuthResetPasswordMutationResponse,
    AuthResetPasswordMutationVariables
  >(RecoverCustomerPasswordMutation);

  const onSubmit: SubmitHandler<AuthResetPasswordForm> = useCallback(
    async ({ password }) => {
      console.log({ customerId, password, resetToken, activationToken });
    },
    [activationToken, customerId, resetToken]
  );

  const hasData = Boolean(resetPasswordData);
  const hasErrors = (resetPasswordData?.customerReset?.customerUserErrors?.length ?? 0) > 0;
  const watched = useRef({ password: '' });
  watched.current.password = watch('password', '');

  return (
    <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Logo className="h-12 w-auto" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-body-900">Reset your password</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-background py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {hasErrors && (
              <Alert
                status="error"
                primaryText="There was a problem with your submission"
                secondaryText={resetPasswordData?.customerReset?.customerUserErrors.map((e) => e.message)}
              />
            )}

            {hasData && !hasErrors && (
              <Alert status="success" primaryText="Check your email for password reset instructions" />
            )}

            {!hasData && (
              <>
                <FormInput
                  className="col-span-4"
                  control={control}
                  name="password"
                  id="password"
                  label="New Password"
                  autoComplete="new-password"
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
                  className="col-span-4"
                  control={control}
                  name="passwordConfirm"
                  id="passwordConfirm"
                  label="Confirm New Password"
                  autoComplete="new-password"
                  defaultValue=""
                  type="password"
                  rules={{
                    required: 'This field is required',
                    validate: (value) => value === watched.current.password || 'The passwords do not match'
                  }}
                />
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
