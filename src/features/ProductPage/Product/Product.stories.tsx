import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { product, reviews } from '../ProductPage.fixtures';
import Product from './Product';

const Meta: ComponentMeta<typeof Product> = {
  title: 'Features / Product Page / Components / Product',
  component: Product,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    addToCart: {
      action: 'Add to Cart'
    }
  }
};

const Template: ComponentStory<typeof Product> = (args) => <Product {...args} />;

export const _Product = Template.bind({});
_Product.args = {
  product,
  reviews
};

export default Meta;
