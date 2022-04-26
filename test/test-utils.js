import { MockedProvider as MockedApolloProvider } from '@apollo/client/testing';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'theme-ui';
import { CartProvider } from '../lib/cart';
import { TakeshapeProvider } from '../lib/takeshape';
import theme from '../lib/theme';

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
    <MockedApolloProvider>
      <TakeshapeProvider>
        <CartProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </CartProvider>
      </TakeshapeProvider>
    </MockedApolloProvider>
  );
};

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
