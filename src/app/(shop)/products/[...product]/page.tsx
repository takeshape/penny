import { reviewsPerPage } from '@/config';
import { ProductPage as ProductPageComponent } from '@/features/ProductPage/ProductPage';
import {
  ProductPageShopifyProductHandlesQuery,
  ProductPageShopifyProductQuery
} from '@/features/ProductPage/queries.takeshape';
import {
  getBreadcrumbs,
  getDetails,
  getPageOptions,
  getPolicies,
  getProduct,
  getProductPageParams,
  getReviewHighlights,
  getReviewsIoProductReviews,
  getTrustpilotProductReviews
} from '@/features/ProductPage/transforms';
import { ServerProps } from '@/types/next';
import {
  ProductPageShopifyProductHandlesQueryResponse,
  ProductPageShopifyProductHandlesQueryVariables,
  ProductPageShopifyProductResponse,
  ProductPageShopifyProductVariables
} from '@/types/takeshape';
import { getAnonymousClient } from '@/utils/takeshape/server';
import { ApolloError } from '@apollo/client';
import * as Sentry from '@sentry/nextjs';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const revalidate = 300;

type GetPageDataParams = {
  handle: string;
};

async function getPageData({ handle }: GetPageDataParams) {
  try {
    const { data } = await getAnonymousClient().query<
      ProductPageShopifyProductResponse,
      ProductPageShopifyProductVariables
    >({
      query: ProductPageShopifyProductQuery,
      variables: {
        handle,
        reviewsPerPage: reviewsPerPage
      }
    });

    const product = getProduct(data);
    const reviewList = getReviewsIoProductReviews(data) ?? getTrustpilotProductReviews(data);
    const details = getDetails(data);
    const policies = getPolicies(data);
    const breadcrumbs = getBreadcrumbs(data);
    const options = getPageOptions(data);
    const reviewHighlights = getReviewHighlights(data);

    return { product, reviewList, details, policies, breadcrumbs, options, reviewHighlights };
  } catch (error) {
    if (error instanceof ApolloError) {
      Sentry.captureMessage(error.message);
      return;
    }

    throw error;
  }
}

type Params = {
  product: string[];
};

async function getPageStaticParams() {
  try {
    let params: Params[] = [];

    let hasNextPage = true;
    let endCursor: string | undefined;

    while (hasNextPage) {
      const variables: ProductPageShopifyProductHandlesQueryVariables = {
        first: 50
      };

      if (endCursor) {
        variables.after = endCursor;
      }

      const { data } = await getAnonymousClient().query<
        ProductPageShopifyProductHandlesQueryResponse,
        ProductPageShopifyProductHandlesQueryVariables
      >({
        query: ProductPageShopifyProductHandlesQuery,
        variables
      });

      const pageParams = getProductPageParams(data);

      if (!pageParams) {
        throw new Error('Could not generate paths');
      }

      params = [...params, ...pageParams];
      hasNextPage = data.products?.pageInfo.hasNextPage ?? false;
      endCursor = data.products?.pageInfo.endCursor ?? undefined;
    }

    return params;
  } catch (error) {
    if (error instanceof ApolloError) {
      Sentry.captureMessage(error.message);
      return;
    }

    throw error;
  }
}

export async function generateStaticParams(): Promise<Params[]> {
  const params = await getPageStaticParams();

  if (!params) {
    return notFound();
  }

  return params;
}

export async function generateMetadata({ params }: ServerProps<Params>): Promise<Metadata> {
  const [handle] = params.product ?? [];

  const pageData = await getPageData({ handle });

  if (!pageData?.product) {
    return {
      title: handle,
      description: `${handle} product page.`
    };
  }

  return {
    title: pageData.product.seo.title,
    description: pageData.product.seo.description
  };
}

export default async function ProductPage({ params }: ServerProps<Params>) {
  const [handle] = params.product ?? [];

  const pageData = await getPageData({ handle });

  if (!pageData?.product) {
    return notFound();
  }

  return (
    <ProductPageComponent
      {...pageData}
      product={pageData.product}
      component={pageData.options.component}
      reviewsPerPage={reviewsPerPage}
    />
  );
}
