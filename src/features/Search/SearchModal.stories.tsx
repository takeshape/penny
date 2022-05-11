import type { ComponentMeta } from '@storybook/react';
import { isSearchOpenAtom } from 'store';
import { SearchStripeProducts } from './Search.queries';
import { SearchModal } from './SearchModal';
import SearchFixtures from './__fixtures__/Search.fixtures.json';

export default {
  title: 'Features/SearchModal',
  component: SearchModal,
  decorators: [(Story) => <div className="relative z-10">{Story()}</div>],
  parameters: {
    jotai: {
      atoms: {
        isSearchOpen: isSearchOpenAtom
      },
      values: {
        isSearchOpen: true
      }
    }
  }
} as ComponentMeta<typeof SearchModal>;

const Template = (args) => <SearchModal {...args} />;

export const Empty = Template.bind({});

Empty.parameters = {
  apolloClient: {
    mocks: [
      {
        request: {
          query: SearchStripeProducts,
          variables: { query: 'socks' }
        },
        result: { data: { search: { results: [] } } }
      }
    ]
  }
};

export const Loading = Template.bind({});

Loading.parameters = {
  nextRouter: {
    path: '/',
    isReady: true,
    query: {
      search: 'socks'
    }
  },
  apolloClient: {
    mocks: [
      {
        delay: 100000000,
        request: {
          query: SearchStripeProducts,
          variables: { query: 'socks' }
        },
        result: SearchFixtures.SearchStripeProducts.result
      }
    ]
  }
};

export const WithResults = Template.bind({});

WithResults.parameters = {
  nextRouter: {
    path: '/',
    isReady: true,
    query: {
      search: 'socks'
    }
  },
  apolloClient: {
    mocks: [
      {
        request: {
          query: SearchStripeProducts,
          variables: { query: 'socks' }
        },
        result: SearchFixtures.SearchStripeProducts.result
      }
    ]
  }
};

export const NoResults = Template.bind({});

NoResults.parameters = {
  nextRouter: {
    path: '/',
    isReady: true,
    query: {
      search: 'socks'
    }
  },
  apolloClient: {
    mocks: [
      {
        request: {
          query: SearchStripeProducts,
          variables: { query: 'socks' }
        },
        result: { data: { search: { results: [] } } }
      }
    ]
  }
};
