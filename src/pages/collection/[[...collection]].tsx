import PageLoader from 'components/PageLoader';
import { collectionsPageSize } from 'config';
import { getLayoutData } from 'data/getLayoutData';
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
import { GetStaticPaths, InferGetStaticPropsType, NextPage } from 'next';
import { useRouter } from 'next/router';
import { shopifyCollectionIdToGid } from 'transforms/shopify';
import { createAnonymousTakeshapeApolloClient } from 'utils/takeshape';

const CollectionPage: NextPage = ({
  page,
  id,
  name,
  description,
  navigation,
  footer
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
    <Layout navigation={navigation} footer={footer} seo={{ title: name, description }}>
      <ProductCategoryWithData collectionId={id} pageSize={collectionsPageSize} page={page} />
    </Layout>
  );
};

const apolloClient = createAnonymousTakeshapeApolloClient();

export const getStaticProps = async ({ params }) => {
  const [collectionId, pageNumber] = params.collection;

  // TODO We'll need to use indexing to make pagination work with a page index
  // Shopify requires a product ID cursor which would make for nasty urls, e.g,
  // /collections/270097776740/adf09uadf09ausdf09audf-9adsuf90ad/ or impractical schemes where we
  // iterate through collection pages until we find the product id needed.

  // TODO Support slugs

  const { navigation, footer } = await getLayoutData();

  const { data } = await apolloClient.query<
    ProductCategoryShopifyCollectionResponse,
    ProductCategoryShopifyCollectionArgs
  >({
    query: ProductCategoryShopifyCollectionQuery,
    variables: {
      id: shopifyCollectionIdToGid(collectionId),
      first: collectionsPageSize
    }
  });

  const collection = getCollection(data);

  return {
    props: {
      page: Number(pageNumber ?? 1),
      id: collection.id,
      handle: collection.handle,
      name: collection.name,
      description: collection.description,
      navigation,
      footer
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
