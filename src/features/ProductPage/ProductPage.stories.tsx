import { ComponentMeta, ComponentStory } from '@storybook/react';
import { _RelatedProducts } from '../RelatedProducts/RelatedProducts.stories';
import { _Blog } from './Blog/Blog.stories';
import { _Details } from './Details/Details.stories';
import { _Policies } from './Policies/Policies.stories';
import { _Product } from './Product/WithImage/WithImage.stories';
import ProductPage from './ProductPage';
import { _Reviews } from './Reviews/Reviews.stories';

const Meta: ComponentMeta<typeof ProductPage> = {
  title: 'Features / Product Page',
  component: ProductPage,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof ProductPage> = (args) => <ProductPage {...args} />;

export const _ProductPage = Template.bind({});
_ProductPage.args = {
  ..._Product.args,
  ..._Details.args,
  ..._Policies.args,
  ..._Reviews.args,
  ..._RelatedProducts.args,
  ..._Blog.args
};

export default Meta;
