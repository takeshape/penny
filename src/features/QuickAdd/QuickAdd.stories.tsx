import { ComponentMeta, ComponentStory } from '@storybook/react';
import { shopifyProductToQuickAddProduct } from 'transforms/shopify';
import { quickAddResponse } from './queries.fixtures';
import { QuickAdd } from './QuickAdd';

const Meta: ComponentMeta<typeof QuickAdd> = {
  title: 'Features / Quick Add',
  component: QuickAdd
};

const Template: ComponentStory<typeof QuickAdd> = (args) => <QuickAdd {...args} />;

export const _QuickAdd = Template.bind({});
_QuickAdd.args = {
  isOpen: true,
  product: shopifyProductToQuickAddProduct(quickAddResponse.product)
};

export default Meta;
