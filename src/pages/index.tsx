import { homepageRevalidationTtl } from 'config';
import { GetStorefrontQuery } from 'features/Storefront/queries';
import { Storefront } from 'features/Storefront/Storefront';
import { getStorefront } from 'features/Storefront/transforms';
import Layout from 'layouts/Default';
import { getLayoutData } from 'layouts/getLayoutData';
import { InferGetStaticPropsType, NextPage } from 'next';
import { GetStorefrontQueryResponse } from 'types/takeshape';
import { createAnonymousTakeshapeApolloClient } from 'utils/takeshape';

const IndexPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ navigation, footer, storefront }) => {
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

  if (error) {
    throw new Error(`Failed to get storefront, received message ${error.message}`);
  }

  if (!storefront) {
    return {
      notFound: true
    };
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
