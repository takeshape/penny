import { MockedProvider as MockedApolloProvider } from '@apollo/client/testing';
import { render } from '@testing-library/react';
import { SessionProvider } from 'next-auth/react';
import theme from 'theme';
import { ThemeProvider } from 'theme-ui';

const mockUseRouterReturnValue = {
  query: {},
  pathname: '/',
  asPath: '/',
  events: {
    emit: jest.fn(),
    on: jest.fn(),
    off: jest.fn()
  },
  push: jest.fn(),
  prefetch: jest.fn(),
  replace: jest.fn(),
  back: jest.fn()
};

jest.mock('next/dist/client/router', () => ({
  __esModule: true,
  useRouter: () => mockUseRouterReturnValue
}));

const AllTheProviders = ({ children }) => {
  return (
    <SessionProvider session={{ expires: '2050-10-05T14:48:00.000Z' }} refetchInterval={0}>
      <MockedApolloProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </MockedApolloProvider>
    </SessionProvider>
  );
};

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };

