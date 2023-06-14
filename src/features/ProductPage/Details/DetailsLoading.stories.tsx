import { Meta, StoryObj } from '@storybook/react';
import { DetailsLoading } from './DetailsLoading';

const meta: Meta<typeof DetailsLoading> = {
  title: 'Features / Product Page / Components / Details / Loading',
  component: DetailsLoading
};

type Story = StoryObj<typeof DetailsLoading>;

export const Loading: Story = {};

export default meta;
