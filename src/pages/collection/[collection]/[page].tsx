import PageLoader from 'components/PageLoader';
import { collectionsPageSize } from 'config';
import { ProductCategoryWithData } from 'features/ProductCategory/ProductCategoryWithData';
import {
  ProductCategoryShopifyCollectionArgs,
  ProductCategoryShopifyCollectionIdsQuery,
  ProductCategoryShopifyCollectionIdsResponse,
  ProductCategoryShopifyCollectionQuery,
  ProductCategoryShopifyCollectionResponse
} from 'features/ProductCategory/queries';
import { getCollection, getCollectionPageParams } from 'features/ProductCategory/transforms';
import Layout from 'layouts/Default';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { shopifyCollectionIdToGid } from 'transforms/shopify';
import { Product } from 'types/product';
import addApolloQueryCache from 'utils/apollo/addApolloQueryCache';
import { createAnonymousTakeshapeApolloClient } from 'utils/takeshape';
import { getSingle } from 'utils/types';

type ProductPageProps = Pick<Product, 'id' | 'name' | 'description'> & {
  page: number;
  id: string;
  handle: string;
  name: string;
  description: string;
};

const CollectionPage: NextPage<ProductPageProps> = ({ page, id, name, description }) => {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return (
      <Layout title="Collection is loading...">
        <PageLoader />
      </Layout>
    );
  }

  return (
    <Layout title={name} description={description}>
      <ProductCategoryWithData id={id} pageSize={collectionsPageSize} page={page} />
    </Layout>
  );
};

const apolloClient = createAnonymousTakeshapeApolloClient();

export const getStaticProps: GetStaticProps<ProductPageProps> = async ({ params }) => {
  const collectionId = getSingle(params.collection);
  const page = Number(getSingle(params.page));

  // TODO We'll need to use indexing to make pagination work with a page index
  // Shopify requires a product ID cursor which would make for nasty urls, e.g,
  // /collections/270097776740/6857243132004/ or impractical schemes where we
  // iterate through collection pages until we find the product id needed.

  const { data } = await apolloClient.query<
    ProductCategoryShopifyCollectionResponse,
    ProductCategoryShopifyCollectionArgs
  >({
    query: ProductCategoryShopifyCollectionQuery,
    variables: {
      id: shopifyCollectionIdToGid(collectionId)
    }
  });

  const collection = getCollection(data);

  return addApolloQueryCache(apolloClient, {
    props: {
      page,
      id: collection.id,
      handle: collection.handle,
      name: collection.name,
      description: collection.description
    }
  });
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
