import { MockedProvider as MockedApolloProvider } from '@apollo/client/testing';
import { jest } from '@jest/globals';
import { render, RenderOptions } from '@testing-library/react';
import { SessionProvider } from 'next-auth/react';
import { PropsWithChildren, ReactElement } from 'react';
import { vi } from 'vitest';

const mockUseRouterReturnValue = {
  query: {},
  pathname: '/',
  asPath: '/',
  events: {
    emit: vi.fn(),
    on: vi.fn(),
    off: vi.fn()
  },
  push: vi.fn(),
  prefetch: vi.fn(),
  replace: vi.fn(),
  back: vi.fn()
};

vi.mock('next/dist/client/router', () => ({
  __esModule: true,
  useRouter: () => mockUseRouterReturnValue
}));

const AllTheProviders = ({ children }: PropsWithChildren) => {
  return (
    <SessionProvider
      session={{ expires: '2050-10-05T14:48:00.000Z', user: { id: 'abc', shopifyCustomerAccessToken: 'abc' } }}
      refetchInterval={0}
    >
      <MockedApolloProvider>{children}</MockedApolloProvider>
    </SessionProvider>
  );
};

const customRender = (ui: ReactElement, options: Partial<RenderOptions>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
