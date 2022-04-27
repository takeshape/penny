import { useApolloClient } from '@apollo/client';
import { useAuth0 } from '@auth0/auth0-react';
import { useCallback } from 'react';
import { Button } from 'theme-ui';

export const UserLogout = () => {
  const { resetStore } = useApolloClient();
  const { logout } = useAuth0();

  const handleLogout = useCallback(async () => {
    await resetStore();
    logout({ returnTo: window.location.origin });
  }, [logout, resetStore]);

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
