import { AuthProvider } from '@/features/Auth/AuthProvider';
import { Cart } from '@/features/Cart/Cart';
import { CartProvider } from '@/features/Cart/CartProvider';
import { Footer } from '@/features/Footer/Footer';
import { getFooterData } from '@/features/Footer/data';
import { Navigation } from '@/features/Navigation/Navigation';
import { getNavigationData } from '@/features/Navigation/data';
import { Notification } from '@/features/Notification/Notification';
import { QuickAdd } from '@/features/QuickAdd/QuickAdd';
import { SearchModal } from '@/features/Search/Modal/Modal';
import { auth } from '@/lib/auth';
import { PropsWithChildren } from 'react';

export default async function ShopLayout({ children }: PropsWithChildren) {
  const navigationData = await getNavigationData();
  const footerData = await getFooterData();
  const session = await auth();

  return (
    <AuthProvider session={session}>
      <CartProvider>
        <div className="flex flex-col min-h-screen">
          <SearchModal />
          {navigationData && <Navigation {...navigationData} />}

          <main id="content" className="flex flex-col grow bg-background">
            {children}
          </main>

          <Cart />
          <QuickAdd />
          <Notification />

          {footerData && <Footer {...footerData} />}
        </div>
      </CartProvider>
    </AuthProvider>
  );
}
