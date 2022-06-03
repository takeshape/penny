import { GiftIcon, KeyIcon, RefreshIcon, TagIcon, UserCircleIcon } from '@heroicons/react/outline';
import type { ComponentMeta } from '@storybook/react';
import { AccountNavigation } from './Navigation';

const navigation = [
  { name: 'Account', href: '/account', icon: UserCircleIcon, current: false },
  { name: 'Password', href: '/account/password', icon: KeyIcon, current: false },
  { name: 'Purchases', href: '/account/purchases', icon: TagIcon, current: false },
  { name: 'Subscriptions', href: '/account/subscriptions', icon: RefreshIcon, current: false },
  { name: 'Rewards', href: '/account/rewards', icon: GiftIcon, current: false }
];

const Meta: ComponentMeta<typeof AccountNavigation> = {
  title: 'Features / Account / Navigation',
  component: AccountNavigation
};

const Template = (args) => <AccountNavigation {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  items: [...navigation]
};

export const AccountCurrent = Template.bind({});
AccountCurrent.args = {
  items: [{ ...navigation[0], current: true }, navigation[1], navigation[2]]
};

export default Meta;
