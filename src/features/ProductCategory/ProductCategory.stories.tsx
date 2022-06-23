import { ComponentMeta, ComponentStory } from '@storybook/react';
import { productCategoryCollection } from 'features/ProductCategory/fixtures';
import { ProductCategory } from './ProductCategory';

const Meta: ComponentMeta<typeof ProductCategory> = {
  title: 'Features / Product Category',
  component: ProductCategory,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof ProductCategory> = (args) => <ProductCategory {...args} />;

export const _ProductCategory = Template.bind({});
_ProductCategory.args = {
  header: { text: { primary: productCategoryCollection.name, secondary: productCategoryCollection.descriptionHtml } },
  items: productCategoryCollection.items,
  pagination: {
    hasNextPage: productCategoryCollection.pageInfo.hasNextPage,
    hasPreviousPage: productCategoryCollection.pageInfo.hasPreviousPage,
    setCurrentPage: () => {}
  }
};

export default Meta;
