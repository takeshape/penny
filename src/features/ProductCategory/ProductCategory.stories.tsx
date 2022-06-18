import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProductCategory } from './ProductCategory';
import { collectionResponse } from './queries.fixtures';
import { getCollection } from './transforms';

const collection = getCollection(collectionResponse);

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
  header: { text: { primary: collection.name, secondary: collection.descriptionHtml } },
  products: collection.items,
  pagination: {
    pageCount: 2,
    currentPage: 1,
    setCurrentPage: () => {}
  }
};

export default Meta;
