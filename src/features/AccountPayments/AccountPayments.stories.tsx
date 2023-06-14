import { Meta, StoryObj } from '@storybook/react';
import { AccountPayments } from './AccountPayments';
import { paymentMethods } from './fixtures';
import { getPaymentMethods } from './transforms';

const meta: Meta<typeof AccountPayments> = {
  title: 'Features / Account Payments',
  component: AccountPayments,
  parameters: {
    layout: 'centered'
  }
};

type Story = StoryObj<typeof AccountPayments>;

export const _AccountPayments: Story = {
  args: {
    paymentMethods: getPaymentMethods(paymentMethods)
  }
};

export default meta;
