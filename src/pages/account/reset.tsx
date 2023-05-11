import { AccountResetPassword } from 'features/AccountResetPassword/AccountResetPassword';
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
      <AccountResetPassword resetToken={resetToken} customerId={customerId} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let activationParams;

  if (query.resetUrl) {
    activationParams = getActivationParams('reset', getSingle(query.resetUrl));
  }

  return {
    notFound: !Boolean(query.activationUrl),
    props: {
      customerId: activationParams?.customerId,
      resetUrl: activationParams?.token
    }
  };
};

export default ResetPasswordPage;
