import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  getDetails,
  getPolicies,
  getProduct,
  getReviewHighlights,
  getReviewList
} from 'features/ProductPage/transforms';
import { graphql } from 'msw';
import { ProductPage } from './ProductPage';
import {
  productResponse,
  relatedProductsResponse,
  reviewsResponse,
  takeshapeProductResponse
} from './queries.fixtures';

const Meta: ComponentMeta<typeof ProductPage> = {
  title: 'Features / Product Page',
  component: ProductPage
};

const Template: ComponentStory<typeof ProductPage> = (args) => <ProductPage {...args} />;

export const _ProductPage = Template.bind({});

_ProductPage.args = {
  component: 'withImageGrid',
  options: {
    showDetails: true,
    showReviews: true,
    showRelatedProducts: true,
    showPolicies: true
  },
  product: getProduct(productResponse),
  reviewHighlights: getReviewHighlights(reviewsResponse),
  reviewList: getReviewList(reviewsResponse),
  details: getDetails(takeshapeProductResponse),
  policies: getPolicies(takeshapeProductResponse)
};

_ProductPage.parameters = {
  msw: {
    handlers: {
      related: [
        graphql.query('RelatedProductsShopifyCollectionQuery', (req, res, ctx) => {
          return res(ctx.data(relatedProductsResponse));
        })
      ]
    }
  }
};

export default Meta;
