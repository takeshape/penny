import { ComponentMeta, ComponentStory } from '@storybook/react';
import { product, reviews } from '../../ProductPage.fixtures';
import { ProductWithImageGrid } from './WithImageGrid';

const Meta: ComponentMeta<typeof ProductWithImageGrid> = {
  title: 'Features / Product Page / Components / Product',
  component: ProductWithImageGrid,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof ProductWithImageGrid> = (args) => <ProductWithImageGrid {...args} />;

export const _Product = Template.bind({});
_Product.args = {
  product,
  reviews
};

export default Meta;
