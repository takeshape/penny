import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Shopify_Order } from 'types/takeshape';
import { getOrder } from '../../transforms';
import { PurchaseOrder } from './Order';
import fixtures from './Order.fixtures.json';
import { OrderSkeleton } from './OrderSkeleton';

const Meta: ComponentMeta<typeof PurchaseOrder> = {
  title: 'Features / Account Purchases / Components / Order',
  component: PurchaseOrder,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof PurchaseOrder> = (args) => <PurchaseOrder {...args} />;

export const Fulfilled = Template.bind({});
Fulfilled.args = {
  order: getOrder(fixtures.fulfilled as Shopify_Order)
};

export const Unfulfilled = Template.bind({});
Unfulfilled.args = {
  order: getOrder(fixtures.unfulfilled as Shopify_Order)
};

export const Skeleton = () => <OrderSkeleton />;

export default Meta;
