import logger from 'logger';
import { Component, PropsWithChildren } from 'react';
import NextLink from '../NextLink';
import Wrapper from '../Wrapper/Content';
import { ErrorMessage } from './ErrorMessage';

export type ErrorBoundaryProps = PropsWithChildren<{ headline?: string; subhead?: string; body?: string }>;

export type ErrorBoundaryState = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    logger.error(error.message, {
      stack: error.stack,
      name: error.name,
      ...errorInfo
    });
  }

  render() {
    const { headline, subhead, body } = this.props;

    // Check if the error is thrown
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Wrapper>
          <ErrorMessage
            headline={headline ?? '500 error'}
            subhead={subhead ?? 'Server error'}
            body={body ?? 'Sorry, we had an unexpected error.'}
          >
            <button
              type="button"
              onClick={() => this.setState({ hasError: false })}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Try again?
            </button>
            <NextLink
              href="/"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Go back home<span aria-hidden="true"> &rarr;</span>
            </NextLink>
          </ErrorMessage>
        </Wrapper>
      );
    }

    return this.props.children;
  }
}
