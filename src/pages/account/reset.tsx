import { AuthResetPassword } from 'features/Auth/AuthResetPassword/AuthResetPassword';
import Layout from 'layouts/Full';
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { getActivationParams } from 'utils/account';
import { getSingle } from 'utils/types';

const ResetPasswordPage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  customerId,
  resetToken
}) => {
  return (
    <Layout seo={{ title: 'Reset Password' }}>
      <AuthResetPassword resetToken={resetToken} customerId={customerId} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.resetUrl) {
    return {
      notFound: true
    };
  }

  const { customerId, token } = getActivationParams('reset', getSingle(query.resetUrl));

  return {
    props: {
      customerId,
      resetToken: token
    }
  };
};

export default ResetPasswordPage;
