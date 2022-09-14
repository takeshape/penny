import { ComponentMeta, ComponentStory } from '@storybook/react';
import { graphql } from 'msw';
import { AccountSubscriptions } from './AccountSubscriptions';
import {
  getMyPaymentMethodsResponse,
  getMySubscriptionListResponse,
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
    subscriptions={getSubscriptionList(getMySubscriptionListResponse as any)}
    refetchSubscriptionList={async () => {}}
  />
);

export const _AccountSubscriptions = Template.bind({});

_AccountSubscriptions.parameters = {
  msw: {
    handlers: {
      subscriptions: [
        graphql.query('GetMySubscriptionListQuery', (req, res, ctx) => {
          return res(ctx.data(getMySubscriptionListResponse));
        }),
        graphql.query('GetMySubscriptionQuery', (req, res, ctx) => {
          return res(ctx.data(getMySubscriptionListResponse.subscriptions[0]));
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
