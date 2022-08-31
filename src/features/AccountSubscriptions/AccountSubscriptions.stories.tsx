import { ComponentMeta, ComponentStory } from '@storybook/react';
import { graphql } from 'msw';
import { AccountSubscriptions } from './AccountSubscriptions';
import { subscriptions } from './fixtures';
import {
  getMyAddressPaymentMethodsResponse,
  getMyPaymentMethodsResponse,
  sendMyUpdatePaymentEmailMutation,
  updateMyPaymentMethodResponse
} from './queries.fixtures';
import { getSubscription } from './transforms';

const Meta: ComponentMeta<typeof AccountSubscriptions> = {
  title: 'Features / Account Subscriptions',
  component: AccountSubscriptions,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof AccountSubscriptions> = (args) => <AccountSubscriptions {...args} />;

export const _AccountSubscriptions = Template.bind({});

_AccountSubscriptions.args = {
  subscriptions: subscriptions.map(getSubscription)
};

_AccountSubscriptions.parameters = {
  msw: {
    handlers: {
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
