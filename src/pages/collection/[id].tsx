import PageLoader from 'components/PageLoader';
import { ProductCategoryWithData } from 'features/ProductCategory/ProductCategoryWithData';
import {
  ProductCategoryShopifyCollectionArgs,
  ProductCategoryShopifyCollectionIdsQuery,
  ProductCategoryShopifyCollectionIdsResponse,
  ProductCategoryShopifyCollectionQuery,
  ProductCategoryShopifyCollectionResponse
} from 'features/ProductCategory/queries';
import { getCollection, getCollectionIds } from 'features/ProductCategory/transforms';
import Layout from 'layouts/Default';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { shopifyCollectionIdToGid } from 'transforms/shopify';
import { Product } from 'types/product';
import addApolloQueryCache from 'utils/apollo/addApolloQueryCache';
import { createAnonymousTakeshapeApolloClient } from 'utils/takeshape';
import { getSingle } from 'utils/types';

type ProductPageProps = Pick<Product, 'id' | 'name' | 'description'> & {
  id: string;
  handle: string;
  name: string;
  description: string;
};

const CollectionPage: NextPage<ProductPageProps> = ({ id, name, description }) => {
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
      <ProductCategoryWithData id={id} />
    </Layout>
  );
};

const apolloClient = createAnonymousTakeshapeApolloClient();

export const getStaticProps: GetStaticProps<ProductPageProps> = async ({ params }) => {
  const id = getSingle(params.id);

  const { data } = await apolloClient.query<
    ProductCategoryShopifyCollectionResponse,
    ProductCategoryShopifyCollectionArgs
  >({
    query: ProductCategoryShopifyCollectionQuery,
    variables: {
      id: shopifyCollectionIdToGid(id)
    }
  });

  const collection = getCollection(data);

  return addApolloQueryCache(apolloClient, {
    props: {
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

  const ids = getCollectionIds(data);

  return {
    paths: ids.map((id) => ({ params: { id } })),
    fallback: true
  };
};

export default CollectionPage;
