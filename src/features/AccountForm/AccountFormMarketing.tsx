import { useMutation, useQuery } from '@apollo/client';
import FormToggleWithLabel from 'components/Form/Toggle/ToggleWithLabel';
import { useCallback, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import {
  GetCustomerQueryResponse,
  GetMyNewsletterSubscriptionsQueryResponse,
  SubscribeMyEmailToNewsletterMutationResponse,
  SubscribeMyEmailToNewsletterMutationVariables,
  UnsubscribeMyEmailFromNewsletterMutationResponse,
  UnsubscribeMyEmailFromNewsletterMutationVariables,
  UpdateCustomerMutationResponse,
  UpdateCustomerMutationVariables
} from 'types/takeshape';
import { formatError } from 'utils/errors';
import FormCardPanel from '../../components/Form/CardPanel/CardPanel';
import {
  GetCustomerQuery,
  GetMyNewsletterSubscriptionsQuery,
  SubscribeMyEmailToNewsletterMutation,
  UnsubscribeMyEmailFromNewsletterMutation,
  UpdateCustomerMutation
} from './queries';

interface AccountFormMarketingForm {
  newsletters: Record<string, boolean>;
  acceptsMarketing: boolean;
}

export const AccountFormMarketing = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting, isSubmitSuccessful, errors, dirtyFields }
  } = useForm<AccountFormMarketingForm>();

  const { data: newsletterData } = useQuery<GetMyNewsletterSubscriptionsQueryResponse>(
    GetMyNewsletterSubscriptionsQuery
  );
  const { data: customerData } = useQuery<GetCustomerQueryResponse>(GetCustomerQuery);
  const [updateCustomer, { data: customerResponse }] = useMutation<
    UpdateCustomerMutationResponse,
    UpdateCustomerMutationVariables
  >(UpdateCustomerMutation);

  const [subscribe] = useMutation<
    SubscribeMyEmailToNewsletterMutationResponse,
    SubscribeMyEmailToNewsletterMutationVariables
  >(SubscribeMyEmailToNewsletterMutation);
  const [unsubscribe] = useMutation<
    UnsubscribeMyEmailFromNewsletterMutationResponse,
    UnsubscribeMyEmailFromNewsletterMutationVariables
  >(UnsubscribeMyEmailFromNewsletterMutation);

  const timer = useRef<NodeJS.Timer>(null);

  const onSubmit = useCallback(
    async ({ acceptsMarketing, newsletters }: AccountFormMarketingForm) => {
      if (timer.current) {
        clearTimeout(timer.current);
        timer.current = null;
      }

      if (dirtyFields.acceptsMarketing) {
        await updateCustomer({ variables: { customer: { acceptsMarketing } } });
      }

      if (dirtyFields.newsletters) {
        await Promise.all(
          Object.keys(dirtyFields.newsletters).map((listId) => {
            if (newsletters[listId]) {
              return subscribe({ variables: { list_id: listId } });
            } else {
              return unsubscribe({ variables: { list_id: listId } });
            }
          })
        );
      }

      reset(undefined, {
        keepValues: true
      });
    },
    [dirtyFields.acceptsMarketing, dirtyFields.newsletters, reset, updateCustomer, subscribe, unsubscribe]
  );

  // Set initial values
  useEffect(() => {
    if (newsletterData?.newsletters && customerData?.customer) {
      reset({
        acceptsMarketing: customerData.customer.acceptsMarketing,
        newsletters: newsletterData.newsletters.reduce<AccountFormMarketingForm['newsletters']>(
          (p, c) => ({
            ...p,
            [c.listId]: c.subscribed
          }),
          {}
        )
      });
    }
  }, [newsletterData, customerData, reset]);

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

  const isReady = Boolean(newsletterData && customerData);
  const error =
    customerResponse?.customerUpdate?.customerUserErrors &&
    formatError(customerResponse.customerUpdate.customerUserErrors);

  return (
    <FormCardPanel
      primaryText="Marketing &amp; Newsletters"
      secondaryText="What should we send you?"
      onSubmit={handleSubmit(onSubmit)}
      isReady={isReady}
      isSubmitting={isSubmitting}
      isSubmitSuccessful={isSubmitSuccessful}
      isValid={Object.entries(errors).length === 0}
      error={error}
    >
      <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
        <fieldset>
          <legend className="sr-only">Newsletters</legend>
          <div className="text-base font-medium text-gray-900" aria-hidden="true">
            Newsletters
          </div>
          <div className="mt-4 space-y-4">
            {newsletterData?.newsletters?.map((newsletter) => {
              return (
                <div key={newsletter.listId}>
                  <FormToggleWithLabel
                    control={control}
                    name={`newsletters.${newsletter.listId}`}
                    labelPrimary={newsletter.listName}
                    className="flex items-center h-5"
                  />
                </div>
              );
            })}
          </div>
        </fieldset>
        <fieldset>
          <legend className="sr-only">Marketing</legend>
          <div className="text-base font-medium text-gray-900" aria-hidden="true">
            Marketing
          </div>
          <div className="mt-4 space-y-4">
            <FormToggleWithLabel
              control={control}
              disabled={!isReady}
              name="acceptsMarketing"
              labelPrimary="Allow marketing communications"
              className="flex items-center h-5"
            />
          </div>
        </fieldset>
      </div>
    </FormCardPanel>
  );
};
