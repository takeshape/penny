import { useApolloClient } from '@apollo/client';
import { GiftIcon, KeyIcon, LogoutIcon, RefreshIcon, TagIcon, UserCircleIcon } from '@heroicons/react/outline';
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
  // Cannot use without `write_customer_payment_methods` scope — requires an approved app
  // { name: 'Payment Methods', href: '/account/payments', icon: CreditCardIcon, current: false },
  { name: 'Rewards', href: '/account/rewards', icon: GiftIcon, current: false }
];

function useAccountNavigationItems() {
  const { asPath } = useRouter();
  const items = useMemo(() => {
    const asPathParts = asPath.split('/');
    return accountNavigationItems.map((item) => {
      const hrefParts = item.href.split('/');
      return {
        ...item,
        // Supports dynamic subscription URLs while not matching on /account
        current: asPathParts[0] === hrefParts[0] && asPathParts[1] === hrefParts[1] && asPathParts[2] === hrefParts[2]
      };
    });
  }, [asPath]);
  return items;
}

function useLogout() {
  const { resetStore } = useApolloClient();
  const handleLogout = useCallback(async () => {
    await resetStore();
    signOut({ callbackUrl: '/' });
  }, [resetStore]);
  return {
    handleLogout
  };
}

export const AccountNavigation = () => {
  const { handleLogout } = useLogout();
  const items = useAccountNavigationItems();

  return (
    <aside className="w-full">
      <nav className="space-y-1">
        {items.map((item) => (
          <Link key={item.name} href={item.href}>
            <button
              className={classNames(
                item.current
                  ? 'bg-primary-50 text-accent-700 hover:text-accent-700 hover:bg-background'
                  : 'text-primary-800 hover:text-primary-800 hover:bg-primary-50',
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
          className="text-body-500 hover:text-body-900 hover:bg-primary-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium w-full"
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
