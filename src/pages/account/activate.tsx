import { AccountResetPassword } from 'features/AccountResetPassword/AccountResetPassword';
import Layout from 'layouts/Full';
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { getActivationParams } from 'utils/account';
import { getSingle } from 'utils/types';

const ActivateAccountPage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  customerId,
  activationToken
}) => {
  return (
    <Layout seo={{ title: 'Activate Account' }}>
      <AccountResetPassword activationToken={activationToken} customerId={customerId} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let params;

  if (query.activationUrl) {
    params = getActivationParams('activate', getSingle(query.activationUrl));
  }

  return {
    notFound: !Boolean(query.activationUrl),
    props: {
      customerId: params?.customerId,
      activationToken: params?.token
    }
  };
};

export default ActivateAccountPage;
