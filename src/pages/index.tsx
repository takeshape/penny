import PageLoader from 'components/PageLoader';
import Wrapper from 'components/Wrapper/Content';
import { getLayoutData } from 'data/getLayoutData';
import {
  ProductCategoryShopifyCollectionByHandleArgs,
  ProductCategoryShopifyCollectionByHandleQuery,
  ProductCategoryShopifyCollectionResponse
} from 'features/ProductCategory/queries';
import { getCollection } from 'features/ProductCategory/transforms';
import { GetStorefrontQuery, GetStorefrontResponse } from 'features/Storefront/queries';
import { Storefront } from 'features/Storefront/Storefront';
import Layout from 'layouts/Default';
import { InferGetStaticPropsType, NextPage } from 'next';
import { createAnonymousTakeshapeApolloClient } from 'utils/takeshape';

const IndexPage: NextPage = ({
  navigation,
  footer,
  collection,
  storefront
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout navigation={navigation} footer={footer}>
      {storefront ? (
        <Wrapper>
          <Storefront items={collection.items} storefront={storefront} />
        </Wrapper>
      ) : (
        <PageLoader />
      )}
    </Layout>
  );
};

const apolloClient = createAnonymousTakeshapeApolloClient();

export async function getStaticProps() {
  const { navigation, footer } = await getLayoutData();

  const { data } = await apolloClient.query<
    ProductCategoryShopifyCollectionResponse,
    ProductCategoryShopifyCollectionByHandleArgs
  >({
    query: ProductCategoryShopifyCollectionByHandleQuery,
    variables: {
      handle: 'frontpage'
    }
  });

  const collection = getCollection(data, {});

  const { data: storefrontData } = await apolloClient.query<GetStorefrontResponse>({
    query: GetStorefrontQuery
  });

  const storefront = storefrontData.storefront;

  return { props: { navigation, footer, collection, storefront } };
}

export default IndexPage;
