import { signIn, useSession } from 'next-auth/react';

export const NavigationTopCreateOrSignIn = () => {
  const { status } = useSession();

  if (status === 'authenticated') {
    return null;
  }

  return (
    <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
      <a
        href={`/api/auth/signin`}
        onClick={(e) => {
          e.preventDefault();
          signIn();
        }}
        className="text-sm font-medium text-white hover:text-gray-100 cursor-pointer"
      >
        Create an account
      </a>
      <span className="h-6 w-px bg-gray-600" aria-hidden="true" />
      <a
        href={`/api/auth/signin`}
        onClick={(e) => {
          e.preventDefault();
          signIn();
        }}
        className="text-sm font-medium text-white hover:text-gray-100 cursor-pointer"
      >
        Sign in
      </a>
    </div>
  );
};

export default NavigationTopCreateOrSignIn;
