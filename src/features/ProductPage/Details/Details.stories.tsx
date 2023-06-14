import { Meta, StoryObj } from '@storybook/react';
import { productPageDetails } from '../fixtures';
import { Details } from './Details';

const meta: Meta<typeof Details> = {
  title: 'Features / Product Page / Components / Details',
  component: Details
};

type Story = StoryObj<typeof Details>;

export const _Details: Story = {
  args: {
    details: productPageDetails
  }
};

export default meta;
