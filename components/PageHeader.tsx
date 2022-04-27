import { useAuth0 } from '@auth0/auth0-react';
import Link from 'next/link';
import { BsPersonCircle as AccountIcon, BsQuestionSquare, BsReceiptCutoff } from 'react-icons/bs';
import { Box, Container, Flex, IconButton, NavLink } from 'theme-ui';
import CartNavigationIcon from './CartNavigationIcon';
import Search from './Search';
import UserLogin from './UserLogin';

export const PageHeader = () => {
  const { user } = useAuth0();

  return (
    <Container as="header" sx={{ maxWidth: '72rem' }}>
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
    </Container>
  );
};

export default PageHeader;
