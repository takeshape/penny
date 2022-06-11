import { ComponentMeta, ComponentStory } from '@storybook/react';
import RelatedProducts from './RelatedProducts';
import { relatedProducts } from './RelatedProducts.fixtures';

const Meta: ComponentMeta<typeof RelatedProducts> = {
  title: 'Features / Product Page / Components / Related Products',
  component: RelatedProducts,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof RelatedProducts> = (args) => <RelatedProducts {...args} />;

export const _RelatedProducts = Template.bind({});
_RelatedProducts.args = {
  relatedProducts
};

export default Meta;
