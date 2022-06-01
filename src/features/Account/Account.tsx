import { KeyIcon, UserCircleIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';
import AccountNavigation from './Navigation/Navigation';

const navigation = [
  { name: 'Account', href: '/account', icon: UserCircleIcon, current: false },
  { name: 'Password', href: '/account/password', icon: KeyIcon, current: false }
];

export const Account = ({ children }: PropsWithChildren<{}>) => {
  const { pathname } = useRouter();

  const items = navigation.map((item) => ({ ...item, current: item.href === pathname }));

  return (
    <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
      <AccountNavigation items={items} />
      <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">{children}</div>
    </div>
  );
};

export default Account;
