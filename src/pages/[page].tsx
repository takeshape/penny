import PageLoader from 'components/PageLoader';
import Page from 'features/Page/Page';
import {
  PageGetPage,
  PageGetPageArgs,
  PageGetPageResponse,
  PageGetPageSlugs,
  PageGetPageSlugsResponse
} from 'features/Page/queries';
import { getPage, getPageParams } from 'features/Page/transforms';
import Layout from 'layouts/Default';
import { getLayoutData } from 'layouts/getLayoutData';
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';
import { useRouter } from 'next/router';
import { createAnonymousTakeshapeApolloClient } from 'utils/takeshape';
import { getSingle } from 'utils/types';

const apolloClient = createAnonymousTakeshapeApolloClient();

const PagePage: NextPage = ({ navigation, footer, page }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Layout navigation={navigation} footer={footer} seo={{ title: 'Page is loading...' }}>
        <PageLoader />
      </Layout>
    );
  }

  return (
    <Layout navigation={navigation} footer={footer} seo={{ title: page.title }}>
      <Page page={page} />;
    </Layout>
  );
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const slug = getSingle(params.page);

  const { navigation, footer } = await getLayoutData();

  const { data } = await apolloClient.query<PageGetPageResponse, PageGetPageArgs>({
    query: PageGetPage,
    variables: {
      slug
    }
  });

  const page = getPage(data);

  return {
    notFound: !Boolean(page),
    props: {
      navigation,
      footer,
      page
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await apolloClient.query<PageGetPageSlugsResponse>({
    query: PageGetPageSlugs
  });

  const params = getPageParams(data);

  return {
    paths: params,
    fallback: true
  };
};

export default PagePage;
