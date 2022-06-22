import { getLayoutData } from 'data/getLayoutData';
import {
  GetStorefrontQuery,
  GetStorefrontResponse,
  StorefrontShopifyCollectionByHandleArgs,
  StorefrontShopifyCollectionByHandleQuery,
  StorefrontShopifyCollectionByHandleResponse
} from 'features/Storefront/queries';
import { Storefront } from 'features/Storefront/Storefront';
import { getCollection, getStorefront } from 'features/Storefront/transforms';
import Layout from 'layouts/Default';
import { InferGetStaticPropsType, NextPage } from 'next';
import { retryGraphqlThrottle } from 'utils/apollo/retryGraphqlThrottle';
import { createAnonymousTakeshapeApolloClient } from 'utils/takeshape';

const IndexPage: NextPage = ({
  navigation,
  footer,
  collection,
  storefront
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout navigation={navigation} footer={footer}>
      <Storefront collection={collection} storefront={storefront} />
    </Layout>
  );
};

const apolloClient = createAnonymousTakeshapeApolloClient();

export async function getStaticProps() {
  const { navigation, footer } = await getLayoutData();

  const { data: storefrontData } = await apolloClient.query<GetStorefrontResponse>({
    query: GetStorefrontQuery
  });

  const storefront = getStorefront(storefrontData);

  const collectionVariables: StorefrontShopifyCollectionByHandleArgs = {
    // Imagine this handle comes from the Storefront data
    handle: 'frontpage',
    first: 5
  };

  const { data: collectionData } = await retryGraphqlThrottle<StorefrontShopifyCollectionByHandleResponse>(async () => {
    return apolloClient.query<StorefrontShopifyCollectionByHandleResponse, StorefrontShopifyCollectionByHandleArgs>({
      query: StorefrontShopifyCollectionByHandleQuery,
      variables: collectionVariables
    });
  });

  const collection = getCollection(collectionData, collectionVariables);

  return { props: { navigation, footer, collection, storefront } };
}

export default IndexPage;
