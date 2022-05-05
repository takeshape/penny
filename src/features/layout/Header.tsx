import Navigation from 'features/Navigation/Navigation';
import { Container } from 'theme-ui';

export const Header = () => (
  <Container as="header" sx={{ maxWidth: '72rem' }}>
    <Navigation />
  </Container>
);

export default Header;
