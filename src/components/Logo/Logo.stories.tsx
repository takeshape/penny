import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Logo } from './Logo';

const Meta: ComponentMeta<typeof Logo> = {
  title: 'Components / Logo',
  component: Logo,
  parameters: {
    layout: 'centered'
  }
};

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const _Logo = Template.bind({});
_Logo.args = {
  className: 'h-8 w-8'
};

export default Meta;
