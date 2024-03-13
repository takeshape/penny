import { Error, ErrorProps } from '@/components/Error/Error';
import Wrapper from '@/components/Wrapper/Content';
import Layout from '@/layouts/Default';
import * as Sentry from '@sentry/nextjs';
import type { NextPage } from 'next';

Error.getInitialProps = async (contextData) => {
  // In case this is running in a serverless function, await this in order to give Sentry
  // time to send the error before the lambda exits
  await Sentry.captureUnderscoreErrorException(contextData);

  // This will contain the status code of the response
  return Error.getInitialProps(contextData);
};

const ErrorPage: NextPage<ErrorProps> = (props) => {
  return (
    <Layout seo={{ title: 'Server Error' }}>
      <Wrapper>
        <Error {...props} />
      </Wrapper>
    </Layout>
  );
};

export default ErrorPage;
