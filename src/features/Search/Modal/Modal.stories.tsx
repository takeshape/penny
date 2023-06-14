import { Meta, StoryObj } from '@storybook/react';
import { graphql } from 'msw';
import { isSearchOpenAtom } from 'store';
import { SearchShopifyProducts } from '../queries.fixtures';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
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

type Story = StoryObj<typeof Modal>;

export const _Empty: Story = {
  parameters: {
    msw: {
      handlers: {
        search: [
          graphql.query('SearchShopifyProducts', (req, res, ctx) => {
            return res(ctx.data({ search: { results: [] } }));
          })
        ]
      }
    }
  }
};

export const _Loading: Story = {
  parameters: {
    nextRouter: {
      path: '/',
      isReady: true,
      query: {
        search: 'basic'
      }
    },
    msw: {
      handlers: {
        search: [
          graphql.query('SearchShopifyProducts', (req, res, ctx) => {
            return res(ctx.delay('infinite'), ctx.data(SearchShopifyProducts.result.data));
          })
        ]
      }
    }
  }
};

export const _WithResults: Story = {
  parameters: {
    nextRouter: {
      path: '/',
      isReady: true,
      query: {
        search: 'basic'
      }
    },
    msw: {
      handlers: {
        search: [
          graphql.query('SearchShopifyProducts', (req, res, ctx) => {
            return res(ctx.data(SearchShopifyProducts.result.data));
          })
        ]
      }
    }
  }
};

export const _NoResults: Story = {
  parameters: {
    nextRouter: {
      path: '/',
      isReady: true,
      query: {
        search: 'basic'
      }
    },
    msw: {
      handlers: {
        search: [
          graphql.query('SearchShopifyProducts', (req, res, ctx) => {
            return res(ctx.data({ search: { results: [] } }));
          })
        ]
      }
    }
  }
};

export default meta;
