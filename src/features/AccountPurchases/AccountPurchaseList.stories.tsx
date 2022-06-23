import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { graphql } from 'msw';
import { AccountPurchaseList } from './AccountPurchaseList';
import { myPurchasesResponse } from './queries.fixtures';

const Meta: ComponentMeta<typeof AccountPurchaseList> = {
  title: 'Features / Account Purchases',
  component: AccountPurchaseList,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof AccountPurchaseList> = () => <AccountPurchaseList />;

export const Empty = Template.bind({});
Empty.parameters = {
  msw: {
    handlers: {
      newsletter: [
        graphql.query('GetMyAdminCustomerOrdersQuery', (req, res, ctx) => {
          return res(ctx.data({ customer: { orders: { edges: [] } } }));
        })
      ]
    }
  }
};

export const Loading = Template.bind({});
Loading.parameters = {
  msw: {
    handlers: {
      newsletter: [
        graphql.query('GetMyAdminCustomerOrdersQuery', (req, res, ctx) => {
          return res(ctx.delay('infinite'), ctx.data({ customer: { orders: [] } }));
        })
      ]
    }
  }
};

export const WithOrders = Template.bind({});
WithOrders.parameters = {
  msw: {
    handlers: {
      newsletter: [
        graphql.query('GetMyAdminCustomerOrdersQuery', (req, res, ctx) => {
          return res(ctx.data(myPurchasesResponse));
        })
      ]
    }
  }
};

export default Meta;
