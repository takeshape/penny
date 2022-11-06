import PageLoader from 'components/PageLoader';
import { collectionsPageSize, lighthouseCollectionHandle, lighthouseHandle, pageRevalidationTtl } from 'config';
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

const CollectionPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  noindex,
  navigation,
  footer,
  collection
}) => {
  const { isFallback } = useRouter();

  if (isFallback || !collection) {
    return (
      <Layout footer={footer} seo={{ title: 'Collection is loading...' }}>
        <PageLoader />
      </Layout>
    );
  }

  return (
    <Layout
      navigation={navigation}
      footer={footer}
      seo={{ title: collection.seo.title, description: collection.seo.description, noindex }}
    >
      <ProductCategoryWithCollection collection={collection} pageSize={collectionsPageSize} />
    </Layout>
  );
};

const apolloClient = createAnonymousTakeshapeApolloClient();

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const { navigation, footer } = await getLayoutData();

  if (!params?.collection) {
    throw new Error('Invalid getStaticProps params');
  }

  let [handle, _page, cursor, direction] = params?.collection;

  if (lighthouseCollectionHandle && handle === lighthouseHandle) {
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
      // IMPORTANT This allows state to reset on NextLink route changes
      key: collection?.id,
      // Don't index lighthouse test urls
      noindex: handle === lighthouseHandle,
      navigation,
      footer,
      collection
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: ReturnType<typeof getCollectionPageParams> = [];

  let hasNextPage = true;
  let endCursor: string | undefined;

  while (hasNextPage) {
    let variables: ProductCategoryShopifyCollectionHandlesVariables = {
      first: 50
    };

    if (endCursor) {
      variables.after = endCursor;
    }

    const { data } = await apolloClient.query<
      ProductCategoryShopifyCollectionHandlesResponse,
      ProductCategoryShopifyCollectionHandlesVariables
    >({
      query: ProductCategoryShopifyCollectionHandles,
      variables
    });

    const pagePaths = getCollectionPageParams(data);

    if (!pagePaths) {
      throw new Error('Could not generate paths');
    }

    paths = [...paths, ...pagePaths];
    hasNextPage = data.collections?.pageInfo.hasNextPage ?? false;
    endCursor = data.collections?.pageInfo.endCursor ?? undefined;
  }

  // Add the lighthouse testing path, if configured
  if (lighthouseCollectionHandle) {
    paths.push({ params: { collection: [lighthouseHandle] } });
  }

  return {
    paths,
    fallback: true
  };
};

export default CollectionPage;
