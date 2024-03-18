import { Wrapper } from '@/components/Wrapper/Content';
import { AccountNavigation } from '@/features/AccountNavigation/AccountNavigation';
import { auth } from '@/lib/auth';
import { notFound } from 'next/navigation';
import { PropsWithChildren } from 'react';

export default async function ShopLayout({ children }: PropsWithChildren) {
  const session = await auth();

  if (!session?.user) {
    return notFound();
  }

  return (
    <div className="bg-body-100 flex flex-col grow">
      <Wrapper>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
          <div className="hidden lg:flex lg:col-span-3 py-6 px-2 sm:px-6 lg:py-0 lg:px-0">
            <AccountNavigation />
          </div>
          <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">{children}</div>
        </div>
      </Wrapper>
    </div>
  );
}
