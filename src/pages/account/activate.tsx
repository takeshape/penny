import { AccountResetPassword } from '@/features/AccountResetPassword/AccountResetPassword';
import Layout from '@/layouts/Full';
import { getActivationParams } from '@/utils/account';
import { getSingle } from '@/utils/types';
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';

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

// eslint-disable-next-line @typescript-eslint/require-await
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let params;

  if (query.activationUrl) {
    params = getActivationParams('activate', getSingle(query.activationUrl));
  }

  return {
    notFound: !query.activationUrl,
    props: {
      customerId: params?.customerId,
      activationToken: params?.token
    }
  };
};

export default ActivateAccountPage;
