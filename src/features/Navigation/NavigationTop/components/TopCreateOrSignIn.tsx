'use client';

import NextLink from '@/components/NextLink';
import { signIn, useSession } from 'next-auth/react';

export const TopCreateOrSignIn = () => {
  const { status } = useSession();

  if (status === 'authenticated') {
    return <div className="hidden lg:flex lg:flex-1"></div>;
  }

  return (
    <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
      <NextLink
        href="/account/create"
        className="text-sm font-medium text-inverted hover:text-primary-100 cursor-pointer"
      >
        Create an account
      </NextLink>
      <span className="h-6 w-px bg-primary-600" aria-hidden="true" />
      <a
        href={`/account/signin`}
        onClick={(e) => {
          e.preventDefault();
          void signIn();
        }}
        className="text-sm font-medium text-inverted hover:text-primary-100 cursor-pointer"
      >
        Sign in
      </a>
    </div>
  );
};
