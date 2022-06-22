import { getLayoutData } from 'data/getLayoutData';
import {
  ProductCategoryShopifyCollectionByHandleArgs,
  ProductCategoryShopifyCollectionByHandleQuery,
  ProductCategoryShopifyCollectionByHandleResponse
} from 'features/ProductCategory/queries';
import { getCollection } from 'features/ProductCategory/transforms';
import { GetStorefrontQuery, GetStorefrontResponse } from 'features/Storefront/queries';
import { Storefront } from 'features/Storefront/Storefront';
import Layout from 'layouts/Default';
import { InferGetStaticPropsType, NextPage } from 'next';
import { retryShopifyThrottle } from 'utils/apollo/retryShopifyThrottle';
import { createAnonymousTakeshapeApolloClient } from 'utils/takeshape';

const IndexPage: NextPage = ({
  navigation,
  footer,
  collection,
  storefront
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout navigation={navigation} footer={footer}>
      <Storefront items={collection.items} storefront={storefront} />
    </Layout>
  );
};

const apolloClient = createAnonymousTakeshapeApolloClient();

export async function getStaticProps() {
  const { navigation, footer } = await getLayoutData();

  const { data: collectionData } = await retryShopifyThrottle<ProductCategoryShopifyCollectionByHandleResponse>(
    async () => {
      return apolloClient.query<
        ProductCategoryShopifyCollectionByHandleResponse,
        ProductCategoryShopifyCollectionByHandleArgs
      >({
        query: ProductCategoryShopifyCollectionByHandleQuery,
        variables: {
          handle: 'frontpage',
          first: 10
        }
      });
    }
  );

  const collection = getCollection(collectionData.collection, {});

  const { data: storefrontData } = await apolloClient.query<GetStorefrontResponse>({
    query: GetStorefrontQuery
  });

  const storefront = storefrontData.storefront;

  return { props: { navigation, footer, collection, storefront } };
}

export default IndexPage;
