import { useAuth0 } from '@auth0/auth0-react';
import CartNavigationIcon from 'features/CartNavigationIcon';
import Search from 'features/Search';
import UserLogin from 'features/UserLogin';
import Link from 'next/link';
import { BsPersonCircle as AccountIcon, BsQuestionSquare, BsReceiptCutoff } from 'react-icons/bs';
import { Box, Flex, IconButton, NavLink } from 'theme-ui';

export const Navigation = () => {
  const { user } = useAuth0();

  return (
    <Flex as="nav" sx={{ gap: '2rem', alignItems: 'center' }}>
      <Link href="/" passHref>
        <NavLink title="Home" variant="styles.shopName">
          Kitchen<span>Sink</span>
        </NavLink>
      </Link>
      <Link href="/about" passHref>
        <NavLink title="About">
          <IconButton>
            <BsQuestionSquare size={24} />
          </IconButton>
        </NavLink>
      </Link>
      <Box variant="styles.flexspace" sx={{ flex: '1 1 auto' }}>
        <Search />
      </Box>
      <Box variant="links.nav">
        <CartNavigationIcon />
      </Box>
      {user ? (
        <>
          <Link href="/purchases" passHref>
            <NavLink title="Purchases">
              <IconButton>
                <BsReceiptCutoff size={24} />
              </IconButton>
            </NavLink>
          </Link>
          <Link href="/account" passHref>
            <NavLink title="Account" sx={{ display: 'block' }}>
              <IconButton>
                <AccountIcon size={24} />
              </IconButton>
            </NavLink>
          </Link>
        </>
      ) : (
        <Box variant="links.nav">
          <UserLogin />
        </Box>
      )}
    </Flex>
  );
};

export default Navigation;
