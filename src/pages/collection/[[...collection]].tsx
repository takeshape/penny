import PageLoader from 'components/PageLoader';
import {
  collectionsPageSize,
  isProduction,
  lighthouseCollectionHandle,
  lighthouseHandle,
  pageRevalidationTtl
} from 'config';
import { ProductCategoryWithCollection } from 'features/ProductCategory/ProductCategoryWithCollection';
import {
  ProductCategoryShopifyCollectionHandles,
  ProductCategoryShopifyCollectionQuery
} from 'features/ProductCategory/queries';
import { getCollection, getCollectionPageParams } from 'features/ProductCategory/transforms';
import Layout from 'layouts/Default';
import { getLayoutData } from 'layouts/getLayoutData';
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';
import { useRouter } from 'next/router';
import {
  ProductCategoryShopifyCollectionHandlesResponse,
  ProductCategoryShopifyCollectionHandlesVariables,
  ProductCategoryShopifyCollectionQueryResponse,
  ProductCategoryShopifyCollectionQueryVariables
} from 'types/takeshape';
import { retryGraphqlThrottle } from 'utils/apollo/retryGraphqlThrottle';
import { createAnonymousTakeshapeApolloClient } from 'utils/takeshape';

const CollectionPage: NextPage = ({
  navigation,
  footer,
  collection
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { isFallback } = useRouter();

  if (isFallback) {
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
      seo={{ title: collection.seo.title, description: collection.seo.description }}
    >
      <ProductCategoryWithCollection collection={collection} pageSize={collectionsPageSize} />
    </Layout>
  );
};

const apolloClient = createAnonymousTakeshapeApolloClient();

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const { navigation, footer } = await getLayoutData();

  let [handle, _page, cursor, direction] = params.collection;

  if (!isProduction && lighthouseCollectionHandle && handle === lighthouseHandle) {
    handle = lighthouseCollectionHandle;
  }

  const variables =
    direction === 'before'
      ? {
          handle,
          last: collectionsPageSize,
          before: cursor
        }
      : {
          handle,
          first: collectionsPageSize,
          after: cursor
        };

  const { data, error } = await retryGraphqlThrottle<ProductCategoryShopifyCollectionQueryResponse>(async () => {
    return apolloClient.query<
      ProductCategoryShopifyCollectionQueryResponse,
      ProductCategoryShopifyCollectionQueryVariables
    >({
      query: ProductCategoryShopifyCollectionQuery,
      variables
    });
  });

  if (error) {
    throw new Error(`Failed to get collection, received message ${error.message}`);
  }

  const collection = getCollection(data);

  return {
    notFound: !Boolean(collection),
    revalidate: pageRevalidationTtl,
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
      ProductCategoryShopifyCollectionHandlesVariables
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

  // Add the lighthouse testing path, if configured
  if (!isProduction && lighthouseCollectionHandle) {
    paths.push({ params: { collection: [lighthouseHandle] } });
  }

  return {
    paths,
    fallback: true
  };
};

export default CollectionPage;
