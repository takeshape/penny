import { useApolloClient } from '@apollo/client';
import { signOut } from 'next-auth/react';
import { useCallback } from 'react';
import { Button } from 'theme-ui';

export const UserLogout = () => {
  const { resetStore } = useApolloClient();

  const handleLogout = useCallback(
    async (e) => {
      e.preventDefault();
      await resetStore();
      signOut({ callbackUrl: '/' });
    },
    [resetStore]
  );

  return (
    <Button
      variant="logout"
      onClick={handleLogout}
      p={2}
      mr={2}
      sx={{ color: 'primary', backgroundColor: 'background', fontSize: '.8em' }}
    >
      Log Out
    </Button>
  );
};

export default UserLogout;
