import { AuthResetPassword } from 'features/Auth/AuthResetPassword/AuthResetPassword';
import Layout from 'layouts/Full';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { shopifyCustomerIdToGid } from 'transforms/shopify';
import { getSingle } from 'utils/types';

const ActivateAccountPage: NextPage = () => {
  const { query } = useRouter();

  if (!query.token || !query.customerId) {
    return null;
  }

  return (
    <Layout seo={{ title: 'Activate Account' }}>
      <AuthResetPassword
        activationToken={getSingle(query.token)}
        customerId={shopifyCustomerIdToGid(getSingle(query.customerId))}
        callbackUrl={(query.callbackUrl && getSingle(query.callbackUrl)) ?? '/auth/signin'}
      />
    </Layout>
  );
};

export default ActivateAccountPage;
