import { AuthResetPassword } from 'features/Auth/AuthResetPassword/AuthResetPassword';
import Layout from 'layouts/Full';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { getActivationParams } from 'utils/account';

const ResetPasswordPage: NextPage = () => {
  const { query, asPath, isReady } = useRouter();

  if (!isReady) {
    return null;
  }

  const { customerId, token } = getActivationParams('reset', asPath);

  return (
    <Layout seo={{ title: 'Reset Password' }}>
      <AuthResetPassword resetToken={token} customerId={customerId} />
    </Layout>
  );
};

export default ResetPasswordPage;
