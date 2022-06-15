import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { graphql } from 'msw';
import PurchaseList from './PurchaseList';
import purchaseListJson from './PurchaseList.fixtures.json';

const Meta: ComponentMeta<typeof PurchaseList> = {
  title: 'Features / Account / Purchases',
  component: PurchaseList,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof PurchaseList> = () => <PurchaseList />;

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
          return res(ctx.data(purchaseListJson.data));
        })
      ]
    }
  }
};

export default Meta;
