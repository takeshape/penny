import { Meta, StoryObj } from '@storybook/react';
import { Sale } from './Sale';

const meta: Meta<typeof Sale> = {
  title: 'Features / Storefront / Components / Sale',
  component: Sale,
  parameters: {
    layout: 'centered'
  }
};

type Story = StoryObj<typeof Sale>;

export const _Sale: Story = {
  args: {
    __typename: 'SaleComponent',
    primaryText: 'Get 25% off during our one-time sale',
    secondaryText:
      "Most of our products are limited releases that won't come back. Get your favorite items while they're in stock.",
    buttonText: 'Get access to our one-time sale'
  }
};

export default meta;
