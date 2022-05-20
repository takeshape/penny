import Cart from 'features/Cart/Cart';
import Footer from 'features/Footer/Footer';
import Navigation from 'features/Navigation/Navigation';
import SearchModal from 'features/Search/Modal/Modal';
import Seo from 'features/Seo';
import type { NextSeoProps } from 'next-seo';
import type { PropsWithChildren } from 'react';
import CartProvider from 'services/cart/CartProvider';
import Notification from './Notification/Notification';

export const Container = ({ children, ...seo }: PropsWithChildren<NextSeoProps>) => {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Seo {...seo} />

        <SearchModal />
        <Navigation />

        <main id="content" className="flex flex-col grow">
          {children}
        </main>

        <Cart />
        <Notification />

        <Footer />
      </div>
    </CartProvider>
  );
};

export default Container;
