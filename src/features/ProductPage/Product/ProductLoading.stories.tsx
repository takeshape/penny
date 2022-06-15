import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProductLoading } from './ProductLoading';

const Meta: ComponentMeta<typeof ProductLoading> = {
  title: 'Features / Product Page / Components / Product / Loading',
  component: ProductLoading
};

const Template: ComponentStory<typeof ProductLoading> = () => <ProductLoading />;

export const Loading = Template.bind({});

export default Meta;
