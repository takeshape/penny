import { ComponentMeta, ComponentStory } from '@storybook/react';
import { graphql } from 'msw';
import {
  getMyPaymentMethodsResponse,
  getMySubscriptionsResponse,
  sendMyUpdatePaymentEmailMutation,
  updateMyPaymentMethodResponse
} from '../../queries.fixtures';
import { ManageSubscription } from './ManageSubscription';

const Meta: ComponentMeta<typeof ManageSubscription> = {
  title: 'Features / Account Subscriptions / Manage',
  component: ManageSubscription,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof ManageSubscription> = (args) => <ManageSubscription {...args} />;

export const Manage = Template.bind({});

Manage.args = {
  subscription: getMySubscriptionsResponse.subscriptions[0]
};

Manage.parameters = {
  msw: {
    handlers: {
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
