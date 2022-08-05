import Wrapper from 'components/Wrapper/Content';
import { AccountNavigation } from 'features/AccountNavigation/AccountNavigation';
import { useSession } from 'next-auth/react';
import { PropsWithChildren } from 'react';
import DefaultLayout, { LayoutProps } from './Default';

export interface AccountLayoutProps extends LayoutProps {}

export const Layout = ({ children, ...layout }: PropsWithChildren<AccountLayoutProps>) => {
  useSession({ required: true });

  return (
    <DefaultLayout {...layout}>
      <div className="bg-body-100 flex flex-col grow">
        <Wrapper>
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
            <AccountNavigation />
            <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">{children}</div>
          </div>
        </Wrapper>
      </div>
    </DefaultLayout>
  );
};

export default Layout;
