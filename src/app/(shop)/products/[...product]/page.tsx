import { reviewsPerPage } from '@/config';
import { ProductPage as ProductPageComponent } from '@/features/ProductPage/ProductPage';
import { getAllProductPageSummaryNodes } from '@/features/ProductPage/data';
import { ProductPageShopifyProductQuery } from '@/features/ProductPage/queries.takeshape';
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
import { getAnonymousTakeshapeClient } from '@/lib/apollo/rsc';
import { ServerProps } from '@/types/next';
import { ProductPageShopifyProductResponse, ProductPageShopifyProductVariables } from '@/types/takeshape';
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
    const { data } = await getAnonymousTakeshapeClient().query<
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
    const nodes = await getAllProductPageSummaryNodes();
    return getProductPageParams(nodes);
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
