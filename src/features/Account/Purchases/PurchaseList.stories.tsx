import type { ComponentMeta, ComponentStory } from '@storybook/react';
import PurchaseList from './PurchaseList';

const Meta: ComponentMeta<typeof PurchaseList> = {
  title: 'Features / Account / Purchases',
  component: PurchaseList
};

const Template: ComponentStory<typeof PurchaseList> = (args) => <PurchaseList {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  orders: []
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true
};

export default Meta;
