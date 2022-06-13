import { ComponentMeta, ComponentStory } from '@storybook/react';
import { product, reviews } from '../../ProductPage.fixtures';
import { ProductWithImage } from './WithImage';

const Meta: ComponentMeta<typeof ProductWithImage> = {
  title: 'Features / Product Page / Components / Product',
  component: ProductWithImage,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof ProductWithImage> = (args) => <ProductWithImage {...args} />;

export const _Product = Template.bind({});
_Product.args = {
  product,
  reviews
};

export default Meta;
