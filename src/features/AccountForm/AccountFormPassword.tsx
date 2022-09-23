import FormCardPanel from 'components/Form/CardPanel/CardPanel';
import FormInput from 'components/Form/Input/Input';
import { signOut, useSession } from 'next-auth/react';
import { useCallback, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { CustomerUpdateMutationResponse, CustomerUpdateMutationVariables } from 'types/storefront';
import { formatError } from 'utils/errors';
import { useStorefrontMutation } from 'utils/storefront';
import { CustomerUpdateMutation } from './queries.storefront';

export interface AccountFormPasswordForm {
  password: string;
  passwordConfirm: string;
}

export const AccountFormPassword = () => {
  const { data: session } = useSession({ required: true });

  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting, isSubmitSuccessful, errors },
    watch
  } = useForm<AccountFormPasswordForm>();

  const [updateCustomer, { data: customerResponse }] = useStorefrontMutation<
    CustomerUpdateMutationResponse,
    CustomerUpdateMutationVariables
  >(CustomerUpdateMutation);

  const onSubmit = useCallback(
    async ({ password }: AccountFormPasswordForm) => {
      if (!session) {
        return;
      }

      await updateCustomer({
        variables: {
          customerAccessToken: session.shopifyCustomerAccessToken as string,
          customer: { password }
        }
      });
    },
    [updateCustomer, session]
  );

  const error =
    customerResponse?.customerUpdate?.customerUserErrors &&
    formatError(customerResponse.customerUpdate.customerUserErrors);

  useEffect(() => {
    if (isSubmitSuccessful && !error) {
      signOut({ callbackUrl: '/auth/signin' });
    }
  }, [isSubmitSuccessful, error, reset]);

  const watched = useRef({ password: '' });
  watched.current.password = watch('password', '');

  const isReady = true;

  return (
    <FormCardPanel
      primaryText="New Password"
      secondaryText="Setting a new password will sign you out."
      onSubmit={handleSubmit(onSubmit)}
      isReady={isReady}
      isSubmitting={isSubmitting}
      isSubmitSuccessful={isSubmitSuccessful}
      isValid={Object.entries(errors).length === 0}
      error={error}
    >
      <div className="grid grid-cols-6 gap-6">
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
      </div>
    </FormCardPanel>
  );
};
