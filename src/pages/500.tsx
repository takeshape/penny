import Wrapper from 'components/Wrapper/Content';
import Layout from 'layouts/Default';
import { NextPage } from 'next';

const NotFoundPage: NextPage = () => {
  return (
    <Layout title="Server Error">
      <Wrapper>
        <div className="flex-shrink-0 my-auto py-16 sm:py-32">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">500 error</p>
          <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Server error</h1>
          <p className="mt-2 text-base text-gray-500">Sorry, we had an unexpected error.</p>
          <div className="mt-6">
            <a href="#" className="text-base font-medium text-indigo-600 hover:text-indigo-500">
              Go back home<span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default NotFoundPage;
