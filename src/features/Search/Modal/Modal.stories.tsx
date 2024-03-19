import { isSearchOpenAtom } from '@/store';
import { Meta, StoryObj } from '@storybook/react';
import { graphql } from 'msw';
import { SearchShopifyProducts } from '../queries.fixtures';
import { SearchModal } from './Modal';

const meta: Meta<typeof SearchModal> = {
  title: 'Features / Search / Components / SearchModal',
  component: SearchModal,
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

type Story = StoryObj<typeof SearchModal>;

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
    nextjs: {
      router: {
        pathname: '/',
        query: {
          search: 'basic'
        }
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
    nextjs: {
      router: {
        pathname: '/',
        query: {
          search: 'basic'
        }
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
    nextjs: {
      router: {
        pathname: '/',
        query: {
          search: 'basic'
        }
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
