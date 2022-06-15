import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Shopify_Customer } from 'types/takeshape';
import { getCustomerOrders } from 'utils/transforms/shopify';
import PurchaseList from './PurchaseList';
import purchaseListJson from './PurchaseList.fixtures.json';

const Meta: ComponentMeta<typeof PurchaseList> = {
  title: 'Features / Account / Purchases',
  component: PurchaseList,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof PurchaseList> = (args) => <PurchaseList {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  orders: []
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true
};

export const WithOrders = Template.bind({});
WithOrders.args = {
  orders: getCustomerOrders(purchaseListJson.data.customer as Shopify_Customer)
};

export default Meta;
