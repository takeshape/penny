import { useQuery } from '@apollo/client';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { NewsletterToggle } from 'components/account/newsletter-toggle';
import { CreateReferral, Referral, ReferralList } from 'components/account/referrals';
import { CustomerForm, ProfileForm } from 'components/forms';
import Page from 'components/Page';
import Section from 'components/Section';
import UserLogout from 'components/UserLogout';
import { GetMyNewsletterSubscriptons, GetMyProfile } from 'lib/queries';
import { useProfile } from 'lib/takeshape';
import type { NextPage } from 'next';
import { useState } from 'react';
import { Alert, Box, Container, Divider, Flex, Grid, Heading, Spinner } from 'theme-ui';

const referralsFixtureData: Referral[] = [
  {
    email: 'mark@takeshape.io',
    sent: new Date(2022, 1, 23),
    earned: true
  }
];

const AccountPage: NextPage = () => {
  const { isProfileReady } = useProfile();

  const { data: profileData, error: profileError } = useQuery(GetMyProfile, {
    skip: !isProfileReady
  });
  const { data: newsletterData, error: newsletterError } = useQuery(GetMyNewsletterSubscriptons, {
    skip: !isProfileReady
  });
  const [referrals, setReferrals] = useState<Referral[]>(referralsFixtureData);

  return (
    <Page>
      <Flex sx={{ width: '100%', gap: '2rem', alignItems: 'baseline' }}>
        <Heading as="h1" variant="styles.pageTitle">
          Account
        </Heading>
        <UserLogout />
      </Flex>

      <Section sx={{ marginTop: '4rem' }}>
        <Heading variant="smallHeading">TakeShape Profile</Heading>
        <Divider sx={{ marginBottom: '1rem' }} />
        {profileData ? <ProfileForm profile={profileData.profile} /> : <Spinner />}
      </Section>

      <Grid columns={2}>
        <Section sx={{ marginTop: '4rem' }}>
          <Heading variant="smallHeading">Klavyio Subscriptions</Heading>
          <Divider sx={{ marginBottom: '1rem' }} />

          {(!profileData || !newsletterData) && <Spinner />}

          {profileData && newsletterData && (
            <Box as="ul" sx={{ listStyleType: 'none', padding: 0 }}>
              {newsletterData.newsletters.map((newsletter) => (
                <Box as="li" key={newsletter.listId} sx={{ marginBottom: '1rem' }}>
                  <NewsletterToggle email={profileData.profile?.email} newsletter={newsletter} />
                </Box>
              ))}
            </Box>
          )}

          {newsletterError && (
            <>
              <Alert>Error loading newsletter subscriptions</Alert>
              <pre style={{ color: 'red' }}>{JSON.stringify(profileError, null, 2)}</pre>
            </>
          )}
        </Section>

        <Section sx={{ marginTop: '4rem' }}>
          <Heading variant="smallHeading">Referrals</Heading>
          <Divider sx={{ marginBottom: '1rem' }} />
          <CreateReferral sendReferral={(data) => setReferrals([...referrals, data])} />
          <ReferralList referrals={referrals} />
        </Section>
      </Grid>

      <Section sx={{ marginTop: '4rem' }}>
        <Heading variant="smallHeading">Stripe Customer</Heading>
        <Divider sx={{ marginBottom: '1rem' }} />
        {profileData ? <CustomerForm customer={profileData.profile?.customer} /> : <Spinner />}
      </Section>

      {profileError && (
        <>
          <Alert>Error loading TakeShape profile</Alert>
          <pre style={{ color: 'red' }}>{JSON.stringify(profileError, null, 2)}</pre>
        </>
      )}
    </Page>
  );
};

export default withAuthenticationRequired(AccountPage, {
  onRedirecting: () => (
    <Container variant="layout.loading">
      <Spinner />
    </Container>
  )
});
