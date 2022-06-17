import { ErrorMessage } from 'components/Error/ErrorMessage';
import NextLink from 'components/NextLink';
import Wrapper from 'components/Wrapper/Content';
import { getLayoutData } from 'data/getLayoutData';
import Layout from 'layouts/Default';
import { InferGetStaticPropsType, NextPage } from 'next';

const NotFoundPage: NextPage = ({ navigation, footer }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout navigation={navigation} footer={footer} seo={{ title: 'Server Error' }}>
      <Wrapper>
        <ErrorMessage
          headline="404 error"
          subhead="Page not found"
          body="Sorry, we couldn’t find the page you’re looking for."
        >
          <NextLink
            href="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Go back home<span aria-hidden="true"> &rarr;</span>
          </NextLink>
        </ErrorMessage>
      </Wrapper>
    </Layout>
  );
};

export async function getStaticProps() {
  const { navigation, footer } = await getLayoutData();
  return { props: { navigation, footer } };
}

export default NotFoundPage;
