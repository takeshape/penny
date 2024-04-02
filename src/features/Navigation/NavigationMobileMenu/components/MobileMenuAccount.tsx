'use client';

import { AccountNavigation } from '@/features/AccountNavigation/AccountNavigation';
import { signIn, useSession } from 'next-auth/react';

export const MobileMenuAccount = () => {
  const { status } = useSession();

  if (status === 'authenticated') {
    return (
      <div className="py-6 px-4 space-y-6">
        <div className="flow-root">
          <AccountNavigation />
        </div>
      </div>
    );
  }

  return (
    <div className="py-4 px-4">
      <a
        href={`/account/signin`}
        onClick={(e) => {
          e.preventDefault();
          void signIn();
        }}
        className="text-body-800 hover:text-body-800 hover:bg-body-50 m-0 cursor-pointer rounded-md px-3 py-2 flex items-center text-sm font-medium w-full"
      >
        Create an account
      </a>
      <a
        href={`/account/signin`}
        onClick={(e) => {
          e.preventDefault();
          void signIn();
        }}
        className="text-body-800 hover:text-body-800 hover:bg-body-50 m-0 cursor-pointer rounded-md px-3 py-2 flex items-center text-sm font-medium w-full"
      >
        Sign in
      </a>
    </div>
  );
};
