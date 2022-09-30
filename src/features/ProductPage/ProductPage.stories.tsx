import { ComponentMeta, ComponentStory } from '@storybook/react';
import { graphql } from 'msw';
import {
  productPageBreadcrumbs,
  productPageDetails,
  productPagePolicies,
  productPageProduct,
  productPageReviewHighlights,
  productPageReviewList,
  trustpilotPageData
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
    showReviewsIo: true,
    showTrustpilot: false,
    showRelatedProducts: true,
    showPolicies: true,
    showBreadcrumbs: true
  },
  product: productPageProduct,
  reviewHighlights: productPageReviewHighlights,
  reviewList: productPageReviewList,
  details: productPageDetails,
  policies: productPagePolicies,
  breadcrumbs: productPageBreadcrumbs,
  trustpilotReviewList: trustpilotPageData
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
