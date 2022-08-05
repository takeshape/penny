import { useApolloClient } from '@apollo/client';
import {
  CreditCardIcon,
  GiftIcon,
  KeyIcon,
  LogoutIcon,
  RefreshIcon,
  TagIcon,
  UserCircleIcon
} from '@heroicons/react/outline';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';
import classNames from 'utils/classNames';

export const accountNavigationItems = [
  { name: 'Account', href: '/account', icon: UserCircleIcon, current: false },
  { name: 'Password', href: '/account/password', icon: KeyIcon, current: false },
  { name: 'Purchases', href: '/account/purchases', icon: TagIcon, current: false },
  { name: 'Subscriptions', href: '/account/subscriptions', icon: RefreshIcon, current: false },
  { name: 'Payment Methods', href: '/account/payments', icon: CreditCardIcon, current: false },
  { name: 'Rewards', href: '/account/rewards', icon: GiftIcon, current: false }
];

export const AccountNavigation = () => {
  const { resetStore } = useApolloClient();

  const handleLogout = useCallback(async () => {
    await resetStore();
    signOut({ callbackUrl: '/' });
  }, [resetStore]);

  const { asPath } = useRouter();
  const items = useMemo(
    () =>
      accountNavigationItems.map((item) => ({
        ...item,
        current: asPath.startsWith(item.href)
      })),
    [asPath]
  );

  return (
    <aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
      <nav className="space-y-1">
        {items.map((item) => (
          <Link key={item.name} href={item.href}>
            <button
              className={classNames(
                item.current
                  ? 'bg-primary-50 text-accent-700 hover:text-accent-700 hover:bg-background'
                  : 'text-primary-900 hover:text-primary-900 hover:bg-primary-50',
                'group rounded-md px-3 py-2 flex items-center text-sm font-medium w-full'
              )}
              aria-current={item.current ? 'page' : undefined}
            >
              <item.icon
                className={classNames(
                  item.current
                    ? 'text-accent-500 group-hover:text-accent-500'
                    : 'text-primary-400 group-hover:text-primary-500',
                  'flex-shrink-0 -ml-1 mr-3 h-6 w-6'
                )}
                aria-hidden="true"
              />
              <span className="truncate">{item.name}</span>
            </button>
          </Link>
        ))}
        <button
          onClick={handleLogout}
          className="text-body-500 hover:text-body-900 bg-body-300 hover:bg-body-400 group rounded-md px-3 py-2 flex items-center text-sm font-medium w-full"
        >
          <LogoutIcon
            className="text-body-400 group-hover:text-body-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
            aria-hidden="true"
          />
          <span className="truncate">Sign Out</span>
        </button>
      </nav>
    </aside>
  );
};
