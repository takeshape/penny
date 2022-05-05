import { useAuth0 } from '@auth0/auth0-react';

export const NavigationMobileMenuCreateOrSignIn = () => {
  const { user, loginWithRedirect } = useAuth0();

  if (user) {
    return null;
  }

  return (
    <div className="border-t border-gray-200 py-6 px-4 space-y-6">
      <div className="flow-root">
        <a onClick={loginWithRedirect} className="-m-2 p-2 block font-medium text-gray-900 cursor-pointer">
          Create an account
        </a>
      </div>
      <div className="flow-root">
        <a onClick={loginWithRedirect} className="-m-2 p-2 block font-medium text-gray-900 cursor-pointer">
          Sign in
        </a>
      </div>
    </div>
  );
};

export default NavigationMobileMenuCreateOrSignIn;
