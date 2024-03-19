'use client';

import FormCardPanel from '@/components/Form/CardPanel/CardPanel';
import FormToggleWithLabel from '@/components/Form/Toggle/ToggleWithLabel';
import { useStorefrontLazyQuery, useStorefrontMutation } from '@/lib/storefront';
import { useAuthenticatedMutation, useAuthenticatedQuery } from '@/lib/takeshape';
import { formatError } from '@/lib/util/errors';
import {
  CustomerQueryResponse,
  CustomerQueryVariables,
  CustomerUpdateMutationResponse,
  CustomerUpdateMutationVariables
} from '@/types/storefront';
import {
  GetMyNewsletterSubscriptionsQueryResponse,
  SubscribeMyEmailToNewsletterMutationResponse,
  SubscribeMyEmailToNewsletterMutationVariables,
  UnsubscribeMyEmailFromNewsletterMutationResponse,
  UnsubscribeMyEmailFromNewsletterMutationVariables
} from '@/types/takeshape';
import { useSession } from 'next-auth/react';
import { useCallback, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import {
  GetMyNewsletterSubscriptionsQuery,
  SubscribeMyEmailToNewsletterMutation,
  UnsubscribeMyEmailFromNewsletterMutation
} from './queries';
import { CustomerQuery, CustomerUpdateMutation } from './queries.storefront';
type AccountFormMarketingForm = {
  newsletters: Record<string, boolean>;
  acceptsMarketing: boolean;
};

export const AccountFormMarketing = () => {
  const { data: session } = useSession({ required: true });

  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting, isSubmitSuccessful, errors, touchedFields }
  } = useForm<AccountFormMarketingForm>();

  const [loadCustomer, { data: customerData }] = useStorefrontLazyQuery<CustomerQueryResponse, CustomerQueryVariables>(
    CustomerQuery
  );

  const [updateCustomer, { data: customerResponse }] = useStorefrontMutation<
    CustomerUpdateMutationResponse,
    CustomerUpdateMutationVariables
  >(CustomerUpdateMutation);

  const { data: newsletterData } = useAuthenticatedQuery<GetMyNewsletterSubscriptionsQueryResponse>(
    GetMyNewsletterSubscriptionsQuery
  );

  const [subscribe] = useAuthenticatedMutation<
    SubscribeMyEmailToNewsletterMutationResponse,
    SubscribeMyEmailToNewsletterMutationVariables
  >(SubscribeMyEmailToNewsletterMutation);

  const [unsubscribe] = useAuthenticatedMutation<
    UnsubscribeMyEmailFromNewsletterMutationResponse,
    UnsubscribeMyEmailFromNewsletterMutationVariables
  >(UnsubscribeMyEmailFromNewsletterMutation);

  const timer: { current: NodeJS.Timeout | null } = useRef(null);

  const onSubmit = useCallback(
    async ({ acceptsMarketing, newsletters }: AccountFormMarketingForm) => {
      if (timer.current) {
        clearTimeout(timer.current);
        timer.current = null;
      }

      if (!session) {
        return;
      }

      if (touchedFields.acceptsMarketing && session?.user?.shopifyCustomerAccessToken) {
        await updateCustomer({
          variables: {
            customerAccessToken: session.user.shopifyCustomerAccessToken,
            customer: { acceptsMarketing }
          }
        });
      }

      if (touchedFields.newsletters) {
        await Promise.all(
          Object.keys(newsletters).map((listId) => {
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
    [touchedFields.acceptsMarketing, touchedFields.newsletters, reset, updateCustomer, session, subscribe, unsubscribe]
  );

  // Load the customer
  useEffect(() => {
    if (session?.user?.shopifyCustomerAccessToken) {
      void loadCustomer({
        variables: {
          customerAccessToken: session.user.shopifyCustomerAccessToken
        }
      });
    }
  }, [loadCustomer, session]);

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
      onSubmit={(...args) => void handleSubmit(onSubmit)(...args)}
      isReady={isReady}
      isSubmitting={isSubmitting}
      isSubmitSuccessful={isSubmitSuccessful}
      isValid={Object.entries(errors).length === 0}
      error={error}
    >
      <div className="px-4 py-5 bg-background space-y-6 sm:p-6">
        <fieldset>
          <legend className="sr-only">Newsletters</legend>
          <div className="text-base font-medium text-body-900" aria-hidden="true">
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
          <div className="text-base font-medium text-body-900" aria-hidden="true">
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
