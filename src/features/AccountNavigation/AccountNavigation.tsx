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
                  ? 'bg-primary-50 text-accent-700 hover:text-accent-700 hover:bg-white'
                  : 'text-primary-900 hover:text-primary-900 hover:bg-primary-50',
                'group rounded-md px-3 py-2 flex items-center text-sm font-medium'
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
            </a>
          </Link>
        ))}
        <a
          onClick={handleLogout}
          className={classNames(
            'text-primary-600 bg-primary-300 hover:text-primary-800 hover:bg-primary-400',
            'group rounded-md px-3 py-2 flex items-center text-sm font-medium cursor-pointer'
          )}
        >
          <LogoutIcon
            className={classNames('text-primary-600 group-hover:text-primary-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6')}
            aria-hidden="true"
          />
          <span className="truncate">Sign Out</span>
        </a>
      </nav>
    </aside>
  );
};
