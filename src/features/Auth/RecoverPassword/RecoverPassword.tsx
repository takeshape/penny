import { useMutation } from '@apollo/client';
import Alert from 'components/Alert/Alert';
import Button from 'components/Button/Button';
import FormInput from 'components/Form/Input/Input';
import { siteLogo } from 'config';
import { RecoverCustomerPasswordMutation, RecoverCustomerPasswordResponse } from 'queries';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { MutationShopifyStorefront_CustomerRecoverArgs } from 'types/takeshape';

export interface AuthRecoverPasswordForm {
  email: string;
}

export interface AuthRecoverPasswordProps {
  callbackUrl: string;
}

export const AuthRecoverPassword = ({ callbackUrl }: AuthRecoverPasswordProps) => {
  const { handleSubmit, formState, control } = useForm<AuthRecoverPasswordForm>({ mode: 'onBlur' });

  const [setRecoverPasswordPayload, { data: recoverPasswordData }] = useMutation<
    RecoverCustomerPasswordResponse,
    MutationShopifyStorefront_CustomerRecoverArgs
  >(RecoverCustomerPasswordMutation);

  const onSubmit = useCallback(
    async ({ email }: AuthRecoverPasswordForm) => {
      await setRecoverPasswordPayload({ variables: { email } });
    },
    [setRecoverPasswordPayload]
  );

  const hasData = Boolean(recoverPasswordData);
  const hasErrors = recoverPasswordData?.customerRecover?.customerUserErrors?.length > 0;

  return (
    <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="mx-auto h-12 w-auto" src={siteLogo} alt="Workflow" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Reset your password</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {hasErrors && (
              <Alert
                status="error"
                primaryText="There was a problem with your submission"
                secondaryText={recoverPasswordData.customerRecover.customerUserErrors.map((e) => e.message)}
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

                <div>
                  <Button disabled={formState.isSubmitting} type="submit" color="primary" className="w-full">
                    Reset password
                  </Button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthRecoverPassword;
