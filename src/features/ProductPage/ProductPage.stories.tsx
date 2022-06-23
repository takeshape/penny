import { ComponentMeta, ComponentStory } from '@storybook/react';
import { graphql } from 'msw';
import {
  productPageDetails,
  productPagePolicies,
  productPageProduct,
  productPageReviewHighlights,
  productPageReviewList
} from './fixtures';
import { ProductPage } from './ProductPage';
import { relatedProductsResponse } from './queries.fixtures';

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
  product: productPageProduct,
  reviewHighlights: productPageReviewHighlights,
  reviewList: productPageReviewList,
  details: productPagePolicies,
  policies: productPageDetails
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
