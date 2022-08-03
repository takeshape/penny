import { ComponentMeta, ComponentStory } from '@storybook/react';
import { subscriptions } from '../../fixtures';
import { getSubscription } from '../../transforms';
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
  subscription: getSubscription(subscriptions[0])
};

export default Meta;
