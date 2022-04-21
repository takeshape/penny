import { Divider, Heading, Paragraph, Link } from '@theme-ui/components';
import { Page, Section } from 'components/layout';

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
    title: 'Stripe.js',
    link: 'https://github.com/stripe/stripe-js',
    description: 'Stripe’s Javscript library.'
  },
  {
    title: 'graphql-request',
    link: 'https://github.com/prisma-labs/graphql-request',
    description: 'A minimal GraphQL client.'
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
  },
  {
    title: 'swr',
    link: 'https://github.com/vercel/swr',
    description: 'A React hook library that does easy, cached data fetching and invalidation.'
  }
];

function AboutPage() {
  return (
    <Page>
      <Heading as="h1">About</Heading>
      <Divider />

      <Section>
        <Paragraph>
          This project demonstrates using <Link to="https://auth0.com">Auth0</Link> to manage a user‘s account and make
          purchases through <Link to="https://stripe.com">Stripe</Link>.
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
        <ul
          sx={{
            listStyle: 'none',
            m: 0,
            px: 0,
            py: 4
          }}
        >
          {dependencies.map((dependency) => (
            <li
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
                  to={dependency.link}
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
            </li>
          ))}
        </ul>
      </Section>
    </Page>
  );
}

export default AboutPage;
