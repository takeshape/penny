import { useQuery } from '@apollo/client';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Section from 'components/Section';
import CustomerForm from 'features/CustomerForm';
import PageLayout from 'features/layout/PageLayout';
import NewsletterToggle from 'features/NewsletterToggle';
import ProfileForm from 'features/ProfileForm';
import ReferralsCreateReferral from 'features/ReferralsCreateReferral';
import ReferralsList from 'features/ReferralsList';
import type { ReferralsListItemProps } from 'features/ReferralsListItem';
import UserLogout from 'features/UserLogout';
import type { NextPage } from 'next';
import { GetMyNewsletterSubscriptons, GetMyProfile } from 'queries';
import { useState } from 'react';
import useProfile from 'services/takeshape/useProfile';
import { Alert, Box, Container, Divider, Flex, Grid, Heading, Spinner } from 'theme-ui';

const referralsFixtureData: ReferralsListItemProps[] = [
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
  const [referrals, setReferrals] = useState<ReferralsListItemProps[]>(referralsFixtureData);

  return (
    <PageLayout>
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
          <ReferralsCreateReferral sendReferral={(data) => setReferrals([...referrals, data])} />
          <ReferralsList referrals={referrals} />
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
    </PageLayout>
  );
};

export default withAuthenticationRequired(AccountPage, {
  onRedirecting: () => (
    <Container variant="layout.loading">
      <Spinner />
    </Container>
  )
});
