import { ComponentMeta, ComponentStory } from '@storybook/react';
import { shopifyProductToRelatedProduct } from 'transforms/shopify';
import { relatedProductsResponse } from './queries.fixtures';
import { RelatedProducts } from './RelatedProducts';

const Meta: ComponentMeta<typeof RelatedProducts> = {
  title: 'Features / Related Products',
  component: RelatedProducts
};

const Template: ComponentStory<typeof RelatedProducts> = (args) => <RelatedProducts {...args} />;

export const _RelatedProducts = Template.bind({});
_RelatedProducts.args = {
  products: relatedProductsResponse.collection.products.edges.map(({ node }) => shopifyProductToRelatedProduct(node))
};

export default Meta;
