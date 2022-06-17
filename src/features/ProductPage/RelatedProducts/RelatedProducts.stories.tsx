import { ComponentMeta, ComponentStory } from '@storybook/react';
import { relatedProductsResponse } from '../queries.fixtures';
import { getRelatedProductList } from '../transforms';
import { RelatedProducts } from './RelatedProducts';

const Meta: ComponentMeta<typeof RelatedProducts> = {
  title: 'Features / Product Page / Related Products',
  component: RelatedProducts
};

const Template: ComponentStory<typeof RelatedProducts> = (args) => <RelatedProducts {...args} />;

export const _RelatedProducts = Template.bind({});
_RelatedProducts.args = {
  products: getRelatedProductList(relatedProductsResponse)
};

export default Meta;
