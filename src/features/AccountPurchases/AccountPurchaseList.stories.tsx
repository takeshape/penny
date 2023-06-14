import { Meta, StoryObj } from '@storybook/react';
import { graphql } from 'msw';
import { AccountPurchaseList } from './AccountPurchaseList';
import { myPurchasesResponse } from './queries.fixtures';

const meta: Meta<typeof AccountPurchaseList> = {
  title: 'Features / Account Purchases',
  component: AccountPurchaseList,
  parameters: {
    layout: 'centered'
  }
};

type Story = StoryObj<typeof AccountPurchaseList>;

export const Empty: Story = {
  parameters: {
    msw: {
      handlers: {
        newsletter: [
          graphql.query('GetMyAdminCustomerOrdersQuery', (req, res, ctx) => {
            return res(ctx.data({ customer: { orders: { edges: [] } } }));
          })
        ]
      }
    }
  }
};

export const Loading: Story = {
  parameters: {
    msw: {
      handlers: {
        newsletter: [
          graphql.query('GetMyAdminCustomerOrdersQuery', (req, res, ctx) => {
            return res(ctx.delay('infinite'), ctx.data({ customer: { orders: [] } }));
          })
        ]
      }
    }
  }
};

export const WithOrders: Story = {
  parameters: {
    msw: {
      handlers: {
        newsletter: [
          graphql.query('GetMyAdminCustomerOrdersQuery', (req, res, ctx) => {
            return res(ctx.data(myPurchasesResponse));
          })
        ]
      }
    }
  }
};

export default meta;
