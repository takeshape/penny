import { ComponentMeta, ComponentStory } from '@storybook/react';
import { graphql } from 'msw';
import { AccountSubscriptions } from './AccountSubscriptions';
import {
  getMyPaymentMethodsResponse,
  getMySubscriptionsResponse,
  sendMyUpdatePaymentEmailMutation,
  updateMyPaymentMethodResponse
} from './queries.fixtures';
import { getSubscriptionList } from './transforms';

const Meta: ComponentMeta<typeof AccountSubscriptions> = {
  title: 'Features / Account Subscriptions',
  component: AccountSubscriptions,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof AccountSubscriptions> = () => (
  <AccountSubscriptions
    subscriptions={getSubscriptionList(getMySubscriptionsResponse)}
    refetchSubscriptionList={async () => {}}
  />
);

export const _AccountSubscriptions = Template.bind({});

_AccountSubscriptions.parameters = {
  msw: {
    handlers: {
      subscriptions: [
        graphql.query('GetMySubscriptionListQuery', (req, res, ctx) => {
          return res(ctx.data(getMySubscriptionsResponse));
        }),
        graphql.query('GetMySubscriptionQuery', (req, res, ctx) => {
          return res(ctx.data(getMySubscriptionsResponse.subscriptions[0]));
        })
      ],
      payments: [
        graphql.query('GetMyPaymentMethodsQuery', (req, res, ctx) => {
          return res(ctx.data(getMyPaymentMethodsResponse));
        }),
        graphql.mutation('SendMyUpdatePaymentEmailMutation', (req, res, ctx) => {
          return res(ctx.delay(1000), ctx.data(sendMyUpdatePaymentEmailMutation));
        }),
        graphql.mutation('UpdateMyPaymentMethodMutation', (req, res, ctx) => {
          return res(ctx.delay(1000), ctx.data(updateMyPaymentMethodResponse));
        })
      ]
    }
  }
};

export default Meta;
