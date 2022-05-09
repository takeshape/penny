import Section from 'components/Section';
import Container from 'features/Container';
import type { NextPage } from 'next';
import { Box, Divider, Heading, Link, Paragraph } from 'theme-ui';

const dependencies = [
  {
    title: 'Next.js',
    link: 'https://nextjs.org',
    description: 'A framework for building fast sites and simple API proxies'
  },
  {
    title: '@auth0/auth0-react',
    link: 'https://github.com/auth0/auth0-react',
    description: 'Auth0 bindings for React.'
  },
  {
    title: '@apollo/client',
    link: 'https://github.com/apollographql/apollo-client',
    description: 'A fully-featured, production ready caching GraphQL client for every UI framework and GraphQL server.'
  },
  {
    title: 'Theme UI',
    link: 'https://theme-ui.com',
    description: 'Easily theme-able primitive React components.'
  },
  {
    title: 'react-hook-form',
    link: 'https://react-hook-form.com',
    description: 'The easiest most composable way to work with forms in React that I‘ve used.'
  }
];

const AboutPage: NextPage = () => {
  return (
    <Container title="About">
      <Heading as="h1">About</Heading>
      <Divider />

      <Section>
        <Paragraph>
          This project demonstrates using <Link href="https://auth0.com">Auth0</Link> to manage a user‘s account and
          make purchases through <Link href="https://stripe.com">Shopify</Link>.
        </Paragraph>

        <Paragraph>
          This user account provides users with the ability to review their past purchases, and manage any subscriptions
          they have.
        </Paragraph>

        <Paragraph>
          We opted to use the Single Page App approach to Auth0 to make the project as simple as possible to deploy, and
          to highlight that working with our GraphQL API removes the need for a dedicated backend. The official Auth0
          Next.js library only makes access tokens available in API routes — we‘ve avoided those entirely so that you
          can run `npm run export` and host your bundle on any static file service.
        </Paragraph>
      </Section>

      <Section>
        <Heading variant="h3">Key Dependencies</Heading>
        <Divider />
        <Box
          as="ul"
          sx={{
            listStyle: 'none',
            m: 0,
            px: 0,
            py: 4
          }}
        >
          {dependencies.map((dependency) => (
            <Box
              as="li"
              key={dependency.link}
              sx={{
                mb: 4
              }}
            >
              <Heading
                variant="smallHeading"
                as="h3"
                sx={{
                  m: 0
                }}
              >
                <Link
                  href={dependency.link}
                  sx={{
                    color: 'inherit',
                    textDecoration: 'none',
                    ':hover,:focus': {
                      color: 'primary',
                      textDecoration: 'underline',
                      cursor: 'pointer'
                    }
                  }}
                >
                  {dependency.title}
                </Link>
              </Heading>
              <Paragraph>{dependency.description}</Paragraph>
            </Box>
          ))}
        </Box>
      </Section>
    </Container>
  );
};

export default AboutPage;
