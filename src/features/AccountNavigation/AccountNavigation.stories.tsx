import { ComponentMeta } from '@storybook/react';
import { AccountNavigation } from './AccountNavigation';

const Meta: ComponentMeta<typeof AccountNavigation> = {
  title: 'Features / Account Navigation',
  component: AccountNavigation
};

const Template = (args) => <AccountNavigation {...args} />;

export const _AccountNavigation = Template.bind({});

export default Meta;
