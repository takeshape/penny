import Page from '@/features/Page/Page';
import { getAllPageSummaryItems } from '@/features/Page/data';
import { PageGetPage } from '@/features/Page/queries';
import { getPage, getPageParams } from '@/features/Page/transforms';
import { getAnonymousTakeshapeClient } from '@/lib/apollo/rsc';
import { ServerProps } from '@/types/next';
import { PageGetPageResponse, PageGetPageVariables } from '@/types/takeshape';
import { ApolloError } from '@apollo/client';
import * as Sentry from '@sentry/nextjs';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const revalidate = 300;

type GetPageDataParams = {
  page: string;
};

async function getPageData({ page }: GetPageDataParams) {
  try {
    const { data } = await getAnonymousTakeshapeClient().query<PageGetPageResponse, PageGetPageVariables>({
      query: PageGetPage,
      variables: {
        slug: page
      }
    });

    return getPage(data);
  } catch (error) {
    if (error instanceof ApolloError) {
      Sentry.captureMessage(error.message);
      return;
    }

    throw error;
  }
}

async function getPageStaticParams() {
  try {
    const items = await getAllPageSummaryItems();
    return getPageParams(items);
  } catch (error) {
    if (error instanceof ApolloError) {
      Sentry.captureMessage(error.message);
      return;
    }

    throw error;
  }
}

type Params = {
  page: string;
};

export async function generateStaticParams() {
  const params = await getPageStaticParams();

  if (!params) {
    return notFound();
  }

  return params;
}

export async function generateMetadata({ params }: ServerProps<Params>): Promise<Metadata> {
  const pageData = await getPageData(params);

  if (!pageData) {
    return {
      title: params.page
    };
  }

  return {
    title: pageData.title
  };
}

export default async function PagePage({ params }: ServerProps<Params>) {
  const pageData = await getPageData(params);

  if (!pageData) {
    return notFound();
  }

  return <Page page={pageData} />;
}
