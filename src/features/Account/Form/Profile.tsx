import { useMutation, useQuery } from '@apollo/client';
import FormInput from 'components/Form/Input/Input';
import FormPhoneInput from 'components/Form/PhoneInput/PhoneInput';
import type { GetCustomerResponse, UpdateCustomerResponse } from 'queries';
import { GetCustomerQuery, UpdateCustomerMutation } from 'queries';
import { useCallback, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import type { MutationUpdateMyCustomerArgs } from 'types/takeshape';
import { formatError } from 'utils/errors';
import FormCardPanel from '../../../components/Form/CardPanel/CardPanel';

interface AccountFormProfileForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export const AccountFormProfile = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting, isSubmitSuccessful, errors }
  } = useForm<AccountFormProfileForm>();

  const { data: customerData, error: customerDataError } = useQuery<GetCustomerResponse>(GetCustomerQuery);

  const [updateCustomer, { data: customerResponse }] = useMutation<
    UpdateCustomerResponse,
    MutationUpdateMyCustomerArgs
  >(UpdateCustomerMutation);

  const timer = useRef<NodeJS.Timer>(null);

  const onSubmit = useCallback(
    async ({ firstName, lastName, email, phone }: AccountFormProfileForm) => {
      if (timer.current) {
        clearTimeout(timer.current);
        timer.current = null;
      }

      await updateCustomer({
        variables: {
          customer: { firstName, lastName, email, phone }
        }
      });
    },
    [updateCustomer]
  );

  // Set initial values
  useEffect(() => {
    if (customerData?.customer) {
      reset(customerData.customer);
    }
  }, [customerData, reset]);

  // Reset form notices
  useEffect(() => {
    if (isSubmitSuccessful) {
      timer.current = setTimeout(() => reset(undefined, { keepValues: true }), 5000);
      return () => {
        if (timer.current) {
          clearTimeout(timer.current);
          timer.current = null;
        }
      };
    }
  }, [isSubmitSuccessful, reset]);

  const isReady = Boolean(customerData);

  const error =
    customerResponse?.customerUpdate?.customerUserErrors &&
    formatError(customerResponse.customerUpdate.customerUserErrors);

  return (
    <FormCardPanel
      primaryText="Profile"
      secondaryText="Tell us about yourself."
      onSubmit={handleSubmit(onSubmit)}
      isReady={isReady}
      isSubmitting={isSubmitting}
      isSubmitSuccessful={isSubmitSuccessful}
      isValid={Object.entries(errors).length === 0}
      error={error}
    >
      <div className="grid grid-cols-6 gap-6">
        <FormInput
          disabled={!isReady}
          control={control}
          name="firstName"
          id="firstName"
          label="First name"
          autoComplete="given-name"
          defaultValue=""
          type="text"
          rules={{
            required: 'This field is required'
          }}
          className="col-span-6 sm:col-span-3"
        />

        <FormInput
          disabled={!isReady}
          control={control}
          name="lastName"
          id="lastName"
          label="Last name"
          autoComplete="family-name"
          defaultValue=""
          type="text"
          rules={{
            required: 'This field is required'
          }}
          className="col-span-6 sm:col-span-3"
        />

        <FormInput
          disabled={!isReady}
          control={control}
          name="email"
          id="email"
          label="Email address"
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
          className="col-span-6 sm:col-span-4"
        />

        <FormPhoneInput
          disabled={!isReady}
          label="Phone number"
          id="phone"
          name="phone"
          defaultCountry="US"
          withCountryCallingCode={true}
          control={control}
          defaultErrorMessage="Please enter a valid phone number"
          className="col-span-6 sm:col-span-4"
        />
      </div>
    </FormCardPanel>
  );
};

export default AccountFormProfile;
