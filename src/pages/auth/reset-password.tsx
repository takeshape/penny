import { AuthResetPassword } from 'features/Auth/AuthResetPassword/AuthResetPassword';
import Layout from 'layouts/Full';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { getSingle } from 'utils/types';

const ResetPasswordPage: NextPage = () => {
  const { query } = useRouter();

  return (
    <Layout seo={{ title: 'Reset Password' }}>
      <AuthResetPassword
        resetToken=""
        activationToken=""
        customerId=""
        callbackUrl={(query.callbackUrl && getSingle(query.callbackUrl)) ?? '/auth/signin'}
      />
    </Layout>
  );
};

export default ResetPasswordPage;
