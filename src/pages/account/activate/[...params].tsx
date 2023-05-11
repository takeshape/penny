import { AuthResetPassword } from 'features/Auth/AuthResetPassword/AuthResetPassword';
import Layout from 'layouts/Full';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { getActivationParams } from 'utils/account';

const ActivateAccountPage: NextPage = () => {
  const { query, asPath, isReady } = useRouter();

  if (!isReady) {
    return null;
  }

  const { customerId, token } = getActivationParams('activate', asPath);

  return (
    <Layout seo={{ title: 'Activate Account' }}>
      <AuthResetPassword activationToken={token} customerId={customerId} />
    </Layout>
  );
};

export default ActivateAccountPage;
