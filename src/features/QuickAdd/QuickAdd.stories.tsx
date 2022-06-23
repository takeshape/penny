import { ComponentMeta, ComponentStory } from '@storybook/react';
import { quickAddProduct } from 'features/QuickAdd/fixtures';
import { QuickAdd } from './QuickAdd';

const Meta: ComponentMeta<typeof QuickAdd> = {
  title: 'Features / Quick Add',
  component: QuickAdd
};

const Template: ComponentStory<typeof QuickAdd> = (args) => <QuickAdd {...args} />;

export const _QuickAdd = Template.bind({});
_QuickAdd.args = {
  isOpen: true,
  product: quickAddProduct
};

export default Meta;
