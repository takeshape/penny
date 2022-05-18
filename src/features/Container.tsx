// import CartSidebar from 'features/Cart/CartSidebar';
import Cart from 'features/Cart/Cart';
import Footer from 'features/Footer';
import Navigation from 'features/Navigation/Navigation';
import Notifications from 'features/Notifications';
import SearchModal from 'features/Search/Modal/Modal';
import Seo from 'features/Seo';
import type { NextSeoProps } from 'next-seo';
import type { PropsWithChildren } from 'react';
import CartProvider from 'services/cart/CartProvider';

export const Container = ({ children, ...seo }: PropsWithChildren<NextSeoProps>) => {
  return (
    <CartProvider>
      {/* Full-width on mobile, constrained with padded content above */}
      <div className="flex flex-col min-h-screen">
        <Seo {...seo} />

        <SearchModal />
        <Navigation />

        <main id="content" className="flex flex-col grow">
          {children}
        </main>

        <Cart />
        <Notifications />

        <Footer />
      </div>
    </CartProvider>
  );
};

export default Container;
