import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'theme-ui';

export const UserLogin = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button variant="login" onClick={loginWithRedirect} p={2} mr={2}>
      Log In
    </Button>
  );
};

export default UserLogin;
