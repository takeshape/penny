import { getLayoutData } from 'data/getLayoutData';
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
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { createAnonymousTakeshapeApolloClient } from 'utils/takeshape';
import { getSingle } from 'utils/types';

const apolloClient = createAnonymousTakeshapeApolloClient();

const AboutPage: NextPage = ({ navigation, footer, page }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout navigation={navigation} footer={footer} seo={{ title: page.title }}>
      <Page page={page} />;
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = getSingle(params.page);

  const { navigation, footer } = await getLayoutData();

  const { data } = await apolloClient.query<PageGetPageResponse, PageGetPageArgs>({
    query: PageGetPage,
    variables: {
      slug
    }
  });

  const page = getPage(data);

  if (!page) {
    return {
      notFound: true
    };
  }

  return {
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
    fallback: false
  };
};

export default AboutPage;
