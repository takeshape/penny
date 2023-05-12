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
  let params;

  if (query.resetUrl) {
    params = getActivationParams('reset', getSingle(query.resetUrl));
  }

  return {
    notFound: !Boolean(query.resetUrl),
    props: {
      customerId: params?.customerId,
      resetUrl: params?.token
    }
  };
};

export default ResetPasswordPage;
