import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AccountNavigation } from './AccountNavigation';

const Meta: ComponentMeta<typeof AccountNavigation> = {
  title: 'Features / Account Navigation',
  component: AccountNavigation
};

const Template: ComponentStory<typeof AccountNavigation> = () => <AccountNavigation />;

export const _AccountNavigation = Template.bind({});

export default Meta;
