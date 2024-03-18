import { collectionsPageSize } from '@/config';
import { ProductCategoryWithCollection } from '@/features/ProductCategory/ProductCategoryWithCollection';
import { getAllCategoryPageSummaryNodes } from '@/features/ProductCategory/data';
import { ProductCategoryShopifyCollectionQuery } from '@/features/ProductCategory/queries';
import { getCollection, getCollectionPageParams, getCurrentTitle } from '@/features/ProductCategory/transforms';
import { getAnonymousTakeshapeClient } from '@/lib/apollo/rsc';
import { ServerProps } from '@/types/next';
import {
  ProductCategoryShopifyCollectionQueryResponse,
  ProductCategoryShopifyCollectionQueryVariables
} from '@/types/takeshape';
import { ApolloError } from '@apollo/client';
import * as Sentry from '@sentry/nextjs';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const revalidate = 300;

type GetPageDataParams = {
  handle: string;
  direction?: string;
  cursor?: string;
};

async function getPageData({ handle, direction, cursor }: GetPageDataParams) {
  try {
    const variables =
      direction === 'before'
        ? {
            handle,
            last: collectionsPageSize,
            before: cursor
          }
        : {
            handle,
            first: collectionsPageSize,
            after: cursor
          };

    const { data } = await getAnonymousTakeshapeClient().query<
      ProductCategoryShopifyCollectionQueryResponse,
      ProductCategoryShopifyCollectionQueryVariables
    >({
      query: ProductCategoryShopifyCollectionQuery,
      variables
    });

    return getCollection(data);
  } catch (error) {
    if (error instanceof ApolloError) {
      Sentry.captureMessage(error.message);
      return;
    }

    throw error;
  }
}

type Params = {
  collection: string[];
};

async function getPageStaticParams() {
  try {
    const nodes = await getAllCategoryPageSummaryNodes();
    return getCollectionPageParams(nodes);
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
  const [handle, pageNum, cursor, direction = 'after'] = params.collection ?? [];

  const pageData = await getPageData({ handle, cursor, direction });

  if (!pageData) {
    return {
      title: handle,
      description: `${handle} collection page.`
    };
  }

  return {
    title: getCurrentTitle(pageData, pageNum),
    description: pageData.seo.description
  };
}

export default async function CollectionPage({ params }: ServerProps<Params>) {
  const [handle, , cursor, direction] = params.collection ?? [];

  const pageData = await getPageData({ handle, cursor, direction });

  if (!pageData) {
    return notFound();
  }

  return <ProductCategoryWithCollection collection={pageData} pageSize={collectionsPageSize} />;
}
