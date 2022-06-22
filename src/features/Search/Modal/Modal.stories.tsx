import { ComponentMeta, ComponentStory } from '@storybook/react';
import { graphql } from 'msw';
import { isSearchOpenAtom } from 'store';
import { SearchShopifyProducts } from '../queries.fixtures';
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

const Template: ComponentStory<typeof Modal> = () => <Modal />;

export const _Empty = Template.bind({});
_Empty.parameters = {
  msw: {
    handlers: {
      search: [
        graphql.query('SearchShopifyProducts', (req, res, ctx) => {
          return res(ctx.data({ search: { results: [] } }));
        })
      ]
    }
  }
};

export const _Loading = Template.bind({});
_Loading.parameters = {
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
};

export const _WithResults = Template.bind({});
_WithResults.parameters = {
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
};

export const _NoResults = Template.bind({});
_NoResults.parameters = {
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
};

export default Meta;
