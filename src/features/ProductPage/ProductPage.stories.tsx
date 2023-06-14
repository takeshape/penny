import { Meta, StoryObj } from '@storybook/react';
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

const meta: Meta<typeof ProductPage> = {
  title: 'Features / Product Page',
  component: ProductPage
};

export default meta;

type Story = StoryObj<typeof ProductPage>;

export const _ProductPage: Story = {
  args: {
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
  },

  parameters: {
    msw: {
      handlers: {
        related: [
          graphql.query('RelatedProductsShopifyCollectionQuery', (req, res, ctx) => {
            return res(ctx.data(relatedProductsResponse));
          })
        ]
      }
    }
  }
};

export const _ProductPageWithTrustpilot: Story = {
  args: {
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
  },

  parameters: {
    ..._ProductPage.parameters
  }
};
