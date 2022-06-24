import { ComponentMeta, ComponentStory } from '@storybook/react';
import { getFulfillment, Shopify_Fulfillment } from '../../transforms';
import { PurchaseItemOrderStatus } from './OrderStatus';
import OrderStatusFixtures from './OrderStatus.fixtures.json';

const Meta: ComponentMeta<typeof PurchaseItemOrderStatus> = {
  title: 'Features / Account Purchases / Components / OrderStatus',
  component: PurchaseItemOrderStatus
};

const Template: ComponentStory<typeof PurchaseItemOrderStatus> = (args) => <PurchaseItemOrderStatus {...args} />;

export const Processing = Template.bind({});
Processing.args = {
  unfulfilled: true
};

export const Fulfilled = Template.bind({});
Fulfilled.args = {
  ...getFulfillment(OrderStatusFixtures.FULFILLED as Shopify_Fulfillment)
};

export default Meta;
