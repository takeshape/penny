import { GiftIcon, KeyIcon, RefreshIcon, TagIcon, UserCircleIcon } from '@heroicons/react/outline';
import Wrapper from 'components/Wrapper/Content';
import { AccountNavigation } from 'features/Account/Navigation/Navigation';
import { useSession } from 'next-auth/react';
import { NextSeoProps } from 'next-seo';
import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';
import DefaultLayout from './Default';

const navigation = [
  { name: 'Account', href: '/account', icon: UserCircleIcon, current: false },
  { name: 'Password', href: '/account/password', icon: KeyIcon, current: false },
  { name: 'Purchases', href: '/account/purchases', icon: TagIcon, current: false },
  { name: 'Subscriptions', href: '/account/subscriptions', icon: RefreshIcon, current: false },
  { name: 'Rewards', href: '/account/rewards', icon: GiftIcon, current: false }
];

export const Layout = ({ children, ...seo }: PropsWithChildren<NextSeoProps>) => {
  useSession({ required: true });

  const { pathname } = useRouter();

  const items = navigation.map((item) => ({ ...item, current: item.href === pathname }));

  return (
    <DefaultLayout {...seo}>
      <div className="bg-gray-100 flex flex-col grow">
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
