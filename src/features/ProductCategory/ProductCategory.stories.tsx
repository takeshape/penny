import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProductCategory } from './ProductCategory';

const Meta: ComponentMeta<typeof ProductCategory> = {
  title: 'Product Category',
  component: ProductCategory,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof ProductCategory> = (args) => <ProductCategory {...args} />;

export default Meta;

export const _ProductCategory = Template.bind({});
