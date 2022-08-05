import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AccountSubscriptions } from './AccountSubscriptions';
import { subscriptions } from './fixtures';
import { getSubscription } from './transforms';

const Meta: ComponentMeta<typeof AccountSubscriptions> = {
  title: 'Features / Account Subscriptions',
  component: AccountSubscriptions,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof AccountSubscriptions> = (args) => <AccountSubscriptions {...args} />;

export const _AccountSubscriptions = Template.bind({});

_AccountSubscriptions.args = {
  subscriptions: subscriptions.map(getSubscription)
};

export default Meta;
