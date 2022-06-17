import { useLazyQuery } from '@apollo/client';
import PageLoader from 'components/PageLoader';
import { collectionsPageSize } from 'config';
import { getLayoutData } from 'data/getLayoutData';
import { ProductCategory } from 'features/ProductCategory/ProductCategory';
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
import { useCallback, useEffect, useState } from 'react';
import { retryShopifyThrottle } from 'utils/apollo/retry-shopify-throttle';
import { createAnonymousTakeshapeApolloClient } from 'utils/takeshape';

const CollectionPage: NextPage = ({
  page,
  name,
  description,
  navigation,
  footer,
  collection
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(page ?? 1);
  const [currentCollection, setCurrentCollection] = useState(collection ?? null);

  const [loadCollection, { data, error, loading }] = useLazyQuery<
    ProductCategoryShopifyCollectionResponse,
    ProductCategoryShopifyCollectionByIdArgs
  >(ProductCategoryShopifyCollectionByIdQuery);

  useEffect(() => {
    if (data && !error && !loading) {
      setCurrentCollection(getCollection(data));
    }
  }, [data, error, loading]);

  const handleSetCurrentPage = useCallback(
    (nextPage, prevPage) => {
      const isNext = nextPage > prevPage;
      const variables: ProductCategoryShopifyCollectionByIdArgs = { id: currentCollection.id };

      if (isNext) {
        variables.first = collectionsPageSize;
        variables.after = currentCollection.products[currentCollection.products.length - 1].cursor;
      } else {
        variables.last = collectionsPageSize;
        variables.before = currentCollection.products[0].cursor;
      }

      loadCollection({ variables });
      setCurrentPage(nextPage);
    },
    [loadCollection, currentCollection]
  );

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
      <ProductCategory
        header={{ text: { primary: collection.name, secondary: collection.descriptionHtml } }}
        products={currentCollection.products}
        pagination={{
          pageCount: Math.ceil(collection.productsCount / collectionsPageSize),
          currentPage,
          setCurrentPage: handleSetCurrentPage
        }}
      />
    </Layout>
  );
};

const apolloClient = createAnonymousTakeshapeApolloClient();

export const getStaticProps = async ({ params }) => {
  const [collectionId, pageNumber] = params.collection;
  const idOrSlug = getCollectionPageIdOrSlug(collectionId);

  // TODO We'll need to use indexing to make pagination work with a page index
  // Shopify requires a product ID cursor which would make for nasty urls, e.g,
  // /collections/270097776740/adf09uadf09ausdf09audf-9adsuf90ad/ or impractical schemes where we
  // iterate through collection pages until we find the product id needed.

  const { navigation, footer } = await getLayoutData();

  let collectionData;

  if (idOrSlug.slug) {
    ({ data: collectionData } = await retryShopifyThrottle(async () => {
      return await apolloClient.query<
        ProductCategoryShopifyCollectionResponse,
        ProductCategoryShopifyCollectionBySlugArgs
      >({
        query: ProductCategoryShopifyCollectionBySlugQuery,
        variables: {
          slug: idOrSlug.slug,
          first: collectionsPageSize
        }
      });
    }));
  } else {
    ({ data: collectionData } = await retryShopifyThrottle(async () => {
      return await apolloClient.query<
        ProductCategoryShopifyCollectionResponse,
        ProductCategoryShopifyCollectionByIdArgs
      >({
        query: ProductCategoryShopifyCollectionByIdQuery,
        variables: {
          id: idOrSlug.id,
          first: collectionsPageSize
        }
      });
    }));
  }

  const collection = getCollection(collectionData);

  console.log(collection);

  return {
    props: {
      page: Number(pageNumber ?? 1),
      id: collection.id,
      handle: collection.handle,
      name: collection.name,
      description: collection.description,
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
