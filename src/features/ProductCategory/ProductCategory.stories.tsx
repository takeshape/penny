import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProductCategory } from './ProductCategory';
import { collectionResponse } from './queries.fixtures';
import { getCollectionFromTakeshape } from './transforms';

const collection = getCollectionFromTakeshape(collectionResponse, {});

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
  items: collection.items,
  pagination: {
    hasNextPage: collection.pageInfo.hasNextPage,
    hasPreviousPage: collection.pageInfo.hasPreviousPage,
    setCurrentPage: () => {}
  }
};

export default Meta;
