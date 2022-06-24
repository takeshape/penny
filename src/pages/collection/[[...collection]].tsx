import PageLoader from 'components/PageLoader';
import { collectionsPageSize } from 'config';
import { getLayoutData } from 'data/getLayoutData';
import { ProductCategoryWithCollection } from 'features/ProductCategory/ProductCategoryWithCollection';
import {
  ProductCategoryShopifyCollectionArgs,
  ProductCategoryShopifyCollectionHandles,
  ProductCategoryShopifyCollectionHandlesArgs,
  ProductCategoryShopifyCollectionHandlesResponse,
  ProductCategoryShopifyCollectionQuery,
  ProductCategoryShopifyCollectionResponse
} from 'features/ProductCategory/queries';
import { getCollectionBasic, getCollectionPageParams } from 'features/ProductCategory/transforms';
import Layout from 'layouts/Default';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { useRouter } from 'next/router';
import { retryGraphqlThrottle } from 'utils/apollo/retryGraphqlThrottle';
import { createAnonymousTakeshapeApolloClient } from 'utils/takeshape';

const CollectionPage: NextPage = ({
  navigation,
  footer,
  collection
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return (
      <Layout navigation={navigation} footer={footer} seo={{ title: 'Collection is loading...' }}>
        <PageLoader />
      </Layout>
    );
  }

  return (
    <Layout
      navigation={navigation}
      footer={footer}
      seo={{ title: collection.name, description: collection.description }}
    >
      <ProductCategoryWithCollection collection={collection} pageSize={collectionsPageSize} />
    </Layout>
  );
};

const apolloClient = createAnonymousTakeshapeApolloClient();

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { navigation, footer } = await getLayoutData();

  const [handle, cursor, direction] = params.collection;

  const variables =
    direction === 'before'
      ? {
          handle,
          first: collectionsPageSize,
          after: cursor
        }
      : {
          handle,
          last: collectionsPageSize,
          before: cursor
        };

  const { data } = await retryGraphqlThrottle<ProductCategoryShopifyCollectionResponse>(async () => {
    return apolloClient.query<ProductCategoryShopifyCollectionResponse, ProductCategoryShopifyCollectionArgs>({
      query: ProductCategoryShopifyCollectionQuery,
      variables
    });
  });

  const collection = getCollectionBasic(data);

  if (!collection) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      navigation,
      footer,
      collection
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: ReturnType<typeof getCollectionPageParams> = [];

  let hasNextPage = true;
  let endCursor: string;

  while (hasNextPage) {
    const { data } = await apolloClient.query<
      ProductCategoryShopifyCollectionHandlesResponse,
      ProductCategoryShopifyCollectionHandlesArgs
    >({
      query: ProductCategoryShopifyCollectionHandles,
      variables: {
        first: 50,
        after: endCursor
      }
    });

    paths = [...paths, ...getCollectionPageParams(data)];
    hasNextPage = data.collections.pageInfo.hasNextPage;
    endCursor = data.collections.pageInfo.endCursor;
  }

  return {
    paths,
    fallback: true
  };
};

export default CollectionPage;
