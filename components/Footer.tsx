import { Container, Link as ThemeLink, Text } from 'theme-ui';

export const Footer = () => {
  return (
    <Container as="footer" variant="layout.footer" sx={{ width: '100%', textAlign: 'center', padding: '8rem 0' }}>
      <Text variant="smallHeading">
        Made possible with{' '}
        <ThemeLink
          variant="styles.shopName"
          sx={{ color: 'inherit', textDecoration: 'none' }}
          href="https://www.takeshape.io"
        >
          <span>Take</span>Shape
        </ThemeLink>
      </Text>
    </Container>
  );
};

export default Footer;
