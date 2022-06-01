import { useQuery } from '@apollo/client';
import SwitchWithRightLabel from 'components/Form/Switch/SwitchWithRightLabel';
import { useSession } from 'next-auth/react';
import type { GetCustomerResponse } from 'queries';
import { GetCustomerQuery, GetMyNewsletterSubscriptons } from 'queries';
import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import AccountSection from '../Section/Section';

interface AccountOverviewMarketingForm {
  newsletters: Record<string, boolean>;
  acceptsMarketing: boolean;
}

export const AccountOverviewMarketing = () => {
  const { data: session } = useSession({ required: true });

  const { handleSubmit, formState, control, watch, reset, register } = useForm<AccountOverviewMarketingForm>();

  const { data: newsletterData, error: newsletterError } = useQuery(GetMyNewsletterSubscriptons, {
    skip: !session?.shopifyCustomerAccessToken
  });

  const { data: customerData, error: customerError } = useQuery<GetCustomerResponse>(GetCustomerQuery, {
    skip: !session
  });

  const onSubmit = useCallback(async (data: AccountOverviewMarketingForm) => {
    console.log(data);
  }, []);

  useEffect(() => {
    if (newsletterData?.newsletters && customerData?.customer) {
      reset({
        acceptsMarketing: customerData.customer.acceptsMarketing,
        newsletters: newsletterData.newsletters.reduce(
          (p, c) => ({
            ...p,
            [c.listId]: c.subscribed
          }),
          {}
        )
      });
    }
  }, [newsletterData, customerData, reset]);

  return (
    <AccountSection primaryText="Marketing &amp; Newsletters" secondaryText="What should you send you?">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="shadow overflow-hidden sm:rounded-md">
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
                      <SwitchWithRightLabel
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
                <SwitchWithRightLabel
                  control={control}
                  name="acceptsMarketing"
                  labelPrimary="Allow marketing communications"
                  className="flex items-center h-5"
                />
              </div>
            </fieldset>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </AccountSection>
  );
};

export default AccountOverviewMarketing;
