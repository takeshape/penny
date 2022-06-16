import { ComponentMeta, ComponentStory } from '@storybook/react';
import { quickAddResponse } from './queries.fixtures';
import { QuickAdd } from './QuickAdd';
import { getProduct } from './transforms';

const Meta: ComponentMeta<typeof QuickAdd> = {
  title: 'Features / Quick Add',
  component: QuickAdd
};

const Template: ComponentStory<typeof QuickAdd> = (args) => <QuickAdd {...args} />;

export const _QuickAdd = Template.bind({});
_QuickAdd.args = {
  isOpen: true,
  product: getProduct(quickAddResponse)
};

export default Meta;
