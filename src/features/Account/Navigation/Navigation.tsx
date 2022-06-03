import { useApolloClient } from '@apollo/client';
import { LogoutIcon } from '@heroicons/react/outline';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { useCallback } from 'react';
import classNames from 'utils/classNames';

export interface AccountNavigationProps {
  items: {
    name: string;
    href: string;
    current: boolean;
    icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
  }[];
}

export const AccountNavigation = ({ items }: AccountNavigationProps) => {
  const { resetStore } = useApolloClient();

  const handleLogout = useCallback(
    async (e) => {
      e.preventDefault();
      await resetStore();
      signOut({ callbackUrl: '/' });
    },
    [resetStore]
  );

  return (
    <aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
      <nav className="space-y-1">
        {items.map((item) => (
          <Link key={item.name} href={item.href}>
            <a
              className={classNames(
                item.current
                  ? 'bg-gray-50 text-indigo-700 hover:text-indigo-700 hover:bg-white'
                  : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50',
                'group rounded-md px-3 py-2 flex items-center text-sm font-medium'
              )}
              aria-current={item.current ? 'page' : undefined}
            >
              <item.icon
                className={classNames(
                  item.current
                    ? 'text-indigo-500 group-hover:text-indigo-500'
                    : 'text-gray-400 group-hover:text-gray-500',
                  'flex-shrink-0 -ml-1 mr-3 h-6 w-6'
                )}
                aria-hidden="true"
              />
              <span className="truncate">{item.name}</span>
            </a>
          </Link>
        ))}
        <a
          onClick={handleLogout}
          className={classNames(
            'text-gray-600 bg-gray-300 hover:text-gray-800 hover:bg-gray-400',
            'group rounded-md px-3 py-2 flex items-center text-sm font-medium cursor-pointer'
          )}
        >
          <LogoutIcon
            className={classNames('text-gray-600 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6')}
            aria-hidden="true"
          />
          <span className="truncate">Sign Out</span>
        </a>
      </nav>
    </aside>
  );
};

export default AccountNavigation;
