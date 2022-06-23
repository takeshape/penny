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
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { useRouter } from 'next/router';
import { shopifyGidToId } from 'transforms/shopify';
import { createAnonymousTakeshapeApolloClient } from 'utils/takeshape';
import { getSingle } from 'utils/types';
import { retryGraphqlThrottle } from '../../utils/apollo/retryGraphqlThrottle';

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
    <Layout
      navigation={navigation}
      footer={footer}
      seo={{ title: product.seo.name, description: product.seo.description }}
    >
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const idOrSlug = getProductPageIdOrSlug(getSingle(params.product));

  const { navigation, footer } = await getLayoutData();

  let productData;

  if (idOrSlug.slug) {
    ({ data: productData } = await retryGraphqlThrottle<ProductPageShopifyProductResponse>(async () => {
      return apolloClient.query<ProductPageShopifyProductResponse, ProductPageShopifyProductBySlugArgs>({
        query: ProductPageShopifyProductBySlugQuery,
        variables: {
          slug: idOrSlug.slug
        }
      });
    }));
  } else {
    ({ data: productData } = await retryGraphqlThrottle<ProductPageShopifyProductResponse>(async () => {
      return apolloClient.query<ProductPageShopifyProductResponse, ProductPageShopifyProductByIdArgs>({
        query: ProductPageShopifyProductByIdQuery,
        variables: {
          id: idOrSlug.id
        }
      });
    }));
  }

  const product = getProduct(productData);

  if (!product) {
    return {
      notFound: true
    };
  }

  const { data: takeshapeData } = await apolloClient.query<
    ProductPageTakeshapeProductResponse,
    ProductPageTakeshapeProductArgs
  >({
    query: ProductPageTakeshapeProductQuery,
    variables: {
      productId: product.id
    }
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
      navigation,
      footer,
      product,
      options: getPageOptions(takeshapeData),
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
