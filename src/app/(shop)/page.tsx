import { Storefront } from '@/features/Storefront/Storefront';
import { GetStorefrontQuery } from '@/features/Storefront/queries';
import { getStorefront } from '@/features/Storefront/transforms';
import { getAnonymousTakeshapeClient } from '@/lib/apollo/rsc';
import { GetStorefrontQueryResponse } from '@/types/takeshape';
import { ApolloError } from '@apollo/client';
import * as Sentry from '@sentry/nextjs';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const revalidate = 60;

async function getPageData() {
  try {
    const { data } = await getAnonymousTakeshapeClient().query<GetStorefrontQueryResponse>({
      query: GetStorefrontQuery
    });

    return getStorefront(data);
  } catch (error) {
    if (error instanceof ApolloError) {
      Sentry.captureMessage(error.message);
      return;
    }

    throw error;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPageData();

  if (!pageData) {
    return {};
  }

  return {
    // TODO Add SEO title / description / keywords to the Storefront shape
  };
}

export default async function HomePage() {
  const pageData = await getPageData();

  if (!pageData) {
    return notFound();
  }

  return <Storefront storefront={pageData} />;
}
