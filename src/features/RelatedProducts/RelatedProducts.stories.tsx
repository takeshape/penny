import { ComponentMeta, ComponentStory } from '@storybook/react';
import { relatedProductsResponse } from './queries.fixtures';
import { RelatedProducts } from './RelatedProducts';
import { getProductList } from './transforms';

const Meta: ComponentMeta<typeof RelatedProducts> = {
  title: 'Features / Related Products',
  component: RelatedProducts
};

const Template: ComponentStory<typeof RelatedProducts> = (args) => <RelatedProducts {...args} />;

export const _RelatedProducts = Template.bind({});
_RelatedProducts.args = {
  products: getProductList(relatedProductsResponse)
};

export default Meta;
