import { ComponentMeta, ComponentStory } from '@storybook/react';
import { productPageRelatedProducts } from '../fixtures';
import { RelatedProducts } from './RelatedProducts';

const Meta: ComponentMeta<typeof RelatedProducts> = {
  title: 'Features / Product Page / Components / Related Products',
  component: RelatedProducts
};

const Template: ComponentStory<typeof RelatedProducts> = (args) => <RelatedProducts {...args} />;

export const _RelatedProducts = Template.bind({});
_RelatedProducts.args = {
  products: productPageRelatedProducts
};

export default Meta;
