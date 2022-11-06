import Seo from 'components/Seo';
import { Cart } from 'features/Cart/Cart';
import { CartProvider } from 'features/Cart/CartProvider';
import footerData from 'features/Footer/data.preval';
import { Footer } from 'features/Footer/Footer';
import navigationData from 'features/Navigation/data.preval';
import { Navigation } from 'features/Navigation/Navigation';
import { Notification } from 'features/Notification/Notification';
import { QuickAddWithData } from 'features/QuickAdd/QuickAddWithData';
import SearchModal from 'features/Search/Modal/Modal';
import { NextSeoProps } from 'next-seo';
import { PropsWithChildren } from 'react';

export interface LayoutProps {
  seo?: NextSeoProps;
}

export const Layout = ({ children, seo }: PropsWithChildren<LayoutProps>) => {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Seo {...seo} />

        <SearchModal />
        {navigationData && <Navigation {...navigationData} />}

        <main id="content" className="flex flex-col grow bg-background">
          {children}
        </main>

        <Cart />
        <QuickAddWithData />
        <Notification />

        {footerData && <Footer {...footerData} />}
      </div>
    </CartProvider>
  );
};

export default Layout;
