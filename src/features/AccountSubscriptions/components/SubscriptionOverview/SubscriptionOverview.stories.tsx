import { ComponentMeta, ComponentStory } from '@storybook/react';
import { graphql } from 'msw';
import { subscriptions } from '../../fixtures';
import {
  getMyAddressPaymentMethodsResponse,
  getMyPaymentMethodsResponse,
  sendMyUpdatePaymentEmailMutation,
  updateMyPaymentMethodResponse
} from '../../queries.fixtures';
import { getSubscription } from '../../transforms';
import { SubscriptionOverview } from './SubscriptionOverview';

const Meta: ComponentMeta<typeof SubscriptionOverview> = {
  title: 'Features / Account Subscriptions / Overview',
  component: SubscriptionOverview,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof SubscriptionOverview> = (args) => <SubscriptionOverview {...args} />;

export const Overview = Template.bind({});

Overview.args = {
  subscription: getSubscription(subscriptions[0])
};

Overview.parameters = {
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
