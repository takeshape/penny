import { ComponentMeta, ComponentStory } from '@storybook/react';
import { graphql } from 'msw';
import { AccountSubscriptions } from './AccountSubscriptions';
import {
  getMyAddressPaymentMethodsResponse,
  getMyPaymentMethodsResponse,
  getMySubscriptionsResponse,
  sendMyUpdatePaymentEmailMutation,
  subscriptionProductVariantResponse,
  updateMyPaymentMethodResponse
} from './queries.fixtures';

const Meta: ComponentMeta<typeof AccountSubscriptions> = {
  title: 'Features / Account Subscriptions',
  component: AccountSubscriptions,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof AccountSubscriptions> = () => <AccountSubscriptions />;

export const _AccountSubscriptions = Template.bind({});

_AccountSubscriptions.parameters = {
  msw: {
    handlers: {
      subscriptions: [
        graphql.query('GetMySubscriptionsQuery', (req, res, ctx) => {
          return res(ctx.data(getMySubscriptionsResponse));
        }),
        graphql.query('SubscriptionProductVariantQuery', (req, res, ctx) => {
          return res(ctx.data(subscriptionProductVariantResponse));
        })
      ],
      payments: [
        graphql.query('GetMyPaymentMethodsQuery', (req, res, ctx) => {
          return res(ctx.data(getMyPaymentMethodsResponse));
        }),
        graphql.query('GetMyAddressPaymentMethodsQuery', (req, res, ctx) => {
          return res(ctx.data(getMyAddressPaymentMethodsResponse));
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
