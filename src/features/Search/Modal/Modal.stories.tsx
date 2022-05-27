import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { isSearchOpenAtom } from 'store';
import SearchFixtures from '../Search.fixtures.json';
import { SearchStripeProducts } from '../Search.queries';
import { Modal } from './Modal';

const Meta: ComponentMeta<typeof Modal> = {
  title: 'Features / Search / Components / Modal',
  component: Modal,
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
};

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const _Empty = Template.bind({});
_Empty.parameters = {
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

export const _Loading = Template.bind({});
_Loading.parameters = {
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

export const _WithResults = Template.bind({});
_WithResults.parameters = {
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

export const _NoResults = Template.bind({});
_NoResults.parameters = {
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

export default Meta;
