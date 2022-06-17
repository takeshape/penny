import { ComponentMeta, ComponentStory } from '@storybook/react';
import { relatedProductsResponse } from 'features/RelatedProducts/queries.fixtures';
import { graphql } from 'msw';
import { ProductPage } from './ProductPage';
import { productResponse, reviewsResponse, takeshapeProductResponse } from './queries.fixtures';

const Meta: ComponentMeta<typeof ProductPage> = {
  title: 'Features / Product Page',
  component: ProductPage
};

const Template: ComponentStory<typeof ProductPage> = (args) => <ProductPage {...args} />;

export const _ProductPage = Template.bind({});

_ProductPage.args = {
  productId: 'gid://shopify/Product/6857243132004',
  sku: '6857243132004',
  component: 'withImageGrid',
  options: {
    showDetails: true,
    showReviews: true,
    showRelatedProducts: true,
    showPolicies: true
  }
};

_ProductPage.parameters = {
  msw: {
    handlers: {
      product: [
        graphql.query('ProductPageShopifyProductByIdQuery', (req, res, ctx) => {
          return res(ctx.data(productResponse));
        }),
        graphql.query('ProductPageReviewsIoReviewsQuery', (req, res, ctx) => {
          return res(ctx.data(reviewsResponse));
        }),
        graphql.query('ProductPageTakeshapeProductQuery', (req, res, ctx) => {
          return res(ctx.data(takeshapeProductResponse));
        })
      ],
      reviews: [
        graphql.query('RelatedProductsShopifyCollectionQuery', (req, res, ctx) => {
          return res(ctx.data(relatedProductsResponse));
        })
      ]
    }
  }
};

export const _ProductPageLoading = Template.bind({});

_ProductPageLoading.args = {
  productId: 'gid://shopify/Product/6857243132004',
  sku: '6857243132004',
  component: 'withImageGrid',
  options: {
    showDetails: true,
    showReviews: true,
    showRelatedProducts: true,
    showPolicies: true
  }
};

_ProductPageLoading.parameters = {
  msw: {
    handlers: {
      product: [
        graphql.query('ProductPageShopifyProductByIdQuery', (req, res, ctx) => {
          return res(ctx.delay('infinite'));
        }),
        graphql.query('ProductPageReviewsIoReviewsQuery', (req, res, ctx) => {
          return res(ctx.delay('infinite'));
        }),
        graphql.query('ProductPageTakeshapeProductQuery', (req, res, ctx) => {
          return res(ctx.delay('infinite'));
        })
      ],
      reviews: [
        graphql.query('RelatedProductsShopifyCollectionQuery', (req, res, ctx) => {
          return res(ctx.delay('infinite'));
        })
      ]
    }
  }
};

export const _ProductPageError = Template.bind({});

_ProductPageError.args = {
  productId: 'gid://shopify/Product/6857243132004',
  sku: '6857243132004',
  component: 'withImageGrid',
  options: {
    showDetails: true,
    showReviews: true,
    showRelatedProducts: true,
    showPolicies: true
  }
};

_ProductPageError.parameters = {
  msw: {
    handlers: {
      product: [
        graphql.query('ProductPageShopifyProductByIdQuery', (req, res, ctx) => {
          return res(ctx.errors([{ message: 'Could not load product' }]));
        }),
        graphql.query('ProductPageReviewsIoReviewsQuery', (req, res, ctx) => {
          return res(ctx.delay('infinite'));
        }),
        graphql.query('ProductPageTakeshapeProductQuery', (req, res, ctx) => {
          return res(ctx.delay('infinite'));
        })
      ],
      reviews: [
        graphql.query('RelatedProductsShopifyCollectionQuery', (req, res, ctx) => {
          return res(ctx.delay('infinite'));
        })
      ]
    }
  }
};

export default Meta;
