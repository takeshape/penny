import PageLoader from 'components/PageLoader';
import { getLayoutData } from 'data/getLayoutData';
import { ProductPage as ProductPageComponent } from 'features/ProductPage/ProductPage';
import {
  ProductPageReviewsIoReviewsArgs,
  ProductPageReviewsIoReviewsQuery,
  ProductPageReviewsIoReviewsResponse,
  ProductPageShopifyProductByIdArgs,
  ProductPageShopifyProductByIdQuery,
  ProductPageShopifyProductBySlugArgs,
  ProductPageShopifyProductBySlugQuery,
  ProductPageShopifyProductIdListArgs,
  ProductPageShopifyProductIdListQuery,
  ProductPageShopifyProductIdListResponse,
  ProductPageShopifyProductResponse,
  ProductPageTakeshapeProductArgs,
  ProductPageTakeshapeProductQuery,
  ProductPageTakeshapeProductResponse
} from 'features/ProductPage/queries';
import {
  getDetails,
  getPageOptions,
  getPolicies,
  getProduct,
  getProductPageIdOrSlug,
  getProductPageParams,
  getReviewHighlights,
  getReviewList
} from 'features/ProductPage/transforms';
import Layout from 'layouts/Default';
import { GetStaticPaths, InferGetStaticPropsType, NextPage } from 'next';
import { useRouter } from 'next/router';
import { shopifyGidToId } from 'transforms/shopify';
import { createAnonymousTakeshapeApolloClient } from 'utils/takeshape';
import { getSingle } from 'utils/types';
import { retryShopifyThrottle } from '../../utils/apollo/retry-shopify-throttle';

const breadcrumbs = [
  { id: 1, name: 'Men', href: '#' },
  { id: 2, name: 'Clothing', href: '#' }
];

const ProductPage: NextPage = ({
  options,
  navigation,
  footer,
  product,
  reviewHighlights,
  reviewList,
  details,
  policies
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return (
      <Layout navigation={navigation} footer={footer} seo={{ title: 'Product is loading...' }}>
        <PageLoader />
      </Layout>
    );
  }

  return (
    <Layout navigation={navigation} footer={footer} seo={{ title: product.name, description: product.description }}>
      <ProductPageComponent
        component={options.component}
        options={options}
        breadcrumbs={breadcrumbs}
        product={product}
        reviewHighlights={reviewHighlights}
        reviewList={reviewList}
        details={details}
        policies={policies}
      />
    </Layout>
  );
};

const apolloClient = createAnonymousTakeshapeApolloClient();

export const getStaticProps = async ({ params }) => {
  const idOrSlug = getProductPageIdOrSlug(getSingle(params.id));

  const { navigation, footer } = await getLayoutData();

  let productData;

  if (idOrSlug.slug) {
    ({ data: productData } = await retryShopifyThrottle(async () => {
      return await apolloClient.query<ProductPageShopifyProductResponse, ProductPageShopifyProductBySlugArgs>({
        query: ProductPageShopifyProductBySlugQuery,
        variables: {
          slug: idOrSlug.slug
        }
      });
    }));
  } else {
    ({ data: productData } = await retryShopifyThrottle(async () => {
      return await apolloClient.query<ProductPageShopifyProductResponse, ProductPageShopifyProductByIdArgs>({
        query: ProductPageShopifyProductByIdQuery,
        variables: {
          id: idOrSlug.id
        }
      });
    }));
  }

  const product = getProduct(productData);

  const { data: takeshapeData } = await retryShopifyThrottle(async () => {
    return await apolloClient.query<ProductPageTakeshapeProductResponse, ProductPageTakeshapeProductArgs>({
      query: ProductPageTakeshapeProductQuery,
      variables: {
        productId: product.id
      }
    });
  });

  const { data: reviewsData } = await apolloClient.query<
    ProductPageReviewsIoReviewsResponse,
    ProductPageReviewsIoReviewsArgs
  >({
    query: ProductPageReviewsIoReviewsQuery,
    variables: {
      sku: shopifyGidToId(product.id)
    }
  });

  return {
    props: {
      options: getPageOptions(takeshapeData),
      navigation,
      footer,
      product,
      reviewHighlights: getReviewHighlights(reviewsData),
      reviewList: getReviewList(reviewsData),
      details: getDetails(takeshapeData),
      policies: getPolicies(takeshapeData)
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: ReturnType<typeof getProductPageParams>[] = [];
  let total = null;

  while (total === null || paths.length < total) {
    const { data } = await apolloClient.query<
      ProductPageShopifyProductIdListResponse,
      ProductPageShopifyProductIdListArgs
    >({
      query: ProductPageShopifyProductIdListQuery,
      variables: {
        from: paths.length
      }
    });

    paths.push(...data.products.items.map(getProductPageParams));
    total = data.products.total;
  }

  return {
    paths,
    fallback: true
  };
};

export default ProductPage;
