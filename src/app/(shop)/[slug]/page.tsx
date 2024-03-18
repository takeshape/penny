import Page from '@/features/Page/Page';
import { PageGetPage, PageGetPageSlugs } from '@/features/Page/queries';
import { getPage, getPageParams } from '@/features/Page/transforms';
import { getAnonymousTakeshapeClient } from '@/lib/apollo/rsc';
import { ServerProps } from '@/types/next';
import { GetPageSlugsResponse, PageGetPageResponse, PageGetPageVariables } from '@/types/takeshape';
import { ApolloError } from '@apollo/client';
import * as Sentry from '@sentry/nextjs';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const revalidate = 300;

type GetPageDataParams = {
  slug: string;
};

async function getPageData({ slug }: GetPageDataParams) {
  try {
    const { data } = await getAnonymousTakeshapeClient().query<PageGetPageResponse, PageGetPageVariables>({
      query: PageGetPage,
      variables: {
        slug
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
    const { data } = await getAnonymousTakeshapeClient().query<GetPageSlugsResponse>({
      query: PageGetPageSlugs
    });

    return getPageParams(data);
  } catch (error) {
    if (error instanceof ApolloError) {
      Sentry.captureMessage(error.message);
      return;
    }

    throw error;
  }
}

type Params = {
  slug: string;
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
      title: params.slug
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
