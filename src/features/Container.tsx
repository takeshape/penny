import CartSidebar from 'features/Cart/CartSidebar';
import Footer from 'features/Footer';
import Navigation from 'features/Navigation/Navigation';
import Notifications from 'features/Notifications';
import SearchModal from 'features/Search/SearchModal';
import Seo from 'features/Seo';
import type { NextSeoProps } from 'next-seo';
import type { PropsWithChildren } from 'react';
import CartProvider from 'services/cart/CartProvider';

export const Container = ({ children, ...seo }: PropsWithChildren<NextSeoProps>) => {
  return (
    <CartProvider>
      {/* Full-width on mobile, constrained with padded content above */}
      <div className="flex flex-col max-w-7xl mx-auto sm:px-6 lg:px-8 min-h-screen">
        <Seo {...seo} />

        <SearchModal />
        <Navigation />

        <main id="content" className="flex flex-col grow">
          {children}
        </main>

        <CartSidebar />
        <Notifications />

        <Footer />
      </div>
    </CartProvider>
  );
};

export default Container;
