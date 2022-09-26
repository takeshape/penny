import Seo from 'components/Seo';
import { Cart } from 'features/Cart/Cart';
import { CartProvider } from 'features/Cart/CartProvider';
import { Footer, FooterProps } from 'features/Footer/Footer';
import { Navigation, NavigationProps } from 'features/Navigation/Navigation';
import { Notification } from 'features/Notification/Notification';
import { QuickAddWithData } from 'features/QuickAdd/QuickAddWithData';
import SearchModal from 'features/Search/Modal/Modal';
import { NextSeoProps } from 'next-seo';
import { PropsWithChildren } from 'react';

export interface LayoutProps {
  seo?: NextSeoProps;
  navigation: NavigationProps | null;
  footer: FooterProps | null;
}

export const Layout = ({ children, navigation, footer, seo }: PropsWithChildren<LayoutProps>) => {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Seo {...seo} />

        <SearchModal />
        {navigation && <Navigation {...navigation} />}

        <main id="content" className="flex flex-col grow bg-background">
          {children}
        </main>

        <Cart />
        <QuickAddWithData />
        <Notification />

        {footer && <Footer {...footer} />}
      </div>
    </CartProvider>
  );
};

export default Layout;
