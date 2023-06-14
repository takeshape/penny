import { Meta, StoryObj } from '@storybook/react';
import { Loader } from './Loader';

const meta: Meta<typeof Loader> = {
  title: 'Components / Loader',
  component: Loader,
  parameters: {
    layout: 'centered'
  },
  decorators: [(Story) => <div className="relative z-10">{Story()}</div>]
};

type Story = StoryObj<typeof Loader>;

export const _Loader: Story = {};

export default meta;
