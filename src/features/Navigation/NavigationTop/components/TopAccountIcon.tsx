import NextLink from '@/components/NextLink';
import { UserIcon } from '@heroicons/react/24/outline';
import { UserIcon as SolidUserIcon } from '@heroicons/react/24/solid';
import { signIn, useSession } from 'next-auth/react';

export const SignedIn = () => {
  return (
    <>
      <div className="flex-1 items-center hidden lg:flex">
        <NextLink href="/account" className="-m-2 p-2 text-primary-400 hover:text-primary-500">
          <span>
            <span className="sr-only">Account</span>
            <SolidUserIcon className="w-6 h-6" aria-hidden="true" />
          </span>
        </NextLink>
      </div>
    </>
  );
};

export const SignedOut = () => (
  <div className="flex-1 items-center hidden lg:flex">
    <a
      href={`/api/auth/signin`}
      onClick={(e) => {
        e.preventDefault();
        signIn(undefined, { callbackUrl: '/account' });
      }}
      className="-m-2 p-2 text-primary-400 hover:text-primary-500 cursor-pointer"
    >
      <span className="sr-only">Account</span>
      <UserIcon className="w-6 h-6" aria-hidden="true" />
    </a>
  </div>
);

export const TopAccountIcon = () => {
  const { status } = useSession();

  return (
    <div className="flex" data-testid="account-icon">
      {status === 'authenticated' ? <SignedIn /> : <SignedOut />}
    </div>
  );
};
