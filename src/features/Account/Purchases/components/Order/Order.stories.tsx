import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PurchaseOrder } from './Order';
import fixtures from './Order.fixtures.json';
import OrderSkeleton from './OrderSkeleton';

const Meta: ComponentMeta<typeof PurchaseOrder> = {
  title: 'Features / Account / Purchases / Components / Order',
  component: PurchaseOrder,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof PurchaseOrder> = (args) => <PurchaseOrder {...args} />;

export const Fulfilled = Template.bind({});
Fulfilled.args = {
  order: fixtures.fulfilled
};

export const Unfulfilled = Template.bind({});
Unfulfilled.args = {
  order: fixtures.unfulfilled
};

export const Skeleton = () => <OrderSkeleton />;

export default Meta;
