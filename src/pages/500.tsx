import { ErrorMessage } from 'components/Error/ErrorMessage';
import NextLink from 'components/NextLink';
import Wrapper from 'components/Wrapper/Content';
import Layout from 'layouts/Default';
import { NextPage } from 'next';

const NotFoundPage: NextPage = () => {
  return (
    <Layout seo={{ title: 'Server Error' }}>
      <Wrapper>
        <ErrorMessage headline="500 error" subhead="Server error" body="Sorry, we had an unexpected error.">
          <NextLink
            href="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-accent-100 bg-accent-600 hover:bg-accent-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500"
          >
            Go back home<span aria-hidden="true"> &rarr;</span>
          </NextLink>
        </ErrorMessage>
      </Wrapper>
    </Layout>
  );
};

export default NotFoundPage;
