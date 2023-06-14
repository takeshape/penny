import { Meta, StoryObj } from '@storybook/react';
import { PoliciesLoading } from './PoliciesLoading';

const meta: Meta<typeof PoliciesLoading> = {
  title: 'Features / Product Page / Components / Policies / Loading',
  component: PoliciesLoading
};

type Story = StoryObj<typeof PoliciesLoading>;

export const Loading: Story = {};

export default meta;
