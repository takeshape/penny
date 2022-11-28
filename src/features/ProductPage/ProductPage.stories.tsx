import { ComponentMeta, ComponentStory } from '@storybook/react';
import { graphql } from 'msw';
import {
  productPageBreadcrumbs,
  productPageDetails,
  productPagePolicies,
  productPageProduct,
  productPageReviewHighlights,
  productPageReviewsIoReviewList,
  trustpilotPageData
} from './fixtures';
import { ProductPage } from './ProductPage';
import { relatedProductsResponse } from './queries.fixtures';

const Meta: ComponentMeta<typeof ProductPage> = {
  title: 'Features / Product Page',
  component: ProductPage
};

export default Meta;

const Template: ComponentStory<typeof ProductPage> = (args) => <ProductPage {...args} />;

export const _ProductPage = Template.bind({});

_ProductPage.args = {
  component: 'withImageGrid',
  options: {
    showDetails: true,
    showReviewsIo: true,
    showTrustpilot: false,
    showRelatedProducts: true,
    showPolicies: true,
    showBreadcrumbs: true
  },
  product: productPageProduct,
  reviewHighlights: productPageReviewHighlights,
  reviewList: productPageReviewsIoReviewList,
  details: productPageDetails,
  policies: productPagePolicies,
  breadcrumbs: productPageBreadcrumbs
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

export const _ProductPageWithTrustpilot = Template.bind({});

_ProductPageWithTrustpilot.args = {
  ..._ProductPage.args,
  options: {
    showDetails: true,
    showReviewsIo: false,
    showTrustpilot: true,
    showRelatedProducts: true,
    showPolicies: true,
    showBreadcrumbs: true
  },
  reviewList: trustpilotPageData
};

_ProductPageWithTrustpilot.parameters = {
  ..._ProductPage.parameters
};
