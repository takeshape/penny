import PageLoader from 'components/PageLoader';
import { pageRevalidationTtl, reviewsPerPage } from 'config';
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
  getProductJsonLdProps,
  getProductPageParams,
  getReviewHighlights,
  getReviewsIoProductReviews,
  getTrustpilotProductReviews
} from 'features/ProductPage/transforms';
import Layout from 'layouts/Default';
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';
import { ProductJsonLd } from 'next-seo';
import { useRouter } from 'next/router';
import {
  ProductPageShopifyProductHandlesQueryResponse,
  ProductPageShopifyProductHandlesQueryVariables,
  ProductPageShopifyProductResponse,
  ProductPageShopifyProductVariables
} from 'types/takeshape';
import { createAnonymousTakeshapeApolloClient } from 'utils/takeshape';
import { getSingle } from 'utils/types';

const ProductPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  options,
  product,
  reviewHighlights,
  reviewList,
  productJsonLdProps,
  details,
  policies,
  breadcrumbs
}) => {
  const { isFallback } = useRouter();

  if (isFallback || !product) {
    return (
      <Layout seo={{ title: 'Product is loading...' }}>
        <PageLoader />
      </Layout>
    );
  }

  return (
    <Layout seo={{ title: product.seo.title, description: product.seo.description }}>
      {productJsonLdProps && <ProductJsonLd {...productJsonLdProps} />}
      <ProductPageComponent
        component={options.component}
        options={options}
        breadcrumbs={breadcrumbs}
        product={product}
        reviewHighlights={reviewHighlights}
        reviewList={reviewList}
        details={details}
        policies={policies}
        reviewsPerPage={reviewsPerPage}
      />
    </Layout>
  );
};

const apolloClient = createAnonymousTakeshapeApolloClient();

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  let handle = getSingle(params?.product);

  if (!handle) {
    throw new Error('Invalid getStaticProps params');
  }

  const { data, error } = await apolloClient.query<
    ProductPageShopifyProductResponse,
    ProductPageShopifyProductVariables
  >({
    query: ProductPageShopifyProductQuery,
    variables: {
      handle,
      reviewsPerPage: reviewsPerPage
    }
  });

  if (error) {
    throw new Error(`Failed to get product, received message ${error.message}`);
  }

  const product = getProduct(data);
  const reviewList = getReviewsIoProductReviews(data) ?? getTrustpilotProductReviews(data);

  return {
    notFound: !Boolean(product) || !product?.isAvailable,
    revalidate: pageRevalidationTtl,
    props: {
      // IMPORTANT This allows state to reset on NextLink route changes
      key: product?.id,
      product,
      options: getPageOptions(data),
      reviewHighlights: getReviewHighlights(data),
      reviewList,
      productJsonLdProps: product ? getProductJsonLdProps({ product, reviewList }) : null,
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

  return {
    paths,
    fallback: true
  };
};

export default ProductPage;
