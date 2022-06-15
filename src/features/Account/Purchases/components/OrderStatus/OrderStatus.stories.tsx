import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Shopify_FulfillmentDisplayStatus } from 'types/takeshape';
import { PurchaseItemOrderStatus } from './OrderStatus';
import OrderStatusFixtures from './OrderStatus.fixtures.json';

const Meta: ComponentMeta<typeof PurchaseItemOrderStatus> = {
  title: 'Features / Account / Purchases / Components / OrderStatus',
  component: PurchaseItemOrderStatus,
  argTypes: {
    status: {
      control: {
        type: 'select',
        options: Array.from(Object.values(Shopify_FulfillmentDisplayStatus))
      }
    },
    deliveredAt: { control: { type: 'date' } },
    estimatedDeliveryAt: { control: { type: 'date' } },
    updatedAt: { control: { type: 'date' } }
  }
};

const Template: ComponentStory<typeof PurchaseItemOrderStatus> = (args) => <PurchaseItemOrderStatus {...args} />;

export const Processing = Template.bind({});
Processing.args = {
  unfulfilled: true
};

export const Fulfilled = Template.bind({});
Fulfilled.args = {
  ...OrderStatusFixtures.FULFILLED
};

export default Meta;
