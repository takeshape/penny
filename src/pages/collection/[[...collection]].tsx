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
import { getCollection, getCollectionPageIdOrSlug, getCollectionPageParams } from 'features/ProductCategory/transforms';
import Layout from 'layouts/Default';
import { GetStaticPaths, InferGetStaticPropsType, NextPage } from 'next';
import { useRouter } from 'next/router';
import { retryShopifyThrottle } from 'utils/apollo/retry-shopify-throttle';
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
      seo={{ title: collection.name, description: collection.description }}
    >
      <ProductCategoryWithCollection collection={collection} pageSize={collectionsPageSize} page={page} />
    </Layout>
  );
};

const apolloClient = createAnonymousTakeshapeApolloClient();

export const getStaticProps = async ({ params }) => {
  const [collectionId, cursor, page] = params.collection;
  const idOrSlug = getCollectionPageIdOrSlug(collectionId);

  const { navigation, footer } = await getLayoutData();

  let query;
  let variables: ProductCategoryShopifyCollectionBySlugArgs | ProductCategoryShopifyCollectionByIdArgs;

  if (idOrSlug.slug) {
    query = ProductCategoryShopifyCollectionBySlugQuery;
    variables = {
      slug: idOrSlug.slug,
      first: collectionsPageSize,
      after: cursor
    };
  } else {
    query = ProductCategoryShopifyCollectionByIdQuery;
    variables = {
      id: idOrSlug.id,
      first: collectionsPageSize,
      after: cursor
    };
  }

  const { data: collectionData } = await retryShopifyThrottle(async () => {
    return await apolloClient.query<
      ProductCategoryShopifyCollectionResponse,
      ProductCategoryShopifyCollectionBySlugArgs | ProductCategoryShopifyCollectionByIdArgs
    >({
      query,
      variables
    });
  });

  const collection = getCollection(collectionData, variables);

  return {
    props: {
      page: Number(page ?? 1),
      id: collection.id,
      handle: collection.handle,
      navigation,
      footer,
      collection
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await apolloClient.query<ProductCategoryShopifyCollectionIdsResponse>({
    query: ProductCategoryShopifyCollectionIdsQuery
  });

  const params = getCollectionPageParams(data, collectionsPageSize);

  return {
    paths: params,
    fallback: true
  };
};

export default CollectionPage;
