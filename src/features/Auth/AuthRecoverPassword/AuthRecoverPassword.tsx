'use client';

import Alert from '@/components/Alert/Alert';
import Button from '@/components/Button/Button';
import FormInput from '@/components/Form/Input/Input';
import { Logo } from '@/components/Logo/Logo';
import RecaptchaBranding from '@/components/RecaptchaBranding/RecaptchaBranding';
import { AccountInactiveForm } from '@/features/Auth/AuthAccountInactive/AuthAccountInactive';
import {
  GetCustomerStateQueryResponse,
  GetCustomerStateQueryVariables,
  RecoverCustomerPasswordMutationResponse,
  RecoverCustomerPasswordMutationVariables
} from '@/types/takeshape';
import { sanitizeCallbackUrl } from '@/utils/callbacks';
import { useMutation, useQuery } from '@apollo/client';
import { useReCaptcha } from 'next-recaptcha-v3';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { GetCustomerStateQuery, RecoverCustomerPasswordMutation } from '../queries';
import { InactiveCustomer } from '../types';

export type AuthRecoverPasswordForm = {
  email: string;
};

export type AuthRecoverPasswordProps = {
  callbackUrl: string;
};

export const AuthRecoverPassword = ({ callbackUrl }: AuthRecoverPasswordProps) => {
  const sanitizedCallbackUrl = useMemo(() => sanitizeCallbackUrl(callbackUrl), [callbackUrl]);

  const [inactiveCustomer, setInactiveCustomer] = useState<InactiveCustomer | null>(null);
  const { handleSubmit, formState, reset, control } = useForm<AuthRecoverPasswordForm>({ mode: 'onBlur' });

  const router = useRouter();
  const [setRecoverPasswordPayload, { data: recoverPasswordData }] = useMutation<
    RecoverCustomerPasswordMutationResponse,
    RecoverCustomerPasswordMutationVariables
  >(RecoverCustomerPasswordMutation);

  const { refetch } = useQuery<GetCustomerStateQueryResponse, GetCustomerStateQueryVariables>(GetCustomerStateQuery, {
    skip: true
  });

  const { executeRecaptcha } = useReCaptcha();

  const onSubmit: SubmitHandler<AuthRecoverPasswordForm> = useCallback(
    async ({ email }) => {
      const {
        data: { customer }
      } = await refetch({ email });

      if (customer?.state === 'invited' || customer?.state === 'disabled') {
        if (!customer.id) {
          throw new Error('Invalid customer state');
        }

        setInactiveCustomer({ email, id: customer.id });
        return;
      }

      if (customer?.state === 'no-account') {
        // Send to sign up page
        void router.push(`/account/create?notice=Email+address+not+found.&email=${email}`);
        return;
      }

      const recaptchaToken = await executeRecaptcha('recover_password');
      await setRecoverPasswordPayload({ variables: { email, recaptchaToken } });
    },
    [executeRecaptcha, router, refetch, setRecoverPasswordPayload]
  );

  const isAccountInactiveOpen = useMemo(() => inactiveCustomer !== null, [inactiveCustomer]);
  const onAccountInactiveFormClose = useCallback(() => {
    setInactiveCustomer(null);
    reset();
  }, [reset]);

  const hasData = Boolean(recoverPasswordData);
  const hasErrors = (recoverPasswordData?.customerRecover?.customerUserErrors?.length ?? 0) > 0;

  useEffect(() => {
    if (sanitizedCallbackUrl && hasData) {
      setTimeout(() => void router.push(sanitizedCallbackUrl), 5000);
    }
  }, [sanitizedCallbackUrl, hasData, router]);

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
        <h2 className="mt-6 text-center text-3xl font-extrabold text-body-900">Reset your password</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-background py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={(...args) => void handleSubmit(onSubmit)(...args)}>
            {hasErrors && (
              <Alert
                status="error"
                primaryText="There was a problem with your submission"
                secondaryText={recoverPasswordData?.customerRecover?.customerUserErrors.map((e) => e.message)}
              />
            )}

            {hasData && !hasErrors && (
              <Alert
                status="success"
                primaryText="Email Sent"
                secondaryText="Check your email for password reset instructions"
              />
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
                <RecaptchaBranding />
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
