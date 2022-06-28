import { GetStorefrontQuery } from 'features/Storefront/queries';
import { Storefront } from 'features/Storefront/Storefront';
import { getStorefront } from 'features/Storefront/transforms';
import Layout from 'layouts/Default';
import { getLayoutData } from 'layouts/getLayoutData';
import { InferGetStaticPropsType, NextPage } from 'next';
import { GetStorefrontQueryResponse } from 'types/takeshape';
import { createAnonymousTakeshapeApolloClient } from 'utils/takeshape';

const IndexPage: NextPage = ({
  navigation,
  footer,
  storefront,
  time
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout navigation={navigation} footer={footer}>
      <div className="text-xl text-red-600">{time}</div>
      <Storefront storefront={storefront} />
    </Layout>
  );
};

const apolloClient = createAnonymousTakeshapeApolloClient();

export const getStaticProps = async () => {
  const { navigation, footer } = await getLayoutData();

  const { data, error } = await apolloClient.query<GetStorefrontQueryResponse>({
    query: GetStorefrontQuery
  });

  const storefront = getStorefront(data);

  // eslint-disable-next-line no-console
  // console.log('generating storefront...');
  // eslint-disable-next-line no-console
  // console.log(JSON.stringify({ data, error }));

  // eslint-disable-next-line no-console
  console.log('BEFORE FETCH');

  if (error) {
    throw new Error(`Failed to get storefront, received message ${error.message}`);
  }

  // eslint-disable-next-line no-console
  console.log('AFTER ERROR');

  return {
    revalidate: 5,
    props: {
      navigation,
      footer,
      storefront,
      time: new Date().toISOString()
    }
  };
};

export default IndexPage;
