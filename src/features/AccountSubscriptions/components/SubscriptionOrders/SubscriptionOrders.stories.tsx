import { ComponentMeta, ComponentStory } from '@storybook/react';
import { getMySubscriptionsResponse } from 'features/AccountSubscriptions/queries.fixtures';
import { SubscriptionOrders } from './SubscriptionOrders';

const Meta: ComponentMeta<typeof SubscriptionOrders> = {
  title: 'Features / Account Subscriptions / Orders',
  component: SubscriptionOrders,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof SubscriptionOrders> = (args) => <SubscriptionOrders {...args} />;

export const Orders = Template.bind({});

Orders.args = {
  subscription: getMySubscriptionsResponse.subscriptions[0]
};

export default Meta;
