import { Meta, StoryObj } from '@storybook/react';
import { getFulfillment } from '../../transforms';
import { ResponseFulfillment } from '../../types';
import { PurchaseItemOrderStatus } from './OrderStatus';
import OrderStatusFixtures from './OrderStatus.fixtures.json';

const meta: Meta<typeof PurchaseItemOrderStatus> = {
  title: 'Features / Account Purchases / Components / OrderStatus',
  component: PurchaseItemOrderStatus
};

type Story = StoryObj<typeof PurchaseItemOrderStatus>;

export const Processing: Story = {
  args: {
    unfulfilled: true
  }
};

export const Fulfilled: Story = {
  args: {
    ...getFulfillment(OrderStatusFixtures.FULFILLED as ResponseFulfillment)
  }
};

export default meta;
