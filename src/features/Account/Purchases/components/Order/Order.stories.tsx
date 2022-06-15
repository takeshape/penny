import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Order from './Order';
import fixtures from './Order.fixtures.json';
import OrderSkeleton from './OrderSkeleton';

const Meta: ComponentMeta<typeof Order> = {
  title: 'Features / Account / Purchases / Components / Order',
  component: Order,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof Order> = (args) => <Order {...args} />;

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
