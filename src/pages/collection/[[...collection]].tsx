import PageLoader from 'components/PageLoader';
import { collectionsPageSize } from 'config';
import { getLayoutData } from 'data/getLayoutData';
import { ProductCategoryWithCollection } from 'features/ProductCategory/ProductCategoryWithCollection';
import {
  ProductCategoryShopifyCollectionByIdArgs,
  ProductCategoryShopifyCollectionByIdQuery,
  ProductCategoryShopifyCollectionBySlugArgs,
  ProductCategoryShopifyCollectionBySlugQuery,
  ProductCategoryShopifyCollectionIdsQuery,
  ProductCategoryShopifyCollectionIdsResponse,
  ProductCategoryShopifyCollectionResponse
} from 'features/ProductCategory/queries';
import {
  getCollectionFromTakeshape,
  getCollectionPageIdOrSlug,
  getCollectionPageParams
} from 'features/ProductCategory/transforms';
import Layout from 'layouts/Default';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { useRouter } from 'next/router';
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
      seo={{ title: collection.seo.name, description: collection.seo.description }}
    >
      <ProductCategoryWithCollection collection={collection} pageSize={collectionsPageSize} page={page} />
    </Layout>
  );
};

const apolloClient = createAnonymousTakeshapeApolloClient();

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const [collectionId, ...rest] = params.collection;
  const idOrSlug = getCollectionPageIdOrSlug(collectionId);

  const { navigation, footer } = await getLayoutData();

  let query;
  let variables: ProductCategoryShopifyCollectionBySlugArgs | ProductCategoryShopifyCollectionByIdArgs;
  let cursor;
  let page;

  if (idOrSlug.slug) {
    [cursor, page] = rest;
    query = ProductCategoryShopifyCollectionBySlugQuery;
    variables = {
      slug: idOrSlug.slug,
      first: collectionsPageSize,
      after: cursor
    };
  } else {
    // With an id, path segment 2 is expected to be the slug
    [, cursor, page] = rest;
    query = ProductCategoryShopifyCollectionByIdQuery;
    variables = {
      id: idOrSlug.id,
      first: collectionsPageSize,
      after: cursor
    };
  }

  const { data } = await retryGraphqlThrottle<ProductCategoryShopifyCollectionResponse>(async () => {
    return apolloClient.query<
      ProductCategoryShopifyCollectionResponse,
      ProductCategoryShopifyCollectionBySlugArgs | ProductCategoryShopifyCollectionByIdArgs
    >({
      query,
      variables
    });
  });

  const collection = getCollectionFromTakeshape(data, variables);

  if (!collection) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      page: Number(page ?? 1),
      navigation,
      footer,
      collection
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await retryGraphqlThrottle(async () => {
    return await apolloClient.query<ProductCategoryShopifyCollectionIdsResponse>({
      query: ProductCategoryShopifyCollectionIdsQuery
    });
  });

  const params = getCollectionPageParams(data, collectionsPageSize);

  return {
    paths: params,
    fallback: true
  };
};

export default CollectionPage;
