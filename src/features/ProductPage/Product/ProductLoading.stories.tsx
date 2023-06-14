import { Meta, StoryObj } from '@storybook/react';
import { ProductLoading } from './ProductLoading';

const meta: Meta<typeof ProductLoading> = {
  title: 'Features / Product Page / Components / Product / Loading',
  component: ProductLoading
};

type Story = StoryObj<typeof ProductLoading>;

export const Loading: Story = {};

export default meta;
