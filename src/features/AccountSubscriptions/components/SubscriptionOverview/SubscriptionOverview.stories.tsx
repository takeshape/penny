import { ComponentMeta, ComponentStory } from '@storybook/react';
import { subscriptions } from '../../fixtures';
import { getSubscription } from '../../transforms';
import { SubscriptionOverview } from './SubscriptionOverview';

const Meta: ComponentMeta<typeof SubscriptionOverview> = {
  title: 'Features / Account Subscriptions / Overview',
  component: SubscriptionOverview,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof SubscriptionOverview> = (args) => <SubscriptionOverview {...args} />;

export const Overview = Template.bind({});

Overview.args = {
  subscription: getSubscription(subscriptions[0])
};

export default Meta;
