import { MockedProvider as MockedApolloProvider } from '@apollo/client/testing';
import { render, RenderOptions } from '@testing-library/react';
import { SessionProvider } from 'next-auth/react';
import { PropsWithChildren, ReactElement } from 'react';

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

const AllTheProviders = ({ children }: PropsWithChildren) => {
  return (
    <SessionProvider session={{ expires: '2050-10-05T14:48:00.000Z' }} refetchInterval={0}>
      <MockedApolloProvider>{children}</MockedApolloProvider>
    </SessionProvider>
  );
};

const customRender = (ui: ReactElement, options: Partial<RenderOptions>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
