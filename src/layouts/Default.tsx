import Cart from 'features/Cart/Cart';
import Footer from 'features/Footer/Footer';
import Navigation from 'features/Navigation/Navigation';
import Notification from 'features/Notification/Notification';
import SearchModal from 'features/Search/Modal/Modal';
import Seo from 'features/Seo';
import type { NextSeoProps } from 'next-seo';
import type { PropsWithChildren } from 'react';
import CartProvider from 'services/cart/CartProvider';

export const Layout = ({ children, ...seo }: PropsWithChildren<NextSeoProps>) => {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Seo {...seo} />

        <SearchModal />
        <Navigation />

        <main id="content" className="flex flex-col grow">
          <div className="relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
          </div>
        </main>

        <Cart />
        <Notification />

        <Footer />
      </div>
    </CartProvider>
  );
};

export default Layout;
