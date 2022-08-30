import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SubscriptionOrders } from './SubscriptionOrders';

const Meta: ComponentMeta<typeof SubscriptionOrders> = {
  title: 'Features / Account Subscriptions / Orders',
  component: SubscriptionOrders,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof SubscriptionOrders> = (args) => <div />;

export const Orders = Template.bind({});

export default Meta;
