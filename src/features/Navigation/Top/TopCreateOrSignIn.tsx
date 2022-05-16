import { useAuth0 } from '@auth0/auth0-react';

export const TopCreateOrSignIn = () => {
  const { user, loginWithRedirect } = useAuth0();

  if (user) {
    return null;
  }

  return (
    <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
      <a onClick={loginWithRedirect} className="text-sm font-medium text-white hover:text-gray-100 cursor-pointer">
        Create an account
      </a>
      <span className="h-6 w-px bg-gray-600" aria-hidden="true" />
      <a onClick={loginWithRedirect} className="text-sm font-medium text-white hover:text-gray-100 cursor-pointer">
        Sign in
      </a>
    </div>
  );
};

export default TopCreateOrSignIn;
