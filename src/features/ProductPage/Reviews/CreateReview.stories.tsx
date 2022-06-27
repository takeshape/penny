import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CreateReview } from './CreateReview';

const Meta: ComponentMeta<typeof CreateReview> = {
  title: 'Features / Product Page / Components / CreateReview',
  component: CreateReview,
  parameters: {
    layout: 'centered'
  },
  argTypes: { setIsOpen: { action: 'setIsOpen' } }
};

const Template: ComponentStory<typeof CreateReview> = (args) => <CreateReview {...args} />;

export const _CreateReview = Template.bind({});
_CreateReview.args = {
  productName: 'Product Name',
  sku: 'sku',
  isOpen: true
};

export default Meta;
