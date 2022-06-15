import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DetailsLoading } from './DetailsLoading';

const Meta: ComponentMeta<typeof DetailsLoading> = {
  title: 'Features / Product Page / Components / Details / Loading',
  component: DetailsLoading
};

const Template: ComponentStory<typeof DetailsLoading> = () => <DetailsLoading />;

export const Loading = Template.bind({});

export default Meta;
