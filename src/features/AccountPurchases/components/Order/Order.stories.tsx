import { Meta, StoryObj } from '@storybook/react';
import { getOrder } from '../../transforms';
import { ResponseOrder } from '../../types';
import { PurchaseOrder } from './Order';
import fixtures from './Order.fixtures.json';
import { OrderSkeleton } from './OrderSkeleton';

const meta: Meta<typeof PurchaseOrder> = {
  title: 'Features / Account Purchases / Components / Order',
  component: PurchaseOrder,
  parameters: {
    layout: 'centered'
  }
};

type Story = StoryObj<typeof PurchaseOrder>;

export const Fulfilled: Story = {
  args: {
    order: getOrder(fixtures.fulfilled as ResponseOrder)
  }
};

export const Unfulfilled: Story = {
  args: {
    order: getOrder(fixtures.unfulfilled as unknown as ResponseOrder)
  }
};

export const Skeleton = () => <OrderSkeleton />;

export default meta;
