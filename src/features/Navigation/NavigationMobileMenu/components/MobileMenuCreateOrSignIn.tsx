import { signIn, useSession } from 'next-auth/react';

export const MobileMenuCreateOrSignIn = () => {
  const { status } = useSession();

  if (status === 'authenticated') {
    return null;
  }

  return (
    <div className="border-t border-body-200 py-6 px-4 space-y-6">
      <div className="flow-root">
        <a
          href={`/api/auth/signin`}
          onClick={(e) => {
            e.preventDefault();
            signIn();
          }}
          className="-m-2 p-2 block font-medium text-body-900 cursor-pointer"
        >
          Create an account
        </a>
      </div>
      <div className="flow-root">
        <a
          href={`/api/auth/signin`}
          onClick={(e) => {
            e.preventDefault();
            signIn();
          }}
          className="-m-2 p-2 block font-medium text-body-900 cursor-pointer"
        >
          Sign in
        </a>
      </div>
    </div>
  );
};
