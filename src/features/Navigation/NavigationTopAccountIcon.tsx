import { useAuth0 } from '@auth0/auth0-react';
import { UserIcon } from '@heroicons/react/outline';
import { UserIcon as SolidUserIcon } from '@heroicons/react/solid';
import Link from 'next/link';

export const NavigationTopAccountIcon = () => {
  const { user, loginWithRedirect } = useAuth0();
  return (
    <div className="flex">
      {user ? (
        <Link href="/account">
          <a className="-m-2 p-2 text-gray-400 hover:text-gray-500">
            <span className="sr-only">Account</span>
            <SolidUserIcon className="w-6 h-6" aria-hidden="true" />
          </a>
        </Link>
      ) : (
        <a onClick={loginWithRedirect} className="-m-2 p-2 text-gray-400 hover:text-gray-500 cursor-pointer">
          <span className="sr-only">Account</span>
          <UserIcon className="w-6 h-6" aria-hidden="true" />
        </a>
      )}
    </div>
  );
};

export default NavigationTopAccountIcon;
