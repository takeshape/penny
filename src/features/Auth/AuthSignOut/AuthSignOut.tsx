import Button from 'components/Button/Button';
import { Logo } from 'components/Logo/Logo';
import { signOut } from 'next-auth/react';

export const AuthSignOut = (props: { signOut: typeof signOut }) => {
  const { signOut } = props;
  return (
    <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Logo className="h-12 w-auto" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-body-900">Sign out</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-background py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div>
            <Button
              onClick={(e) => {
                e.preventDefault();
                signOut({ callbackUrl: '/' });
              }}
              color="primary"
              className="w-full"
            >
              Sign out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
