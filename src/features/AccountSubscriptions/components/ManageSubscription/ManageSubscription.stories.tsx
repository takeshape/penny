import { ComponentMeta, ComponentStory } from '@storybook/react';
import { subscriptions } from '../../fixtures';
import { getSubscription } from '../../transforms';
import { ManageSubscription } from './ManageSubscription';

const Meta: ComponentMeta<typeof ManageSubscription> = {
  title: 'Features / Account Subscriptions / Manage',
  component: ManageSubscription,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof ManageSubscription> = (args) => <ManageSubscription {...args} />;

export const Manage = Template.bind({});

Manage.args = {
  subscription: getSubscription(subscriptions[0])
};

export default Meta;
