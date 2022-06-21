import Page from 'components/Page/Page';
import { GetPageQuery, GetPageResponse } from 'components/Page/queries';
import { getLayoutData } from 'data/getLayoutData';
import Layout from 'layouts/Default';
import { InferGetStaticPropsType, NextPage } from 'next';
import { QueryGetPageArgs } from 'types/takeshape';
import { createAnonymousTakeshapeApolloClient } from 'utils/takeshape';

const ABOUT_PAGE_ID = 'ab7f40bd-7a98-49b6-9eb3-3fefdc1c1457';

const apolloClient = createAnonymousTakeshapeApolloClient();

const AboutPage: NextPage = ({ navigation, footer, page }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout navigation={navigation} footer={footer} seo={{ title: page.title }}>
      <Page page={page} />;
    </Layout>
  );
};

export async function getStaticProps() {
  const { navigation, footer } = await getLayoutData();

  const { data } = await apolloClient.query<GetPageResponse, QueryGetPageArgs>({
    query: GetPageQuery,
    variables: {
      _id: ABOUT_PAGE_ID
    }
  });

  return { props: { navigation, footer, page: data.page } };
}

export default AboutPage;
