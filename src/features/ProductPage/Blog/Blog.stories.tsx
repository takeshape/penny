import { Meta, StoryObj } from '@storybook/react';
import { Blog } from './Blog';
import * as blog from './Blog.fixtures';

const meta: Meta<typeof Blog> = {
  title: 'Features / Product Page / Components / Blog',
  component: Blog
};

type Story = StoryObj<typeof Blog>;

export const _Blog: Story = {
  args: {
    blog
  }
};

export default meta;
