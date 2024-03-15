import Page from '@/features/Page/Page';
import { PageGetPage, PageGetPageSlugs } from '@/features/Page/queries';
import { getPage, getPageParams } from '@/features/Page/transforms';
import { GetPageSlugsResponse, PageGetPageResponse, PageGetPageVariables } from '@/types/takeshape';
import { getAnonymousClient } from '@/utils/takeshape/server';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const revalidate = 300;

type Params = {
  page: string;
};

export async function generateStaticParams() {
  const { data } = await getAnonymousClient().query<GetPageSlugsResponse>({
    query: PageGetPageSlugs
  });

  const params: Params[] | null = getPageParams(data);

  if (!params) {
    return notFound();
  }

  return params;
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { data, error } = await getAnonymousClient().query<PageGetPageResponse, PageGetPageVariables>({
    query: PageGetPage,
    variables: {
      slug: params.page
    }
  });

  if (error) {
    throw new Error(`Failed to get page, received message ${error.message}`);
  }

  const page = getPage(data);

  if (!page) {
    return notFound();
  }

  return {
    title: page.title
  };
}

export default async function PagePage({ params }: { params: Params }) {
  const { data, error } = await getAnonymousClient().query<PageGetPageResponse, PageGetPageVariables>({
    query: PageGetPage,
    variables: {
      slug: params.page
    }
  });

  if (error) {
    throw new Error(`Failed to get page, received message ${error.message}`);
  }

  const page = getPage(data);

  if (!page) {
    return notFound();
  }

  return <Page page={page} />;
}
