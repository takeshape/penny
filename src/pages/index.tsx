import { homepageRevalidationTtl } from 'config';
import { GetStorefrontQuery } from 'features/Storefront/queries';
import { Storefront } from 'features/Storefront/Storefront';
import { getStorefront } from 'features/Storefront/transforms';
import Layout from 'layouts/Default';
import { getLayoutData } from 'layouts/getLayoutData';
import { InferGetStaticPropsType, NextPage } from 'next';
import { GetStorefrontQueryResponse } from 'types/takeshape';
import { createAnonymousTakeshapeApolloClient } from 'utils/takeshape';

const IndexPage: NextPage = ({ navigation, footer, storefront }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout navigation={navigation} footer={footer}>
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
  console.log('generating storefront...');
  // eslint-disable-next-line no-console
  console.log(JSON.stringify({ data, error }));

  if (error) {
    throw new Error(`Failed to get storefront, received message ${error.message}`);
  }

  return {
    revalidate: homepageRevalidationTtl,
    props: {
      navigation,
      footer,
      storefront
    }
  };
};

export default IndexPage;
