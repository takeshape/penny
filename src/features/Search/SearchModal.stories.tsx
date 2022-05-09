import type { ComponentMeta } from '@storybook/react';
import { SearchStripeProducts } from 'queries';
import { isSearchOpenAtom } from 'store';
import SearchStripeProductsResults from '../__fixtures__/SearchStripeProducts.result.json';
import { SearchModal } from './SearchModal';

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
        result: SearchStripeProductsResults
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
        result: SearchStripeProductsResults
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
