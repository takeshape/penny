import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CreateReview } from './CreateReview';

const Meta: ComponentMeta<typeof CreateReview> = {
  title: 'Features / Product Page / Components / CreateReview',
  component: CreateReview,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof CreateReview> = (args) => <CreateReview {...args} />;

export const _CreateReview = Template.bind({});
_CreateReview.args = {
  sku: 'sku'
};

export default Meta;
