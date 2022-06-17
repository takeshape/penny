import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Blog } from './Blog';
import * as blog from './Blog.fixtures';

const Meta: ComponentMeta<typeof Blog> = {
  title: 'Features / Product Page / Components / Blog',
  component: Blog
};

const Template: ComponentStory<typeof Blog> = (args) => <Blog {...args} />;

export const _Blog = Template.bind({});
_Blog.args = {
  blog
};

export default Meta;
