import { Meta, StoryObj } from '@storybook/react';
import { productPagePolicies } from '../fixtures';
import { Policies } from './Policies';

const meta: Meta<typeof Policies> = {
  title: 'Features / Product Page / Components / Policies',
  component: Policies,
  parameters: {
    layout: 'centered'
  }
};

type Story = StoryObj<typeof Policies>;

export const _Policies: Story = {
  args: {
    policies: productPagePolicies
  }
};

export default meta;
