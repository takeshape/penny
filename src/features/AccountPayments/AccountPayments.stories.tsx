import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AccountPayments } from './AccountPayments';
import { paymentMethods } from './fixtures';
import { getPaymentMethods } from './transforms';

const Meta: ComponentMeta<typeof AccountPayments> = {
  title: 'Features / Account Payments',
  component: AccountPayments,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof AccountPayments> = (args) => <AccountPayments {...args} />;

export const _AccountPayments = Template.bind({});

_AccountPayments.args = {
  paymentMethods: getPaymentMethods(paymentMethods)
};

export default Meta;
