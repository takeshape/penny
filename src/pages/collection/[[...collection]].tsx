import PageLoader from 'components/PageLoader';
import { collectionsPageSize } from 'config';
import { ProductCategoryWithCollection } from 'features/ProductCategory/ProductCategoryWithCollection';
import {
  ProductCategoryShopifyCollectionHandles,
  ProductCategoryShopifyCollectionQuery
} from 'features/ProductCategory/queries';
import { getCollectionBasic, getCollectionPageParams } from 'features/ProductCategory/transforms';
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
  collection,
  page
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
      seo={{ title: collection.seo.title, description: collection.seo.description }}
    >
      <ProductCategoryWithCollection collection={collection} pageSize={collectionsPageSize} page={page} />
    </Layout>
  );
};

const apolloClient = createAnonymousTakeshapeApolloClient();

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const { navigation, footer } = await getLayoutData();

  const [handle, cursor, page] = params.collection;

  const variables = {
    handle,
    first: collectionsPageSize,
    after: cursor
  };

  const { data } = await retryGraphqlThrottle<ProductCategoryShopifyCollectionQueryResponse>(async () => {
    return apolloClient.query<
      ProductCategoryShopifyCollectionQueryResponse,
      ProductCategoryShopifyCollectionQueryVariables
    >({
      query: ProductCategoryShopifyCollectionQuery,
      variables
    });
  });

  const collection = getCollectionBasic(data, variables);

  return {
    notFound: !Boolean(collection),
    props: {
      page: Number(page ?? 1),
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

  return {
    paths,
    fallback: true
  };
};

export default CollectionPage;
