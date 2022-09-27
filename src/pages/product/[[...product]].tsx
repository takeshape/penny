import PageLoader from 'components/PageLoader';
import {
  lighthouseHandle,
  lighthouseProductHandle,
  pageRevalidationTtl,
  reviewsIoReviewsPerPage,
  trustpilotReviewsPerPage
} from 'config';
import { ProductPage as ProductPageComponent } from 'features/ProductPage/ProductPage';
import {
  ProductPageShopifyProductHandlesQuery,
  ProductPageShopifyProductQuery
} from 'features/ProductPage/queries.takeshape';
import {
  getBreadcrumbs,
  getDetails,
  getPageOptions,
  getPolicies,
  getProduct,
  getProductPageParams,
  getProductReviews,
  getReviewHighlights,
  getTrustpilotProductReviews,
  getTrustpilotReviewsSummary
} from 'features/ProductPage/transforms';
import Layout from 'layouts/Default';
import { getLayoutData } from 'layouts/getLayoutData';
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';
import { useRouter } from 'next/router';
import {
  ProductPageShopifyProductHandlesQueryResponse,
  ProductPageShopifyProductHandlesQueryVariables,
  ProductPageShopifyProductResponse,
  ProductPageShopifyProductVariables
} from 'types/takeshape';
import { retryGraphqlThrottle } from 'utils/apollo/retryGraphqlThrottle';
import { createAnonymousTakeshapeApolloClient } from 'utils/takeshape';
import { getSingle } from 'utils/types';

const ProductPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  noindex,
  options,
  navigation,
  footer,
  product,
  reviewHighlights,
  reviewList,
  trustpilotReviewList,
  trustpilotSummary,
  details,
  policies,
  breadcrumbs
}) => {
  const { isFallback } = useRouter();

  if (isFallback || !product) {
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
      seo={{ title: product.seo.title, description: product.seo.description, noindex }}
    >
      <ProductPageComponent
        component={options.component}
        options={options}
        breadcrumbs={breadcrumbs}
        product={product}
        reviewHighlights={reviewHighlights}
        reviewList={reviewList}
        trustpilotReviewList={trustpilotReviewList}
        trustpilotSummary={trustpilotSummary}
        details={details}
        policies={policies}
        reviewsPerPage={reviewsIoReviewsPerPage}
      />
    </Layout>
  );
};

const apolloClient = createAnonymousTakeshapeApolloClient();

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const { navigation, footer } = await getLayoutData();

  let handle = getSingle(params?.product);

  if (lighthouseProductHandle && handle === lighthouseHandle) {
    handle = lighthouseProductHandle;
  }

  const { data, error } = await retryGraphqlThrottle<ProductPageShopifyProductResponse>(async () => {
    if (!handle) {
      throw new Error('Invalid props params');
    }

    return apolloClient.query<ProductPageShopifyProductResponse, ProductPageShopifyProductVariables>({
      query: ProductPageShopifyProductQuery,
      variables: {
        handle,
        reviewsPerPage: reviewsIoReviewsPerPage,
        trustpilotReviewsPerPage: trustpilotReviewsPerPage
      }
    });
  });

  if (error) {
    throw new Error(`Failed to get product, received message ${error.message}`);
  }

  const product = getProduct(data);

  return {
    notFound: !Boolean(product),
    revalidate: pageRevalidationTtl,
    props: {
      // IMPORTANT This allows state to reset on NextLink route changes
      key: product?.id,
      // Don't index lighthouse test urls
      noindex: handle === lighthouseHandle,
      navigation,
      footer,
      product,
      options: getPageOptions(data),
      reviewHighlights: getReviewHighlights(data),
      reviewList: getProductReviews(data),
      trustpilotReviewList: getTrustpilotProductReviews(data),
      trustpilotSummary: getTrustpilotReviewsSummary(data),
      details: getDetails(data),
      policies: getPolicies(data),
      breadcrumbs: getBreadcrumbs(data)
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: ReturnType<typeof getProductPageParams> = [];

  let hasNextPage = true;
  let endCursor: string | undefined;

  while (hasNextPage) {
    let variables: ProductPageShopifyProductHandlesQueryVariables = {
      first: 50
    };

    if (endCursor) {
      variables.after = endCursor;
    }

    const { data } = await apolloClient.query<
      ProductPageShopifyProductHandlesQueryResponse,
      ProductPageShopifyProductHandlesQueryVariables
    >({
      query: ProductPageShopifyProductHandlesQuery,
      variables
    });

    const pagePaths = getProductPageParams(data);

    if (!pagePaths) {
      throw new Error('Could not generate paths');
    }

    paths = [...paths, ...pagePaths];
    hasNextPage = data.products?.pageInfo.hasNextPage ?? false;
    endCursor = data.products?.pageInfo.endCursor ?? undefined;
  }

  // Add the lighthouse testing path, if configured
  if (lighthouseProductHandle) {
    paths.push({ params: { product: [lighthouseHandle] } });
  }

  return {
    paths,
    fallback: true
  };
};

export default ProductPage;
