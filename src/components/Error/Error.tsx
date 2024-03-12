import { ErrorMessage } from 'components/Error/ErrorMessage';
import NextLink from 'components/NextLink';
import Wrapper from 'components/Wrapper/Content';

export interface ErrorProps {
  statusCode?: 400 | 404 | 405 | 500;
}

const statusCodes = {
  400: {
    headline: '400 error',
    message: 'Bad request',
    description: `Sorry, that request was incorrect.`
  },
  404: {
    headline: '404 error',
    message: 'This page could not be found',
    description: `Sorry, we couldn't find this page.`
  },
  405: {
    headline: '405 error',
    message: 'Method Not Allowed',
    description: `Sorry, you can't do that.`
  },
  500: {
    headline: '500 error',
    message: 'Internal Server Error',
    description: 'Sorry, we had an unexpected error.'
  }
};

export const Error = (props: ErrorProps) => {
  const { headline, message, description } = statusCodes[props.statusCode ?? 500];

  return (
    <Wrapper>
      <ErrorMessage headline={headline} subhead={message} body={description}>
        <NextLink
          href="/"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-accent-100 bg-accent-600 hover:bg-accent-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500"
        >
          <span>
            Go back home<span aria-hidden="true"> &rarr;</span>
          </span>
        </NextLink>
      </ErrorMessage>
    </Wrapper>
  );
};
