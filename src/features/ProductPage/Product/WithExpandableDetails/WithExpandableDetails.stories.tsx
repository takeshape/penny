import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { product, reviews } from '../../ProductPage.fixtures';
import { ProductWithExpandableDetails } from './WithExpandableDetails';

const Meta: ComponentMeta<typeof ProductWithExpandableDetails> = {
  title: 'Features / Product Page / Components / Product',
  component: ProductWithExpandableDetails,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof ProductWithExpandableDetails> = (args) => (
  <ProductWithExpandableDetails {...args} />
);

export const _Product = Template.bind({});
_Product.args = {
  product,
  reviews
};

export default Meta;
