import { GiftIcon, KeyIcon, RefreshIcon, TagIcon, UserCircleIcon } from '@heroicons/react/outline';
import Wrapper from 'components/Wrapper/Content';
import { AccountNavigation } from 'features/AccountNavigation/AccountNavigation';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';
import DefaultLayout, { LayoutProps } from './Default';

const accountNavigation = [
  { name: 'Account', href: '/account', icon: UserCircleIcon, current: false },
  { name: 'Password', href: '/account/password', icon: KeyIcon, current: false },
  { name: 'Purchases', href: '/account/purchases', icon: TagIcon, current: false },
  { name: 'Subscriptions', href: '/account/subscriptions', icon: RefreshIcon, current: false },
  { name: 'Rewards', href: '/account/rewards', icon: GiftIcon, current: false }
];

export interface AccountLayoutProps extends LayoutProps {}

export const Layout = ({ children, ...layout }: PropsWithChildren<AccountLayoutProps>) => {
  useSession({ required: true });

  const { pathname } = useRouter();

  const items = accountNavigation.map((item) => ({ ...item, current: item.href === pathname }));

  return (
    <DefaultLayout {...layout}>
      <div className="bg-muted flex flex-col grow">
        <Wrapper>
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
            <AccountNavigation items={items} />
            <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">{children}</div>
          </div>
        </Wrapper>
      </div>
    </DefaultLayout>
  );
};

export default Layout;
