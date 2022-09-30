import FormCardPanel from 'components/Form/CardPanel/CardPanel';
import FormInput from 'components/Form/Input/Input';
import FormPhoneInput from 'components/Form/PhoneInput/PhoneInput';
import { useSession } from 'next-auth/react';
import { useCallback, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import {
  CustomerQueryResponse,
  CustomerQueryVariables,
  CustomerUpdateMutationResponse,
  CustomerUpdateMutationVariables
} from 'types/storefront';
import { formatError } from 'utils/errors';
import { useStorefrontLazyQuery, useStorefrontMutation } from 'utils/storefront';
import { CustomerQuery, CustomerUpdateMutation } from './queries.storefront';

interface AccountFormProfileForm {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phone: string | null;
}

export const AccountFormProfile = () => {
  const { data: session } = useSession({ required: true });

  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting, isSubmitSuccessful, errors }
  } = useForm<AccountFormProfileForm>();

  const [loadCustomer, { data: customerData }] = useStorefrontLazyQuery<CustomerQueryResponse, CustomerQueryVariables>(
    CustomerQuery
  );

  const [updateCustomer, { data: customerResponse }] = useStorefrontMutation<
    CustomerUpdateMutationResponse,
    CustomerUpdateMutationVariables
  >(CustomerUpdateMutation);

  const timer: { current: NodeJS.Timeout | null } = useRef(null);

  const onSubmit = useCallback(
    async ({ firstName, lastName, email, phone }: AccountFormProfileForm) => {
      if (timer.current) {
        clearTimeout(timer.current);
        timer.current = null;
      }

      if (!session) {
        return;
      }

      await updateCustomer({
        variables: {
          customerAccessToken: session.shopifyCustomerAccessToken as string,
          customer: { firstName, lastName, email, phone }
        }
      });
    },
    [session, updateCustomer]
  );

  // Load the customer
  useEffect(() => {
    if (session?.shopifyCustomerAccessToken) {
      loadCustomer({
        variables: {
          customerAccessToken: session.shopifyCustomerAccessToken as string
        }
      });
    }
  }, [loadCustomer, session]);

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
