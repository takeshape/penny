import { UserIcon } from '@heroicons/react/outline';
import { UserIcon as SolidUserIcon } from '@heroicons/react/solid';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';

export const SignedIn = () => {
  return (
    <>
      <div className="flex-1 items-center hidden lg:flex">
        <Link href="/account">
          <a className="-m-2 p-2 text-primary-400 hover:text-primary-500">
            <span className="sr-only">Account</span>
            <SolidUserIcon className="w-6 h-6" aria-hidden="true" />
          </a>
        </Link>
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

  return <div className="flex">{status === 'authenticated' ? <SignedIn /> : <SignedOut />}</div>;
};
