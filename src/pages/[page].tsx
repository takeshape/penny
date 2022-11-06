import PageLoader from 'components/PageLoader';
import { pageRevalidationTtl } from 'config';
import Page from 'features/Page/Page';
import { PageGetPage, PageGetPageSlugs } from 'features/Page/queries';
import { getPage, getPageParams } from 'features/Page/transforms';
import Layout from 'layouts/Default';
import { getLayoutData } from 'layouts/getLayoutData';
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';
import { useRouter } from 'next/router';
import { GetPageSlugsResponse, PageGetPageResponse, PageGetPageVariables } from 'types/takeshape';
import { createAnonymousTakeshapeApolloClient } from 'utils/takeshape';
import { getSingle } from 'utils/types';

const apolloClient = createAnonymousTakeshapeApolloClient();

const PagePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ navigation, footer, page }) => {
  const router = useRouter();

  if (router.isFallback || !page) {
    return (
      <Layout footer={footer} seo={{ title: 'Page is loading...' }}>
        <PageLoader />
      </Layout>
    );
  }

  return (
    <Layout footer={footer} seo={{ title: page.title }}>
      <Page page={page} />
    </Layout>
  );
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const slug = getSingle(params?.page);

  if (!slug) {
    throw new Error(`Invalid props params`);
  }

  const { navigation, footer } = await getLayoutData();

  const { data, error } = await apolloClient.query<PageGetPageResponse, PageGetPageVariables>({
    query: PageGetPage,
    variables: {
      slug
    }
  });

  if (error) {
    throw new Error(`Failed to get page, received message ${error.message}`);
  }

  const page = getPage(data);

  return {
    notFound: !Boolean(page),
    revalidate: pageRevalidationTtl,
    props: {
      // IMPORTANT This allows state to reset on NextLink route changes
      key: page?._id,
      navigation,
      footer,
      page
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await apolloClient.query<GetPageSlugsResponse>({
    query: PageGetPageSlugs
  });

  const params = getPageParams(data);

  if (!params) {
    throw new Error('Invalid path params');
  }

  return {
    paths: params,
    fallback: true
  };
};

export default PagePage;
